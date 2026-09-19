// =========================================================
// questionEngine.js — Smart Question Selection
// with background preloading (zero wait on game start)
// =========================================================

import { supabase } from "../supabase.js";

const GAME_SIZE = 10;

// ---- Internal helpers ----

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function fetchQuestions(topicId) {
  const { data, error } = await supabase
    .from("kp_questions")
    .select("*, kp_question_options(*)")
    .eq("topic_id", topicId)
    .eq("active", true);
  if (error) throw error;
  // Attach sorted options
  return (data || []).map(q => ({
    ...q,
    options: (q.kp_question_options || []).sort((a, b) =>
      a.letter.localeCompare(b.letter)
    ),
  }));
}

async function fetchHistory(topicId, playerId) {
  // Get last 50 answers for this topic for this player
  const { data } = await supabase
    .from("kp_player_answers")
    .select("question_id, is_correct, answered_at")
    .in(
      "session_id",
      supabase
        .from("kp_game_sessions")
        .select("id")
        .eq("player_id", playerId)
        .eq("topic_id", topicId)
        .eq("status", "completed")
    )
    .order("answered_at", { ascending: false })
    .limit(100);
  return data || [];
}

function buildHistoryMap(history) {
  const map = {};
  history.forEach(h => {
    if (!map[h.question_id]) {
      map[h.question_id] = { attempts: 0, correct: 0, lastAttempted: null };
    }
    map[h.question_id].attempts++;
    if (h.is_correct) map[h.question_id].correct++;
    if (
      !map[h.question_id].lastAttempted ||
      h.answered_at > map[h.question_id].lastAttempted
    ) {
      map[h.question_id].lastAttempted = h.answered_at;
    }
  });
  return map;
}

function buildSmartSet(questions, historyMap, count) {
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;

  // Score each question
  const scored = questions.map(q => {
    const h = historyMap[q.id];
    let priority;

    if (!h || h.attempts === 0) {
      // Never attempted — highest priority (new content)
      priority = 90 + Math.random() * 10;
    } else {
      const acc = h.correct / h.attempts;
      const daysSince = h.lastAttempted
        ? (now - new Date(h.lastAttempted).getTime()) / dayMs
        : 999;

      if (acc < 0.4) {
        // Wrong most of the time — very high priority
        priority = 75 + Math.random() * 10;
      } else if (acc < 0.6) {
        // Struggling — high priority
        priority = 60 + Math.random() * 10;
      } else if (acc < 0.8) {
        // Getting there — medium priority
        priority = 40 + Math.random() * 10;
      } else if (daysSince < 0.5) {
        // Correct very recently — lowest priority (just played)
        priority = 5 + Math.random() * 5;
      } else if (daysSince < 2) {
        // Mastered recently
        priority = 20 + Math.random() * 10;
      } else {
        // Mastered but not recently — include occasionally for revision
        priority = 30 + Math.random() * 10;
      }
    }

    // Difficulty weighting
    if (q.difficulty === "easy") priority += 2;
    else if (q.difficulty === "hard") priority -= 2;

    return { ...q, _priority: priority };
  });

  // Sort by priority descending
  scored.sort((a, b) => b._priority - a._priority);

  // Ensure difficulty balance (roughly 4 easy, 4 medium, 2 hard)
  const easy   = scored.filter(q => q.difficulty === "easy");
  const medium = scored.filter(q => q.difficulty === "medium");
  const hard   = scored.filter(q => q.difficulty === "hard");

  let result = [
    ...easy.slice(0, 4),
    ...medium.slice(0, 4),
    ...hard.slice(0, 2),
  ];

  // Fill remaining slots if we don't have enough of one difficulty
  if (result.length < count) {
    const used = new Set(result.map(q => q.id));
    const rest = scored.filter(q => !used.has(q.id));
    result = [...result, ...rest.slice(0, count - result.length)];
  }

  // Final shuffle so order is random each game
  return shuffleArray(result.slice(0, count));
}

// =========================================================
// QuestionLoader — singleton that preloads on topic select
// =========================================================
class QuestionLoader {
  constructor() {
    this._reset();
  }

  _reset() {
    this._topicId     = null;
    this._playerId    = null;
    this._pool        = [];
    this._historyMap  = {};
    this._smartSet    = null;
    this._poolReady   = false;
    this._smartReady  = false;
    this._poolPromise = null;
  }

  // Called immediately when a topic card is tapped
  preload(topicId, playerId) {
    // Skip if already loading this exact topic
    if (this._topicId === topicId && this._playerId === playerId) return;
    this._reset();
    this._topicId  = topicId;
    this._playerId = playerId;

    // Kick off question fetch
    this._poolPromise = fetchQuestions(topicId).then(pool => {
      this._pool      = pool;
      this._poolReady = true;
      return pool;
    });

    // Kick off history + smart set build in parallel
    Promise.all([
      this._poolPromise,
      playerId ? fetchHistory(topicId, playerId) : Promise.resolve([]),
    ]).then(([pool, history]) => {
      this._historyMap = buildHistoryMap(history);
      this._smartSet   = buildSmartSet(pool, this._historyMap, GAME_SIZE);
      this._smartReady = true;
    }).catch(err => {
      // History failed — smart selection unavailable, random will be used
      console.warn("Smart preload failed:", err.message);
    });
  }

  // Called when child clicks START — returns questions immediately
  async getGameQuestions() {
    // Best case: smart set already built
    if (this._smartReady && this._smartSet?.length >= GAME_SIZE) {
      return this._smartSet;
    }

    // Good case: question pool ready, use random selection
    if (this._poolReady && this._pool.length > 0) {
      return shuffleArray(this._pool).slice(0, GAME_SIZE);
    }

    // Pool still loading — wait just for the pool (faster than smart set)
    if (this._poolPromise) {
      try {
        const pool = await this._poolPromise;
        if (pool.length > 0) return shuffleArray(pool).slice(0, GAME_SIZE);
      } catch {}
    }

    // Fallback: direct fetch
    try {
      const pool = await fetchQuestions(this._topicId);
      this._pool      = pool;
      this._poolReady = true;
      return shuffleArray(pool).slice(0, GAME_SIZE);
    } catch (err) {
      throw new Error("Could not load questions: " + err.message);
    }
  }

  // Reset when navigating away
  invalidate() { this._reset(); }
}

// ---- Exports ----
export const questionLoader = new QuestionLoader();

export function checkAnswer(question, selectedLetter) {
  return selectedLetter === question.correct_answer;
}

export function getCorrectOptionText(question) {
  const opt = question.options.find(o => o.letter === question.correct_answer);
  return opt ? opt.option_text : question.correct_answer;
}

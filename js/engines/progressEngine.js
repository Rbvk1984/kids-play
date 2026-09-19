// =========================================================
// progressEngine.js
// Persists game results to Supabase. Keeps track of per-topic
// and per-subject progress so dashboards can be built later.
// =========================================================

import { supabase } from "../supabase.js";

// ---- Save a completed game session ----
export async function saveSession({ playerId, topicId, result }) {
  const { data: session, error } = await supabase
    .from("kp_game_sessions")
    .insert({
      player_id:       playerId,
      topic_id:        topicId,
      mode:            "single",
      status:          "completed",
      score:           result.score,
      correct_count:   result.correct_count,
      incorrect_count: result.incorrect_count,
      total_questions: result.total_questions,
      accuracy:        result.accuracy,
      best_streak:     result.best_streak,
      completed_at:    new Date().toISOString(),
    })
    .select()
    .single();

  if (error) { console.error("saveSession error:", error); return null; }
  return session;
}

// ---- Save all individual answers for a session ----
export async function saveAnswers(sessionId, answers) {
  if (!answers || answers.length === 0) return;

  const rows = answers.map(a => ({
    session_id:    sessionId,
    question_id:   a.questionId,
    player_answer: a.playerAnswer,
    is_correct:    a.isCorrect,
    points_earned: a.pointsEarned,
  }));

  const { error } = await supabase.from("kp_player_answers").insert(rows);
  if (error) console.error("saveAnswers error:", error);
}

// ---- Update (or create) per-topic and per-subject progress ----
export async function updateProgress({ playerId, subjectId, topicId, result }) {
  // Update topic-level progress
  await upsertProgress({ playerId, subjectId, topicId, result });
  // Update subject-level progress (topicId = null for subject-level row)
  await upsertProgress({ playerId, subjectId, topicId: null, result });
}

async function upsertProgress({ playerId, subjectId, topicId, result }) {
  // Read existing row first to merge stats
  const { data: existing } = await supabase
    .from("kp_progress")
    .select("*")
    .eq("player_id", playerId)
    .eq("subject_id", subjectId)
    .eq("topic_id", topicId)
    .maybeSingle();

  if (existing) {
    // Merge with existing stats
    const newTotal   = existing.total_questions + result.total_questions;
    const newCorrect = existing.correct_count   + result.correct_count;
    const newScore   = existing.total_score     + result.score;
    const newBest    = Math.max(existing.best_streak, result.best_streak);
    const newAcc     = newTotal > 0 ? Math.round((newCorrect / newTotal) * 100) : 0;

    const { error } = await supabase
      .from("kp_progress")
      .update({
        total_questions: newTotal,
        correct_count:   newCorrect,
        total_score:     newScore,
        best_streak:     newBest,
        accuracy:        newAcc,
        sessions_count:  existing.sessions_count + 1,
        last_played_at:  new Date().toISOString(),
      })
      .eq("id", existing.id);

    if (error) console.error("updateProgress error:", error);
  } else {
    // First time playing this topic
    const { error } = await supabase.from("kp_progress").insert({
      player_id:       playerId,
      subject_id:      subjectId,
      topic_id:        topicId,
      total_questions: result.total_questions,
      correct_count:   result.correct_count,
      total_score:     result.score,
      best_streak:     result.best_streak,
      accuracy:        result.accuracy,
      sessions_count:  1,
      last_played_at:  new Date().toISOString(),
    });
    if (error) console.error("insertProgress error:", error);
  }

  // Also update total_score on profile
  if (topicId) {
    const { data: profile } = await supabase
      .from("kp_profiles")
      .select("total_score")
      .eq("id", playerId)
      .single();
    if (profile) {
      await supabase
        .from("kp_profiles")
        .update({ total_score: profile.total_score + result.score })
        .eq("id", playerId);
    }
  }
}

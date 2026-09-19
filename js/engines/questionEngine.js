// =========================================================
// questionEngine.js
// Fetches questions + options from Supabase, shuffles them,
// and validates answers. Decoupled from the UI entirely.
// =========================================================

import { supabase } from "../supabase.js";

// ---- Fetch and prepare questions for a topic ----
export async function loadQuestions(topicId, count = 10) {
  // Fetch active questions for this topic
  const { data: questions, error: qErr } = await supabase
    .from("kp_questions")
    .select("*")
    .eq("topic_id", topicId)
    .eq("active", true);

  if (qErr) throw qErr;
  if (!questions || questions.length === 0) throw new Error("No questions found for this topic.");

  // Fetch all options for these questions in one query
  const questionIds = questions.map(q => q.id);
  const { data: options, error: oErr } = await supabase
    .from("kp_question_options")
    .select("*")
    .in("question_id", questionIds)
    .order("letter");

  if (oErr) throw oErr;

  // Attach options to their questions
  const optionsMap = {};
  (options || []).forEach(o => {
    if (!optionsMap[o.question_id]) optionsMap[o.question_id] = [];
    optionsMap[o.question_id].push(o);
  });

  const enriched = questions.map(q => ({
    ...q,
    options: optionsMap[q.id] || [],
  }));

  // Shuffle and return up to `count` questions
  return shuffleArray(enriched).slice(0, count);
}

// ---- Check if a child's answer is correct ----
export function checkAnswer(question, selectedLetter) {
  return selectedLetter === question.correct_answer;
}

// ---- Get the correct option text (for feedback display) ----
export function getCorrectOptionText(question) {
  const opt = question.options.find(o => o.letter === question.correct_answer);
  return opt ? opt.option_text : question.correct_answer;
}

// ---- Fisher-Yates shuffle ----
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

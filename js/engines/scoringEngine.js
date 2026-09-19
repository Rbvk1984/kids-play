// =========================================================
// scoringEngine.js
// All scoring logic lives here. Never scattered in UI code.
// =========================================================

// ---- Configuration (change once, applies everywhere) ----
export const SCORING_CONFIG = {
  basePoints:       10,   // per correct answer
  streakBonus3:     5,    // bonus when streak reaches 3
  streakBonus5:     10,   // bonus when streak reaches 5
  streakBonus10:    20,   // bonus when streak reaches 10
  wrongPenalty:     0,    // no penalty for wrong answers (learning app)
};

// ---- Calculate points for a single answer ----
export function calculatePoints(isCorrect, streak, basePoints = SCORING_CONFIG.basePoints) {
  if (!isCorrect) return 0;

  let points = basePoints;

  // Streak bonuses (applied at milestones)
  if (streak >= 10)      points += SCORING_CONFIG.streakBonus10;
  else if (streak >= 5)  points += SCORING_CONFIG.streakBonus5;
  else if (streak >= 3)  points += SCORING_CONFIG.streakBonus3;

  return points;
}

// ---- Update streak after an answer ----
export function updateStreak(isCorrect, currentStreak) {
  return isCorrect ? currentStreak + 1 : 0;
}

// ---- Calculate accuracy percentage ----
export function calculateAccuracy(correctCount, totalCount) {
  if (totalCount === 0) return 0;
  return Math.round((correctCount / totalCount) * 100);
}

// ---- Build the complete session result object ----
export function buildSessionResult({
  score,
  correctCount,
  incorrectCount,
  bestStreak,
}) {
  const total = correctCount + incorrectCount;
  return {
    score,
    correct_count:   correctCount,
    incorrect_count: incorrectCount,
    total_questions: total,
    accuracy:        calculateAccuracy(correctCount, total),
    best_streak:     bestStreak,
  };
}

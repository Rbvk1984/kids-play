-- =========================================================
-- Kids Play — Row Level Security
-- =========================================================

alter table kp_grades            enable row level security;
alter table kp_subjects          enable row level security;
alter table kp_topics            enable row level security;
alter table kp_questions         enable row level security;
alter table kp_question_options  enable row level security;
alter table kp_profiles          enable row level security;
alter table kp_game_sessions     enable row level security;
alter table kp_player_answers    enable row level security;
alter table kp_progress          enable row level security;

-- ---- Public content (any logged-in child can read) ----
create policy "grades are public"
  on kp_grades for select using (auth.uid() is not null);

create policy "subjects are public"
  on kp_subjects for select using (auth.uid() is not null);

create policy "topics are public"
  on kp_topics for select using (auth.uid() is not null);

create policy "questions are public"
  on kp_questions for select using (auth.uid() is not null);

create policy "options are public"
  on kp_question_options for select using (auth.uid() is not null);

-- ---- Profiles ----
-- All children can see all profiles (for leaderboard display names)
create policy "profiles readable by all authenticated"
  on kp_profiles for select using (auth.uid() is not null);

-- Children can only update their own profile
create policy "children update own profile"
  on kp_profiles for update using (auth.uid() = id);

-- Insert handled by the trigger (no direct insert needed)

-- ---- Game sessions ----
create policy "children read own sessions"
  on kp_game_sessions for select using (auth.uid() = player_id);

create policy "children insert own sessions"
  on kp_game_sessions for insert with check (auth.uid() = player_id);

create policy "children update own sessions"
  on kp_game_sessions for update using (auth.uid() = player_id);

-- ---- Player answers ----
create policy "children read own answers"
  on kp_player_answers for select
  using (
    session_id in (
      select id from kp_game_sessions where player_id = auth.uid()
    )
  );

create policy "children insert own answers"
  on kp_player_answers for insert
  with check (
    session_id in (
      select id from kp_game_sessions where player_id = auth.uid()
    )
  );

-- ---- Progress ----
-- All children can see all progress (leaderboard)
-- Filters in the app ensure only display names are shown
create policy "progress readable by all authenticated"
  on kp_progress for select using (auth.uid() is not null);

create policy "children insert own progress"
  on kp_progress for insert with check (auth.uid() = player_id);

create policy "children update own progress"
  on kp_progress for update using (auth.uid() = player_id);

-- =========================================================
-- Kids Play — Database Schema (Phase 1)
-- Run in Supabase SQL Editor in order
-- =========================================================

-- Grades
create table kp_grades (
  id         smallint primary key,
  name       text not null,          -- "Grade 5"
  level      smallint not null,      -- 5, 6, 7, 8
  active     boolean not null default true,
  created_at timestamptz not null default now()
);

-- Subjects
create table kp_subjects (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,          -- "Mathematics"
  emoji      text not null,          -- "🧮"
  color      text not null,          -- "#6c5ce7"
  sort_order smallint not null default 0,
  active     boolean not null default true
);

-- Topics (belong to a subject + grade)
create table kp_topics (
  id          uuid primary key default gen_random_uuid(),
  subject_id  uuid not null references kp_subjects(id) on delete cascade,
  grade_id    smallint not null references kp_grades(id),
  name        text not null,         -- "HCF"
  description text,
  sort_order  smallint not null default 0,
  active      boolean not null default true
);
create index on kp_topics(subject_id, grade_id);

-- Questions
create table kp_questions (
  id           uuid primary key default gen_random_uuid(),
  topic_id     uuid not null references kp_topics(id) on delete cascade,
  question_text text not null,
  question_type text not null default 'mcq'
    check (question_type in ('mcq','true_false','short_answer')),
  correct_answer text not null,      -- stores option letter for mcq (A/B/C/D) or text
  explanation   text not null,       -- always required — teaches the child
  difficulty    text not null default 'medium'
    check (difficulty in ('easy','medium','hard')),
  points        smallint not null default 10,
  active        boolean not null default true,
  created_at    timestamptz not null default now()
);
create index on kp_questions(topic_id);

-- MCQ Options (4 per MCQ question)
create table kp_question_options (
  id          uuid primary key default gen_random_uuid(),
  question_id uuid not null references kp_questions(id) on delete cascade,
  letter      text not null check (letter in ('A','B','C','D')),
  option_text text not null,
  unique (question_id, letter)
);
create index on kp_question_options(question_id);

-- Child profiles (linked to Supabase Auth)
create table kp_profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  username     text not null unique,
  display_name text not null,
  grade_id     smallint references kp_grades(id),
  avatar_color text not null default '#6c5ce7',
  total_score  integer not null default 0,
  created_at   timestamptz not null default now()
);
create index on kp_profiles(username);

-- Game sessions (one per completed game)
create table kp_game_sessions (
  id              uuid primary key default gen_random_uuid(),
  player_id       uuid not null references kp_profiles(id) on delete cascade,
  topic_id        uuid not null references kp_topics(id),
  mode            text not null default 'single' check (mode in ('single','multiplayer')),
  status          text not null default 'in_progress' check (status in ('in_progress','completed')),
  score           integer not null default 0,
  correct_count   smallint not null default 0,
  incorrect_count smallint not null default 0,
  total_questions smallint not null default 0,
  accuracy        numeric(5,2) not null default 0,
  best_streak     smallint not null default 0,
  started_at      timestamptz not null default now(),
  completed_at    timestamptz
);
create index on kp_game_sessions(player_id, topic_id);

-- Player answers (one per question per session)
create table kp_player_answers (
  id             uuid primary key default gen_random_uuid(),
  session_id     uuid not null references kp_game_sessions(id) on delete cascade,
  question_id    uuid not null references kp_questions(id),
  player_answer  text not null,
  is_correct     boolean not null,
  points_earned  smallint not null default 0,
  answered_at    timestamptz not null default now()
);
create index on kp_player_answers(session_id);

-- Progress (denormalised per player/subject/topic for fast dashboard queries)
create table kp_progress (
  id              uuid primary key default gen_random_uuid(),
  player_id       uuid not null references kp_profiles(id) on delete cascade,
  subject_id      uuid references kp_subjects(id),
  topic_id        uuid references kp_topics(id),
  total_questions integer not null default 0,
  correct_count   integer not null default 0,
  total_score     integer not null default 0,
  best_streak     smallint not null default 0,
  accuracy        numeric(5,2) not null default 0,
  sessions_count  smallint not null default 0,
  last_played_at  timestamptz,
  unique (player_id, subject_id, topic_id)
);
create index on kp_progress(player_id);
create index on kp_progress(topic_id, total_score desc);  -- for leaderboard

-- Auto-create profile when user signs up
create or replace function handle_new_kp_user()
returns trigger
language plpgsql security definer
as $$
begin
  -- Username and display_name come from raw_user_meta_data
  insert into kp_profiles (id, username, display_name, grade_id, avatar_color)
  values (
    new.id,
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'display_name',
    (new.raw_user_meta_data->>'grade_id')::smallint,
    new.raw_user_meta_data->>'avatar_color'
  );
  return new;
end;
$$;

create trigger on_kp_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_kp_user();

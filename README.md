# Kids Play 🎮

**Learn through games — Grade 5 to 8, CBSE/Cambridge**

A free, browser-based educational game platform for children. No app download, no installation — just open the link and start learning.

---

## Architecture

```
Child's Browser
       ↓
GitHub Pages (static HTML/CSS/JS)
       ↓
Supabase (Auth + PostgreSQL + RLS)
```

No Node.js, no React, no build step. Plain HTML + CSS + Vanilla JavaScript.

---

## One-time Supabase setup

1. Create a **new Supabase project** at supabase.com (free tier)
2. In the SQL Editor, run these files **in order:**
   - `supabase/01_schema.sql`
   - `supabase/02_rls.sql`
   - `supabase/03_seed.sql`
   - `supabase/04_questions.sql`
3. Go to **Authentication → Settings** and:
   - Disable "Confirm email" (children don't have emails)
   - Enable Sign Ups
4. Go to **Settings → API**, copy your:
   - Project URL → paste into `js/config.js` as `SUPABASE_URL`
   - `anon` public key → paste into `js/config.js` as `SUPABASE_ANON_KEY`

---

## Deploy to GitHub Pages

1. Create a new GitHub repository: `kids-play`
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source**: Deploy from branch `main`, folder `/ (root)`
4. Your site will be live at: `https://yourusername.github.io/kids-play/`

---

## What's in Phase 1

- ✅ Child registration (username + password, no email required)
- ✅ Grade selection (5, 6, 7, 8)
- ✅ Subject + topic navigation
- ✅ 10-question MCQ game
- ✅ Correct/wrong feedback with explanation after every question
- ✅ Scoring engine (points + streak bonuses)
- ✅ Game complete screen with accuracy + performance message
- ✅ Progress saved to Supabase
- ✅ 40 sample questions (HCF, LCM, Photosynthesis, Vocabulary — Grade 5)

## Coming in Phase 2

- 📊 Personal progress dashboard
- 🏆 Leaderboards (subject, topic, weekly, monthly)
- 🎮 Multiplayer game rooms

---

## Adding more questions

Add rows to `kp_questions` and `kp_question_options` in your Supabase dashboard, linking them to the correct `topic_id`. No code changes needed.

## Adding more topics

Add rows to `kp_topics` linking to a `subject_id` and `grade_id`. The UI picks them up automatically.

## Adding more subjects

Add rows to `kp_subjects`. The UI picks them up automatically.

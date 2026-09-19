-- =========================================================
-- Kids Play — Migration: add avatar_type to profiles
-- Run once in Supabase SQL editor
-- =========================================================

alter table kp_profiles
  add column if not exists avatar_type text not null default 'star_princess';

-- Update the trigger to capture avatar_type from registration
create or replace function handle_new_kp_user()
returns trigger
language plpgsql security definer
as $$
begin
  insert into kp_profiles (id, username, display_name, grade_id, avatar_color, avatar_type)
  values (
    new.id,
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'display_name',
    (new.raw_user_meta_data->>'grade_id')::smallint,
    new.raw_user_meta_data->>'avatar_color',
    coalesce(new.raw_user_meta_data->>'avatar_type', 'star_princess')
  );
  return new;
end;
$$;

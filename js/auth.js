import { supabase } from "./supabase.js";

const DOMAIN = "@kidsplay.app";
function toEmail(username) { return `${username.toLowerCase().trim()}${DOMAIN}`; }

export async function register({ username, displayName, password, gradeId, avatarType = "star_princess" }) {
  const email = toEmail(username);
  const avatarColors = ["#d63384","#7c3aed","#0891b2","#059669","#dc2626","#f59e0b"];
  const avatarColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];
  const { data, error } = await supabase.auth.signUp({
    email, password,
    options: {
      data: { username: username.trim(), display_name: displayName.trim(), grade_id: gradeId, avatar_color: avatarColor, avatar_type: avatarType },
      emailRedirectTo: null,
    },
  });
  if (error) throw error;
  return data;
}

export async function login({ username, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({ email: toEmail(username), password });
  if (error) throw error;
  return data;
}

export async function logout() {
  await supabase.auth.signOut();
  const base = window.location.pathname.includes("/pages/") ? "../" : "";
  window.location.href = base + "index.html";
}

export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function getProfile() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;

  // Try to fetch existing profile
  const { data, error } = await supabase
    .from("kp_profiles")
    .select("*, kp_grades(name, level)")
    .eq("id", session.user.id)
    .maybeSingle();

  if (!error && data) return data;

  // Profile missing (trigger failed at registration) — auto-create it
  const meta = session.user.user_metadata || {};
  if (!meta.username) return null; // can't create without metadata

  const { data: created, error: insertErr } = await supabase
    .from("kp_profiles")
    .insert({
      id:           session.user.id,
      username:     meta.username,
      display_name: meta.display_name || meta.username,
      grade_id:     meta.grade_id ? Number(meta.grade_id) : null,
      avatar_color: meta.avatar_color || "#d63384",
      avatar_type:  meta.avatar_type  || "star_princess",
    })
    .select("*, kp_grades(name, level)")
    .maybeSingle();

  if (insertErr) {
    console.error("Profile auto-create failed:", insertErr.message);
    return null;
  }
  return created;
}

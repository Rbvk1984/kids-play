// =========================================================
// auth.js — Child registration and login
//
// Children never see email addresses. They register with a
// username; internally we use {username}@kidsplay.app as the
// Supabase Auth email so no real email is required.
// =========================================================

import { supabase } from "./supabase.js";

const DOMAIN = "@kidsplay.app";

function toEmail(username) {
  return `${username.toLowerCase().trim()}${DOMAIN}`;
}

// ---- Register a new child ----
export async function register({ username, displayName, password, gradeId, avatarType = "star_princess" }) {
  const email = toEmail(username);
  const avatarColors = ["#d63384","#7c3aed","#0891b2","#059669","#dc2626","#f59e0b"];
  const avatarColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username:     username.trim(),
        display_name: displayName.trim(),
        grade_id:     gradeId,
        avatar_color: avatarColor,
        avatar_type:  avatarType,
      },
      emailRedirectTo: null,
    },
  });

  if (error) throw error;
  return data;
}

// ---- Login an existing child ----
export async function login({ username, password }) {
  const email = toEmail(username);
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

// ---- Logout ----
export async function logout() {
  await supabase.auth.signOut();
  window.location.href = "../index.html";
}

// ---- Get the logged-in child's profile ----
export async function getProfile() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;

  const { data, error } = await supabase
    .from("kp_profiles")
    .select("*, kp_grades(name, level)")
    .eq("id", session.user.id)
    .single();

  if (error) {
    console.error("Profile fetch error:", error);
    return null;
  }
  return data;
}

// ---- Get current session (quick check) ----
export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

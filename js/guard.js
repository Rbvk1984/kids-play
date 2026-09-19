import { getSession, getProfile, logout } from "./auth.js";

export async function requireAuth() {
  // Loop detection — if we've been bounced back more than twice, sign out cleanly
  const bounces = Number(sessionStorage.getItem("kp_bounces") || 0);

  const session = await getSession();
  if (!session) {
    sessionStorage.removeItem("kp_bounces");
    redirect("index.html");
    return null;
  }

  const profile = await getProfile();
  if (!profile) {
    if (bounces >= 2) {
      // Stuck — sign out and let user start fresh
      sessionStorage.removeItem("kp_bounces");
      await logout();
      return null;
    }
    sessionStorage.setItem("kp_bounces", bounces + 1);
    redirect("index.html");
    return null;
  }

  sessionStorage.removeItem("kp_bounces");
  return { session, profile };
}

function redirect(page) {
  const base = window.location.pathname.includes("/pages/") ? "../" : "";
  window.location.href = base + page;
}

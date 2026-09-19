import { getSession, getProfile } from "./auth.js";

// Call at the top of every protected page.
// Returns { session, profile } if authenticated, otherwise redirects.
export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    // Works from both /pages/ and root
    const base = window.location.pathname.includes("/pages/") ? "../" : "";
    window.location.href = base + "index.html";
    return null;
  }
  const profile = await getProfile();
  if (!profile) {
    const base = window.location.pathname.includes("/pages/") ? "../" : "";
    window.location.href = base + "index.html";
    return null;
  }
  return { session, profile };
}

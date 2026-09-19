// =========================================================
// avatars.js — 8 original fantasy avatar definitions
// Used on login (picker), dashboard, game, and results pages
// =========================================================

export const AVATARS = [
  {
    id: "star_princess",
    emoji: "👸",
    label: "Star Princess",
    gradient: "linear-gradient(135deg,#f8bbd9,#f48fb1)",
    glow: "rgba(244,114,182,0.5)",
  },
  {
    id: "fairy",
    emoji: "🧚‍♀️",
    label: "Fairy Friend",
    gradient: "linear-gradient(135deg,#e1bee7,#ce93d8)",
    glow: "rgba(206,147,216,0.5)",
  },
  {
    id: "mermaid",
    emoji: "🧜‍♀️",
    label: "Ocean Queen",
    gradient: "linear-gradient(135deg,#b2ebf2,#80deea)",
    glow: "rgba(128,222,234,0.5)",
  },
  {
    id: "unicorn",
    emoji: "🦄",
    label: "Unicorn Rider",
    gradient: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
    glow: "rgba(248,187,208,0.5)",
  },
  {
    id: "moon_witch",
    emoji: "🔮",
    label: "Moon Witch",
    gradient: "linear-gradient(135deg,#c5cae9,#9fa8da)",
    glow: "rgba(159,168,218,0.5)",
  },
  {
    id: "blossom",
    emoji: "🌸",
    label: "Cherry Blossom",
    gradient: "linear-gradient(135deg,#fce4ec,#f48fb1)",
    glow: "rgba(244,143,177,0.5)",
  },
  {
    id: "dragon",
    emoji: "🐉",
    label: "Dragon Keeper",
    gradient: "linear-gradient(135deg,#dcedc8,#c5e1a5)",
    glow: "rgba(197,225,165,0.5)",
  },
  {
    id: "crystal",
    emoji: "💎",
    label: "Crystal Wizard",
    gradient: "linear-gradient(135deg,#b2dfdb,#80cbc4)",
    glow: "rgba(128,203,196,0.5)",
  },
];

export function getAvatar(id) {
  return AVATARS.find(a => a.id === id) || AVATARS[0];
}

export function renderAvatarBadge(avatarId, size = 44) {
  const av = getAvatar(avatarId);
  return `<div class="kp-avatar" style="background:${av.gradient}; box-shadow: 0 0 18px ${av.glow}; width:${size}px; height:${size}px; font-size:${size * 0.55}px;">${av.emoji}</div>`;
}

export function renderAvatarBadgeLarge(avatarId) {
  const av = getAvatar(avatarId);
  return `<div class="avatar-badge" style="background:${av.gradient}; box-shadow: 0 0 28px ${av.glow};">${av.emoji}</div>`;
}

// Generate sparkle background
export function initSparkles(count = 20) {
  const symbols = ["✨","⭐","🌟","💫","🔮","🌸","💜","🦋","🌙","❤️"];
  const container = document.createElement("div");
  container.className = "sparkle-bg";
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "sparkle";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      bottom: ${Math.random() * -20}%;
      font-size: ${0.6 + Math.random() * 0.8}rem;
      animation-duration: ${7 + Math.random() * 10}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(el);
  }
  document.body.prepend(container);
}

// =========================================================
// topicIllustrations.js
// Returns an SVG illustration string for a given topic name.
// Shown above the question card in the game screen.
// =========================================================

const illustrations = {

  "HCF": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#f3e8ff"/>
    <!-- Circle A -->
    <circle cx="110" cy="45" r="36" fill="rgba(124,58,237,0.2)" stroke="#7c3aed" stroke-width="2"/>
    <!-- Circle B -->
    <circle cx="210" cy="45" r="36" fill="rgba(219,39,119,0.2)" stroke="#db2777" stroke-width="2"/>
    <!-- Overlap -->
    <text x="160" y="49" font-family="Fredoka One,cursive" font-size="13" fill="#6d28d9" text-anchor="middle">HCF</text>
    <text x="90" y="49" font-family="Nunito,sans-serif" font-size="11" fill="#7c3aed" text-anchor="middle">12</text>
    <text x="230" y="49" font-family="Nunito,sans-serif" font-size="11" fill="#db2777" text-anchor="middle">18</text>
    <text x="50" y="80" font-family="Nunito,sans-serif" font-size="10" fill="#7c3aed" font-weight="700">24</text>
    <text x="250" y="80" font-family="Nunito,sans-serif" font-size="10" fill="#db2777" font-weight="700">36</text>
    <text x="160" y="82" font-family="Nunito,sans-serif" font-size="9" fill="#6d28d9" text-anchor="middle" font-weight="700">HCF = 6</text>
    <text x="160" y="18" font-family="Fredoka One,cursive" font-size="12" fill="#4c1d95" text-anchor="middle">Highest Common Factor</text>
  </svg>`,

  "LCM": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#fdf4ff"/>
    <text x="16" y="22" font-family="Fredoka One,cursive" font-size="12" fill="#9d174d">Least Common Multiple</text>
    <!-- Number line -->
    <line x1="20" y1="55" x2="300" y2="55" stroke="#e879f9" stroke-width="2"/>
    <!-- Multiples of 4 -->
    <circle cx="52" cy="55" r="8" fill="#7c3aed"/><text x="52" y="58" font-size="8" fill="white" text-anchor="middle" font-family="Nunito">4</text>
    <circle cx="92" cy="55" r="8" fill="#7c3aed"/><text x="92" y="58" font-size="8" fill="white" text-anchor="middle" font-family="Nunito">8</text>
    <circle cx="172" cy="55" r="10" fill="#db2777" stroke="#fbbf24" stroke-width="2"/><text x="172" y="59" font-size="9" fill="white" text-anchor="middle" font-family="Nunito" font-weight="bold">12</text>
    <circle cx="252" cy="55" r="8" fill="#7c3aed"/><text x="252" y="58" font-size="8" fill="white" text-anchor="middle" font-family="Nunito">16</text>
    <!-- Multiples of 6 -->
    <circle cx="132" cy="42" r="8" fill="#0891b2"/><text x="132" y="46" font-size="8" fill="white" text-anchor="middle" font-family="Nunito">6</text>
    <circle cx="172" cy="42" r="8" fill="#0891b2"/><text x="172" y="46" font-size="8" fill="white" text-anchor="middle" font-family="Nunito">12</text>
    <text x="16" y="38" font-size="8" fill="#7c3aed" font-family="Nunito" font-weight="700">×4:</text>
    <text x="16" y="50" font-size="8" fill="#0891b2" font-family="Nunito" font-weight="700">×6:</text>
    <text x="160" y="80" font-family="Fredoka One,cursive" font-size="12" fill="#9d174d" text-anchor="middle">LCM(4,6) = 12 ⭐</text>
  </svg>`,

  "Fractions": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#fff0f8"/>
    <text x="160" y="18" font-family="Fredoka One,cursive" font-size="12" fill="#be185d" text-anchor="middle">Fractions — Equal Parts</text>
    <!-- Whole -->
    <rect x="20" y="28" width="60" height="44" rx="6" fill="#f9a8d4" stroke="#db2777" stroke-width="1.5"/>
    <text x="50" y="55" font-family="Fredoka One,cursive" font-size="11" fill="#9d174d" text-anchor="middle">1 whole</text>
    <!-- Halves -->
    <rect x="95" y="28" width="30" height="44" rx="4" fill="#f472b6" stroke="#db2777" stroke-width="1.5"/>
    <rect x="127" y="28" width="30" height="44" rx="4" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
    <text x="112" y="56" font-family="Fredoka One,cursive" font-size="10" fill="#9d174d" text-anchor="middle">½</text>
    <text x="142" y="56" font-family="Fredoka One,cursive" font-size="10" fill="#9d174d" text-anchor="middle">½</text>
    <!-- Quarters -->
    <rect x="172" y="28" width="22" height="44" rx="3" fill="#e879f9" stroke="#db2777" stroke-width="1.5"/>
    <rect x="196" y="28" width="22" height="44" rx="3" fill="#f0abfc" stroke="#db2777" stroke-width="1.5"/>
    <rect x="220" y="28" width="22" height="44" rx="3" fill="#f0abfc" stroke="#db2777" stroke-width="1.5"/>
    <rect x="244" y="28" width="22" height="44" rx="3" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
    <text x="183" y="56" font-size="7" font-family="Fredoka One,cursive" fill="white" text-anchor="middle">¼</text>
    <text x="207" y="56" font-size="7" font-family="Fredoka One,cursive" fill="#9d174d" text-anchor="middle">¼</text>
    <text x="231" y="56" font-size="7" font-family="Fredoka One,cursive" fill="#9d174d" text-anchor="middle">¼</text>
    <text x="255" y="56" font-size="7" font-family="Fredoka One,cursive" fill="#9d174d" text-anchor="middle">¼</text>
    <text x="160" y="84" font-family="Nunito,sans-serif" font-size="9" fill="#9d174d" text-anchor="middle" font-weight="800">1 = ½ + ½ = ¼ + ¼ + ¼ + ¼</text>
  </svg>`,

  "Decimals": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#f0fdf4"/>
    <text x="160" y="18" font-family="Fredoka One,cursive" font-size="12" fill="#065f46" text-anchor="middle">Decimals — Tenths &amp; Hundredths</text>
    <!-- Place value chart -->
    <rect x="20" y="26" width="60" height="28" rx="4" fill="#bbf7d0" stroke="#059669" stroke-width="1.5"/>
    <text x="50" y="38" font-family="Fredoka One,cursive" font-size="9" fill="#065f46" text-anchor="middle">Ones</text>
    <text x="50" y="50" font-family="Fredoka One,cursive" font-size="14" fill="#059669" text-anchor="middle">3</text>
    <!-- Decimal point -->
    <circle cx="88" cy="52" r="4" fill="#db2777"/>
    <!-- Tenths -->
    <rect x="96" y="26" width="60" height="28" rx="4" fill="#a7f3d0" stroke="#059669" stroke-width="1.5"/>
    <text x="126" y="38" font-family="Fredoka One,cursive" font-size="9" fill="#065f46" text-anchor="middle">Tenths</text>
    <text x="126" y="50" font-family="Fredoka One,cursive" font-size="14" fill="#059669" text-anchor="middle">5</text>
    <!-- Hundredths -->
    <rect x="162" y="26" width="60" height="28" rx="4" fill="#6ee7b7" stroke="#059669" stroke-width="1.5"/>
    <text x="192" y="38" font-family="Fredoka One,cursive" font-size="9" fill="#065f46" text-anchor="middle">Hundredths</text>
    <text x="192" y="50" font-family="Fredoka One,cursive" font-size="14" fill="#059669" text-anchor="middle">7</text>
    <text x="240" y="52" font-family="Fredoka One,cursive" font-size="20" fill="#9d174d">= 3.57</text>
    <text x="160" y="84" font-family="Nunito,sans-serif" font-size="9" fill="#065f46" text-anchor="middle" font-weight="800">3.57 = 3 + 5/10 + 7/100</text>
  </svg>`,

  "Photosynthesis": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#f0fdf4"/>
    <!-- Sun -->
    <circle cx="40" cy="30" r="18" fill="#fbbf24" opacity="0.9"/>
    <text x="40" y="34" font-size="14" text-anchor="middle">☀️</text>
    <!-- Arrow from sun -->
    <line x1="60" y1="35" x2="90" y2="45" stroke="#fbbf24" stroke-width="2" marker-end="url(#arr)"/>
    <!-- Leaf -->
    <ellipse cx="130" cy="48" rx="32" ry="20" fill="#16a34a" opacity="0.85"/>
    <text x="130" y="52" font-size="16" text-anchor="middle">🍃</text>
    <!-- CO2 in -->
    <text x="100" y="80" font-family="Nunito,sans-serif" font-size="9" fill="#0891b2" font-weight="800">CO₂ in</text>
    <line x1="108" y1="73" x2="118" y2="62" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3"/>
    <!-- H2O in -->
    <text x="148" y="80" font-family="Nunito,sans-serif" font-size="9" fill="#0891b2" font-weight="800">H₂O in</text>
    <line x1="156" y1="73" x2="148" y2="62" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3"/>
    <!-- Arrow to outputs -->
    <line x1="165" y1="48" x2="195" y2="48" stroke="#16a34a" stroke-width="2"/>
    <!-- Outputs -->
    <rect x="196" y="30" width="55" height="20" rx="6" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
    <text x="224" y="44" font-family="Nunito,sans-serif" font-size="9" fill="#065f46" text-anchor="middle" font-weight="800">O₂ out</text>
    <rect x="196" y="56" width="55" height="20" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="224" y="70" font-family="Nunito,sans-serif" font-size="9" fill="#92400e" text-anchor="middle" font-weight="800">Glucose</text>
    <text x="270" y="48" font-family="Fredoka One,cursive" font-size="9" fill="#065f46">+</text>
    <text x="160" y="14" font-family="Fredoka One,cursive" font-size="11" fill="#065f46" text-anchor="middle">CO₂ + H₂O + ☀️ → Glucose + O₂</text>
  </svg>`,

  "Human Body": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#fff0f8"/>
    <text x="160" y="15" font-family="Fredoka One,cursive" font-size="12" fill="#9d174d" text-anchor="middle">The Human Body Systems</text>
    <!-- Simple body icons for each system -->
    <text x="30" y="55" font-size="22" text-anchor="middle">❤️</text>
    <text x="30" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#9d174d" text-anchor="middle" font-weight="700">Heart</text>
    <text x="80" y="55" font-size="22" text-anchor="middle">🫁</text>
    <text x="80" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#7c3aed" text-anchor="middle" font-weight="700">Lungs</text>
    <text x="130" y="55" font-size="22" text-anchor="middle">🦷</text>
    <text x="130" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#0891b2" text-anchor="middle" font-weight="700">Teeth</text>
    <text x="180" y="55" font-size="22" text-anchor="middle">🦴</text>
    <text x="180" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#059669" text-anchor="middle" font-weight="700">Bones</text>
    <text x="230" y="55" font-size="22" text-anchor="middle">🧠</text>
    <text x="230" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#b45309" text-anchor="middle" font-weight="700">Brain</text>
    <text x="280" y="55" font-size="22" text-anchor="middle">👁️</text>
    <text x="280" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#be185d" text-anchor="middle" font-weight="700">Eyes</text>
  </svg>`,

  "Plants": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#f0fdf4"/>
    <text x="160" y="14" font-family="Fredoka One,cursive" font-size="12" fill="#065f46" text-anchor="middle">Parts of a Plant</text>
    <!-- Simple plant diagram -->
    <line x1="160" y1="80" x2="160" y2="30" stroke="#16a34a" stroke-width="3"/>
    <!-- Leaves -->
    <ellipse cx="140" cy="50" rx="18" ry="10" fill="#22c55e" transform="rotate(-20,140,50)"/>
    <ellipse cx="180" cy="42" rx="18" ry="10" fill="#16a34a" transform="rotate(20,180,42)"/>
    <!-- Flower -->
    <circle cx="160" cy="28" r="8" fill="#f9a8d4"/>
    <text x="160" y="32" font-size="12" text-anchor="middle">🌸</text>
    <!-- Roots -->
    <line x1="160" y1="80" x2="140" y2="88" stroke="#92400e" stroke-width="2"/>
    <line x1="160" y1="80" x2="160" y2="90" stroke="#92400e" stroke-width="2"/>
    <line x1="160" y1="80" x2="180" y2="88" stroke="#92400e" stroke-width="2"/>
    <!-- Labels -->
    <text x="195" y="30" font-family="Nunito,sans-serif" font-size="9" fill="#be185d" font-weight="800">Flower</text>
    <text x="195" y="48" font-family="Nunito,sans-serif" font-size="9" fill="#16a34a" font-weight="800">Leaves</text>
    <text x="195" y="72" font-family="Nunito,sans-serif" font-size="9" fill="#16a34a" font-weight="800">Stem</text>
    <text x="195" y="88" font-family="Nunito,sans-serif" font-size="9" fill="#92400e" font-weight="800">Roots</text>
    <!-- Sun -->
    <text x="30" y="35" font-size="20">☀️</text>
    <text x="30" y="65" font-size="14">💧</text>
  </svg>`,

  "Food Chain": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#fefce8"/>
    <text x="160" y="14" font-family="Fredoka One,cursive" font-size="12" fill="#92400e" text-anchor="middle">Food Chain — Energy Flow</text>
    <text x="30" y="52" font-size="22" text-anchor="middle">☀️</text>
    <text x="30" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#92400e" text-anchor="middle" font-weight="700">Sun</text>
    <text x="40" y="52" font-size="12" fill="#92400e">→</text>
    <text x="80" y="52" font-size="22" text-anchor="middle">🌿</text>
    <text x="80" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#16a34a" text-anchor="middle" font-weight="700">Plant</text>
    <text x="100" y="52" font-size="12" fill="#92400e">→</text>
    <text x="140" y="52" font-size="22" text-anchor="middle">🐛</text>
    <text x="140" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#0891b2" text-anchor="middle" font-weight="700">Caterpillar</text>
    <text x="160" y="52" font-size="12" fill="#92400e">→</text>
    <text x="200" y="52" font-size="22" text-anchor="middle">🐸</text>
    <text x="200" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#059669" text-anchor="middle" font-weight="700">Frog</text>
    <text x="220" y="52" font-size="12" fill="#92400e">→</text>
    <text x="260" y="52" font-size="22" text-anchor="middle">🦅</text>
    <text x="260" y="72" font-family="Nunito,sans-serif" font-size="8" fill="#b45309" text-anchor="middle" font-weight="700">Eagle</text>
    <text x="160" y="88" font-family="Nunito,sans-serif" font-size="8" fill="#92400e" text-anchor="middle" font-weight="700">Energy flows from producers to consumers</text>
  </svg>`,

  "Matter": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#f0f9ff"/>
    <text x="160" y="14" font-family="Fredoka One,cursive" font-size="12" fill="#0c4a6e" text-anchor="middle">States of Matter</text>
    <!-- Solid -->
    <rect x="20" y="26" width="70" height="50" rx="6" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="38" cy="40" r="4" fill="#1d4ed8"/><circle cx="52" cy="40" r="4" fill="#1d4ed8"/><circle cx="66" cy="40" r="4" fill="#1d4ed8"/>
    <circle cx="38" cy="54" r="4" fill="#1d4ed8"/><circle cx="52" cy="54" r="4" fill="#1d4ed8"/><circle cx="66" cy="54" r="4" fill="#1d4ed8"/>
    <text x="55" y="84" font-family="Fredoka One,cursive" font-size="10" fill="#1d4ed8" text-anchor="middle">Solid</text>
    <!-- Liquid -->
    <rect x="110" y="26" width="70" height="50" rx="6" fill="#bae6fd" stroke="#0ea5e9" stroke-width="1.5"/>
    <circle cx="128" cy="38" r="4" fill="#0369a1"/><circle cx="145" cy="44" r="4" fill="#0369a1"/><circle cx="162" cy="38" r="4" fill="#0369a1"/>
    <circle cx="135" cy="56" r="4" fill="#0369a1"/><circle cx="155" cy="50" r="4" fill="#0369a1"/>
    <text x="145" y="84" font-family="Fredoka One,cursive" font-size="10" fill="#0369a1" text-anchor="middle">Liquid</text>
    <!-- Gas -->
    <rect x="200" y="26" width="100" height="50" rx="6" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5" stroke-dasharray="4"/>
    <circle cx="218" cy="36" r="4" fill="#7dd3fc"/><circle cx="250" cy="50" r="4" fill="#7dd3fc"/>
    <circle cx="280" cy="38" r="4" fill="#7dd3fc"/><circle cx="235" cy="60" r="4" fill="#7dd3fc"/>
    <circle cx="265" cy="32" r="4" fill="#7dd3fc"/>
    <text x="250" y="84" font-family="Fredoka One,cursive" font-size="10" fill="#0369a1" text-anchor="middle">Gas</text>
  </svg>`,

  "Vocabulary": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#fdf4ff"/>
    <text x="160" y="14" font-family="Fredoka One,cursive" font-size="12" fill="#7e22ce" text-anchor="middle">Word Power — Vocabulary</text>
    <!-- Word boxes -->
    <rect x="12" y="24" width="68" height="24" rx="8" fill="#e9d5ff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="46" y="40" font-family="Fredoka One,cursive" font-size="10" fill="#6d28d9" text-anchor="middle">Synonym</text>
    <rect x="86" y="24" width="68" height="24" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
    <text x="120" y="40" font-family="Fredoka One,cursive" font-size="10" fill="#9d174d" text-anchor="middle">Antonym</text>
    <rect x="160" y="24" width="68" height="24" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
    <text x="194" y="40" font-family="Fredoka One,cursive" font-size="10" fill="#065f46" text-anchor="middle">Meaning</text>
    <rect x="234" y="24" width="72" height="24" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="270" y="40" font-family="Fredoka One,cursive" font-size="10" fill="#92400e" text-anchor="middle">Context</text>
    <!-- Example words -->
    <text x="20" y="65" font-family="Nunito,sans-serif" font-size="9" fill="#7c3aed" font-weight="800">Happy → Joyful</text>
    <text x="120" y="65" font-family="Nunito,sans-serif" font-size="9" fill="#db2777" font-weight="800">Hot ↔ Cold</text>
    <text x="220" y="65" font-family="Nunito,sans-serif" font-size="9" fill="#059669" font-weight="800">Enormous = Very large</text>
    <text x="160" y="82" font-family="Fredoka One,cursive" font-size="10" fill="#7e22ce" text-anchor="middle">Words are your superpower! 📚✨</text>
  </svg>`,

  "Grammar": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="#eff6ff"/>
    <text x="160" y="14" font-family="Fredoka One,cursive" font-size="12" fill="#1e3a8a" text-anchor="middle">Parts of Speech</text>
    <rect x="12" y="22" width="44" height="32" rx="6" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="34" y="35" font-family="Fredoka One,cursive" font-size="8" fill="#1d4ed8" text-anchor="middle">Noun</text>
    <text x="34" y="47" font-family="Nunito,sans-serif" font-size="8" fill="#1e40af" text-anchor="middle">dog, city</text>
    <rect x="62" y="22" width="44" height="32" rx="6" fill="#c7d2fe" stroke="#6366f1" stroke-width="1.5"/>
    <text x="84" y="35" font-family="Fredoka One,cursive" font-size="8" fill="#4338ca" text-anchor="middle">Verb</text>
    <text x="84" y="47" font-family="Nunito,sans-serif" font-size="8" fill="#4338ca" text-anchor="middle">run, jump</text>
    <rect x="112" y="22" width="52" height="32" rx="6" fill="#ddd6fe" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="138" y="35" font-family="Fredoka One,cursive" font-size="8" fill="#6d28d9" text-anchor="middle">Adjective</text>
    <text x="138" y="47" font-family="Nunito,sans-serif" font-size="8" fill="#6d28d9" text-anchor="middle">big, blue</text>
    <rect x="170" y="22" width="52" height="32" rx="6" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
    <text x="196" y="35" font-family="Fredoka One,cursive" font-size="8" fill="#9d174d" text-anchor="middle">Adverb</text>
    <text x="196" y="47" font-family="Nunito,sans-serif" font-size="8" fill="#9d174d" text-anchor="middle">quickly</text>
    <rect x="228" y="22" width="52" height="32" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
    <text x="254" y="35" font-family="Fredoka One,cursive" font-size="8" fill="#065f46" text-anchor="middle">Pronoun</text>
    <text x="254" y="47" font-family="Nunito,sans-serif" font-size="8" fill="#065f46" text-anchor="middle">he, she, it</text>
    <text x="160" y="80" font-family="Nunito,sans-serif" font-size="9" fill="#1e3a8a" text-anchor="middle" font-weight="800">The clever cat quickly chased the little mouse</text>
  </svg>`,

  "default": `<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="90" rx="12" fill="rgba(253,228,236,0.5)"/>
    <text x="160" y="52" font-size="36" text-anchor="middle">📚</text>
    <text x="160" y="78" font-family="Fredoka One,cursive" font-size="14" fill="#9d174d" text-anchor="middle">Think carefully! ✨</text>
  </svg>`,
};

export function getTopicIllustration(topicName) {
  if (!topicName) return illustrations.default;
  // Try exact match first
  if (illustrations[topicName]) return illustrations[topicName];
  // Try partial match
  const key = Object.keys(illustrations).find(k =>
    topicName.toLowerCase().includes(k.toLowerCase())
  );
  return key ? illustrations[key] : illustrations.default;
}

// wenContext.js
// Lightweight "demo memory" layer for the YC demo.
//
// This does NOT talk to a backend, a database, or an LLM. It exists purely
// to create the feeling that Wen remembers the child across sessions, so
// the product reads as one continuous relationship instead of a set of
// independent pages. Every page should read Wen's copy through the helper
// functions below rather than hardcoding strings — when this gets wired to
// a real backend later, only this file needs to change.

const demoMemory = {
  childName: "Xiao Ming",
  lastStory: "Forest Adventure",
  lastStorySlug: "forest.html",
  favoriteTheme: "animal stories",
  recentCharacters: ["日", "月"],
  streak: 6,
  weeklyProgress: "8 new characters",
  recommendedStorySlug: "city.html",
  recommendedStoryReason: "I think you'll enjoy this one.",
};

function wenChildName(name) {
  return (name && String(name).trim()) ? String(name).trim() : demoMemory.childName;
}

// Login page — suggests Wen already knows the child, before sign-in even completes.
function getGreeting(name) {
  const n = wenChildName(name);
  return n + "’s been on my mind — welcome back! 欢迎回来！";
}

// Hub page — today's session framed as a recommendation, not a menu.
function getTodayMessage(name) {
  const n = wenChildName(name);
  return "Hi " + n + "! I found two adventures for us today. 我们一起去冒险吧！";
}

// Story selection — which card to feature, and why, in Wen's voice.
function getRecommendedStory() {
  return {
    slug: demoMemory.recommendedStorySlug,
    reason: demoMemory.recommendedStoryReason,
  };
}

// Quiz — references recently learned characters instead of a generic prompt.
function getRecommendedQuiz() {
  const chars = demoMemory.recentCharacters.join(" and ");
  return "Let's see if " + chars + " still look familiar today.";
}

// Parent dashboard — Wen talking to the parent, not a report generator.
function getDashboardSummary(name) {
  const n = wenChildName(name);
  return "I loved learning with " + n + " this week! I noticed real progress reading characters, " +
         "and it looks like " + demoMemory.favoriteTheme + " are becoming a favorite. 🧡";
}

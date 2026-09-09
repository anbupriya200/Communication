/**
 * FluentPath - Student Dashboard Controller (js/dashboard.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  const user = FluentPath.getUser() || FluentPath.defaultUser;

  // 1. Dynamic Greeting
  const hour = new Date().getHours();
  let greeting = "Good Morning";
  if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
  else if (hour >= 17) greeting = "Good Evening";

  const greetingEl = document.getElementById("dashboard-greeting");
  if (greetingEl) {
    greetingEl.textContent = `${greeting}, ${user.name.split(" ")[0]}! 👋`;
  }

  // 2. Populate Profile & Metric Cards
  const nameEl = document.getElementById("dash-student-name");
  const idEl = document.getElementById("dash-student-id");
  const bandEl = document.getElementById("dash-current-band");
  const streakEl = document.getElementById("dash-streak-count");
  const vocabEl = document.getElementById("dash-vocab-count");
  const testsEl = document.getElementById("dash-tests-count");
  const avatarEl = document.getElementById("dash-avatar-letter");

  if (nameEl) nameEl.textContent = user.name;
  if (idEl) idEl.textContent = `Student ID: ${user.id}`;
  if (bandEl) bandEl.textContent = user.currentBand || "6.5";
  if (streakEl) streakEl.textContent = `${user.streak} Days`;
  if (vocabEl) vocabEl.textContent = user.vocabLearned || 248;
  if (testsEl) testsEl.textContent = user.completedTests || 6;
  if (avatarEl) avatarEl.textContent = (user.name || "S").charAt(0).toUpperCase();

  // 3. Motivational Daily Quote
  const quotes = [
    "\"Success in English communication is not about perfection, but connection.\" — FluentPath Mentor",
    "\"Small daily improvements over time lead to stunning IELTS band score leaps.\" — Robin Sharma",
    "\"The limits of my language mean the limits of my world.\" — Ludwig Wittgenstein",
    "\"Consistency beats intensity. 15 minutes of speaking every day creates fluency.\" — Cambridge English"
  ];
  const quoteEl = document.getElementById("daily-quote-text");
  if (quoteEl) {
    quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  }

  // 4. Quick Action Button Sound & Feedback
  const actionCards = document.querySelectorAll(".card-interactive");
  actionCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      // Gentle hover sound if desired
    });
  });
});

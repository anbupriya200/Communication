/**
 * FluentPath - English Communication & IELTS Preparation
 * Main Global Controller & Utilities
 */

const FluentPath = {
  // Default demo user profile if none exists
  defaultUser: {
    id: "FP-2026-88",
    name: "Aarav Sharma",
    mobile: "9876543210",
    streak: 14,
    xp: 1850,
    gameCredits: 150,
    currentBand: 6.5,
    vocabLearned: 248,
    completedTests: 6,
    lastActive: new Date().toISOString()
  },

  init() {
    this.initTheme();
    this.initVibeMesh();
    this.checkSession();
    this.initNavbar();
    this.updateUserUI();
    this.initAudioContext();
    this.initWelcomeVoice();
  },

  initVibeMesh() {
    if (!document.querySelector(".vibe-mesh-bg")) {
      const mesh = document.createElement("div");
      mesh.className = "vibe-mesh-bg";
      mesh.innerHTML = `
        <div class="vibe-blob vibe-blob-1"></div>
        <div class="vibe-blob vibe-blob-2"></div>
        <div class="vibe-blob vibe-blob-3"></div>
      `;
      document.body.appendChild(mesh);
    }
  },

  // 1. Theme Management (Light / Dark)
  initTheme() {
    const savedTheme = localStorage.getItem("fluentpath_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach(btn => {
      btn.innerHTML = savedTheme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("title", savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
      btn.addEventListener("click", () => this.toggleTheme());
    });
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("fluentpath_theme", newTheme);

    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach(btn => {
      btn.innerHTML = newTheme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("title", newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
    });

    this.playClickBeep();
    this.showToast(`Switched to ${newTheme === "dark" ? "Dark" : "Light"} mode`, "info");
  },

  // 2. Session & Auth Guard
  getUser() {
    const stored = localStorage.getItem("fluentpath_user");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Invalid user JSON in localStorage", e);
      }
    }
    return null;
  },

  saveUser(userData) {
    localStorage.setItem("fluentpath_user", JSON.stringify(userData));
    this.updateUserUI();
  },

  checkSession() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const publicPages = ["index.html", "about.html", "contact.html"];
    const user = this.getUser();

    // If on protected page without login, provide demo user for frictionless review
    if (!user && !publicPages.includes(currentPage)) {
      this.saveUser(this.defaultUser);
    }
  },

  logout() {
    localStorage.removeItem("fluentpath_user");
    this.showToast("Logged out successfully", "info");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 400);
  },

  // 3. Navigation Bar & Mobile Drawer
  initNavbar() {
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const isOpen = navLinks.classList.contains("active");
        mobileToggle.innerHTML = isOpen ? "✕" : "☰";
      });
    }

    // Dropdown toggling for mobile
    const dropdowns = document.querySelectorAll(".nav-dropdown");
    dropdowns.forEach(drop => {
      const toggle = drop.querySelector(".nav-link");
      if (toggle && window.innerWidth <= 768) {
        toggle.addEventListener("click", (e) => {
          e.preventDefault();
          drop.classList.toggle("open");
        });
      }
    });

    // Highlight current page in navbar
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-link, .dropdown-item");
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "dashboard.html")) {
        link.classList.add("active");
      }
    });
  },

  // 4. Update Header User Information
  updateUserUI() {
    const user = this.getUser() || this.defaultUser;
    if (typeof user.gameCredits === "undefined") {
      user.gameCredits = 150;
    }
    
    // Streak Pill
    const streakElements = document.querySelectorAll(".user-streak-display");
    streakElements.forEach(el => el.textContent = `${user.streak} Days`);

    // XP Pill
    const xpElements = document.querySelectorAll(".user-xp-display");
    xpElements.forEach(el => el.textContent = `${user.xp.toLocaleString()} XP`);

    // Game Credits Pill
    const creditsElements = document.querySelectorAll(".user-credits-display");
    creditsElements.forEach(el => el.textContent = `${(user.gameCredits || 0).toLocaleString()} Coins`);

    // Avatar Initial
    const avatarElements = document.querySelectorAll(".user-avatar-initial");
    const initial = (user.name || "S").charAt(0).toUpperCase();
    avatarElements.forEach(el => el.textContent = initial);

    // Student Name
    const nameElements = document.querySelectorAll(".user-name-display");
    nameElements.forEach(el => el.textContent = user.name || "Student");

    // Student ID
    const idElements = document.querySelectorAll(".user-id-display");
    idElements.forEach(el => el.textContent = user.id || "FP-2026-88");
  },

  addGameCredits(amount, reason = "Game Reward") {
    const user = this.getUser() || this.defaultUser;
    user.gameCredits = (user.gameCredits || 0) + amount;
    this.saveUser(user);
    this.playSuccessChime();
    this.showToast(`+${amount} Star Coins earned! (${reason})`, "success");
    return user.gameCredits;
  },

  spendGameCredits(amount, item = "Reward Item") {
    const user = this.getUser() || this.defaultUser;
    const current = user.gameCredits || 0;
    if (current < amount) {
      this.showToast(`Need ${amount - current} more Star Coins to unlock!`, "error");
      return false;
    }
    user.gameCredits = current - amount;
    this.saveUser(user);
    this.playSuccessChime();
    this.showToast(`Unlocked ${item} for ${amount} Star Coins! 🎁`, "success");
    return true;
  },

  // 5. Native Web Audio Effects (Synthesizer Chimes)
  initAudioContext() {
    this.audioCtx = null;
  },

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  playSuccessChime() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Note 1 (E5 = 659.25 Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.12, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.35);

      // Note 2 (A5 = 880 Hz)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(880, now + 0.12);
      gain2.gain.setValueAtTime(0.15, now + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.12);
      osc2.stop(now + 0.6);
    } catch (e) {
      console.warn("Audio Context playback unavailable", e);
    }
  },

  playClickBeep() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, now);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      // Ignore audio failure on silent browsers
    }
  },

  // 6. Speech Synthesis (TTS Pronunciation)
  speakText(text, lang = "en-GB") {
    if (!('speechSynthesis' in window)) {
      this.showToast("Speech synthesis not supported in this browser", "info");
      return;
    }
    window.speechSynthesis.cancel(); // Stop any pending speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.92;
    utterance.pitch = 1.0;

    // Pick British or standard English voice if available
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.includes("en-GB") || v.lang.includes("en-US") || v.lang.includes("en"));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
    this.showToast(`Pronouncing: "${text}"`, "info");
  },

  // 7. Toast Notification System
  showToast(message, type = "success") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let icon = "✅";
    if (type === "error") icon = "❌";
    if (type === "info") icon = "💡";

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "toastOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards";
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3200);
  },

  // 8. Automatic Welcome Voice & Interactive Banner
  initWelcomeVoice() {
    const mainContainer = document.querySelector(".main-content .container") || document.querySelector(".auth-card");
    if (mainContainer && !document.getElementById("welcome-voice-banner")) {
      const banner = document.createElement("div");
      banner.id = "welcome-voice-banner";
      banner.className = "welcome-voice-banner";
      banner.innerHTML = `
        <div class="welcome-voice-left">
          <div class="welcome-voice-avatar">🎙️</div>
          <div>
            <div class="welcome-voice-text">
              <span>Welcome to FluentPath! Let's embark on your English learning journey together.</span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-muted); display:flex; align-items:center; gap:0.5rem; margin-top:2px;">
              <span>Interactive Audio Greeting</span>
              <div class="soundwave-container" id="welcome-soundwave">
                <div class="soundwave-bar"></div>
                <div class="soundwave-bar"></div>
                <div class="soundwave-bar"></div>
                <div class="soundwave-bar"></div>
                <div class="soundwave-bar"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="welcome-voice-actions">
          <button class="btn btn-secondary btn-sm" id="replay-voice-btn" style="padding:0.4rem 0.85rem; font-size:0.85rem; font-weight:700;">
            🔊 Hear Voice
          </button>
          <button class="btn btn-sm" id="close-voice-banner" style="background:transparent; color:var(--text-muted); font-size:1.1rem; padding:0.2rem 0.5rem;" title="Dismiss">
            ✕
          </button>
        </div>
      `;
      mainContainer.insertBefore(banner, mainContainer.firstChild);

      const replayBtn = banner.querySelector("#replay-voice-btn");
      const closeBtn = banner.querySelector("#close-voice-banner");

      if (replayBtn) {
        replayBtn.addEventListener("click", () => {
          this.playWelcomeVoice(true);
        });
      }
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          banner.style.display = "none";
        });
      }
    }

    // Try automatic voice greeting after short delay
    setTimeout(() => {
      if (!sessionStorage.getItem("fluentpath_welcomed")) {
        this.playWelcomeVoice();
      }
    }, 750);

    // If browser autoplay policy requires user gesture, speak on first interaction
    const handleFirstGesture = () => {
      if (!sessionStorage.getItem("fluentpath_welcomed")) {
        this.playWelcomeVoice();
      }
      document.removeEventListener("click", handleFirstGesture);
      document.removeEventListener("keydown", handleFirstGesture);
      document.removeEventListener("touchstart", handleFirstGesture);
    };
    document.addEventListener("click", handleFirstGesture, { once: true });
    document.addEventListener("keydown", handleFirstGesture, { once: true });
    document.addEventListener("touchstart", handleFirstGesture, { once: true });
  },

  playWelcomeVoice(force = false) {
    if (!('speechSynthesis' in window)) return;
    if (!force && sessionStorage.getItem("fluentpath_welcomed")) return;
    
    sessionStorage.setItem("fluentpath_welcomed", "true");

    const soundwave = document.getElementById("welcome-soundwave");
    if (soundwave) soundwave.classList.add("speaking");

    const greeting = "Welcome to FluentPath! Your interactive portal for English communication and IELTS preparation. Let's make learning exciting today!";
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(greeting);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => (v.lang.includes("en-US") || v.lang.includes("en-GB") || v.lang.includes("en")) && !v.name.includes("Zira"));
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onend = () => {
      if (soundwave) soundwave.classList.remove("speaking");
    };
    utterance.onerror = () => {
      if (soundwave) soundwave.classList.remove("speaking");
    };

    window.speechSynthesis.speak(utterance);
  }
};

// Initialize FluentPath on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  FluentPath.init();
});

/* Dark-first UI enhancement */
(() => {
  const saved = localStorage.getItem('fluentpath-theme');
  if (!saved && document.documentElement.dataset.theme !== 'dark') {
    document.documentElement.dataset.theme = 'dark';
  }
})();

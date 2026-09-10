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
  getThemeIcons() {
    return {
      sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
      moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
    };
  },

  initTheme() {
    const savedTheme = localStorage.getItem("fluentpath_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const icons = this.getThemeIcons();
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach(btn => {
      btn.innerHTML = savedTheme === "dark" ? icons.sun : icons.moon;
      btn.setAttribute("title", savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
      btn.onclick = () => this.toggleTheme();
    });
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("fluentpath_theme", newTheme);

    const icons = this.getThemeIcons();
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach(btn => {
      btn.innerHTML = newTheme === "dark" ? icons.sun : icons.moon;
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

  // 3. Navigation Bar & Mobile Drawer with Classification Dropdowns
  initNavbar() {
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle("active");
        mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        mobileToggle.innerHTML = isOpen ? "✕" : "☰";
      });
    }

    // Dropdown toggling for mobile / click interaction
    const dropdowns = document.querySelectorAll(".nav-dropdown");
    dropdowns.forEach(drop => {
      const toggleBtn = drop.querySelector(".dropdown-toggle") || drop.querySelector(".nav-link");
      if (toggleBtn) {
        toggleBtn.addEventListener("click", (e) => {
          if (window.innerWidth <= 992) {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = drop.classList.toggle("open");
            toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
            
            // Close other open dropdowns on mobile
            dropdowns.forEach(other => {
              if (other !== drop) {
                other.classList.remove("open");
                other.querySelector(".dropdown-toggle, .nav-link")?.setAttribute("aria-expanded", "false");
              }
            });
          }
        });
      }
    });

    // Close mobile drawer on outside click
    document.addEventListener("click", (e) => {
      if (navLinks && navLinks.classList.contains("active") && !navLinks.contains(e.target) && !mobileToggle?.contains(e.target)) {
        navLinks.classList.remove("active");
        if (mobileToggle) {
          mobileToggle.setAttribute("aria-expanded", "false");
          mobileToggle.innerHTML = "☰";
        }
      }
    });

    // Highlight current active page & active parent dropdown in navbar
    const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const links = document.querySelectorAll(".nav-link, .dropdown-item");
    
    links.forEach(link => {
      const href = (link.getAttribute("href") || "").toLowerCase();
      const isCurrent = href === currentPage || 
        (currentPage === "" && href === "dashboard.html") || 
        (currentPage === "index.html" && href === "dashboard.html");
      
      if (isCurrent && !link.classList.contains("dropdown-toggle")) {
        link.classList.add("active");
        const parentDropdown = link.closest(".nav-dropdown");
        if (parentDropdown) {
          parentDropdown.classList.add("active-parent");
        }
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

  // 6. Speech Synthesis - "Speak Like A Person" Natural Human Voice Engine
  getNaturalHumanVoice(preferredLang = "en-US") {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    // High priority natural, neural and friendly human English voices
    const humanVoicePatterns = [
      /Google US English/i,
      /Google UK English Female/i,
      /Google UK English Male/i,
      /Microsoft Jenny Online \(Natural\)/i,
      /Microsoft Aria Online \(Natural\)/i,
      /Microsoft Guy Online \(Natural\)/i,
      /Microsoft Ryan Online \(Natural\)/i,
      /Microsoft Sonia Online \(Natural\)/i,
      /Samantha/i,
      /Daniel/i,
      /Serena/i,
      /Karen/i,
      /Natural/i,
      /Neural/i,
      /Online/i
    ];

    for (const pattern of humanVoicePatterns) {
      const match = voices.find(v => pattern.test(v.name) && (v.lang.startsWith("en") || preferredLang.startsWith("en")));
      if (match) return match;
    }

    // Fallback 1: Clean en-US or en-GB voice
    const cleanEnglish = voices.find(v => 
      (v.lang.includes("en-US") || v.lang.includes("en-GB") || v.lang.startsWith("en")) && 
      !/Zira|David Desktop/i.test(v.name)
    );
    if (cleanEnglish) return cleanEnglish;

    // Fallback 2: Any English voice
    return voices.find(v => v.lang.startsWith("en")) || voices[0] || null;
  },

  speakLikePerson(text, options = {}) {
    if (!('speechSynthesis' in window)) {
      this.showToast("Speech synthesis not supported in this browser", "info");
      return;
    }

    const {
      lang = "en-US",
      rate = 0.94,       // Natural human conversational pace
      pitch = 1.02,      // Warm, natural pitch
      volume = 1.0,
      activeElement = null,
      onStart = null,
      onEnd = null
    } = options;

    window.speechSynthesis.cancel(); // Stop any overlapping speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    const naturalVoice = this.getNaturalHumanVoice(lang);
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    utterance.onstart = () => {
      if (activeElement) activeElement.classList.add("speaking");
      if (typeof onStart === "function") onStart();
    };

    utterance.onend = () => {
      if (activeElement) activeElement.classList.remove("speaking");
      if (typeof onEnd === "function") onEnd();
    };

    utterance.onerror = () => {
      if (activeElement) activeElement.classList.remove("speaking");
      if (typeof onEnd === "function") onEnd();
    };

    window.speechSynthesis.speak(utterance);
  },

  speakText(text, lang = "en-US") {
    this.speakLikePerson(text, { lang });
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

    let icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    if (type === "error") {
      icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    }
    if (type === "info") {
      icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `<span style="display:inline-flex; align-items:center;">${icon}</span> <span>${message}</span>`;
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
          <div class="welcome-voice-avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </div>
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
          <button class="btn btn-secondary btn-sm" id="replay-voice-btn" style="padding:0.4rem 0.85rem; font-size:0.85rem; font-weight:700; display:inline-flex; align-items:center; gap:0.4rem;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            <span>Hear Voice</span>
          </button>
          <button class="btn btn-sm" id="close-voice-banner" style="background:transparent; color:var(--text-muted); padding:0.3rem 0.5rem; display:inline-flex; align-items:center;" title="Dismiss">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
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
    const greeting = "Welcome to FluentPath! Your interactive portal for English communication and IELTS preparation. Let's make learning exciting today!";
    
    this.speakLikePerson(greeting, {
      activeElement: soundwave,
      rate: 0.94,
      pitch: 1.02
    });
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

/**
 * FluentPath - English Communication & IELTS Preparation
 * Main Global Controller & Utilities
 */

const FluentPath = {
  // Global voice state & settings
  currentSpeechSpeed: 1.0,
  isVoiceMuted: false,

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

  isKidsPage() {
    const path = (window.location.pathname || "").toLowerCase();
    const page = path.split("/").pop() || "";
    return page === "kids-learning.html" || path.includes("kids-learning");
  },

  init() {
    this.initTheme();
    if (this.isKidsPage()) {
      this.initVibeMesh();
      this.initCanvasBackground();
    }
    this.checkSession();
    this.initNavbar();
    this.updateUserUI();
    this.initAudioContext();
    this.initVoiceEngine();
    this.initGlobalVoiceWidget();
    this.initSelectionReader();
    this.initWelcomeVoice();
  },

  // Dynamic HTML5 Cartoon Interactive Background Engine
  initCanvasBackground() {
    if (!this.isKidsPage()) return;
    if (document.getElementById("fluent-bg-canvas")) return;

    const canvas = document.createElement("canvas");
    canvas.id = "fluent-bg-canvas";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, radius: 160 };

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    });

    let sparkleTrail = [];
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spawn cartoon mouse sparkle
      if (Math.random() < 0.45) {
        sparkleTrail.push({
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -Math.random() * 1.2 - 0.5,
          size: Math.random() * 8 + 4,
          life: 1.0,
          color: ["#f43f5e", "#06b6d4", "#a855f7", "#eab308", "#10b981"][Math.floor(Math.random() * 5)]
        });
      }
    });

    // 1. Cartoon Cloud Class
    class CartoonCloud {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = initial ? Math.random() * width : -180;
        this.y = Math.random() * (height * 0.45) + 30;
        this.scale = Math.random() * 0.5 + 0.6;
        this.speed = Math.random() * 0.35 + 0.15;
        this.alpha = Math.random() * 0.18 + 0.12;
      }
      update() {
        this.x += this.speed;
        if (this.x > width + 180) this.reset(false);
      }
      draw(isDark) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.fillStyle = isDark ? `rgba(148, 163, 184, ${this.alpha})` : `rgba(255, 255, 255, ${this.alpha * 1.8})`;
        ctx.beginPath();
        ctx.arc(0, 0, 30, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(25, -20, 35, Math.PI * 1.0, Math.PI * 1.85);
        ctx.arc(65, -15, 28, Math.PI * 1.3, Math.PI * 1.9);
        ctx.arc(90, 0, 25, Math.PI * 1.5, Math.PI * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    // 2. Cartoon Twinkling Star Class
    class CartoonStar {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 6 + 4;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.pulse = Math.random() * Math.PI;
        this.color = ["#facc15", "#38bdf8", "#f472b6", "#c084fc", "#4ade80"][Math.floor(Math.random() * 5)];
      }
      update() {
        this.rotation += this.rotSpeed;
        this.pulse += 0.03;
      }
      draw() {
        const alpha = Math.sin(this.pulse) * 0.25 + 0.35;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;

        // 4-point cartoon star
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const r = i % 2 === 0 ? this.size : this.size * 0.35;
          const a = (i * Math.PI) / 4;
          ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    // 3. Floating Cartoon Rainbow Bubble Class
    class CartoonBubble {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 40;
        this.radius = Math.random() * 16 + 8;
        this.speed = Math.random() * 0.5 + 0.3;
        this.sway = Math.random() * Math.PI * 2;
        this.color = ["#818cf8", "#f472b6", "#38bdf8", "#34d399", "#fbbf24"][Math.floor(Math.random() * 5)];
        this.alpha = Math.random() * 0.25 + 0.15;
      }
      update() {
        this.y -= this.speed;
        this.sway += 0.02;
        this.x += Math.sin(this.sway) * 0.4;
        if (this.y < -50) this.reset(false);
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Outer bubble sphere
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Glossy cartoon crescent reflection inside bubble
        ctx.beginPath();
        ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
        ctx.fill();

        ctx.restore();
      }
    }

    // 4. Cartoon Floating Emojis / Symbols (for Kids Corner & portal vibe)
    class CartoonFloatingIcon {
      constructor(emoji) {
        this.emoji = emoji;
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 50;
        this.speed = Math.random() * 0.4 + 0.25;
        this.size = Math.random() * 14 + 18;
        this.alpha = Math.random() * 0.35 + 0.25;
        this.sway = Math.random() * Math.PI * 2;
      }
      update() {
        this.y -= this.speed;
        this.sway += 0.015;
        this.x += Math.sin(this.sway) * 0.5;
        if (this.y < -60) this.reset(false);
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.font = `${this.size}px 'Plus Jakarta Sans', sans-serif`;
        ctx.fillText(this.emoji, this.x, this.y);
        ctx.restore();
      }
    }

    let clouds = [];
    let stars = [];
    let bubbles = [];
    let cartoonIcons = [];

    function initElements() {
      clouds = Array.from({ length: 6 }, () => new CartoonCloud());
      stars = Array.from({ length: 22 }, () => new CartoonStar());
      bubbles = Array.from({ length: 18 }, () => new CartoonBubble());

      const isKids = window.location.pathname.includes("kids-learning.html");
      const kidEmojis = ["⭐", "🎈", "🎵", "🎨", "🚀", "🐱", "🐶", "🐻", "🦄"];
      const generalEmojis = ["⭐", "✨", "🎵", "💡", "🚀"];
      const targetList = isKids ? kidEmojis : generalEmojis;
      cartoonIcons = targetList.map(e => new CartoonFloatingIcon(e));
    }

    initElements();

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute("data-theme") !== "light";

      // Ambient Cartoon Soft Gradient Orbs
      const time = Date.now() * 0.0005;
      const orb1X = width * 0.25 + Math.sin(time) * 100;
      const orb1Y = height * 0.3 + Math.cos(time * 0.8) * 80;
      const orb2X = width * 0.75 + Math.cos(time * 1.1) * 120;
      const orb2Y = height * 0.7 + Math.sin(time * 0.9) * 90;

      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, 340);
      grad1.addColorStop(0, isDark ? "rgba(99, 102, 241, 0.12)" : "rgba(129, 140, 248, 0.1)");
      grad1.addColorStop(1, "transparent");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 10, orb2X, orb2Y, 360);
      grad2.addColorStop(0, isDark ? "rgba(236, 72, 153, 0.1)" : "rgba(244, 114, 182, 0.08)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Cartoon Clouds
      clouds.forEach(cloud => {
        cloud.update();
        cloud.draw(isDark);
      });

      // Render Floating Cartoon Rainbow Bubbles
      bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });

      // Render Twinkling Cartoon Stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // Render Cartoon Floating Icons
      cartoonIcons.forEach(icon => {
        icon.update();
        icon.draw();
      });

      // Render Mouse Cursor Cartoon Sparkle Trail
      for (let i = sparkleTrail.length - 1; i >= 0; i--) {
        const s = sparkleTrail[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.025;

        if (s.life <= 0) {
          sparkleTrail.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = s.life * 0.75;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  },

  initVibeMesh() {
    if (!this.isKidsPage()) return;
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
    sessionStorage.clear();
    this.showToast("Logged out successfully. Starting new session.", "info");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 400);
  },

  // 3. Navigation Bar & Mobile Drawer with Classification Dropdowns
  initNavbar() {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    const mobileToggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle("active");
        mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        mobileToggle.innerHTML = isOpen ? "✕" : "☰";
      });

      // Close mobile navbar drawer when tapping outside
      document.addEventListener("click", (e) => {
        if (navLinks.classList.contains("active") && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
          navLinks.classList.remove("active");
          mobileToggle.innerHTML = "☰";
          mobileToggle.setAttribute("aria-expanded", "false");
        }
      });

      // Auto close drawer when clicking a navigation link
      const linksInside = navLinks.querySelectorAll("a:not([href='javascript:void(0)'])");
      linksInside.forEach(link => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 1250) {
            navLinks.classList.remove("active");
            mobileToggle.innerHTML = "☰";
            mobileToggle.setAttribute("aria-expanded", "false");
          }
        });
      });
    }

    // Dropdown toggling for mobile / click interaction
    const dropdowns = document.querySelectorAll(".nav-dropdown");
    dropdowns.forEach(drop => {
      const toggleBtn = drop.querySelector(".dropdown-toggle") || drop.querySelector(".nav-link");
      if (toggleBtn) {
        toggleBtn.addEventListener("click", (e) => {
          if (window.innerWidth <= 1250) {
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

  // 4. Dynamic User Profile & XP / Credits Updater
  updateUserUI() {
    const user = this.getUser() || this.defaultUser;

    const nameEls = document.querySelectorAll(".user-display-name");
    nameEls.forEach(el => (el.textContent = user.name));

    const xpEls = document.querySelectorAll(".user-xp-count");
    xpEls.forEach(el => (el.textContent = user.xp.toLocaleString()));

    const streakEls = document.querySelectorAll(".user-streak-count");
    streakEls.forEach(el => (el.textContent = `${user.streak} Days`));

    const creditEls = document.querySelectorAll(".user-credits-count");
    creditEls.forEach(el => (el.textContent = user.gameCredits));

    const bandEls = document.querySelectorAll(".user-band-score");
    bandEls.forEach(el => (el.textContent = user.currentBand));
  },

  addXP(amount, reason = "") {
    const user = this.getUser() || this.defaultUser;
    user.xp += amount;
    this.saveUser(user);
    this.showToast(`+${amount} XP ${reason ? "(" + reason + ")" : ""}`, "success");

    const soundwave = document.querySelector(".soundwave-container");
    if (soundwave) soundwave.classList.add("active");
    setTimeout(() => {
      if (soundwave) soundwave.classList.remove("active");
    }, 1200);
  },

  addGameCredits(amount, reason = "") {
    const user = this.getUser() || this.defaultUser;
    user.gameCredits = (user.gameCredits || 0) + amount;
    this.saveUser(user);
    this.showToast(`+${amount} Credits ${reason ? "(" + reason + ")" : ""}`, "info");
  },

  // 5. Audio Synthesizer Beeps (Web Audio API)
  audioCtx: null,

  initAudioContext() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  },

  playClickBeep() {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      const ctx = this.audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Ignore audio failure
    }
  },

  playSuccessChime() {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {
      // Ignore audio failure
    }
  },

  // 6. Speech Synthesis - Perfect Dynamic Natural Human Voice Engine
  initVoiceEngine() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.getNaturalHumanVoice();
      };
    }
  },

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

    if (this.isVoiceMuted && !options.ignoreMute) {
      this.showToast("Voice is currently muted in Assistant Bar", "info");
      return;
    }

    const {
      lang = "en-US",
      rate = this.currentSpeechSpeed || 0.95,
      pitch = 1.02,
      volume = 1.0,
      activeElement = null,
      onStart = null,
      onEnd = null
    } = options;

    window.speechSynthesis.cancel(); // Clear queued speech

    const cleanText = text.replace(/<[^>]*>/g, "").trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    const naturalVoice = this.getNaturalHumanVoice(lang);
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    const widgetToggle = document.querySelector(".voice-widget-toggle");

    utterance.onstart = () => {
      if (activeElement) activeElement.classList.add("speaking");
      if (widgetToggle) widgetToggle.classList.add("speaking");
      if (typeof onStart === "function") onStart();
    };

    utterance.onend = () => {
      if (activeElement) activeElement.classList.remove("speaking");
      if (widgetToggle) widgetToggle.classList.remove("speaking");
      if (typeof onEnd === "function") onEnd();
    };

    utterance.onerror = () => {
      if (activeElement) activeElement.classList.remove("speaking");
      if (widgetToggle) widgetToggle.classList.remove("speaking");
      if (typeof onEnd === "function") onEnd();
    };

    window.speechSynthesis.speak(utterance);
  },

  speakText(text, lang = "en-US") {
    this.speakLikePerson(text, { lang });
    this.showToast(`Pronouncing: "${text.substring(0, 30)}${text.length > 30 ? '...' : ''}"`, "info");
  },

  readCurrentPageSummary() {
    const heading = document.querySelector("h1") || document.querySelector("h2");
    const leadParam = document.querySelector(".hero-subtitle") || document.querySelector("p");
    
    let summaryText = "";
    if (heading) summaryText += heading.textContent.trim() + ". ";
    if (leadParam) summaryText += leadParam.textContent.trim();

    if (!summaryText) summaryText = "Welcome to FluentPath English Learning Portal!";

    this.showToast("Reading page summary out loud...", "info");
    this.speakLikePerson(summaryText, { ignoreMute: true });
  },

  // Global Dynamic Voice Floating Assistant Widget across ALL pages
  initGlobalVoiceWidget() {
    if (document.getElementById("global-voice-assistant")) return;

    const widget = document.createElement("div");
    widget.id = "global-voice-assistant";
    widget.className = "global-voice-widget";
    widget.innerHTML = `
      <button class="voice-widget-toggle" id="voice-widget-toggle-btn" title="Toggle Voice Assistant Controls">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
      </button>
      <div class="voice-widget-body" id="voice-widget-body-box">
        <button class="voice-btn-pill" id="voice-read-page-btn" title="Listen to Page Overview">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>Read Page</span>
        </button>
        <button class="voice-btn-pill" id="voice-speed-toggle-btn" title="Change Speech Speed">
          <span>Speed: 1.0x</span>
        </button>
        <button class="voice-btn-pill" id="voice-mute-toggle-btn" title="Toggle Mute Voice">
          <span>🔊 Voice ON</span>
        </button>
        <div class="soundwave-container" id="global-widget-soundwave" style="margin-left: 2px;">
          <div class="soundwave-bar"></div>
          <div class="soundwave-bar"></div>
          <div class="soundwave-bar"></div>
          <div class="soundwave-bar"></div>
          <div class="soundwave-bar"></div>
        </div>
      </div>
    `;

    document.body.appendChild(widget);

    const toggleBtn = widget.querySelector("#voice-widget-toggle-btn");
    const readBtn = widget.querySelector("#voice-read-page-btn");
    const speedBtn = widget.querySelector("#voice-speed-toggle-btn");
    const muteBtn = widget.querySelector("#voice-mute-toggle-btn");

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      widget.classList.toggle("expanded");
    });

    readBtn.addEventListener("click", () => {
      this.readCurrentPageSummary();
    });

    const speeds = [0.8, 1.0, 1.25];
    let speedIdx = 1;
    speedBtn.addEventListener("click", () => {
      speedIdx = (speedIdx + 1) % speeds.length;
      this.currentSpeechSpeed = speeds[speedIdx];
      speedBtn.querySelector("span").textContent = `Speed: ${this.currentSpeechSpeed}x`;
      this.showToast(`Speech speed set to ${this.currentSpeechSpeed}x`, "info");
    });

    muteBtn.addEventListener("click", () => {
      this.isVoiceMuted = !this.isVoiceMuted;
      if (this.isVoiceMuted && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      muteBtn.querySelector("span").textContent = this.isVoiceMuted ? "🔇 Muted" : "🔊 Voice ON";
      muteBtn.style.color = this.isVoiceMuted ? "var(--vibe-pink, #f43f5e)" : "var(--text-main)";
      this.showToast(this.isVoiceMuted ? "Voice audio muted" : "Voice audio active", "info");
    });

    // Close expanded widget when clicking outside
    document.addEventListener("click", (e) => {
      if (!widget.contains(e.target)) {
        widget.classList.remove("expanded");
      }
    });
  },

  // Dynamic Text Selection Reader (Highlight text on ANY page to listen)
  initSelectionReader() {
    let popover = null;

    const removePopover = () => {
      if (popover && popover.parentNode) {
        popover.parentNode.removeChild(popover);
        popover = null;
      }
    };

    document.addEventListener("mouseup", (e) => {
      if (popover && popover.contains(e.target)) return;

      const selection = window.getSelection();
      const selectedText = selection ? selection.toString().trim() : "";

      if (selectedText.length >= 3 && selectedText.length < 500) {
        removePopover();

        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        popover = document.createElement("div");
        popover.className = "selection-speak-popover";
        popover.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          <span>Speak Selection</span>
        `;

        popover.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
        popover.style.top = `${rect.top + window.scrollY}px`;

        popover.addEventListener("click", (evt) => {
          evt.stopPropagation();
          this.speakLikePerson(selectedText, { ignoreMute: true });
          removePopover();
        });

        document.body.appendChild(popover);
      } else {
        removePopover();
      }
    });

    document.addEventListener("mousedown", (e) => {
      if (popover && !popover.contains(e.target)) {
        removePopover();
      }
    });
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
  getPageGreeting() {
    const page = window.location.pathname.split("/").pop() || "index.html";
    const greetings = {
      "index.html": "Welcome to FluentPath! Enter your Student ID to start your learning journey!",
      "dashboard.html": "Welcome back to your Student Dashboard! Check your daily streak, band score trajectory, and recommended lessons.",
      "kids-learning.html": "Welcome to Kids Corner! Let's learn phonics, alphabet games, rhymes, and stories together!",
      "adult-tasks.html": "Welcome to the Adult Tasks Hub! Master diplomatic dilemmas, fast tongue twisters, and 60-second idiom blitz.",
      "speaking.html": "Welcome to the Speaking Practice Lab! Record your voice and receive instant pronunciation feedback.",
      "levels.html": "Welcome to the Duolingo-style Learning Path! Choose a level and start your interactive challenge.",
      "vocabulary.html": "Welcome to Vocabulary Booster! Expand your lexical resource with academic and topic-based words.",
      "grammar.html": "Welcome to Grammar Mastery! Master complex tenses, articles, and sentence structures.",
      "grammar-detail.html": "Welcome to Grammar Lessons! Study detailed rules and test your knowledge.",
      "reading.html": "Welcome to IELTS Reading Mastery! Practice speed reading, skimming, and comprehension.",
      "writing.html": "Welcome to IELTS Writing Assistant! Practice Task 1 charts and Task 2 essays with instant AI scoring.",
      "listening.html": "Welcome to Listening Practice! Listen to dialogues and test your retention.",
      "ielts-speaking.html": "Welcome to IELTS Speaking Exam Simulation! Practice Part 1, Part 2 cue cards, and Part 3 discussion.",
      "daily-challenge.html": "Welcome to Daily Quest Challenge! Complete today's targets to earn bonus XP and credits.",
      "mocktest.html": "Welcome to IELTS Full Mock Exam! Test your skills under timed exam conditions.",
      "progress.html": "Welcome to Progress Analytics! Review your band score growth and study activity.",
      "profile.html": "Welcome to Your Student Profile! Customize your settings and track your badges.",
      "about.html": "Welcome to About FluentPath! Learn more about our English training methodology.",
      "contact.html": "Welcome to Contact Us! We are here to support your learning journey."
    };
    return greetings[page] || "Welcome to FluentPath English Learning Portal!";
  },

  initWelcomeVoice() {
    const mainContainer = document.querySelector(".main-content .container") || document.querySelector(".auth-card") || document.querySelector(".container");
    if (mainContainer && !document.getElementById("welcome-voice-banner")) {
      const banner = document.createElement("div");
      banner.id = "welcome-voice-banner";
      banner.className = "welcome-voice-banner";
      const greetingMsg = this.getPageGreeting();
      banner.innerHTML = `
        <div class="welcome-voice-left">
          <div class="welcome-voice-avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </div>
          <div>
            <div class="welcome-voice-text">
              <span>${greetingMsg}</span>
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

    // Play greeting audio automatically after brief delay
    setTimeout(() => {
      this.playWelcomeVoice();
    }, 600);

    // Fallback gesture listener if browser blocks autoplay audio until user interaction
    const handleFirstGesture = () => {
      this.playWelcomeVoice();
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
    const page = window.location.pathname.split("/").pop() || "index.html";
    const lastSpokenPage = sessionStorage.getItem("fluentpath_last_spoken_page");
    
    if (!force && lastSpokenPage === page) return;
    sessionStorage.setItem("fluentpath_last_spoken_page", page);

    const soundwave = document.getElementById("welcome-soundwave");
    const greeting = this.getPageGreeting();
    
    const isKidsPage = page === "kids-learning.html";

    this.speakLikePerson(greeting, {
      activeElement: soundwave,
      rate: isKidsPage ? 0.96 : 0.94,
      pitch: isKidsPage ? 1.18 : 1.02,
      ignoreMute: force || isKidsPage
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

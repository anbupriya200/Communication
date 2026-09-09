/**
 * FluentPath - Speaking Practice Engine (js/speaking.js)
 */

const speakingTopics = [
  {
    id: 1,
    category: "Personal Experience",
    title: "Describe your favorite hobby.",
    prompts: [
      "What is the hobby and how long have you been doing it?",
      "Why did you start and how often do you practice?",
      "Explain why you enjoy it and how it makes you feel."
    ]
  },
  {
    id: 2,
    category: "Travel & Places",
    title: "Describe a memorable journey you took.",
    prompts: [
      "Where did you go and who traveled with you?",
      "What mode of transport did you use?",
      "Describe an unexpected event or what made the trip unforgettable."
    ]
  },
  {
    id: 3,
    category: "Technology",
    title: "Discuss how artificial intelligence influences daily life.",
    prompts: [
      "In what areas of daily life do you see AI most?",
      "What are the primary benefits and potential drawbacks?",
      "Do you think AI will replace human jobs in your field?"
    ]
  },
  {
    id: 4,
    category: "Society & Culture",
    title: "Describe an important traditional festival in your country.",
    prompts: [
      "When does it take place and what is its significance?",
      "How do people prepare and celebrate it?",
      "Why is this festival cherished by younger generations?"
    ]
  },
  {
    id: 5,
    category: "Education & Career",
    title: "Describe an inspiring teacher or mentor who influenced you.",
    prompts: [
      "Who was this person and when did you meet them?",
      "What specific qualities made them stand out?",
      "How did their guidance shape your goals and character?"
    ]
  }
];

class SpeakingPracticeApp {
  constructor() {
    this.currentTopicIndex = 0;
    this.selectedDuration = 60; // default 1-minute
    this.timer = null;
    this.isRecording = false;
    this.history = JSON.parse(localStorage.getItem("fluentpath_speaking_history") || "[]");
    this.audioAnimId = null;
  }

  init() {
    this.setupTopic();
    this.setupDurationButtons();
    this.renderHistory();
    this.setupCanvas();
  }

  setupTopic() {
    const topic = speakingTopics[this.currentTopicIndex];
    const categoryEl = document.getElementById("topic-category");
    const titleEl = document.getElementById("topic-title");
    const promptsList = document.getElementById("topic-prompts");

    if (categoryEl) categoryEl.textContent = topic.category;
    if (titleEl) titleEl.textContent = topic.title;
    if (promptsList) {
      promptsList.innerHTML = topic.prompts.map(p => `<li>• ${p}</li>`).join("");
    }
  }

  generateRandomTopic() {
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * speakingTopics.length);
    } while (nextIdx === this.currentTopicIndex && speakingTopics.length > 1);

    this.currentTopicIndex = nextIdx;
    this.setupTopic();
    FluentPath.playClickBeep();
    FluentPath.showToast("New speaking topic generated!", "info");
  }

  setupDurationButtons() {
    const btns = document.querySelectorAll(".duration-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.isRecording) return;
        btns.forEach(b => b.classList.remove("active", "btn-primary"));
        btn.classList.add("active", "btn-primary");
        this.selectedDuration = parseInt(btn.dataset.duration, 10);
        this.updateTimerDisplay(this.selectedDuration, FluentTimer.formatTime(this.selectedDuration), 100);
      });
    });
    this.updateTimerDisplay(this.selectedDuration, FluentTimer.formatTime(this.selectedDuration), 100);
  }

  updateTimerDisplay(remaining, formattedTime, percent) {
    const display = document.getElementById("timer-display");
    const progressCircle = document.getElementById("timer-progress-ring");
    
    if (display) display.textContent = formattedTime;

    if (progressCircle) {
      const circumference = 502; // 2 * PI * 80
      const offset = circumference - (percent / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;

      if (remaining <= 10) {
        progressCircle.style.stroke = "var(--accent-rose)";
      } else if (remaining <= 20) {
        progressCircle.style.stroke = "var(--accent-amber)";
      } else {
        progressCircle.style.stroke = "var(--primary)";
      }
    }
  }

  startPractice() {
    if (this.isRecording) return;
    this.isRecording = true;

    const startBtn = document.getElementById("start-practice-btn");
    const finishBtn = document.getElementById("finish-practice-btn");
    const statusText = document.getElementById("recording-status");

    if (startBtn) startBtn.style.display = "none";
    if (finishBtn) finishBtn.style.display = "inline-flex";
    if (statusText) {
      statusText.innerHTML = `<span class="spinner" style="width: 12px; height: 12px; border-width: 2px;"></span> <span style="color: var(--accent-rose); font-weight: 700;">Recording in progress... Speak clearly!</span>`;
    }

    this.startWaveformAnimation();

    this.timer = new FluentTimer({
      durationSeconds: this.selectedDuration,
      mode: "countdown",
      onTick: (remaining, formatted, percent) => {
        this.updateTimerDisplay(remaining, formatted, percent);
      },
      onComplete: () => {
        this.finishPractice(true);
      }
    });

    this.timer.start();
    FluentPath.playClickBeep();
  }

  finishPractice(auto = false) {
    if (!this.isRecording) return;
    this.isRecording = false;

    if (this.timer) {
      this.timer.stop();
    }

    this.stopWaveformAnimation();

    const startBtn = document.getElementById("start-practice-btn");
    const finishBtn = document.getElementById("finish-practice-btn");
    const statusText = document.getElementById("recording-status");

    if (startBtn) startBtn.style.display = "inline-flex";
    if (finishBtn) finishBtn.style.display = "none";
    if (statusText) {
      statusText.innerHTML = `✅ Challenge Completed! Excellent practice session.`;
    }

    // Save to practice history
    const topic = speakingTopics[this.currentTopicIndex];
    const session = {
      id: Date.now(),
      topic: topic.title,
      duration: `${this.selectedDuration} seconds`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
      practiceBand: "6.5"
    };

    this.history.unshift(session);
    if (this.history.length > 5) this.history.pop();
    localStorage.setItem("fluentpath_speaking_history", JSON.stringify(this.history));

    // Award XP
    const user = FluentPath.getUser();
    if (user) {
      user.xp = (user.xp || 1850) + 50;
      FluentPath.saveUser(user);
    }

    this.renderHistory();
    FluentPath.playSuccessChime();
    FluentPath.showToast("Speaking Practice Recorded! +50 XP", "success");
  }

  renderHistory() {
    const list = document.getElementById("speaking-history-list");
    if (!list) return;

    if (!this.history.length) {
      list.innerHTML = `<li style="color: var(--text-muted); font-size: 0.9rem;">No recorded speaking sessions yet. Click "Start Practice" to begin!</li>`;
      return;
    }

    list.innerHTML = this.history.map(item => `
      <li style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.85rem 1rem;
        background: var(--bg-surface);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        margin-bottom: 0.5rem;
      ">
        <div>
          <strong style="color: var(--text-main); font-size: 0.925rem; display: block;">${item.topic}</strong>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${item.date} • ${item.duration}</span>
        </div>
        <span class="badge badge-emerald">Estimated Band ${item.practiceBand}</span>
      </li>
    `).join("");
  }

  setupCanvas() {
    this.canvas = document.getElementById("mic-visualizer-canvas");
    if (this.canvas) {
      this.ctx = this.canvas.getContext("2d");
      this.drawIdleWaveform();
    }
  }

  drawIdleWaveform() {
    if (!this.ctx || !this.canvas) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    this.ctx.clearRect(0, 0, w, h);
    this.ctx.beginPath();
    this.ctx.moveTo(0, h / 2);
    this.ctx.lineTo(w, h / 2);
    this.ctx.strokeStyle = "rgba(100, 116, 139, 0.4)";
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  startWaveformAnimation() {
    if (!this.canvas || !this.ctx) return;
    let step = 0;

    const animate = () => {
      step += 0.08;
      const w = this.canvas.width;
      const h = this.canvas.height;
      this.ctx.clearRect(0, 0, w, h);

      // Draw active colorful sine wave
      this.ctx.beginPath();
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "rgba(79, 70, 229, 0.85)";

      for (let x = 0; x < w; x++) {
        const y = h / 2 + Math.sin(x * 0.05 + step) * 18 * Math.sin(step * 0.4);
        if (x === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();

      // Secondary wave
      this.ctx.beginPath();
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = "rgba(124, 58, 237, 0.5)";
      for (let x = 0; x < w; x++) {
        const y = h / 2 + Math.cos(x * 0.03 - step) * 12;
        if (x === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.stroke();

      this.audioAnimId = requestAnimationFrame(animate);
    };

    animate();
  }

  stopWaveformAnimation() {
    if (this.audioAnimId) {
      cancelAnimationFrame(this.audioAnimId);
      this.audioAnimId = null;
    }
    this.drawIdleWaveform();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.speakingApp = new SpeakingPracticeApp();
  speakingApp.init();
});

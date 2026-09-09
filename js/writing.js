/**
 * FluentPath - IELTS Writing Simulator & Visualizer (js/writing.js)
 */

class WritingSimulator {
  constructor() {
    this.currentTask = 1; // Task 1 or Task 2
    this.task1Type = "line";
    this.task2Type = "opinion";
    this.targetWords = 150;
    this.timer = null;
    this.timerSeconds = 0;
  }

  init() {
    this.setupTaskTabs();
    this.setupTask1Subtypes();
    this.setupTask2Subtypes();
    this.setupEditor();
    this.startTimer();
    this.renderTask1Chart();
    this.loadSavedDraft();
  }

  setupTaskTabs() {
    const taskTabs = document.querySelectorAll(".task-tab-btn");
    taskTabs.forEach(btn => {
      btn.addEventListener("click", () => {
        taskTabs.forEach(b => b.classList.remove("active", "btn-primary"));
        btn.classList.add("active", "btn-primary");
        this.currentTask = parseInt(btn.dataset.task, 10);
        this.targetWords = this.currentTask === 1 ? 150 : 250;
        this.switchTaskView();
      });
    });
  }

  switchTaskView() {
    const task1Section = document.getElementById("task1-controls");
    const task2Section = document.getElementById("task2-controls");
    const targetBadge = document.getElementById("target-words-badge");

    if (this.currentTask === 1) {
      if (task1Section) task1Section.style.display = "block";
      if (task2Section) task2Section.style.display = "none";
      if (targetBadge) targetBadge.textContent = "Target: 150+ Words";
      this.renderTask1Chart();
    } else {
      if (task1Section) task1Section.style.display = "none";
      if (task2Section) task2Section.style.display = "block";
      if (targetBadge) targetBadge.textContent = "Target: 250+ Words";
    }
    this.updateWordCount();
  }

  setupTask1Subtypes() {
    const btns = document.querySelectorAll(".task1-type-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        btns.forEach(b => b.classList.remove("active", "btn-primary"));
        btn.classList.add("active", "btn-primary");
        this.task1Type = btn.dataset.chart;
        this.renderTask1Chart();
      });
    });
  }

  setupTask2Subtypes() {
    const select = document.getElementById("task2-type-select");
    if (select) {
      select.addEventListener("change", (e) => {
        this.task2Type = e.target.value;
        this.updateTask2Prompt();
      });
    }
  }

  updateTask2Prompt() {
    const promptEl = document.getElementById("task2-prompt-display");
    const prompts = {
      opinion: "Some people believe that universities should focus exclusively on providing graduates with job skills, while others believe that the primary goal of higher education is wider academic knowledge. What is your opinion?",
      discussion: "Some people argue that technological progress makes humans more isolated, while others maintain that it brings global communities closer together. Discuss both views and give your own opinion.",
      advantages: "In many countries around the world, more and more people choose to live alone. Do the advantages of this trend outweigh the disadvantages?",
      problem: "In many modern cities, traffic congestion is worsening each year. What are the causes of this issue, and what solutions can governments implement?",
      twopart: "Happiness is considered essential to human welfare. Why is happiness difficult to define? What factors are crucial in achieving happiness?"
    };

    if (promptEl) {
      promptEl.textContent = prompts[this.task2Type] || prompts.opinion;
    }
  }

  renderTask1Chart() {
    const canvas = document.getElementById("task1-chart-canvas");
    const promptEl = document.getElementById("task1-prompt-display");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const textCol = isDark ? "#cbd5e1" : "#334155";
    const gridCol = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";

    if (this.task1Type === "line") {
      if (promptEl) promptEl.textContent = "The line graph shows the percentage of households with internet access across three countries between 2000 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.";
      
      // Draw grid
      ctx.strokeStyle = gridCol;
      ctx.lineWidth = 1;
      for (let y = 50; y <= 240; y += 40) {
        ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(w - 30, y); ctx.stroke();
      }

      // Line 1: Country A
      ctx.strokeStyle = "#4f46e5";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(80, 220);
      ctx.lineTo(180, 190);
      ctx.lineTo(280, 140);
      ctx.lineTo(380, 90);
      ctx.lineTo(480, 60);
      ctx.stroke();

      // Line 2: Country B
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(80, 240);
      ctx.lineTo(180, 210);
      ctx.lineTo(280, 180);
      ctx.lineTo(380, 130);
      ctx.lineTo(480, 100);
      ctx.stroke();

      // Labels
      ctx.fillStyle = textCol;
      ctx.font = "12px sans-serif";
      ctx.fillText("2000", 70, 260);
      ctx.fillText("2005", 170, 260);
      ctx.fillText("2010", 270, 260);
      ctx.fillText("2018", 370, 260);
      ctx.fillText("2024", 470, 260);

      // Legend
      ctx.fillStyle = "#4f46e5"; ctx.fillRect(100, 20, 15, 10);
      ctx.fillStyle = textCol; ctx.fillText("Country A", 125, 29);
      ctx.fillStyle = "#10b981"; ctx.fillRect(220, 20, 15, 10);
      ctx.fillStyle = textCol; ctx.fillText("Country B", 245, 29);

    } else if (this.task1Type === "bar") {
      if (promptEl) promptEl.textContent = "The bar chart shows the average monthly expenditure on food, rent, and leisure in four major cities in 2024.";
      
      const cities = ["London", "New York", "Tokyo", "Sydney"];
      const valsA = [140, 170, 120, 135];
      const valsB = [180, 220, 160, 170];

      cities.forEach((city, i) => {
        const x = 90 + i * 110;
        // Bar A
        ctx.fillStyle = "#4f46e5";
        ctx.fillRect(x, 240 - valsA[i], 30, valsA[i]);
        // Bar B
        ctx.fillStyle = "#7c3aed";
        ctx.fillRect(x + 35, 240 - valsB[i], 30, valsB[i]);

        ctx.fillStyle = textCol;
        ctx.font = "12px sans-serif";
        ctx.fillText(city, x + 10, 260);
      });

      // Legend
      ctx.fillStyle = "#4f46e5"; ctx.fillRect(120, 18, 15, 10);
      ctx.fillStyle = textCol; ctx.fillText("Rent", 145, 27);
      ctx.fillStyle = "#7c3aed"; ctx.fillRect(220, 18, 15, 10);
      ctx.fillStyle = textCol; ctx.fillText("Food & Dining", 245, 27);

    } else if (this.task1Type === "pie") {
      if (promptEl) promptEl.textContent = "The pie charts illustrate the primary sources of electricity generation in a European country in 2010 and 2024.";

      const drawPie = (centerX, centerY, title, data, colors) => {
        let startAngle = 0;
        const total = data.reduce((a, b) => a + b, 0);
        data.forEach((val, idx) => {
          const sliceAngle = (val / total) * 2 * Math.PI;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.arc(centerX, centerY, 65, startAngle, startAngle + sliceAngle);
          ctx.closePath();
          ctx.fillStyle = colors[idx];
          ctx.fill();
          startAngle += sliceAngle;
        });

        ctx.fillStyle = textCol;
        ctx.font = "bold 13px sans-serif";
        ctx.fillText(title, centerX - 25, centerY + 85);
      };

      drawPie(160, 110, "Year 2010", [45, 30, 25], ["#4f46e5", "#f59e0b", "#10b981"]);
      drawPie(380, 110, "Year 2024", [20, 35, 45], ["#4f46e5", "#f59e0b", "#10b981"]);

      // Legend
      ctx.fillStyle = "#4f46e5"; ctx.fillRect(140, 240, 12, 10);
      ctx.fillStyle = textCol; ctx.fillText("Fossil Fuels", 160, 249);
      ctx.fillStyle = "#f59e0b"; ctx.fillRect(250, 240, 12, 10);
      ctx.fillStyle = textCol; ctx.fillText("Nuclear", 270, 249);
      ctx.fillStyle = "#10b981"; ctx.fillRect(340, 240, 12, 10);
      ctx.fillStyle = textCol; ctx.fillText("Renewables", 360, 249);

    } else {
      // Process / Map / Table fallback schematic
      if (promptEl) promptEl.textContent = "The diagram illustrates the industrial process of recycled plastic bottle conversion into textile fleece garments.";
      ctx.fillStyle = textCol;
      ctx.font = "14px sans-serif";
      
      const steps = ["1. Sorting", "2. Shredding", "3. Melting", "4. Spinning", "5. Weaving"];
      steps.forEach((step, i) => {
        const x = 35 + i * 100;
        ctx.fillStyle = isDark ? "#1e293b" : "#f1f5f9";
        ctx.fillRect(x, 100, 80, 50);
        ctx.strokeStyle = "#4f46e5";
        ctx.strokeRect(x, 100, 80, 50);
        
        ctx.fillStyle = textCol;
        ctx.font = "12px sans-serif";
        ctx.fillText(step, x + 8, 130);

        if (i < 4) {
          ctx.fillStyle = "#7c3aed";
          ctx.fillText("➔", x + 85, 130);
        }
      });
    }
  }

  setupEditor() {
    const textarea = document.getElementById("essay-textarea");
    if (textarea) {
      textarea.addEventListener("input", () => {
        this.updateWordCount();
      });
    }

    const saveBtn = document.getElementById("save-draft-btn");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => this.saveDraft());
    }

    const submitBtn = document.getElementById("submit-essay-btn");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => this.submitEssay());
    }
  }

  updateWordCount() {
    const textarea = document.getElementById("essay-textarea");
    const counterEl = document.getElementById("word-counter-value");
    const progressEl = document.getElementById("word-count-progress");

    if (!textarea || !counterEl) return;

    const text = textarea.value.trim();
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    counterEl.textContent = words;

    const percent = Math.min(100, (words / this.targetWords) * 100);
    if (progressEl) {
      progressEl.style.width = `${percent}%`;
      if (words >= this.targetWords) {
        progressEl.className = "progress-bar-fill emerald";
      } else {
        progressEl.className = "progress-bar-fill";
      }
    }
  }

  startTimer() {
    const timerDisplay = document.getElementById("writing-timer-display");
    setInterval(() => {
      this.timerSeconds++;
      if (timerDisplay) {
        timerDisplay.textContent = FluentTimer.formatTime(this.timerSeconds);
      }
    }, 1000);
  }

  saveDraft() {
    const textarea = document.getElementById("essay-textarea");
    if (!textarea) return;
    const draftKey = `fluentpath_writing_draft_task_${this.currentTask}`;
    localStorage.setItem(draftKey, textarea.value);
    FluentPath.playClickBeep();
    FluentPath.showToast("Draft saved successfully!", "info");
  }

  loadSavedDraft() {
    const textarea = document.getElementById("essay-textarea");
    if (!textarea) return;
    const draftKey = `fluentpath_writing_draft_task_${this.currentTask}`;
    const saved = localStorage.getItem(draftKey);
    if (saved) {
      textarea.value = saved;
      this.updateWordCount();
    }
  }

  submitEssay() {
    const textarea = document.getElementById("essay-textarea");
    if (!textarea) return;
    const text = textarea.value.trim();
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;

    if (words < 40) {
      FluentPath.showToast("Please write more content before submitting for feedback!", "error");
      return;
    }

    const modal = document.getElementById("feedback-modal");
    if (modal) {
      modal.classList.add("active");
      FluentPath.playSuccessChime();

      // Award XP
      const user = FluentPath.getUser();
      if (user) {
        user.xp = (user.xp || 1850) + 75;
        FluentPath.saveUser(user);
      }
    }
  }

  closeModal() {
    const modal = document.getElementById("feedback-modal");
    if (modal) {
      modal.classList.remove("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.writingApp = new WritingSimulator();
  writingApp.init();
});

/**
 * FluentPath - Interactive Quiz Engine (js/quiz.js)
 */

class QuizEngine {
  constructor(containerId, questions, options = {}) {
    this.container = document.getElementById(containerId);
    this.questions = questions || [];
    this.currentIndex = 0;
    this.userAnswers = {};
    this.isSubmitted = false;
    this.onAnswerChange = options.onAnswerChange || null;
    this.onSubmit = options.onSubmit || null;
    this.title = options.title || "Practice Quiz";
    this.sectionName = options.sectionName || "General";
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  render() {
    if (!this.questions.length) {
      this.container.innerHTML = `<div class="card"><p>No questions available.</p></div>`;
      return;
    }

    const q = this.questions[this.currentIndex];
    const total = this.questions.length;
    const answeredCount = Object.keys(this.userAnswers).length;

    let html = `
      <div class="card quiz-card">
        <div class="card-header">
          <span class="badge badge-primary">Question ${this.currentIndex + 1} of ${total}</span>
          <span class="badge ${answeredCount === total ? 'badge-emerald' : 'badge-neutral'}">
            ${answeredCount}/${total} Answered
          </span>
        </div>

        <div class="quiz-question-body" style="margin-bottom: 1.5rem;">
          <h3 style="margin-bottom: 0.75rem; font-size: 1.15rem;">${q.question}</h3>
          ${q.instruction ? `<p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem;"><em>${q.instruction}</em></p>` : ''}
          <div class="quiz-options-list">
    `;

    if (q.type === "mcq" || q.type === "tfng") {
      q.options.forEach((opt, idx) => {
        const isChecked = this.userAnswers[this.currentIndex] === idx;
        const optLetter = String.fromCharCode(65 + idx);
        html += `
          <label class="quiz-option-label ${isChecked ? 'selected' : ''}" style="
            display: flex;
            align-items: center;
            gap: 0.85rem;
            padding: 0.85rem 1.1rem;
            margin-bottom: 0.65rem;
            border-radius: var(--radius-md);
            border: 1px solid ${isChecked ? 'var(--primary)' : 'var(--border-color)'};
            background: ${isChecked ? 'var(--primary-light)' : 'var(--bg-surface)'};
            cursor: pointer;
            transition: all 0.15s ease;
          ">
            <input type="radio" name="q_${this.currentIndex}" value="${idx}" ${isChecked ? 'checked' : ''} 
              style="accent-color: var(--primary);"
              onchange="quizApp.selectOption(${this.currentIndex}, ${idx})" />
            <span style="font-weight: 700; color: var(--primary);">${optLetter}.</span>
            <span style="color: var(--text-main); font-size: 0.95rem;">${opt}</span>
          </label>
        `;
      });
    } else if (q.type === "blank") {
      const currentVal = this.userAnswers[this.currentIndex] || "";
      html += `
        <div class="form-group" style="margin-top: 1rem;">
          <label class="form-label">Type your answer below:</label>
          <input type="text" class="form-control" value="${currentVal}" placeholder="Enter word or phrase..."
            oninput="quizApp.fillBlank(${this.currentIndex}, this.value)" style="font-size: 1.05rem;" />
        </div>
      `;
    }

    html += `
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" onclick="quizApp.prevQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ← Previous
          </button>
          <div style="display: flex; gap: 0.5rem;">
            ${this.currentIndex < total - 1 
              ? `<button class="btn btn-primary btn-sm" onclick="quizApp.nextQuestion()">Next Question →</button>`
              : `<button class="btn btn-emerald" onclick="quizApp.submitQuiz()">Submit Assessment 🎉</button>`
            }
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }

  selectOption(qIndex, optionIndex) {
    this.userAnswers[qIndex] = optionIndex;
    if (window.FluentPath) window.FluentPath.playClickBeep();
    if (this.onAnswerChange) this.onAnswerChange(this.userAnswers);
    this.render();
  }

  fillBlank(qIndex, text) {
    this.userAnswers[qIndex] = text.trim();
    if (this.onAnswerChange) this.onAnswerChange(this.userAnswers);
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.render();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
    }
  }

  jumpTo(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      this.render();
    }
  }

  evaluate() {
    let correctCount = 0;
    const details = [];

    this.questions.forEach((q, i) => {
      let isCorrect = false;
      const userAns = this.userAnswers[i];

      if (q.type === "blank") {
        if (typeof userAns === "string" && userAns.toLowerCase() === String(q.correctAnswer).toLowerCase().trim()) {
          isCorrect = true;
        }
      } else {
        if (userAns === q.correctAnswer) {
          isCorrect = true;
        }
      }

      if (isCorrect) correctCount++;

      details.push({
        questionNumber: i + 1,
        question: q.question,
        userAnswer: userAns !== undefined ? (q.options ? q.options[userAns] : userAns) : "Not answered",
        correctAnswer: q.options ? q.options[q.correctAnswer] : q.correctAnswer,
        explanation: q.explanation || "Standard exam answer verification.",
        isCorrect
      });
    });

    const total = this.questions.length;
    const accuracy = Math.round((correctCount / total) * 100);

    // Approximate IELTS band based on accuracy
    let practiceBand = 5.0;
    if (accuracy >= 90) practiceBand = 8.5;
    else if (accuracy >= 80) practiceBand = 7.5;
    else if (accuracy >= 70) practiceBand = 7.0;
    else if (accuracy >= 60) practiceBand = 6.5;
    else if (accuracy >= 50) practiceBand = 6.0;
    else if (accuracy >= 40) practiceBand = 5.5;

    return {
      title: this.title,
      sectionName: this.sectionName,
      total,
      correctCount,
      incorrectCount: total - correctCount,
      accuracy,
      practiceBand,
      details,
      timestamp: new Date().toISOString()
    };
  }

  submitQuiz() {
    const result = this.evaluate();
    localStorage.setItem("fluentpath_last_result", JSON.stringify(result));
    
    // Update user stats
    const user = FluentPath.getUser();
    if (user) {
      user.completedTests = (user.completedTests || 6) + 1;
      user.xp = (user.xp || 1850) + 100;
      FluentPath.saveUser(user);
    }

    FluentPath.playSuccessChime();
    FluentPath.showToast("Test completed! Opening your practice result...", "success");

    setTimeout(() => {
      window.location.href = "results.html";
    }, 800);
  }
}

window.QuizEngine = QuizEngine;

/**
 * FluentPath - Adult English Lounge Controller (js/adult-tasks.js)
 * Modules: Workplace Dilemma Simulator, 60s Speed Idiom Blitz, Tongue-Twister Gym, Word Scramble & Debate Arena
 */

const AdultTasks = {
  scenarioIdx: 0,
  blitzTimer: 60,
  blitzInterval: null,
  blitzScore: 0,
  blitzCurrentIdx: 0,
  scrambleIdx: 0,
  debateIdx: 0,

  // 1. WORKPLACE & SOCIAL SCENARIOS
  scenarios: [
    {
      title: "The Salary Review Negotiation",
      context: "You have exceeded your quarterly KPIs by 30% and managed two extra cross-functional projects. In your annual review, your manager says: 'The company had a tough fiscal quarter, so merit increases are capped at 2%.'",
      choices: [
        {
          text: "“That is unfair. I worked 60-hour weeks while others slacked off. If you cannot give me 10%, I will start interviewing elsewhere tomorrow.”",
          isOptimal: false,
          feedback: "⚠️ <b>Aggressive Ultimatum:</b> While your frustration is valid, issuing immediate threats triggers defensive resistance from management and can damage long-term rapport."
        },
        {
          text: "“Oh, I completely understand. Times are tough everywhere. Don't worry about it, 2% is fine.”",
          isOptimal: false,
          feedback: "⚠️ <b>Overly Passive:</b> Conceding immediately undervalues your verified 30% outperformance and signals that your compensation is not a priority."
        },
        {
          text: "“I appreciate the broader macroeconomic context our company is facing. At the same time, given that my initiatives directly generated 30% above KPI targets, could we explore a compromise—such as tying an additional 6% adjustment to Q3 milestones or reviewing equity and flexible benefits?”",
          isOptimal: true,
          feedback: "✅ <b>Executive Diplomacy (Masterclass):</b> You acknowledge reality respectfully, ground your request in undeniable data, and collaboratively propose structured alternatives."
        }
      ]
    },
    {
      title: "Defusing a Passive-Aggressive Colleague",
      context: "During a hybrid sprint review with 15 stakeholders, a peer un-mutes and comments: 'Well, it must be nice that Alex had so much free time to decorate the slides while the rest of us did the real technical heavy lifting.'",
      choices: [
        {
          text: "“Are you serious? You always complain instead of doing your own job properly!”",
          isOptimal: false,
          feedback: "⚠️ <b>Emotional Counter-Attack:</b> Escalates public tension and makes both parties look unprofessional in front of leadership."
        },
        {
          text: "“Thanks for noting the visuals! Effective data visualization was essential to help leadership approve our architecture budget in today's 20-minute window. I'm happy to sync offline to ensure everyone's backend contributions are highlighted in the final deck.”",
          isOptimal: true,
          feedback: "✅ <b>Reframing & Composure:</b> Takes the high road, validates the business rationale of the work, and defuses hostility by offering an offline collaborative alignment."
        },
        {
          text: "[Remain completely silent and look down at your keyboard with your camera off]",
          isOptimal: false,
          feedback: "⚠️ <b>Withdrawal:</b> Allows unaddressed snide remarks to linger in the room, creating an impression of acquiescence."
        }
      ]
    },
    {
      title: "Executive Networking Small Talk",
      context: "You are standing near the espresso bar at an international trade summit. The VP of Global Partnerships from a dream firm stands beside you waiting for their coffee.",
      choices: [
        {
          text: "“Hi! I read your keynote on supply chain resilience earlier—your point regarding redundant domestic warehousing was fascinating. In your experience, how are suppliers adapting to the tariff shifts this quarter?”",
          isOptimal: true,
          feedback: "✅ <b>Engaging Intellectual Hook:</b> Flattering without being obsequious, references specific insight from their talk, and opens a natural, high-level conversational exchange."
        },
        {
          text: "“Hello sir. Here is my business card and resume. Can you hire me for a senior manager opening?”",
          isOptimal: false,
          feedback: "⚠️ <b>Premature Pitch:</b> Treating executive networking as an immediate transactional job request alienates senior leaders."
        },
        {
          text: "“Crazy weather today, huh? British weather is always so depressing.”",
          isOptimal: false,
          feedback: "⚠️ <b>Cliche & Negative:</b> Cliché weather complaints fail to distinguish you or spark memorable intellectual rapport."
        }
      ]
    },
    {
      title: "Pushing Back on Scope Creep",
      context: "A prominent enterprise client emails at 9:00 PM on Friday requesting 5 completely new dashboard features to be included in Monday's already finalized MVP release without extra budget.",
      choices: [
        {
          text: "“We received your request. These are great feature enhancements that will add meaningful value. Because our Monday release is currently locked for quality assurance, we can either schedule these into Sprint 2 starting next Thursday, or swap out two existing lower-priority items. Let me know which direction you prefer!”",
          isOptimal: true,
          feedback: "✅ <b>Constructive Boundaries:</b> Validates their enthusiasm, clearly states technical QA realities, and empowers the client to choose between a timeline adjustment or a feature trade-off."
        },
        {
          text: "“No way, contract says Monday is final. Read the statement of work.”",
          isOptimal: false,
          feedback: "⚠️ <b>Bureaucratic Brusqueness:</b> Technically accurate, but damages client relationship and lacks solution-oriented consulting mindset."
        },
        {
          text: "“Sure, we will pull an all-nighter all weekend to get it done for you for free.”",
          isOptimal: false,
          feedback: "⚠️ <b>Unchecked Scope Creep:</b> Sets a disastrous precedent of team burnout and risks deploying buggy code without proper QA."
        }
      ]
    }
  ],

  // 2. SPEED IDIOMS BLITZ DATA
  idiomsPool: [
    { idiom: "Bite the bullet", correct: "To endure an inevitable painful or difficult situation", options: ["To chew food fast", "To endure an inevitable painful or difficult situation", "To act rashly without thought", "To start a conflict"] },
    { idiom: "Spill the tea", correct: "To share candid gossip or confidential details", options: ["To make an apology", "To ruin a hot beverage", "To share candid gossip or confidential details", "To resign from a job"] },
    { idiom: "Cut corners", correct: "To do something in the easiest or cheapest way, often compromising quality", options: ["To turn around", "To do something in the easiest or cheapest way, often compromising quality", "To carve wood", "To solve a geometry puzzle"] },
    { idiom: "Hit the nail on the head", correct: "To state a truth or diagnose a problem with exact precision", options: ["To make a carpentry error", "To state a truth or diagnose a problem with exact precision", "To suffer a headache", "To change your mind"] },
    { idiom: "Take with a grain of salt", correct: "To view a claim with skepticism and caution", options: ["To add spice to food", "To view a claim with skepticism and caution", "To take an insult personally", "To accept everything as absolute fact"] },
    { idiom: "Throw in the towel", correct: "To surrender, quit, or admit defeat", options: ["To finish cleaning the house", "To go swimming", "To surrender, quit, or admit defeat", "To accept a promotion"] },
    { idiom: "Under the weather", correct: "Slightly unwell or fatigued", options: ["Standing in the rain", "Slightly unwell or fatigued", "Traveling by airplane", "Feeling overly energized"] },
    { idiom: "Burn bridges", correct: "To destroy professional or personal relationships irreparably", options: ["To rebuild infrastructure", "To destroy professional or personal relationships irreparably", "To light a campfire", "To resolve a dispute"] },
    { idiom: "Elephant in the room", correct: "An obvious major problem that everyone avoids discussing", options: ["A giant pet", "A zoo exhibition", "An obvious major problem that everyone avoids discussing", "A noisy neighbor"] }
  ],

  // 3. TONGUE TWISTERS & ACCENT GYM
  twisters: [
    {
      title: "The Dental Fricative Workout",
      target: "/θ/ vs /ð/ sound precision",
      text: "The thirty-three thieves thought that they thrilled the throne throughout Thursday.",
      tip: "Place the tip of your tongue lightly between your upper and lower teeth. Do not substitute with /s/ or /t/."
    },
    {
      title: "The Hardest Twister on Earth",
      target: "MIT Speech Lab's Most Challenging Vocal Reflex Test",
      text: "Pad kid poured curd pulled cod.",
      tip: "Focus on crisp plosive articulation between /p/, /k/, /b/, and /d/. Try whispering first before accelerating."
    },
    {
      title: "The Sibilant S & Shifter",
      target: "/s/ vs /ʃ/ discrimination",
      text: "She sells seashells by the seashore, and the shells she sells are surely seashells.",
      tip: "Retract tongue for /ʃ/ ('sh') and press tongue forward against alveolar ridge for /s/."
    },
    {
      title: "The Bilabial Plosive Sprint",
      target: "/p/ aspiration control",
      text: "Peter Piper picked a peck of pickled peppers; if Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?",
      tip: "Hold a sheet of paper 2 inches from your lips; each 'P' should release a puff of air that moves the paper."
    }
  ],

  // 4. WORD SCRAMBLE
  scrambleWords: [
    { scrambled: "E U N P E E R E N R T", answer: "ENTREPRENEUR", hint: "A person who sets up a business, taking on financial risks in the hope of profit." },
    { scrambled: "S P C T I C E M I", answer: "SKEPTICISM", hint: "An attitude of doubt or a disposition to incredulity toward claims." },
    { scrambled: "B E N E V O L E N T", answer: "BENEVOLENT", hint: "Well meaning, kindly, and motivated by a desire to promote the good of others." },
    { scrambled: "U B I Q U I T O U S", answer: "UBIQUITOUS", hint: "Present, appearing, or found everywhere at the same time." },
    { scrambled: "P R A G M A T I C", answer: "PRAGMATIC", hint: "Dealing with problems sensibly and realistically based on practical results." }
  ],

  // 5. DEBATE ARENA TOPICS
  debateTopics: [
    {
      proposition: "“Fully remote work fosters greater long-term organizational innovation than mandatory office return policies.”",
      opposingView: "Critics argue that serendipitous hallway encounters, spontaneous whiteboard sketching, and tacit company culture can only thrive through physical co-presence.",
      phrases: [
        { label: "Playing Devil's Advocate", text: "“While physical proximity undeniably accelerates spontaneous banter, empirical data reveals that asynchronous deep-work protocols empower global talent to collaborate with significantly less managerial friction.”" },
        { label: "Conceding Diplomatically", text: "“I concede that onboarding junior talent requires higher touchpoints; nevertheless, modern distributed enterprises overcome this through intentional quarterly offsites rather than five-day commutes.”" },
        { label: "Reframing the Core Issue", text: "“Rather than framing this as a binary choice between isolation and presence, the pivotal metric is managerial autonomy versus performative presence.”" }
      ]
    },
    {
      proposition: "“Artificial intelligence algorithms should not be recognized as legal inventors or copyright authors.”",
      opposingView: "Proponents argue that autonomous AI systems generate novel drug compounds and creative works that have no direct human equivalent, deserving independent patent recognition.",
      phrases: [
        { label: "Establishing Legal Precedent", text: "“The fundamental premise of intellectual property law has historically been to incentivize human endeavor, cognition, and accountability.”" },
        { label: "Rebutting with Analogy", text: "“Just as a high-powered telescope cannot claim discovery of a celestial body over the astronomer who built and aimed it, AI remains an algorithmic instrument of human intent.”" },
        { label: "Synthesizing Solutions", text: "“We must institute transparent attribution models that protect human creators while providing commercial licensing frameworks for machine outputs.”" }
      ]
    }
  ],

  init() {
    this.renderScenario();
    this.renderTwisters();
    this.renderScramble();
    this.renderDebate();
  },

  // --- SCENARIO RENDER & ACTIONS ---
  renderScenario() {
    const card = document.getElementById("scenario-card");
    const numEl = document.getElementById("scenario-current-num");
    if (!card) return;

    const s = this.scenarios[this.scenarioIdx];
    if (numEl) numEl.textContent = this.scenarioIdx + 1;

    card.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge badge-vibe" style="font-size:0.75rem;">Executive Communication Challenge</span>
        <h3 style="font-size: 1.4rem; font-weight: 800; margin: 0.5rem 0 0.75rem;">${s.title}</h3>
        <div class="scenario-dialogue-box">
          <b>Scenario Context:</b><br>${s.context}
        </div>
      </div>

      <div style="font-weight: 700; margin-bottom: 0.75rem; color: var(--text-main);">
        How do you respond? Choose the most effective strategy:
      </div>

      <div id="scenario-choices-list">
        ${s.choices.map((choice, i) => `
          <button class="scenario-choice-btn" onclick="AdultTasks.handleScenarioChoice(${i}, this)">
            ${choice.text}
          </button>
        `).join("")}
      </div>

      <div id="scenario-feedback-box" style="margin-top: 1.5rem; display: none;"></div>

      <div style="display: flex; justify-content: flex-end; margin-top: 1.5rem;">
        <button class="btn btn-secondary" onclick="AdultTasks.nextScenario()">
          Next Scenario ➔
        </button>
      </div>
    `;
  },

  handleScenarioChoice(idx, btn) {
    const s = this.scenarios[this.scenarioIdx];
    const choice = s.choices[idx];
    const feedbackBox = document.getElementById("scenario-feedback-box");
    const btns = document.querySelectorAll(".scenario-choice-btn");

    btns.forEach(b => {
      b.style.pointerEvents = "none";
      b.style.opacity = "0.7";
    });

    btn.style.opacity = "1";
    if (choice.isOptimal) {
      btn.style.borderColor = "var(--accent-emerald)";
      btn.style.background = "var(--accent-emerald-light)";
      FluentPath.playSuccessChime();
      FluentPath.addGameCredits(25, "Executive Scenario Masterclass");
    } else {
      btn.style.borderColor = "var(--accent-amber)";
      btn.style.background = "var(--accent-amber-light)";
      FluentPath.playClickBeep();
    }

    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `
        <div class="card" style="padding: 1.25rem; border-left: 4px solid ${choice.isOptimal ? 'var(--accent-emerald)' : 'var(--accent-amber)'}; background: var(--bg-surface);">
          ${choice.feedback}
        </div>
      `;
    }
  },

  nextScenario() {
    this.scenarioIdx = (this.scenarioIdx + 1) % this.scenarios.length;
    this.renderScenario();
  },

  // --- 60-SECOND SPEED IDIOM BLITZ ---
  startBlitzGame() {
    this.blitzTimer = 60;
    this.blitzScore = 0;
    this.blitzCurrentIdx = 0;

    const timerEl = document.getElementById("blitz-timer");
    const scoreEl = document.getElementById("blitz-score");
    if (timerEl) timerEl.textContent = "60";
    if (scoreEl) scoreEl.textContent = "0";

    clearInterval(this.blitzInterval);
    this.blitzInterval = setInterval(() => {
      this.blitzTimer--;
      if (timerEl) timerEl.textContent = this.blitzTimer;

      if (this.blitzTimer <= 0) {
        clearInterval(this.blitzInterval);
        this.endBlitzGame();
      }
    }, 1000);

    this.renderBlitzQuestion();
  },

  renderBlitzQuestion() {
    const area = document.getElementById("blitz-game-area");
    if (!area) return;

    const item = this.idiomsPool[this.blitzCurrentIdx % this.idiomsPool.length];

    area.innerHTML = `
      <div style="background: var(--bg-surface); padding: 1.5rem; border-radius: var(--radius-xl); border: 2px solid var(--border-color); max-width: 600px; margin: 0 auto;">
        <span class="badge badge-vibe" style="font-size:0.8rem; margin-bottom:0.5rem;">What does this idiom mean?</span>
        <h3 style="font-size: 1.75rem; font-weight: 800; color: var(--primary); margin-bottom: 1.25rem;">
          “${item.idiom}”
        </h3>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${item.options.map((opt) => `
            <button class="btn btn-secondary" onclick="AdultTasks.checkBlitzAnswer('${opt.replace(/'/g, "\\'")}', '${item.correct.replace(/'/g, "\\'")}', this)" style="text-align: left; padding: 0.85rem 1.25rem; font-weight: 600; font-size: 0.95rem;">
              ${opt}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  },

  checkBlitzAnswer(selected, correct, btn) {
    const scoreEl = document.getElementById("blitz-score");
    if (selected === correct) {
      this.blitzScore += 10;
      if (scoreEl) scoreEl.textContent = this.blitzScore;
      btn.style.background = "var(--accent-emerald)";
      btn.style.color = "#fff";
      FluentPath.playSuccessChime();
    } else {
      btn.style.background = "var(--accent-rose)";
      btn.style.color = "#fff";
      FluentPath.playClickBeep();
    }

    setTimeout(() => {
      this.blitzCurrentIdx++;
      this.renderBlitzQuestion();
    }, 450);
  },

  endBlitzGame() {
    const area = document.getElementById("blitz-game-area");
    if (!area) return;

    FluentPath.playSuccessChime();
    const coinsWon = Math.max(10, Math.floor(this.blitzScore / 2));
    FluentPath.addGameCredits(coinsWon, "Speed Idioms Blitz Winner");

    area.innerHTML = `
      <div style="background: var(--bg-surface); padding: 2rem; border-radius: var(--radius-xl); border: 2px solid var(--accent-amber); max-width: 500px; margin: 0 auto; text-align:center;">
        <div style="font-size: 3.5rem;">⚡</div>
        <h3 style="font-size: 1.8rem; font-weight: 800; margin: 0.5rem 0;">Time's Up!</h3>
        <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          You scored <b>${this.blitzScore} points</b> and earned <b>+${coinsWon} Star Coins</b>!
        </p>
        <button class="btn btn-primary btn-lg" onclick="AdultTasks.startBlitzGame()">
          🔄 Play Again
        </button>
      </div>
    `;
  },

  // --- TONGUE-TWISTERS ACCENT GYM ---
  renderTwisters() {
    const grid = document.getElementById("twisters-grid");
    if (!grid) return;

    grid.innerHTML = this.twisters.map((t, idx) => `
      <div class="adult-card">
        <div>
          <span class="badge badge-vibe" style="font-size:0.75rem;">${t.target}</span>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin: 0.5rem 0 0.75rem;">${t.title}</h3>
          
          <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); font-size: 1.05rem; font-weight: 600; line-height: 1.5; margin-bottom: 1rem; border-left: 4px solid var(--primary);">
            “${t.text}”
          </div>

          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem; display:flex; gap:0.5rem; align-items:flex-start;">
            <span>💡</span>
            <span><b>Phonetic Tip:</b> ${t.tip}</span>
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" onclick="AdultTasks.speakTwister('${t.text.replace(/'/g, "\\'")}', 0.8)">
            🐢 Slow Pronunciation
          </button>
          <button class="btn btn-primary btn-sm" onclick="AdultTasks.speakTwister('${t.text.replace(/'/g, "\\'")}', 1.15)">
            🚀 Native Speed Blitz
          </button>
        </div>
      </div>
    `).join("");
  },

  speakTwister(text, speed = 1.0) {
    if (typeof FluentPath !== "undefined" && FluentPath.speakLikePerson) {
      FluentPath.speakLikePerson(text, { rate: speed, lang: "en-GB" });
      FluentPath.showToast(`Pronouncing at ${speed}x speed`, "info");
    } else {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed;
      utterance.lang = "en-GB";
      window.speechSynthesis.speak(utterance);
      FluentPath.showToast(`Pronouncing at ${speed}x speed`, "info");
    }
  },

  // --- WORD SCRAMBLE ---
  renderScramble() {
    const box = document.getElementById("scramble-game-box");
    if (!box) return;

    const item = this.scrambleWords[this.scrambleIdx];

    box.innerHTML = `
      <div style="max-width: 550px; margin: 0 auto;">
        <div style="letter-spacing: 0.3em; font-size: 2rem; font-weight: 800; color: var(--primary); margin-bottom: 0.75rem; word-break: break-word;">
          ${item.scrambled}
        </div>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
          <b>Clue:</b> ${item.hint}
        </p>

        <div style="display: flex; gap: 0.75rem; justify-content: center; max-width: 380px; margin: 0 auto 1.25rem;">
          <input type="text" id="scramble-input" class="form-control" placeholder="Type unscrambled word..." style="text-transform: uppercase; font-weight: 700; text-align: center; font-size: 1.1rem;" autocomplete="off">
          <button class="btn btn-primary" onclick="AdultTasks.checkScrambleAnswer()">
            Submit
          </button>
        </div>

        <div id="scramble-feedback" style="font-weight: 700; min-height: 24px;"></div>
      </div>
    `;

    const inputEl = document.getElementById("scramble-input");
    if (inputEl) {
      inputEl.addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.checkScrambleAnswer();
      });
    }
  },

  checkScrambleAnswer() {
    const input = document.getElementById("scramble-input");
    const feedback = document.getElementById("scramble-feedback");
    if (!input || !feedback) return;

    const val = input.value.trim().toUpperCase();
    const item = this.scrambleWords[this.scrambleIdx];

    if (val === item.answer) {
      FluentPath.playSuccessChime();
      FluentPath.addGameCredits(15, `Solved anagram: ${item.answer}`);
      feedback.textContent = `🎉 Spot on! The word is ${item.answer}! +15 Star Coins!`;
      feedback.style.color = "var(--accent-emerald)";

      setTimeout(() => {
        this.scrambleIdx = (this.scrambleIdx + 1) % this.scrambleWords.length;
        this.renderScramble();
      }, 1600);
    } else {
      FluentPath.playClickBeep();
      feedback.textContent = `❌ Not quite! Give it another shot or examine the letter count.`;
      feedback.style.color = "var(--accent-rose)";
    }
  },

  // --- DEBATE ARENA ---
  renderDebate() {
    const card = document.getElementById("debate-card");
    if (!card) return;

    const d = this.debateTopics[this.debateIdx];

    card.innerHTML = `
      <div style="margin-bottom: 1.75rem;">
        <span class="badge badge-vibe" style="margin-bottom: 0.5rem; display: inline-block;">Topic ${this.debateIdx + 1} of ${this.debateTopics.length}</span>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.75rem; line-height: 1.35;">
          ${d.proposition}
        </h3>
        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-rose); margin-bottom: 1.5rem;">
          <b>Opposing Counter-Argument:</b><br>
          ${d.opposingView}
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <div style="font-weight: 700; margin-bottom: 0.75rem; color: var(--text-main);">
          🎙️ Oratorical Rebuttal Phrasing Templates (Tap to listen native cadence):
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${d.phrases.map(p => `
            <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <span class="badge badge-vibe" style="font-size:0.75rem;">${p.label}</span>
                <button class="btn btn-secondary btn-sm" onclick="AdultTasks.speakDebate('${p.text.replace(/'/g, "\\'")}')">
                  🔊 Hear Rebuttal Cadence
                </button>
              </div>
              <div style="font-size: 1rem; line-height: 1.55; color: var(--text-main);">
                ${p.text}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div style="display: flex; justify-content: flex-end; margin-top: 1.5rem;">
        <button class="btn btn-secondary" onclick="AdultTasks.nextDebate()">
          Next Debate Topic ➔
        </button>
      </div>
    `;
  },

  speakDebate(text) {
    if (typeof FluentPath !== "undefined" && FluentPath.speakLikePerson) {
      FluentPath.speakLikePerson(text, { rate: 0.92, lang: "en-GB" });
      FluentPath.showToast("Speaking rhetorical rebuttal template", "info");
    } else {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-GB";
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
      FluentPath.showToast("Speaking rhetorical rebuttal template", "info");
    }
  },

  nextDebate() {
    this.debateIdx = (this.debateIdx + 1) % this.debateTopics.length;
    this.renderDebate();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  AdultTasks.init();
});

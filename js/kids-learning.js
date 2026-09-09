/**
 * FluentPath - Kids Corner Controller (js/kids-learning.js)
 * Modules: Alphabet, Numbers, Colors, Animals, Words & Mini-Games
 */

const KidsCorner = {
  activeTab: "alphabet",
  memoryCards: [],
  flippedCards: [],
  matchedPairs: 0,
  quizCurrent: 0,
  phonicsIndex: 0,
  storyPage: 0,

  illustrations: {
    Apple: `<svg viewBox="0 0 100 100" class="kids-img-badge"><circle cx="50" cy="55" r="38" fill="#ef4444"/><path d="M48 20 Q54 10 65 14 Q58 24 48 20" fill="#22c55e"/><path d="M50 20 Q50 30 50 35" stroke="#78350f" stroke-width="4" stroke-linecap="round"/><circle cx="38" cy="45" r="4" fill="#fff" opacity="0.6"/></svg>`,
    Bear: `<svg viewBox="0 0 100 100" class="kids-img-badge"><circle cx="28" cy="30" r="16" fill="#92400e"/><circle cx="72" cy="30" r="16" fill="#92400e"/><circle cx="50" cy="58" r="36" fill="#b45309"/><circle cx="50" cy="65" r="20" fill="#fde68a"/><circle cx="40" cy="52" r="4.5" fill="#1e1b4b"/><circle cx="60" cy="52" r="4.5" fill="#1e1b4b"/><ellipse cx="50" cy="63" rx="7" ry="5" fill="#78350f"/><path d="M46 70 Q50 74 54 70" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
    Cat: `<svg viewBox="0 0 100 100" class="kids-img-badge"><polygon points="20,25 38,45 18,50" fill="#f97316"/><polygon points="80,25 62,45 82,50" fill="#f97316"/><circle cx="50" cy="58" r="34" fill="#fb923c"/><ellipse cx="50" cy="68" rx="16" ry="12" fill="#fff"/><circle cx="38" cy="54" r="5" fill="#047857"/><circle cx="62" cy="54" r="5" fill="#047857"/><polygon points="46,64 54,64 50,69" fill="#f43f5e"/><line x1="15" y1="62" x2="35" y2="65" stroke="#fff" stroke-width="2"/><line x1="15" y1="70" x2="35" y2="69" stroke="#fff" stroke-width="2"/><line x1="85" y1="62" x2="65" y2="65" stroke="#fff" stroke-width="2"/><line x1="85" y1="70" x2="65" y2="69" stroke="#fff" stroke-width="2"/></svg>`,
    Dog: `<svg viewBox="0 0 100 100" class="kids-img-badge"><ellipse cx="22" cy="45" rx="10" ry="22" fill="#a16207" transform="rotate(-15 22 45)"/><ellipse cx="78" cy="45" rx="10" ry="22" fill="#a16207" transform="rotate(15 78 45)"/><circle cx="50" cy="58" r="34" fill="#eab308"/><circle cx="50" cy="68" r="18" fill="#fef08a"/><circle cx="38" cy="52" r="5" fill="#1e293b"/><circle cx="62" cy="52" r="5" fill="#1e293b"/><ellipse cx="50" cy="65" rx="7" ry="5" fill="#1e293b"/><path d="M46 72 Q50 78 54 72" stroke="#1e293b" stroke-width="2.5" fill="none"/></svg>`,
    Elephant: `<svg viewBox="0 0 100 100" class="kids-img-badge"><circle cx="20" cy="50" r="18" fill="#94a3b8"/><circle cx="80" cy="50" r="18" fill="#94a3b8"/><circle cx="50" cy="55" r="34" fill="#cbd5e1"/><circle cx="38" cy="50" r="4.5" fill="#1e293b"/><circle cx="62" cy="50" r="4.5" fill="#1e293b"/><path d="M46 60 Q50 85 64 80 Q62 74 54 62" fill="#94a3b8"/></svg>`,
    Fox: `<svg viewBox="0 0 100 100" class="kids-img-badge"><polygon points="24,20 40,45 18,48" fill="#ea580c"/><polygon points="76,20 60,45 82,48" fill="#ea580c"/><polygon points="20,40 80,40 50,88" fill="#f97316"/><circle cx="38" cy="48" r="4" fill="#1e293b"/><circle cx="62" cy="48" r="4" fill="#1e293b"/><circle cx="50" cy="84" r="5" fill="#1e293b"/></svg>`,
    Giraffe: `<svg viewBox="0 0 100 100" class="kids-img-badge"><circle cx="50" cy="45" r="28" fill="#facc15"/><rect x="42" y="65" width="16" height="30" fill="#facc15"/><circle cx="36" cy="22" r="5" fill="#ca8a04"/><line x1="36" y1="25" x2="42" y2="35" stroke="#ca8a04" stroke-width="4"/><circle cx="64" cy="22" r="5" fill="#ca8a04"/><line x1="64" y1="25" x2="58" y2="35" stroke="#ca8a04" stroke-width="4"/><circle cx="40" cy="42" r="4" fill="#1e293b"/><circle cx="60" cy="42" r="4" fill="#1e293b"/></svg>`,
    Lion: `<svg viewBox="0 0 100 100" class="kids-img-badge"><circle cx="50" cy="54" r="42" fill="#d97706"/><circle cx="50" cy="54" r="30" fill="#fde047"/><circle cx="38" cy="50" r="4.5" fill="#1e293b"/><circle cx="62" cy="50" r="4.5" fill="#1e293b"/><ellipse cx="50" cy="62" rx="14" ry="9" fill="#fef9c3"/><polygon points="46,58 54,58 50,63" fill="#b45309"/></svg>`,
    Monkey: `<svg viewBox="0 0 100 100" class="kids-img-badge"><circle cx="18" cy="50" r="14" fill="#b45309"/><circle cx="82" cy="50" r="14" fill="#b45309"/><circle cx="50" cy="52" r="32" fill="#78350f"/><ellipse cx="50" cy="62" rx="22" ry="16" fill="#fde68a"/><circle cx="38" cy="48" r="4" fill="#1e293b"/><circle cx="62" cy="48" r="4" fill="#1e293b"/></svg>`,
    Owl: `<svg viewBox="0 0 100 100" class="kids-img-badge"><ellipse cx="50" cy="55" rx="34" ry="38" fill="#854d0e"/><circle cx="36" cy="45" r="15" fill="#fef08a"/><circle cx="64" cy="45" r="15" fill="#fef08a"/><circle cx="36" cy="45" r="6" fill="#1e293b"/><circle cx="64" cy="45" r="6" fill="#1e293b"/><polygon points="45,55 55,55 50,68" fill="#f59e0b"/></svg>`,
    Panda: `<svg viewBox="0 0 100 100" class="kids-img-badge"><circle cx="25" cy="30" r="15" fill="#1e293b"/><circle cx="75" cy="30" r="15" fill="#1e293b"/><circle cx="50" cy="58" r="36" fill="#fff" stroke="#e2e8f0" stroke-width="2"/><ellipse cx="37" cy="52" rx="8" ry="12" fill="#1e293b" transform="rotate(-15 37 52)"/><ellipse cx="63" cy="52" rx="8" ry="12" fill="#1e293b" transform="rotate(15 63 52)"/><circle cx="38" cy="50" r="3.5" fill="#fff"/><circle cx="62" cy="50" r="3.5" fill="#fff"/></svg>`,
    Rabbit: `<svg viewBox="0 0 100 100" class="kids-img-badge"><ellipse cx="35" cy="24" rx="8" ry="22" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/><ellipse cx="65" cy="24" rx="8" ry="22" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/><circle cx="50" cy="62" r="32" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><circle cx="38" cy="56" r="4.5" fill="#1e293b"/><circle cx="62" cy="56" r="4.5" fill="#1e293b"/><ellipse cx="50" cy="65" rx="5" ry="3.5" fill="#f43f5e"/></svg>`,
    Sun: `<svg viewBox="0 0 100 100" class="kids-img-badge"><circle cx="50" cy="50" r="28" fill="#facc15"/><g stroke="#f59e0b" stroke-width="4" stroke-linecap="round"><line x1="50" y1="8" x2="50" y2="16"/><line x1="50" y1="84" x2="50" y2="92"/><line x1="8" y1="50" x2="16" y2="50"/><line x1="84" y1="50" x2="92" y2="50"/></g><circle cx="42" cy="46" r="3.5" fill="#1e293b"/><circle cx="58" cy="46" r="3.5" fill="#1e293b"/></svg>`,
    Star: `<svg viewBox="0 0 100 100" class="kids-img-badge"><polygon points="50,12 62,38 90,40 68,58 76,86 50,70 24,86 32,58 10,40 38,38" fill="#f59e0b" stroke="#d97706" stroke-width="3"/><circle cx="42" cy="48" r="3.5" fill="#1e293b"/><circle cx="58" cy="48" r="3.5" fill="#1e293b"/></svg>`
  },

  getIllustration(name, fallbackEmoji = "⭐") {
    return this.illustrations[name] || `<div class="kids-img-badge" style="display:flex;align-items:center;justify-content:center;font-size:2.8rem;background:var(--vibe-gradient-soft);border-radius:var(--radius-lg);">${fallbackEmoji}</div>`;
  },

  alphabetData: [
    { letter: "A", word: "Apple", imageName: "Apple", audioText: "A is for Apple" },
    { letter: "B", word: "Bear", imageName: "Bear", audioText: "B is for Bear" },
    { letter: "C", word: "Cat", imageName: "Cat", audioText: "C is for Cat" },
    { letter: "D", word: "Dog", imageName: "Dog", audioText: "D is for Dog" },
    { letter: "E", word: "Elephant", imageName: "Elephant", audioText: "E is for Elephant" },
    { letter: "F", word: "Fox", imageName: "Fox", audioText: "F is for Fox" },
    { letter: "G", word: "Giraffe", imageName: "Giraffe", audioText: "G is for Giraffe" },
    { letter: "H", word: "Hippo", imageName: "Bear", audioText: "H is for Hippo" },
    { letter: "I", word: "Iguana", imageName: "Cat", audioText: "I is for Iguana" },
    { letter: "J", word: "Jaguar", imageName: "Lion", audioText: "J is for Jaguar" },
    { letter: "K", word: "Kangaroo", imageName: "Fox", audioText: "K is for Kangaroo" },
    { letter: "L", word: "Lion", imageName: "Lion", audioText: "L is for Lion" },
    { letter: "M", word: "Monkey", imageName: "Monkey", audioText: "M is for Monkey" },
    { letter: "N", word: "Newt", imageName: "Cat", audioText: "N is for Newt" },
    { letter: "O", word: "Owl", imageName: "Owl", audioText: "O is for Owl" },
    { letter: "P", word: "Panda", imageName: "Panda", audioText: "P is for Panda" },
    { letter: "Q", word: "Quail", imageName: "Owl", audioText: "Q is for Quail" },
    { letter: "R", word: "Rabbit", imageName: "Rabbit", audioText: "R is for Rabbit" },
    { letter: "S", word: "Sun", imageName: "Sun", audioText: "S is for Sun" },
    { letter: "T", word: "Tiger", imageName: "Cat", audioText: "T is for Tiger" },
    { letter: "U", word: "Unicorn", imageName: "Star", audioText: "U is for Unicorn" },
    { letter: "V", word: "Vulture", imageName: "Owl", audioText: "V is for Vulture" },
    { letter: "W", word: "Whale", imageName: "Elephant", audioText: "W is for Whale" },
    { letter: "X", word: "X-ray Fish", imageName: "Star", audioText: "X is for X-ray Fish" },
    { letter: "Y", word: "Yak", imageName: "Bear", audioText: "Y is for Yak" },
    { letter: "Z", word: "Zebra", imageName: "Giraffe", audioText: "Z is for Zebra" }
  ],

  numbersData: [
    { num: "1", word: "One", imageName: "Dog", countText: "One Dog" },
    { num: "2", word: "Two", imageName: "Cat", countText: "Two Cats" },
    { num: "3", word: "Three", imageName: "Rabbit", countText: "Three Bunnies" },
    { num: "4", word: "Four", imageName: "Panda", countText: "Four Pandas" },
    { num: "5", word: "Five", imageName: "Lion", countText: "Five Lions" },
    { num: "6", word: "Six", imageName: "Fox", countText: "Six Foxes" },
    { num: "7", word: "Seven", imageName: "Monkey", countText: "Seven Monkeys" },
    { num: "8", word: "Eight", imageName: "Owl", countText: "Eight Owls" },
    { num: "9", word: "Nine", imageName: "Apple", countText: "Nine Apples" },
    { num: "10", word: "Ten", imageName: "Star", countText: "Ten Stars" }
  ],

  colorsData: [
    { name: "Red", hex: "#ef4444", imageName: "Apple", sample: "Red Apple" },
    { name: "Blue", hex: "#3b82f6", imageName: "Elephant", sample: "Blue Elephant" },
    { name: "Yellow", hex: "#eab308", imageName: "Sun", sample: "Yellow Sun" },
    { name: "Green", hex: "#22c55e", imageName: "Cat", sample: "Green Meadow" },
    { name: "Purple", hex: "#a855f7", imageName: "Star", sample: "Purple Wonder" },
    { name: "Pink", hex: "#ec4899", imageName: "Rabbit", sample: "Pink Bunny" },
    { name: "Orange", hex: "#f97316", imageName: "Fox", sample: "Orange Fox" },
    { name: "Star", hex: "#f59e0b", imageName: "Star", sample: "Five point Star" }
  ],

  rhymesData: [
    {
      title: "Twinkle, Twinkle, Little Star",
      theme: "Night Sky & Dreams",
      imageName: "Star",
      lyrics: "Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.",
      audioPitch: 1.2
    },
    {
      title: "Old MacDonald Had a Farm",
      theme: "Animals & Farm Sounds",
      imageName: "Bear",
      lyrics: "Old MacDonald had a farm, E-I-E-I-O!\nAnd on that farm he had a cat, E-I-E-I-O!\nWith a meow-meow here, and a meow-meow there,\nEverywhere a meow-meow!",
      audioPitch: 1.1
    },
    {
      title: "The Wheels on the Bus",
      theme: "City Fun & Motion",
      imageName: "Sun",
      lyrics: "The wheels on the bus go round and round,\nRound and round, round and round!\nThe wheels on the bus go round and round,\nAll through the town!",
      audioPitch: 1.15
    },
    {
      title: "Baa, Baa, Black Sheep",
      theme: "Wool & Generosity",
      imageName: "Dog",
      lyrics: "Baa, baa, black sheep, have you any wool?\nYes, sir, yes, sir, three bags full!\nOne for the master, and one for the dame,\nAnd one for the little boy who lives down the lane.",
      audioPitch: 1.1
    }
  ],

  phonicsData: [
    { word: "CAT", imageName: "Cat", hint: "A friendly animal that says meow", tiles: ["C", "A", "T", "B", "R"] },
    { word: "DOG", imageName: "Dog", hint: "Man's best furry loyal friend", tiles: ["D", "O", "G", "S", "M"] },
    { word: "SUN", imageName: "Sun", hint: "Shines bright in the daytime sky", tiles: ["S", "U", "N", "T", "L"] },
    { word: "FOX", imageName: "Fox", hint: "A clever orange creature of the forest", tiles: ["F", "O", "X", "P", "K"] }
  ],

  storyPages: [
    {
      pageNumber: 1,
      title: "Barnaby's Morning Walk",
      imageName: "Bear",
      text: "One sunny morning, Barnaby Bear woke up with a big stretch. 'Today is the perfect day to explore the Great Safari!' he cheered cheerfully.",
      question: "Who woke up on a sunny morning?",
      options: ["Barnaby Bear", "Leo the Lion", "Sammy Snake"],
      answer: 0
    },
    {
      pageNumber: 2,
      title: "Meeting Leo the Lion",
      imageName: "Lion",
      text: "Near the acacia tree, Barnaby met Leo the Lion. Leo was practicing his friendly roar! 'Good morning Barnaby!' roared Leo warmly.",
      question: "What was Leo the Lion practicing?",
      options: ["Flying high", "His friendly roar", "Swimming"],
      answer: 1
    },
    {
      pageNumber: 3,
      title: "Singing with Ollie Owl",
      imageName: "Owl",
      text: "As sunset painted the sky golden pink, Ollie the Wise Owl perched on a branch. Together, all the safari friends sang their happy English song!",
      question: "Who was perched on the branch?",
      options: ["Ollie the Wise Owl", "A hungry crocodile", "A lost monkey"],
      answer: 0
    }
  ],

  quizQuestions: [
    { question: "Which animal has a golden mane and roars loud?", imageName: "Lion", options: ["Lion", "Cat", "Chick", "Frog"], answer: 0, text: "Lion" },
    { question: "What fruit starts with the letter 'A'?", imageName: "Apple", options: ["Banana", "Apple", "Carrot", "Donut"], answer: 1, text: "Apple" },
    { question: "Which bright star shines in the morning sky?", imageName: "Sun", options: ["Moon", "Planet", "Sun", "Cloud"], answer: 2, text: "Yellow Sun" },
    { question: "Which cute white bunny has long ears?", imageName: "Rabbit", options: ["Panda", "Fox", "Rabbit", "Hippo"], answer: 2, text: "Rabbit" }
  ],

  init() {
    this.bindEvents();
    this.renderAlphabet();
    this.initMemoryGame();
    this.renderQuiz();
    this.renderRhymes();
    this.renderPhonics();
    this.renderStory();
  },

  bindEvents() {
    const tabs = document.querySelectorAll(".kids-tab-btn");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const target = tab.dataset.tab;
        this.activeTab = target;
        this.showTabContent(target);
      });
    });
  },

  showTabContent(tabName) {
    document.querySelectorAll(".kids-section-content").forEach(sec => sec.style.display = "none");
    const activeSec = document.getElementById(`sec-${tabName}`);
    if (activeSec) {
      activeSec.style.display = "block";
    }

    if (tabName === "alphabet") this.renderAlphabet();
    if (tabName === "numbers") this.renderNumbers();
    if (tabName === "colors") this.renderColors();
    if (tabName === "rhymes") this.renderRhymes();
    if (tabName === "phonics") this.renderPhonics();
    if (tabName === "stories") this.renderStory();
    if (tabName === "game-memory") this.initMemoryGame();
    if (tabName === "game-quiz") this.renderQuiz();
  },

  // 1. ALPHABET WITH VECTOR IMAGES
  renderAlphabet() {
    const container = document.getElementById("alphabet-grid");
    if (!container) return;
    container.innerHTML = this.alphabetData.map(item => `
      <div class="kids-card" onclick="KidsCorner.playAudio('${item.audioText}')">
        <span class="kids-card-speaker">🔊</span>
        <div class="kids-card-symbol">${item.letter}</div>
        ${this.getIllustration(item.imageName)}
        <div class="kids-card-sub">${item.word}</div>
      </div>
    `).join("");
  },

  // 2. NUMBERS WITH COUNTING ILLUSTRATIONS
  renderNumbers() {
    const container = document.getElementById("numbers-grid");
    if (!container) return;
    container.innerHTML = this.numbersData.map(item => `
      <div class="kids-card" onclick="KidsCorner.playAudio('${item.num}, ${item.countText}')">
        <span class="kids-card-speaker">🔊</span>
        <div class="kids-card-symbol" style="color: var(--vibe-pink);">${item.num}</div>
        ${this.getIllustration(item.imageName)}
        <div class="kids-card-sub">${item.word}</div>
      </div>
    `).join("");
  },

  // 3. COLORS & SHAPES WITH RICH GRAPHICS
  renderColors() {
    const container = document.getElementById("colors-grid");
    if (!container) return;
    container.innerHTML = this.colorsData.map(item => `
      <div class="kids-card" onclick="KidsCorner.playAudio('${item.name}, ${item.sample}')">
        <span class="kids-card-speaker">🔊</span>
        <div style="width:45px; height:45px; border-radius:50%; background:${item.hex}; margin: 0 auto 0.5rem; border:2px solid #fff; box-shadow:0 4px 10px rgba(0,0,0,0.15);"></div>
        ${this.getIllustration(item.imageName)}
        <div class="kids-card-sub" style="font-weight:700;">${item.name}</div>
      </div>
    `).join("");
  },

  // 4. NURSERY RHYMES & SING-ALONG
  renderRhymes() {
    const container = document.getElementById("rhymes-grid");
    if (!container) return;
    container.innerHTML = this.rhymesData.map((rhyme, index) => `
      <div class="rhyme-card">
        <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
          <div style="width:65px; height:65px; flex-shrink:0;">
            ${this.getIllustration(rhyme.imageName)}
          </div>
          <div>
            <span class="badge badge-vibe" style="font-size:0.75rem;">${rhyme.theme}</span>
            <h3 style="font-size:1.25rem; font-weight:800; margin-top:0.25rem;">${rhyme.title}</h3>
          </div>
        </div>
        <div class="rhyme-lyrics-box" id="lyrics-${index}">
          ${rhyme.lyrics.replace(/\n/g, "<br>")}
        </div>
        <button class="btn btn-primary btn-block" onclick="KidsCorner.singRhyme(${index})" style="margin-top:auto;">
          🎵 Sing Along with Barnaby!
        </button>
      </div>
    `).join("");
  },

  singRhyme(index) {
    const rhyme = this.rhymesData[index];
    if (!rhyme) return;
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(rhyme.lyrics);
    utterance.pitch = rhyme.audioPitch || 1.15;
    utterance.rate = 0.88;
    utterance.lang = "en-GB";

    const box = document.getElementById(`lyrics-${index}`);
    if (box) {
      box.style.borderLeftColor = "var(--vibe-pink)";
      box.style.background = "var(--primary-light)";
    }

    utterance.onend = () => {
      if (box) {
        box.style.borderLeftColor = "var(--accent-emerald)";
        box.style.background = "var(--bg-card)";
      }
      FluentPath.addGameCredits(15, `Sing-Along: ${rhyme.title}`);
    };

    window.speechSynthesis.speak(utterance);
    FluentPath.showToast(`Singing: "${rhyme.title}"! 🎵`, "success");
  },

  // 5. PHONICS 3-LETTER WORD BUILDER
  renderPhonics() {
    const container = document.getElementById("phonics-container");
    if (!container) return;

    const item = this.phonicsData[this.phonicsIndex];
    if (!this.phonicsCurrentAnswer) this.phonicsCurrentAnswer = [];

    container.innerHTML = `
      <div class="phonics-target-card">
        <div style="max-width:140px; margin: 0 auto;">
          ${this.getIllustration(item.imageName)}
        </div>
        <h3 style="font-size: 1.4rem; font-weight:800; margin-top:0.5rem; color:var(--primary);">Spell the Cartoon Word</h3>
        <p style="color: var(--text-muted);">${item.hint}</p>

        <div class="phonics-slots-row">
          ${[0, 1, 2].map(slotIdx => `
            <div class="phonics-slot" id="slot-${slotIdx}">
              ${this.phonicsCurrentAnswer[slotIdx] || "_"}
            </div>
          `).join("")}
        </div>

        <div class="phonics-tiles-row">
          ${item.tiles.map((char, tileIdx) => `
            <button class="phonics-tile" onclick="KidsCorner.tapPhonicsLetter('${char}', this)">
              ${char}
            </button>
          `).join("")}
        </div>

        <div style="margin-top: 1.75rem; display:flex; gap:1rem; justify-content:center;">
          <button class="btn btn-secondary" onclick="KidsCorner.resetPhonicsCurrent()">
            🔄 Clear Slots
          </button>
          <button class="btn btn-primary" onclick="KidsCorner.pronouncePhonicsWord()">
            🔊 Hear Word Pronunciation
          </button>
        </div>
      </div>
    `;
  },

  tapPhonicsLetter(char, btn) {
    if (!this.phonicsCurrentAnswer) this.phonicsCurrentAnswer = [];
    if (this.phonicsCurrentAnswer.length < 3) {
      this.phonicsCurrentAnswer.push(char);
      btn.style.opacity = "0.4";
      btn.disabled = true;
      FluentPath.speakText(char);

      const slotEl = document.getElementById(`slot-${this.phonicsCurrentAnswer.length - 1}`);
      if (slotEl) slotEl.textContent = char;

      if (this.phonicsCurrentAnswer.length === 3) {
        const fullWord = this.phonicsCurrentAnswer.join("");
        const expected = this.phonicsData[this.phonicsIndex].word;
        if (fullWord === expected) {
          FluentPath.playSuccessChime();
          FluentPath.showToast(`🎉 Correct! You spelled ${fullWord}! +20 Coins!`, "success");
          FluentPath.addGameCredits(20, `Spelled ${fullWord}`);

          setTimeout(() => {
            this.phonicsIndex = (this.phonicsIndex + 1) % this.phonicsData.length;
            this.phonicsCurrentAnswer = [];
            this.renderPhonics();
          }, 1600);
        } else {
          FluentPath.showToast(`Try again! That spelled ${fullWord}`, "error");
          setTimeout(() => {
            this.resetPhonicsCurrent();
          }, 1000);
        }
      }
    }
  },

  resetPhonicsCurrent() {
    this.phonicsCurrentAnswer = [];
    this.renderPhonics();
  },

  pronouncePhonicsWord() {
    const item = this.phonicsData[this.phonicsIndex];
    FluentPath.speakText(item.word);
  },

  // 6. PICTURE STORYBOOK
  renderStory() {
    const container = document.getElementById("story-container");
    if (!container) return;

    const page = this.storyPages[this.storyPage];
    container.innerHTML = `
      <div class="storybook-card">
        <div class="storybook-image-box">
          <div style="width:160px; height:160px;">
            ${this.getIllustration(page.imageName)}
          </div>
          <div style="position:absolute; bottom:1rem; right:1.5rem; background:rgba(0,0,0,0.5); color:#fff; padding:0.25rem 0.75rem; border-radius:999px; font-weight:700; font-size:0.85rem;">
            Page ${this.storyPage + 1} of ${this.storyPages.length}
          </div>
        </div>
        <div class="storybook-content">
          <span class="badge badge-vibe" style="margin-bottom:0.5rem; display:inline-block;">Chapter ${this.storyPage + 1}</span>
          <h3 style="font-size: 1.6rem; font-weight:800; margin-bottom:0.75rem;">${page.title}</h3>
          <p style="font-size: 1.15rem; line-height:1.7; margin-bottom: 1.5rem; color: var(--text-main);">
            "${page.text}"
          </p>

          <div style="background:var(--bg-card); padding:1.25rem; border-radius:var(--radius-lg); margin-bottom:1.5rem; border:1px solid var(--border-color);">
            <div style="font-weight:700; margin-bottom:0.75rem;">💡 Comprehension Check: ${page.question}</div>
            <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
              ${page.options.map((opt, i) => `
                <button class="btn btn-secondary btn-sm" onclick="KidsCorner.checkStoryAnswer(${i}, ${page.answer}, this)">
                  ${opt}
                </button>
              `).join("")}
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
            <button class="btn btn-primary" onclick="KidsCorner.readStoryPage()">
              🔊 Read Story Page Out Loud
            </button>
            <div style="display:flex; gap:0.5rem;">
              <button class="btn btn-secondary" onclick="KidsCorner.prevStoryPage()" ${this.storyPage === 0 ? "disabled" : ""}>
                ◀ Previous
              </button>
              <button class="btn btn-secondary" onclick="KidsCorner.nextStoryPage()" ${this.storyPage === this.storyPages.length - 1 ? "disabled" : ""}>
                Next ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  checkStoryAnswer(selected, correct, btn) {
    if (selected === correct) {
      btn.style.background = "var(--accent-emerald)";
      btn.style.color = "#fff";
      FluentPath.playSuccessChime();
      FluentPath.addGameCredits(15, "Story Reader Comprehension");
      FluentPath.showToast("Great listening! Correct answer! ⭐", "success");
    } else {
      btn.style.background = "var(--accent-rose)";
      btn.style.color = "#fff";
      FluentPath.showToast("Oops! Re-read the page carefully 📖", "error");
    }
  },

  readStoryPage() {
    const page = this.storyPages[this.storyPage];
    FluentPath.speakText(page.text);
  },

  nextStoryPage() {
    if (this.storyPage < this.storyPages.length - 1) {
      this.storyPage++;
      this.renderStory();
    }
  },

  prevStoryPage() {
    if (this.storyPage > 0) {
      this.storyPage--;
      this.renderStory();
    }
  },

  // 7. MEMORY MATCH GAME
  initMemoryGame() {
    const grid = document.getElementById("memory-grid");
    if (!grid) return;

    const items = ["Lion", "Bear", "Rabbit", "Panda", "Fox", "Owl"];
    const deck = [...items, ...items].sort(() => 0.5 - Math.random());
    this.memoryCards = deck;
    this.flippedCards = [];
    this.matchedPairs = 0;

    const statusEl = document.getElementById("memory-status");
    if (statusEl) statusEl.textContent = "Flip cards to find matching pairs! 🃏";

    grid.innerHTML = deck.map((item, index) => `
      <div class="memory-card" data-index="${index}" onclick="KidsCorner.handleMemoryClick(${index}, '${item}', this)">
        ❓
      </div>
    `).join("");
  },

  handleMemoryClick(index, item, cardEl) {
    if (cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) return;
    if (this.flippedCards.length >= 2) return;

    cardEl.classList.add("flipped");
    cardEl.innerHTML = `<div style="width:45px;height:45px;margin:auto;">${this.getIllustration(item)}</div>`;
    FluentPath.playClickBeep();
    this.flippedCards.push({ index, item, cardEl });

    if (this.flippedCards.length === 2) {
      const [first, second] = this.flippedCards;
      if (first.item === second.item) {
        first.cardEl.classList.add("matched");
        second.cardEl.classList.add("matched");
        this.matchedPairs++;
        this.flippedCards = [];
        FluentPath.playSuccessChime();

        if (this.matchedPairs === 6) {
          const statusEl = document.getElementById("memory-status");
          if (statusEl) statusEl.textContent = "🎉 YOU WON! +25 STAR COINS AWARDED!";
          FluentPath.addGameCredits(25, "Memory Match Champion");
        }
      } else {
        setTimeout(() => {
          first.cardEl.classList.remove("flipped");
          second.cardEl.classList.remove("flipped");
          first.cardEl.textContent = "❓";
          second.cardEl.textContent = "❓";
          this.flippedCards = [];
        }, 900);
      }
    }
  },

  // 8. ANIMAL & PHONICS QUIZ
  renderQuiz() {
    const container = document.getElementById("quiz-container");
    if (!container) return;

    const q = this.quizQuestions[this.quizCurrent];
    container.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <span class="badge badge-vibe" style="margin-bottom:0.5rem; display:inline-block;">Question ${this.quizCurrent + 1} of ${this.quizQuestions.length}</span>
        <div style="max-width:110px; margin:0.5rem auto;">
          ${this.getIllustration(q.imageName)}
        </div>
        <h3 style="font-size: 1.4rem; font-weight:700; margin-top:0.5rem;">${q.question}</h3>
      </div>
      <div class="quiz-options-grid">
        ${q.options.map((opt, i) => `
          <button class="quiz-option-btn" onclick="KidsCorner.handleQuizAnswer(${i}, ${q.answer}, this)">
            ${opt}
          </button>
        `).join("")}
      </div>
    `;
  },

  handleQuizAnswer(selected, correct, btn) {
    const btns = document.querySelectorAll(".quiz-option-btn");
    btns.forEach(b => b.disabled = true);

    if (selected === correct) {
      btn.classList.add("correct");
      FluentPath.playSuccessChime();
      FluentPath.addGameCredits(25, "Quiz Correct Answer");

      setTimeout(() => {
        this.quizCurrent = (this.quizCurrent + 1) % this.quizQuestions.length;
        this.renderQuiz();
      }, 1500);
    } else {
      btn.classList.add("wrong");
      btns[correct].classList.add("correct");
      setTimeout(() => {
        this.renderQuiz();
      }, 1800);
    }
  },

  buyReward(cost, title) {
    const success = FluentPath.spendGameCredits(cost, title);
    if (success) {
      const idStr = title.replace(/\s+/g, '-').toLowerCase();
      const el = document.getElementById(`reward-${idStr}`);
      if (el) {
        el.textContent = "Unlocked ✅";
        el.disabled = true;
        el.style.background = "var(--accent-emerald)";
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  KidsCorner.init();
});

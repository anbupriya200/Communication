/**
 * FluentPath - Vocabulary Interactive Flashcards & Engine (js/vocabulary.js)
 */

const vocabularyDatabase = [
  // 1. IELTS Vocabulary
  {
    id: 1,
    category: "ielts",
    word: "Ubiquitous",
    pos: "adjective",
    phonetic: "/juːˈbɪk.wɪ.təs/",
    meaning: "Present, appearing, or found everywhere simultaneously.",
    synonyms: ["Omnipresent", "Pervasive", "Universal"],
    antonyms: ["Rare", "Scarce", "Infrequent"],
    example: "Smartphones and mobile computing have become ubiquitous in modern urban life."
  },
  {
    id: 2,
    category: "ielts",
    word: "Mitigate",
    pos: "verb",
    phonetic: "/ˈmɪt.ɪ.ɡeɪt/",
    meaning: "To make something bad, severe, or painful less harmful or harsh.",
    synonyms: ["Alleviate", "Attenuate", "Diminish"],
    antonyms: ["Aggravate", "Exacerbate", "Worsen"],
    example: "Sustainable building regulations help mitigate the negative impacts of urbanization on the environment."
  },
  {
    id: 3,
    category: "ielts",
    word: "Substantiate",
    pos: "verb",
    phonetic: "/səbˈstæn.ʃi.eɪt/",
    meaning: "To provide evidence or proof to support the truth of a claim.",
    synonyms: ["Corroborate", "Validate", "Authenticate"],
    antonyms: ["Disprove", "Refute", "Contradict"],
    example: "Candidates must substantiate their arguments with concrete historical or empirical evidence."
  },
  {
    id: 4,
    category: "ielts",
    word: "Exemplary",
    pos: "adjective",
    phonetic: "/ɪɡˈzem.plər.i/",
    meaning: "Serving as a desirable model; representing the best of its kind.",
    synonyms: ["Commendable", "Flawless", "Sterling"],
    antonyms: ["Deplorable", "Deficient", "Unacceptable"],
    example: "The hospital was awarded international accreditation for its exemplary patient safety standards."
  },

  // 2. Academic English
  {
    id: 5,
    category: "academic",
    word: "Paradigm",
    pos: "noun",
    phonetic: "/ˈpær.ə.daɪm/",
    meaning: "A typical example, pattern, or overarching model of something.",
    synonyms: ["Archetype", "Standard", "Framework"],
    antonyms: ["Anomaly", "Aberration", "Deviation"],
    example: "Quantum physics triggered an unprecedented paradigm shift in scientific understanding."
  },
  {
    id: 6,
    category: "academic",
    word: "Cognizant",
    pos: "adjective",
    phonetic: "/ˈkɒɡ.nɪ.zənt/",
    meaning: "Having knowledge or awareness; being fully conscious of facts.",
    synonyms: ["Apprised", "Conscious", "Mindful"],
    antonyms: ["Oblivious", "Ignorant", "Unaware"],
    example: "Researchers must remain cognizant of methodological biases when interpreting clinical trial results."
  },
  {
    id: 7,
    category: "academic",
    word: "Juxtaposition",
    pos: "noun",
    phonetic: "/ˌdʒʌk.stə.pəˈzɪʃ.ən/",
    meaning: "The fact of two things being placed close together with contrasting effect.",
    synonyms: ["Comparison", "Proximity", "Collocation"],
    antonyms: ["Separation", "Isolation", "Distance"],
    example: "The author uses the juxtaposition of extreme wealth and poverty to highlight social inequality."
  },

  // 3. Daily English
  {
    id: 8,
    category: "daily",
    word: "Reluctant",
    pos: "adjective",
    phonetic: "/rɪˈlʌk.tənt/",
    meaning: "Unwilling and hesitant; disinclined to take an action.",
    synonyms: ["Hesitant", "Unwilling", "Loath"],
    antonyms: ["Eager", "Enthusiastic", "Willing"],
    example: "He was reluctant to commit to weekend plans until his flight was officially confirmed."
  },
  {
    id: 9,
    category: "daily",
    word: "Overwhelmed",
    pos: "adjective",
    phonetic: "/ˌoʊ.vɚˈwelmd/",
    meaning: "Having an overwhelming amount of things to deal with or feeling strong emotion.",
    synonyms: ["Overburdened", "Swamped", "Overcome"],
    antonyms: ["Calm", "Unfazed", "In control"],
    example: "After moving into her new apartment, she felt overwhelmed by the endless unpacking tasks."
  },
  {
    id: 10,
    category: "daily",
    word: "Serendipity",
    pos: "noun",
    phonetic: "/ˌser.ənˈdɪp.ə.ti/",
    meaning: "The occurrence and development of events by chance in a happy or beneficial way.",
    synonyms: ["Good fortune", "Fluke", "Chance blessing"],
    antonyms: ["Misfortune", "Bad luck"],
    example: "Meeting her college mentor at the international conference was pure serendipity."
  },

  // 4. Education
  {
    id: 11,
    category: "education",
    word: "Pedagogy",
    pos: "noun",
    phonetic: "/ˈped.ə.ɡɒdʒ.i/",
    meaning: "The method and practice of teaching, especially as an academic subject.",
    synonyms: ["Instructional methodology", "Didactics", "Tutelage"],
    antonyms: ["Ignorance", "Unsystematic learning"],
    example: "Interactive flipped-classroom pedagogy has consistently increased student engagement."
  },
  {
    id: 12,
    category: "education",
    word: "Curriculum",
    pos: "noun",
    phonetic: "/kəˈrɪk.jə.ləm/",
    meaning: "The subjects comprising a course of study in a school or college.",
    synonyms: ["Syllabus", "Program of study", "Coursework"],
    antonyms: ["Extracurriculars"],
    example: "The university modernized its computer science curriculum to incorporate generative AI ethics."
  },

  // 5. Travel
  {
    id: 13,
    category: "travel",
    word: "Itinerary",
    pos: "noun",
    phonetic: "/aɪˈtɪn.ər.ər.i/",
    meaning: "A planned route or journey with documented stops and timings.",
    synonyms: ["Travel schedule", "Route", "Tour program"],
    antonyms: ["Impromptu trip"],
    example: "Their two-week European itinerary included guided excursions through Kyoto and Tokyo."
  },
  {
    id: 14,
    category: "travel",
    word: "Picturesque",
    pos: "adjective",
    phonetic: "/ˌpɪk.tʃərˈesk/",
    meaning: "Visually attractive, especially in a quaint, charming, or scenic way.",
    synonyms: ["Scenic", "Charming", "Idyllic"],
    antonyms: ["Unsightly", "Drab", "Ugly"],
    example: "The bus drove through picturesque alpine valleys dotted with historic wooden chalets."
  },

  // 6. Workplace
  {
    id: 15,
    category: "workplace",
    word: "Synergy",
    pos: "noun",
    phonetic: "/ˈsɪn.ə.dʒi/",
    meaning: "The interaction of cooperation of two organizations or agents to produce a combined effect greater than the sum.",
    synonyms: ["Collaboration", "Teamwork", "Symbiosis"],
    antonyms: ["Discord", "Counterproductivity"],
    example: "The cross-functional synergy between design and engineering sped up the product launch."
  },
  {
    id: 16,
    category: "workplace",
    word: "Accountability",
    pos: "noun",
    phonetic: "/əˌkaʊn.təˈbɪl.ə.ti/",
    meaning: "The fact or condition of being accountable; taking ownership and responsibility.",
    synonyms: ["Responsibility", "Answerability", "Liability"],
    antonyms: ["Irresponsibility", "Blame-shifting"],
    example: "Transparent project dashboards foster personal accountability across remote sprint teams."
  },

  // 7. Additional IELTS High-Band Vocabulary
  {
    id: 17,
    category: "ielts",
    word: "Proliferation",
    pos: "noun",
    phonetic: "/prəˌlɪf.əˈreɪ.ʃən/",
    meaning: "Rapid increase in the quantity or number of something.",
    synonyms: ["Rapid spread", "Escalation", "Multiplication"],
    antonyms: ["Depletion", "Decline", "Reduction"],
    example: "The rapid proliferation of digital streaming platforms has reshaped consumer entertainment habits."
  },
  {
    id: 18,
    category: "ielts",
    word: "Pragmatic",
    pos: "adjective",
    phonetic: "/præɡˈmæt.ɪk/",
    meaning: "Dealing with things sensibly and realistically in a way that is based on practical considerations.",
    synonyms: ["Practical", "Utilitarian", "Hardheaded"],
    antonyms: ["Idealistic", "Impractical", "Visionary"],
    example: "Policymakers need a pragmatic approach to renewable energy adoption that balances cost with sustainability."
  },
  {
    id: 19,
    category: "ielts",
    word: "Detrimental",
    pos: "adjective",
    phonetic: "/ˌdet.rɪˈmen.təl/",
    meaning: "Tending to cause harm or damage.",
    synonyms: ["Damaging", "Harmful", "Inimical"],
    antonyms: ["Beneficial", "Advantageous", "Favorable"],
    example: "Excessive screen time without breaks can have a detrimental effect on optical health."
  },
  {
    id: 20,
    category: "ielts",
    word: "Plausible",
    pos: "adjective",
    phonetic: "/ˈplɔː.zə.bəl/",
    meaning: "Seeming reasonable or probable; likely to be true.",
    synonyms: ["Credible", "Believable", "Feasible"],
    antonyms: ["Implausible", "Far-fetched", "Unlikely"],
    example: "The detective presented a plausible explanation for the disappearance of the missing manuscripts."
  },
  {
    id: 21,
    category: "ielts",
    word: "Discrepancy",
    pos: "noun",
    phonetic: "/dɪˈskrep.ən.si/",
    meaning: "A lack of compatibility or similarity between two or more facts.",
    synonyms: ["Inconsistency", "Divergence", "Mismatch"],
    antonyms: ["Consistency", "Accord", "Congruence"],
    example: "Auditors identified a substantial discrepancy between quarterly receipts and bank deposits."
  },
  {
    id: 22,
    category: "ielts",
    word: "Comprehensive",
    pos: "adjective",
    phonetic: "/ˌkɒm.prɪˈhen.sɪv/",
    meaning: "Including or dealing with all or nearly all elements or aspects of something.",
    synonyms: ["Exhaustive", "All-inclusive", "Panoramic"],
    antonyms: ["Selective", "Partial", "Incomplete"],
    example: "The university medical center offers a comprehensive health screening package for students."
  },

  // 8. Additional Academic English
  {
    id: 23,
    category: "academic",
    word: "Empirical",
    pos: "adjective",
    phonetic: "/ɪmˈpɪr.ɪ.kəl/",
    meaning: "Based on, concerned with, or verifiable by observation or experience rather than theory.",
    synonyms: ["Experiential", "Observational", "Concrete"],
    antonyms: ["Theoretical", "Hypothetical", "Conjectural"],
    example: "The hypothesis was validated by rigorous empirical data gathered across five independent laboratories."
  },
  {
    id: 24,
    category: "academic",
    word: "Dichotomy",
    pos: "noun",
    phonetic: "/daɪˈkɒt.ə.mi/",
    meaning: "A division or contrast between two things that are represented as being opposed or entirely different.",
    synonyms: ["Polarity", "Contrast", "Bifurcation"],
    antonyms: ["Unity", "Continuum", "Harmony"],
    example: "Sociologists challenge the rigid dichotomy between urban and rural cultural identities."
  },
  {
    id: 25,
    category: "academic",
    word: "Correlation",
    pos: "noun",
    phonetic: "/ˌkɒr.əˈleɪ.ʃən/",
    meaning: "A mutual relationship or connection between two or more things.",
    synonyms: ["Interconnection", "Association", "Link"],
    antonyms: ["Disconnection", "Independence"],
    example: "Researchers discovered a positive correlation between daily aerobic exercise and cognitive retention in adults."
  },
  {
    id: 26,
    category: "academic",
    word: "Disseminate",
    pos: "verb",
    phonetic: "/dɪˈsem.ɪ.neɪt/",
    meaning: "Spread or disperse something, especially information, widely.",
    synonyms: ["Broadcast", "Circulate", "Promulgate"],
    antonyms: ["Suppress", "Conceal", "Withhold"],
    example: "Open-access journals help disseminate breakthrough scientific discoveries to scholars worldwide."
  },

  // 9. Additional Daily English
  {
    id: 27,
    category: "daily",
    word: "Resilient",
    pos: "adjective",
    phonetic: "/rɪˈzɪl.jənt/",
    meaning: "Able to withstand or recover quickly from difficult conditions or adversity.",
    synonyms: ["Tenacious", "Indomitable", "Adaptable"],
    antonyms: ["Fragile", "Vulnerable", "Brittle"],
    example: "The local community remained resilient and united despite the severe winter storm."
  },
  {
    id: 28,
    category: "daily",
    word: "Spontaneous",
    pos: "adjective",
    phonetic: "/spɒnˈteɪ.ni.əs/",
    meaning: "Performed or occurring as a result of a sudden impulse without premeditation.",
    synonyms: ["Impulsive", "Unplanned", "Instinctive"],
    antonyms: ["Calculated", "Premeditated", "Rehearsed"],
    example: "They packed their backpacks for a spontaneous road trip down the coastal highway."
  },
  {
    id: 29,
    category: "daily",
    word: "Empathetic",
    pos: "adjective",
    phonetic: "/ˌem.pəˈθet.ɪk/",
    meaning: "Showing an ability to understand and share the feelings of another person.",
    synonyms: ["Compassionate", "Sensitive", "Considerate"],
    antonyms: ["Callous", "Unsympathetic", "Cold"],
    example: "Her empathetic listening made troubled friends feel heard and comforted."
  },
  {
    id: 30,
    category: "daily",
    word: "Tedious",
    pos: "adjective",
    phonetic: "/ˈtiː.di.əs/",
    meaning: "Too long, slow, or dull; tiresome or monotonous.",
    synonyms: ["Wearisome", "Monotonous", "Banal"],
    antonyms: ["Thrilling", "Exciting", "Stimulating"],
    example: "Filing receipts manually was a tedious chore that software automation quickly eliminated."
  },

  // 10. Additional Education
  {
    id: 31,
    category: "education",
    word: "Cognitive",
    pos: "adjective",
    phonetic: "/ˈkɒɡ.nə.tɪv/",
    meaning: "Relating to conscious intellectual activity such as thinking, reasoning, or remembering.",
    synonyms: ["Intellectual", "Mental", "Cerebral"],
    antonyms: ["Physical", "Instinctive"],
    example: "Bilingual upbringing stimulates greater cognitive flexibility in young children."
  },
  {
    id: 32,
    category: "education",
    word: "Facilitate",
    pos: "verb",
    phonetic: "/fəˈsɪl.ɪ.teɪt/",
    meaning: "Make an action or process easy or easier to accomplish.",
    synonyms: ["Expedite", "Assist", "Foster"],
    antonyms: ["Hinder", "Impede", "Obstruct"],
    example: "Interactive digital whiteboards facilitate collaborative student discussions."
  },
  {
    id: 33,
    category: "education",
    word: "Retention",
    pos: "noun",
    phonetic: "/rɪˈten.ʃən/",
    meaning: "The continued use, existence, or possession of something; ability to retain knowledge.",
    synonyms: ["Memorization", "Holding", "Preservation"],
    antonyms: ["Loss", "Forgetting", "Surrender"],
    example: "Spaced repetition flashcards significantly improve vocabulary retention over months."
  },

  // 11. Additional Travel
  {
    id: 34,
    category: "travel",
    word: "Hospitality",
    pos: "noun",
    phonetic: "/ˌhɒs.pɪˈtæl.ə.ti/",
    meaning: "The friendly and generous reception and entertainment of guests, visitors, or strangers.",
    synonyms: ["Cordiality", "Welcoming spirit", "Warmth"],
    antonyms: ["Inhospitality", "Hostility", "Aloofness"],
    example: "The villagers greeted weary travelers with genuine hospitality and hot spiced tea."
  },
  {
    id: 35,
    category: "travel",
    word: "Breathtaking",
    pos: "adjective",
    phonetic: "/ˈbreθˌteɪ.kɪŋ/",
    meaning: "Astonishing or awe-inspiring in quality, beauty, or scale.",
    synonyms: ["Stunning", "Magnificent", "Spectacular"],
    antonyms: ["Mediocre", "Unimpressive", "Ordinary"],
    example: "Hikers paused at the summit to gaze upon breathtaking panoramic views of snow-capped peaks."
  },
  {
    id: 36,
    category: "travel",
    word: "Cosmopolitan",
    pos: "adjective",
    phonetic: "/ˌkɒz.məˈpɒl.ɪ.tən/",
    meaning: "Familiar with and at ease in many different countries and cultures.",
    synonyms: ["Global", "International", "Cultured"],
    antonyms: ["Insular", "Provincial", "Parochial"],
    example: "London is celebrated as a bustling cosmopolitan metropolis where hundreds of languages are spoken."
  },

  // 12. Additional Workplace
  {
    id: 37,
    category: "workplace",
    word: "Leverage",
    pos: "verb",
    phonetic: "/ˈlev.ər.ɪdʒ/",
    meaning: "Use something to maximum advantage.",
    synonyms: ["Capitalize on", "Exploit", "Utilize"],
    antonyms: ["Squander", "Disregard", "Waste"],
    example: "Startups often leverage cloud computing infrastructure to scale operations rapidly on tight budgets."
  },
  {
    id: 38,
    category: "workplace",
    word: "Consensus",
    pos: "noun",
    phonetic: "/kənˈsen.səs/",
    meaning: "A general agreement arrived at by a group.",
    synonyms: ["Accord", "Harmony", "Unanimity"],
    antonyms: ["Dissension", "Discord", "Dispute"],
    example: "After lively debate, the board reached a unanimous consensus on the expansion strategy."
  },
  {
    id: 39,
    category: "workplace",
    word: "Benchmark",
    pos: "noun",
    phonetic: "/ˈbentʃ.mɑːk/",
    meaning: "A standard or point of reference against which things may be compared or assessed.",
    synonyms: ["Criterion", "Yardstick", "Touchstone"],
    antonyms: ["Anomaly", "Aberration"],
    example: "Customer response time serves as our department's primary benchmark for service excellence."
  },

  // 13. Idioms & Conversational Phrases
  {
    id: 40,
    category: "idioms",
    word: "Bite the bullet",
    pos: "idiom",
    phonetic: "/baɪt ðə ˈbʊl.ɪt/",
    meaning: "To endure a painful, difficult, or undesirable situation that is unavoidable.",
    synonyms: ["Face the music", "Grin and bear it", "Take the plunge"],
    antonyms: ["Procrastinate", "Shirk", "Evade"],
    example: "He hated public speaking, but decided to bite the bullet and deliver the keynote address."
  },
  {
    id: 41,
    category: "idioms",
    word: "Break the ice",
    pos: "idiom",
    phonetic: "/breɪk ði aɪs/",
    meaning: "To initiate social conversation in an awkward or unfamiliar gathering.",
    synonyms: ["Warm up", "Set people at ease", "Kickstart talk"],
    antonyms: ["Clam up", "Stiffen"],
    example: "The workshop facilitator played a fun name game to break the ice among new attendees."
  },
  {
    id: 42,
    category: "idioms",
    word: "Call it a day",
    pos: "idiom",
    phonetic: "/kɔːl ɪt ə deɪ/",
    meaning: "To stop working on something, especially when you have done enough.",
    synonyms: ["Pack up", "Wrap up", "Wind down"],
    antonyms: ["Keep grinding", "Burn the candle"],
    example: "After compiling fifteen audit sheets, the team decided to call it a day and grab dinner."
  },
  {
    id: 43,
    category: "idioms",
    word: "Burn the midnight oil",
    pos: "idiom",
    phonetic: "/bɜːn ðə ˈmɪd.naɪt ɔɪl/",
    meaning: "To work late into the night, especially studying or working on a deadline.",
    synonyms: ["Work late", "Pull an all-nighter"],
    antonyms: ["Sleep early", "Slack off"],
    example: "Law students had to burn the midnight oil preparing case briefs for the upcoming mock trials."
  },
  {
    id: 44,
    category: "idioms",
    word: "See eye to eye",
    pos: "idiom",
    phonetic: "/siː aɪ tuː aɪ/",
    meaning: "To agree with someone fully on a matter.",
    synonyms: ["Concur", "Harmonize", "Agree completely"],
    antonyms: ["Clash", "Disagree", "Differ"],
    example: "While the partners disagreed on marketing tone, they saw eye to eye on financial discipline."
  },
  {
    id: 45,
    category: "workplace",
    word: "Feasible",
    pos: "adjective",
    phonetic: "/ˈfiː.zə.bəl/",
    meaning: "Possible to do easily or conveniently; workable.",
    synonyms: ["Viable", "Attainable", "Practicable"],
    antonyms: ["Infeasible", "Impossible", "Unworkable"],
    example: "The engineering team evaluated whether a three-month mobile redesign was technically feasible."
  },
  {
    id: 46,
    category: "daily",
    word: "Ambivalent",
    pos: "adjective",
    phonetic: "/æmˈbɪv.ə.lənt/",
    meaning: "Having mixed feelings or contradictory ideas about something or someone.",
    synonyms: ["Equivocal", "Undecided", "Conflicted"],
    antonyms: ["Decisive", "Unwavering", "Certain"],
    example: "She felt ambivalent about accepting the overseas promotion because it required leaving family behind."
  },
  {
    id: 47,
    category: "ielts",
    word: "Nuance",
    pos: "noun",
    phonetic: "/ˈnjuː.ɑːns/",
    meaning: "A subtle difference in or shade of meaning, expression, or sound.",
    synonyms: ["Subtlety", "Nicety", "Fine distinction"],
    antonyms: ["Overtness", "Simplicity"],
    example: "Skilled diplomats understand the subtle nuances of body language and vocal inflection."
  },
  {
    id: 48,
    category: "education",
    word: "Erudite",
    pos: "adjective",
    phonetic: "/ˈer.ʊ.daɪt/",
    meaning: "Having or showing great knowledge or learning; scholarly.",
    synonyms: ["Scholarly", "Cultured", "Intellectual"],
    antonyms: ["Uneducated", "Ignorant", "Illiterate"],
    example: "The professor delivered an erudite lecture on Shakespearean socio-political satire."
  },
  {
    id: 49,
    category: "travel",
    word: "Tranquil",
    pos: "adjective",
    phonetic: "/ˈtræŋ.kwɪl/",
    meaning: "Free from disturbance; calm, peaceful, and serene.",
    synonyms: ["Serene", "Placid", "Untroubled"],
    antonyms: ["Chaotic", "Turbulent", "Frenetic"],
    example: "At sunrise, the mirror-like lake was completely tranquil with gentle morning mist rising."
  },
  {
    id: 50,
    category: "workplace",
    word: "Agile",
    pos: "adjective",
    phonetic: "/ˈædʒ.aɪl/",
    meaning: "Able to move, think, or adapt quickly and gracefully.",
    synonyms: ["Nimble", "Adaptable", "Supple"],
    antonyms: ["Sluggish", "Rigid", "Clumsy"],
    example: "Modern software development requires an agile mindset to adapt to changing user feedback."
  },
  {
    id: 51,
    category: "ielts",
    word: "Inevitable",
    pos: "adjective",
    phonetic: "/ɪnˈev.ɪ.tə.bəl/",
    meaning: "Certain to happen; unavoidable.",
    synonyms: ["Inescapable", "Bound to happen", "Fated"],
    antonyms: ["Avoidable", "Preventable", "Uncertain"],
    example: "With climate change accelerating, a global shift toward renewable energy has become inevitable."
  },
  {
    id: 52,
    category: "daily",
    word: "Gregarious",
    pos: "adjective",
    phonetic: "/ɡrɪˈɡeə.ri.əs/",
    meaning: "Fond of company; sociable and enjoying being around others.",
    synonyms: ["Sociable", "Convivial", "Outgoing"],
    antonyms: ["Reclusive", "Introverted", "Solitary"],
    example: "Her gregarious personality made her popular at orientation events and social mixers."
  }
];

class VocabApp {
  constructor() {
    this.words = [...vocabularyDatabase];
    this.filteredWords = [...this.words];
    this.currentIndex = 0;
    this.savedWordIds = JSON.parse(localStorage.getItem("fluentpath_saved_words") || "[]");
    this.learnedWordIds = JSON.parse(localStorage.getItem("fluentpath_learned_words") || "[]");
    this.currentCategory = "all";
    this.searchQuery = "";
  }

  init() {
    this.render();
    this.setupListeners();
  }

  setupListeners() {
    const categoryBtns = document.querySelectorAll(".vocab-cat-btn");
    categoryBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryBtns.forEach(b => b.classList.remove("active", "btn-primary"));
        btn.classList.add("active", "btn-primary");
        this.filterCategory(btn.dataset.category);
      });
    });

    const searchInput = document.getElementById("vocab-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.applyFilters();
      });
    }
  }

  filterCategory(cat) {
    this.currentCategory = cat;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredWords = this.words.filter(item => {
      const matchCat = this.currentCategory === "all" || item.category === this.currentCategory;
      const matchSearch = !this.searchQuery || 
        item.word.toLowerCase().includes(this.searchQuery) ||
        item.meaning.toLowerCase().includes(this.searchQuery);
      return matchCat && matchSearch;
    });

    this.currentIndex = 0;
    this.render();
  }

  getCurrentWord() {
    if (!this.filteredWords.length) return null;
    return this.filteredWords[this.currentIndex];
  }

  nextWord() {
    if (!this.filteredWords.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.filteredWords.length;
    FluentPath.playClickBeep();
    this.render();
  }

  prevWord() {
    if (!this.filteredWords.length) return;
    this.currentIndex = (this.currentIndex - 1 + this.filteredWords.length) % this.filteredWords.length;
    FluentPath.playClickBeep();
    this.render();
  }

  toggleSave(wordId) {
    const idx = this.savedWordIds.indexOf(wordId);
    if (idx > -1) {
      this.savedWordIds.splice(idx, 1);
      FluentPath.showToast("Removed from favorites", "info");
    } else {
      this.savedWordIds.push(wordId);
      FluentPath.playSuccessChime();
      FluentPath.showToast("Saved to favorites!", "success");
    }
    localStorage.setItem("fluentpath_saved_words", JSON.stringify(this.savedWordIds));
    this.render();
  }

  markAsLearned(wordId) {
    if (!this.learnedWordIds.includes(wordId)) {
      this.learnedWordIds.push(wordId);
      localStorage.setItem("fluentpath_learned_words", JSON.stringify(this.learnedWordIds));
      
      const user = FluentPath.getUser();
      if (user) {
        user.vocabLearned = (user.vocabLearned || 248) + 1;
        user.xp = (user.xp || 1850) + 15;
        FluentPath.saveUser(user);
      }
      
      FluentPath.playSuccessChime();
      FluentPath.showToast("Marked as Learned! +15 XP", "success");
    } else {
      FluentPath.showToast("You have already mastered this word!", "info");
    }
    this.nextWord();
  }

  speakCurrent() {
    const item = this.getCurrentWord();
    if (item) {
      FluentPath.speakText(item.word);
    }
  }

  render() {
    const container = document.getElementById("vocab-card-display");
    const progressText = document.getElementById("vocab-progress-text");
    const progressBar = document.getElementById("vocab-progress-bar");

    if (!container) return;

    if (!this.filteredWords.length) {
      container.innerHTML = `
        <div class="card" style="text-align: center; padding: 3rem 1.5rem;">
          <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</p>
          <h3>No vocabulary words match your search</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Try selecting a different category or clearing the search box.</p>
        </div>
      `;
      if (progressText) progressText.textContent = "0 of 0";
      if (progressBar) progressBar.style.width = "0%";
      return;
    }

    const item = this.getCurrentWord();
    const isSaved = this.savedWordIds.includes(item.id);
    const isLearned = this.learnedWordIds.includes(item.id);
    const currentNum = this.currentIndex + 1;
    const totalNum = this.filteredWords.length;

    if (progressText) progressText.textContent = `${currentNum} of ${totalNum} words`;
    if (progressBar) progressBar.style.width = `${(currentNum / totalNum) * 100}%`;

    container.innerHTML = `
      <div class="vocab-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <span class="badge badge-primary">${item.category.toUpperCase()}</span>
          <div style="display: flex; gap: 0.5rem;">
            ${isLearned ? `<span class="badge badge-emerald">✓ Learned</span>` : ''}
            <button class="btn btn-secondary btn-sm" onclick="vocabApp.toggleSave(${item.id})" style="border-radius: var(--radius-full);">
              ${isSaved ? '❤️ Saved' : '🤍 Save'}
            </button>
          </div>
        </div>

        <h2 class="vocab-word">${item.word}</h2>
        <div class="vocab-pronounce">
          <span>${item.pos} • ${item.phonetic}</span>
          <button class="btn btn-outline-primary btn-sm btn-icon-only" onclick="vocabApp.speakCurrent()" title="Listen Pronunciation">
            🔊
          </button>
        </div>

        <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem; text-align: left;">
          <h4 style="font-size: 0.95rem; margin-bottom: 0.35rem; color: var(--primary);">Definition:</h4>
          <p style="font-size: 1.05rem; color: var(--text-main); font-weight: 500;">${item.meaning}</p>
        </div>

        <div style="text-align: left; margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Example Sentence:</h4>
          <blockquote style="font-style: italic; border-left: 3px solid var(--primary); padding-left: 0.85rem; color: var(--text-main);">
            "${item.example}"
          </blockquote>
        </div>

        <div class="vocab-pill-row" style="text-align: left; justify-content: flex-start;">
          <strong style="font-size: 0.85rem; color: var(--text-muted); align-self: center;">Synonyms:</strong>
          ${item.synonyms.map(s => `<span class="badge badge-neutral">${s}</span>`).join(" ")}
        </div>

        <div class="vocab-pill-row" style="text-align: left; justify-content: flex-start;">
          <strong style="font-size: 0.85rem; color: var(--text-muted); align-self: center;">Antonyms:</strong>
          ${item.antonyms.map(a => `<span class="badge badge-rose">${a}</span>`).join(" ")}
        </div>

        <div style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
          <button class="btn btn-secondary" onclick="vocabApp.prevWord()" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ← Previous
          </button>
          <button class="btn btn-outline-primary" onclick="vocabApp.speakCurrent()">
            🔊 Listen
          </button>
          <button class="btn btn-emerald" onclick="vocabApp.markAsLearned(${item.id})">
            ✅ I Know This Word
          </button>
          <button class="btn btn-primary" onclick="vocabApp.nextWord()">
            Next Word ➡️
          </button>
        </div>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.vocabApp = new VocabApp();
  vocabApp.init();
});

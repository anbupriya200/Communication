/**
 * FluentPath - Comprehensive Grammar Database (10 Core Topics)
 */

const grammarDatabase = {
  "tenses": {
    id: "tenses",
    title: "Tenses & Aspect",
    icon: "⏳",
    description: "Mastering Past, Present, and Future structures with Simple, Continuous, and Perfect nuances.",
    explanation: "English verbs encode both tense (time: past, present, future) and aspect (the state of the action: simple, continuous, perfect, perfect continuous). In IELTS Writing and Speaking, displaying a balanced variety of complex tenses like Present Perfect and Past Perfect demonstrates grammatical range.",
    rules: [
      { name: "Present Perfect", formula: "Subject + have/has + Past Participle (V3)", use: "Actions occurring at an indefinite time before now, or continuing up to the present." },
      { name: "Past Perfect", formula: "Subject + had + Past Participle (V3)", use: "An action completed prior to another past event." },
      { name: "Future Continuous", formula: "Subject + will be + V-ing", use: "Actions that will be ongoing at a specific future moment." }
    ],
    examples: [
      { sentence: "The government has implemented several green energy policies since 2015.", highlight: "has implemented (Present Perfect for ongoing relevance)" },
      { sentence: "By the time the researchers published their findings, the virus had mutated.", highlight: "had mutated (Past Perfect before another past action)" }
    ],
    quiz: [
      {
        question: "Choose the correct tense: 'By next December, our team _______ the comprehensive urban transit project.'",
        options: ["will finish", "will have finished", "is finishing", "had finished"],
        correctAnswer: 1,
        explanation: "Future Perfect ('will have finished') is used because the action will be completed prior to a designated future benchmark ('by next December')."
      },
      {
        question: "Select the sentence with accurate tense usage for IELTS academic writing:",
        options: [
          "Between 2010 and 2020, carbon emissions increased steadily.",
          "Between 2010 and 2020, carbon emissions have increased steadily.",
          "Between 2010 and 2020, carbon emissions are increasing steadily.",
          "Between 2010 and 2020, carbon emissions will increase steadily."
        ],
        correctAnswer: 0,
        explanation: "Simple Past ('increased') must be used because the timeframe (2010-2020) is completely in the past and finished."
      }
    ]
  },

  "articles": {
    id: "articles",
    title: "Articles (A, An, The)",
    icon: "🔤",
    description: "Definite vs. indefinite articles, countable/uncountable nouns, and zero article conventions.",
    explanation: "Articles indicate whether a noun refers to something specific ('the') or general/unspecified ('a' / 'an'). Uncountable nouns and generic plurals typically take the zero article unless modified specifically.",
    rules: [
      { name: "Indefinite (A / An)", formula: "a + consonant sound / an + vowel sound", use: "First mention of singular countable nouns." },
      { name: "Definite (The)", formula: "the + any noun", use: "Specific, unique, or previously identified entities." },
      { name: "Zero Article", formula: "No article", use: "Plural or uncountable nouns used in a general sense (e.g., 'Water is vital')." }
    ],
    examples: [
      { sentence: "The university introduced a groundbreaking curriculum.", highlight: "'The' specific university, 'a' new singular countable concept." },
      { sentence: "Knowledge is power in the digital era.", highlight: "Zero article with uncountable 'Knowledge'." }
    ],
    quiz: [
      {
        question: "Select the appropriate article: 'She was chosen as _____ university's representative.'",
        options: ["a", "an", "the", "zero article"],
        correctAnswer: 2,
        explanation: "'The' is needed because 'university's representative' is a specific, unique title in this context."
      }
    ]
  },

  "prepositions": {
    id: "prepositions",
    title: "Prepositions of Time & Place",
    icon: "📍",
    description: "Precision with in, on, at, by, through, and idiomatic dependent prepositions.",
    explanation: "Prepositions establish spatial, temporal, or logical relationships. Common errors in IELTS involve confusing 'at' (precise point), 'on' (surfaces, days), and 'in' (enclosed areas, months, years), or misusing dependent prepositions with verbs and adjectives.",
    rules: [
      { name: "Time: At / On / In", formula: "at 5 PM / on Monday / in 2026", use: "At for clock time, On for days/dates, In for months/years/centuries." },
      { name: "Dependent Prepositions", formula: "rely on, succeed in, capable of", use: "Specific verbs and adjectives require fixed prepositions." }
    ],
    examples: [
      { sentence: "The international climate summit commenced on October 12th in Geneva.", highlight: "'on' for specific date, 'in' for city." }
    ],
    quiz: [
      {
        question: "Which preposition accurately completes: 'The government aims to invest heavily _____ infrastructure.'?",
        options: ["on", "in", "to", "at"],
        correctAnswer: 1,
        explanation: "The verb 'invest' takes the dependent preposition 'in'."
      }
    ]
  },

  "modals": {
    id: "modals",
    title: "Modal Verbs & Hedging",
    icon: "💡",
    description: "Expressing ability, probability, advice, obligation, and academic hedging.",
    explanation: "In academic English and IELTS Writing Task 2, modal verbs (may, might, could, should, would) are vital for 'hedging'—avoiding overly absolute statements that cannot be definitively proven.",
    rules: [
      { name: "Hedging Probability", formula: "may / might / could + V1", use: "Softens claims (e.g., 'This could trigger economic shifts')." },
      { name: "Deduction", formula: "must have / cannot have + V3", use: "Logical conclusions about past occurrences." }
    ],
    examples: [
      { sentence: "Excessive screen time could potentially impair adolescent sleep cycles.", highlight: "'could potentially' illustrates effective academic caution." }
    ],
    quiz: [
      {
        question: "Identify the best academic hedging: 'Urbanization _______ cause strain on resources.'",
        options: ["will always", "can undoubtedly", "may significantly", "must certainly"],
        correctAnswer: 2,
        explanation: "'May significantly' provides the measured academic tone required in IELTS band 7+ essays."
      }
    ]
  },

  "subject-verb-agreement": {
    id: "subject-verb-agreement",
    title: "Subject-Verb Agreement",
    icon: "⚖️",
    description: "Aligning singular and plural subjects with verbs across complex clauses.",
    explanation: "Verbs must agree in number (singular vs. plural) with their true grammatical subjects, even when intervened by prepositional phrases, relative clauses, or collective nouns.",
    rules: [
      { name: "Intervening Phrases", formula: "The box of old books is heavy.", use: "The subject is 'box' (singular), not 'books'." },
      { name: "Neither / Either", formula: "Neither the teacher nor the students were present.", use: "Verb agrees with the closer subject in correlated pairs." }
    ],
    examples: [
      { sentence: "A wide variety of technological solutions is available.", highlight: "Singular agreement with 'variety'." }
    ],
    quiz: [
      {
        question: "Choose the correct verb: 'The increase in global temperatures _______ serious concerns.'",
        options: ["raise", "raises", "have raised", "are raising"],
        correctAnswer: 1,
        explanation: "The true subject is 'The increase' (singular), so 'raises' is correct."
      }
    ]
  },

  "active-passive-voice": {
    id: "active-passive-voice",
    title: "Active & Passive Voice",
    icon: "🔄",
    description: "Using the passive voice for objectivity, process descriptions, and scientific reports.",
    explanation: "Passive voice (be + past participle) places emphasis on the action or receiver rather than the agent. It is essential in IELTS Writing Task 1 (Process diagrams) and academic research papers where objectivity is paramount.",
    rules: [
      { name: "Passive Formula", formula: "Subject + appropriate form of 'to be' + Past Participle (V3)", use: "Focusing on the result or process rather than the performer." }
    ],
    examples: [
      { sentence: "The harvested coffee beans are dried in the sun for two weeks.", highlight: "Standard IELTS Task 1 passive process description." }
    ],
    quiz: [
      {
        question: "Convert to passive: 'The city council approved the development plan.'",
        options: [
          "The development plan was approved by the city council.",
          "The development plan has been approved.",
          "The development plan is approved by the council.",
          "The council had approved the development plan."
        ],
        correctAnswer: 0,
        explanation: "Past simple passive requires 'was + approved'."
      }
    ]
  },

  "conditionals": {
    id: "conditionals",
    title: "Conditionals (Zero to Mixed)",
    icon: "🔀",
    description: "Zero, First, Second, Third, and Mixed conditionals for hypothetical reasoning.",
    explanation: "Conditionals describe cause-and-effect relationships or hypothetical situations. Using Second and Third conditionals in IELTS essays shows high-level grammatical sophistication.",
    rules: [
      { name: "Second Conditional", formula: "If + Past Simple, would + V1", use: "Hypothetical or unreal present/future situation." },
      { name: "Third Conditional", formula: "If + Past Perfect, would have + V3", use: "Imagining a different past outcome." }
    ],
    examples: [
      { sentence: "If renewable energy subsidies were expanded, emissions would decrease rapidly.", highlight: "Second conditional for policy recommendation." }
    ],
    quiz: [
      {
        question: "Complete the sentence: 'If governments _______ earlier, the environmental damage would have been averted.'",
        options: ["acted", "had acted", "would act", "have acted"],
        correctAnswer: 1,
        explanation: "Third conditional requires 'had acted' in the if-clause."
      }
    ]
  },

  "reported-speech": {
    id: "reported-speech",
    title: "Reported Speech",
    icon: "💬",
    description: "Transforming direct quotes into indirect statements with tense shifts.",
    explanation: "Reported speech conveys what someone else expressed without quoting them word-for-word. It requires backshifting of tenses and adjustment of pronouns and time adverbs.",
    rules: [
      { name: "Backshifting", formula: "Present Simple ➔ Past Simple; Present Perfect ➔ Past Perfect", use: "Reflecting that the statement occurred in the past." }
    ],
    examples: [
      { sentence: "The researcher stated that the survey results confirmed the primary hypothesis.", highlight: "'confirmed' backshifted from present direct speech." }
    ],
    quiz: [
      {
        question: "Direct: 'I am reviewing the data,' she said. Reported: She said that she _______ the data.",
        options: ["is reviewing", "was reviewing", "had reviewed", "reviewed"],
        correctAnswer: 1,
        explanation: "Present continuous ('am reviewing') backshifts to past continuous ('was reviewing')."
      }
    ]
  },

  "relative-clauses": {
    id: "relative-clauses",
    title: "Relative Clauses (Defining & Non-Defining)",
    icon: "🔗",
    description: "Connecting ideas with who, which, that, where, and whose.",
    explanation: "Relative clauses add essential information (defining) or extra background detail (non-defining, enclosed by commas). They are crucial for creating complex compound sentences in IELTS Writing.",
    rules: [
      { name: "Defining Clause", formula: "No commas; 'that' or 'which'", use: "Identifies specifically which entity is meant." },
      { name: "Non-Defining Clause", formula: "Set off by commas; only 'which/who'", use: "Provides bonus descriptive information." }
    ],
    examples: [
      { sentence: "Solar panels, which generate clean electricity, are becoming more affordable.", highlight: "Non-defining relative clause adding extra context." }
    ],
    quiz: [
      {
        question: "Which sentence has correct punctuation for a non-defining relative clause?",
        options: [
          "The university, which was founded in 1904, has a global reputation.",
          "The university that was founded in 1904, has a global reputation.",
          "The university which was founded in 1904 has a global reputation.",
          "The university, that was founded in 1904, has a global reputation."
        ],
        correctAnswer: 0,
        explanation: "Non-defining relative clauses take commas and use 'which', never 'that'."
      }
    ]
  },

  "conjunctions": {
    id: "conjunctions",
    title: "Conjunctions & Discourse Markers",
    icon: "🪢",
    description: "Coordinating, subordinating, and correlative conjunctions for coherence and cohesion.",
    explanation: "Discourse markers and cohesive conjunctions (Furthermore, Consequently, However, Whereas) guide the reader through your arguments. Mastering them directly elevates your Coherence & Cohesion band score.",
    rules: [
      { name: "Contrast", formula: "Whereas, In contrast, Nonetheless", use: "Drawing sharp distinctions between ideas." },
      { name: "Addition & Cause", formula: "Furthermore, Moreover, Owing to", use: "Extending logic or attributing causation." }
    ],
    examples: [
      { sentence: "Electric vehicles reduce urban smog; nonetheless, battery disposal remains an ecological challenge.", highlight: "'nonetheless' used as an effective transition." }
    ],
    quiz: [
      {
        question: "Choose the conjunction indicating contrast: 'Public transport was subsidized; _______, ticket prices remained high.'",
        options: ["consequently", "furthermore", "nevertheless", "similarly"],
        correctAnswer: 2,
        explanation: "'Nevertheless' conveys concessive contrast ('despite that')."
      }
    ]
  }
};

window.grammarDatabase = grammarDatabase;

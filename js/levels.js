/**
 * FluentPath - Duolingo-Style Levels Path Controller (js/levels.js)
 * Features: Units, Stepping Stone Nodes, Lives/Hearts, Word Chips, Streak & Lesson Engine
 */

const DuoLevels = {
  currentLevelId: null,
  currentQuestionIdx: 0,
  hearts: 5,
  selectedChips: [],
  isAnswerChecked: false,

  // Units and levels definition (25 Levels with 4 questions each)
  units: [
    {
      unitNumber: 1,
      title: "Unit 1: Foundations & Essential Phonetics",
      desc: "Master basic pronunciation, everyday greetings, and core sentence structures.",
      levels: [
        {
          id: 1,
          title: "Alphabet & Sounds",
          icon: "images/level-phonetics.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which word has the short /æ/ vowel sound as in 'Cat'?",
              options: ["Cake", "Apple", "Car", "Call"],
              answer: 1,
              explanation: "'Apple' starts with the short /æ/ vowel sound identical to 'Cat'."
            },
            {
              type: "translate",
              prompt: "Rearrange the words to say: 'Hello, my name is Alex.'",
              sentence: "Hello , my name is Alex .",
              chips: ["Alex", "is", "my", "Hello", ",", "name", "are", "you"]
            },
            {
              type: "multiple_choice",
              prompt: "Which vowel sound is heard in the word 'Bed'?",
              options: ["Short /e/", "Long /i:/", "Short /æ/", "Silent e"],
              answer: 0,
              explanation: "'Bed' contains the short /e/ vowel sound."
            },
            {
              type: "translate",
              prompt: "Build the sentence: 'I am learning English .'",
              sentence: "I am learning English .",
              chips: ["English", "learning", "I", "am", ".", "Spanish", "you"]
            }
          ]
        },
        {
          id: 2,
          title: "Warm Greetings",
          icon: "images/level-greetings.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "What is the most polite response to 'How do you do?'",
              options: ["I do good", "How do you do?", "Nothing much", "See you later"],
              answer: 1,
              explanation: "In formal British English, the traditional polite return greeting is 'How do you do?'."
            },
            {
              type: "translate",
              prompt: "Build the sentence: 'Good morning, have a great day!'",
              sentence: "Good morning , have a great day !",
              chips: ["morning", "Good", "have", "day", "great", "a", ",", "!"]
            },
            {
              type: "multiple_choice",
              prompt: "Which greeting is most appropriate when meeting a senior colleague at 9 AM?",
              options: ["Good morning", "What's up", "Catch ya later", "Night night"],
              answer: 0,
              explanation: "'Good morning' is professional and courteous."
            },
            {
              type: "translate",
              prompt: "Build the sentence: 'It is nice to meet you .'",
              sentence: "It is nice to meet you .",
              chips: ["nice", "It", "is", "to", "meet", "you", ".", "see"]
            }
          ]
        },
        {
          id: 3,
          title: "Everyday Objects",
          icon: "images/level-objects.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which article completes: 'I need ___ umbrella because it is raining.'",
              options: ["a", "an", "the", "none"],
              answer: 1,
              explanation: "Use 'an' before vowel sounds: 'an umbrella'."
            },
            {
              type: "translate",
              prompt: "Build the sentence: 'This is my favorite notebook .'",
              sentence: "This is my favorite notebook .",
              chips: ["is", "favorite", "notebook", "This", "my", ".", "your", "table"]
            },
            {
              type: "multiple_choice",
              prompt: "Choose the correct sentence:",
              options: ["I have a pencil and an eraser.", "I have an pencil and a eraser.", "I have pencil and eraser.", "I have a pencil and a eraser."],
              answer: 0,
              explanation: "Use 'a' before consonants ('pencil') and 'an' before vowels ('eraser')."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Where is the blue backpack ?'",
              sentence: "Where is the blue backpack ?",
              chips: ["blue", "backpack", "Where", "is", "the", "?", "red", "my"]
            }
          ]
        },
        {
          id: 4,
          title: "Numbers & Quantities",
          icon: "images/level-numbers.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which word is an uncountable noun?",
              options: ["Book", "Water", "Cup", "Coin"],
              answer: 1,
              explanation: "'Water' is an uncountable mass noun."
            },
            {
              type: "multiple_choice",
              prompt: "How do you express '35' in written English?",
              options: ["Thirty-five", "Thirteen-five", "Three-ten-five", "Thirty-fifth"],
              answer: 0,
              explanation: "Hyphenated 'Thirty-five' is correct."
            },
            {
              type: "translate",
              prompt: "Assemble: 'There are five apples on the table .'",
              sentence: "There are five apples on the table .",
              chips: ["five", "apples", "There", "are", "on", "the", "table", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Complete: 'How ___ sugar do you want in your tea?'",
              options: ["many", "much", "few", "several"],
              answer: 1,
              explanation: "Use 'much' for uncountable nouns like sugar."
            }
          ]
        },
        {
          id: 5,
          title: "Unit 1 Checkpoint Trophy",
          icon: "images/icon-trophy.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which sentence is grammatically complete?",
              options: ["She doctor in hospital.", "She is a doctor in the hospital.", "She be doctor.", "Is she doctor."],
              answer: 1,
              explanation: "'She is a doctor in the hospital' has proper subject, verb, and articles."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Welcome to the English learning journey .'",
              sentence: "Welcome to the English learning journey .",
              chips: ["Welcome", "to", "the", "English", "learning", "journey", ".", "path"]
            },
            {
              type: "multiple_choice",
              prompt: "Which word has the correct irregular plural form?",
              options: ["Childs", "Children", "Childes", "Childen"],
              answer: 1,
              explanation: "The plural of 'child' is 'children'."
            },
            {
              type: "translate",
              prompt: "Assemble: 'We are ready to start Unit 2 .'",
              sentence: "We are ready to start Unit 2 .",
              chips: ["ready", "We", "are", "to", "start", "Unit", "2", "."]
            }
          ]
        }
      ]
    },
    {
      unitNumber: 2,
      title: "Unit 2: Daily Life & Social Chatter",
      desc: "Order coffee, ask for directions, discuss hobbies, and make weekend plans.",
      levels: [
        {
          id: 6,
          title: "Ordering at a Cafe",
          icon: "images/level-cafe.svg",
          questions: [
            {
              type: "translate",
              prompt: "Assemble: 'Could I please have a hot latte ?'",
              sentence: "Could I please have a hot latte ?",
              chips: ["latte", "Could", "have", "please", "I", "hot", "a", "?", "tea"]
            },
            {
              type: "multiple_choice",
              prompt: "How do you politely ask for the check at a restaurant?",
              options: ["Give me check", "Could we please have the check?", "Pay money now", "Bill here"],
              answer: 1,
              explanation: "'Could we please have the check?' is polite and courteous."
            },
            {
              type: "translate",
              prompt: "Assemble: 'I would like a slice of chocolate cake .'",
              sentence: "I would like a slice of chocolate cake .",
              chips: ["like", "would", "I", "a", "slice", "of", "chocolate", "cake", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Which option means asking for coffee without caffeine?",
              options: ["Decaf coffee", "Strong coffee", "Espresso", "Black coffee"],
              answer: 0,
              explanation: "'Decaf' is short for decaffeinated coffee."
            }
          ]
        },
        {
          id: 7,
          title: "Asking Directions",
          icon: "images/level-map.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which phrase politely asks for the train station?",
              options: ["Where train?", "Excuse me, could you direct me to the station?", "Show me station now", "Go station please"],
              answer: 1,
              explanation: "'Excuse me, could you direct me to the station?' is polite and natural."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Turn left at the traffic light .'",
              sentence: "Turn left at the traffic light .",
              chips: ["Turn", "left", "at", "the", "traffic", "light", ".", "right"]
            },
            {
              type: "multiple_choice",
              prompt: "If a building is 'opposite the bank', where is it?",
              options: ["Across the street from the bank", "Inside the bank", "Behind the bank", "Far away from the bank"],
              answer: 0,
              explanation: "'Opposite' means facing on the other side of the street."
            },
            {
              type: "translate",
              prompt: "Assemble: 'The museum is next to the library .'",
              sentence: "The museum is next to the library .",
              chips: ["museum", "The", "is", "next", "to", "the", "library", "."]
            }
          ]
        },
        {
          id: 8,
          title: "Weekend Plans",
          icon: "images/level-beach.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which expresses future intention?",
              options: ["I went to the beach yesterday.", "I am planning to visit the museum on Saturday.", "I visit museum always.", "I had visited."],
              answer: 1,
              explanation: "'I am planning to visit...' indicates scheduled future intention."
            },
            {
              type: "translate",
              prompt: "Assemble: 'We are going to visit the park this weekend .'",
              sentence: "We are going to visit the park this weekend .",
              chips: ["going", "We", "are", "to", "visit", "the", "park", "this", "weekend", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Choose the correct invitation: 'Let's ___ for a picnic on Sunday!'",
              options: ["go", "going", "went", "gone"],
              answer: 0,
              explanation: "'Let's' is followed by the bare base verb 'go'."
            },
            {
              type: "translate",
              prompt: "Assemble: 'I want to relax with my friends .'",
              sentence: "I want to relax with my friends .",
              chips: ["want", "I", "to", "relax", "with", "my", "friends", "."]
            }
          ]
        },
        {
          id: 9,
          title: "Family & Friends",
          icon: "images/level-family.svg",
          questions: [
            {
              type: "translate",
              prompt: "Assemble: 'My older sister is studying medicine .'",
              sentence: "My older sister is studying medicine .",
              chips: ["sister", "medicine", "My", "is", "studying", "older", ".", "brother"]
            },
            {
              type: "multiple_choice",
              prompt: "What is the mother of your father called?",
              options: ["Grandmother", "Aunt", "Niece", "Cousin"],
              answer: 0,
              explanation: "Your father's mother is your grandmother."
            },
            {
              type: "translate",
              prompt: "Assemble: 'We enjoy spending time together .'",
              sentence: "We enjoy spending time together .",
              chips: ["enjoy", "We", "spending", "time", "together", ".", "alone"]
            },
            {
              type: "multiple_choice",
              prompt: "Which word best describes a close companion?",
              options: ["Confidant", "Stranger", "Adversary", "Nemesis"],
              answer: 0,
              explanation: "A confidant is a trusted close friend."
            }
          ]
        },
        {
          id: 10,
          title: "Unit 2 Checkpoint Trophy",
          icon: "images/icon-trophy.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "What is an idiom meaning 'to relax and unwind'?",
              options: ["Bite the bullet", "Let your hair down", "Spill the beans", "Burn the candle"],
              answer: 1,
              explanation: "'Let your hair down' means to relax and enjoy yourself freely."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Communication connects people from around the world .'",
              sentence: "Communication connects people from around the world .",
              chips: ["Communication", "connects", "people", "from", "around", "the", "world", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Which phrase expresses a polite invitation?",
              options: ["Would you like to join us for dinner?", "You must come dinner.", "Eat with us now.", "Join dinner today."],
              answer: 0,
              explanation: "'Would you like to join us...?' is elegant and inviting."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Practice every day to improve your fluency .'",
              sentence: "Practice every day to improve your fluency .",
              chips: ["Practice", "every", "day", "to", "improve", "your", "fluency", "."]
            }
          ]
        }
      ]
    },
    {
      unitNumber: 3,
      title: "Unit 3: Grammar Essentials & Sentence Connectors",
      desc: "Perfect your tenses, relative clauses, and cohesive linking devices.",
      levels: [
        {
          id: 11,
          title: "Past Continuous vs Simple",
          icon: "images/level-phonetics.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Fill in: 'While I was reading, the telephone suddenly ___.'",
              options: ["ring", "rang", "was ringing", "rung"],
              answer: 1,
              explanation: "A completed interrupting action in the past takes the past simple ('rang')."
            },
            {
              type: "translate",
              prompt: "Assemble: 'She was walking home when it started to rain .'",
              sentence: "She was walking home when it started to rain .",
              chips: ["was", "She", "walking", "home", "when", "it", "started", "to", "rain", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Complete: 'They ___ dinner when the power went out.'",
              options: ["were having", "have", "had", "are having"],
              answer: 0,
              explanation: "Use past continuous 'were having' for an ongoing past background action."
            },
            {
              type: "translate",
              prompt: "Assemble: 'He broke his leg while he was skiing .'",
              sentence: "He broke his leg while he was skiing .",
              chips: ["broke", "He", "his", "leg", "while", "he", "was", "skiing", "."]
            }
          ]
        },
        {
          id: 12,
          title: "Conditionals & 'If' Clauses",
          icon: "images/level-grammar.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Complete the Second Conditional: 'If I ___ more time, I would learn Spanish.'",
              options: ["have", "had", "will have", "having"],
              answer: 1,
              explanation: "Second Conditional uses 'If + Past Simple, would + infinitive'."
            },
            {
              type: "translate",
              prompt: "Assemble: 'If it rains tomorrow , we will stay indoors .'",
              sentence: "If it rains tomorrow , we will stay indoors .",
              chips: ["rains", "If", "it", "tomorrow", ",", "we", "will", "stay", "indoors", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Which zero conditional statement is correct?",
              options: ["If you heat ice, it melts.", "If you heat ice, it melted.", "If you heat ice, it will melting.", "If you heat ice, it would melt."],
              answer: 0,
              explanation: "Zero conditional states general truths: 'If + present simple, present simple'."
            },
            {
              type: "translate",
              prompt: "Assemble: 'If I were you , I would accept the job offer .'",
              sentence: "If I were you , I would accept the job offer .",
              chips: ["were", "If", "I", "you", ",", "I", "would", "accept", "the", "job", "offer", "."]
            }
          ]
        },
        {
          id: 13,
          title: "Cohesive Connectors",
          icon: "images/level-grammar.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which linking word introduces a strong contrast?",
              options: ["Furthermore", "Nevertheless", "Similarly", "Consequently"],
              answer: 1,
              explanation: "'Nevertheless' introduces a contrast or concession, similar to 'However'."
            },
            {
              type: "translate",
              prompt: "Assemble: 'He worked hard ; therefore , he succeeded .'",
              sentence: "He worked hard ; therefore , he succeeded .",
              chips: ["worked", "He", "hard", ";", "therefore", ",", "he", "succeeded", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Which connector introduces an additional supporting point?",
              options: ["In addition", "On the contrary", "In spite of", "Otherwise"],
              answer: 0,
              explanation: "'In addition' adds supporting information."
            },
            {
              type: "translate",
              prompt: "Assemble: 'In spite of the rain , we enjoyed the outdoor concert .'",
              sentence: "In spite of the rain , we enjoyed the outdoor concert .",
              chips: ["spite", "In", "of", "the", "rain", ",", "we", "enjoyed", "the", "outdoor", "concert", "."]
            }
          ]
        },
        {
          id: 14,
          title: "Passive Voice in Context",
          icon: "images/level-grammar.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Convert to passive: 'Engineers built the suspension bridge in 1935.'",
              options: ["The bridge was built in 1935 by engineers.", "The bridge is built in 1935.", "Engineers were built by bridge.", "The bridge had built in 1935."],
              answer: 0,
              explanation: "Past simple passive is 'was/were + past participle'."
            },
            {
              type: "translate",
              prompt: "Assemble: 'The report will be submitted by Friday afternoon .'",
              sentence: "The report will be submitted by Friday afternoon .",
              chips: ["report", "The", "will", "be", "submitted", "by", "Friday", "afternoon", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Complete passive sentence: 'A new stadium is ___ in the city center.'",
              options: ["being constructed", "construct", "constructed", "constructing"],
              answer: 0,
              explanation: "Present continuous passive uses 'is being + past participle'."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Many new discoveries were made during the experiment .'",
              sentence: "Many new discoveries were made during the experiment .",
              chips: ["discoveries", "Many", "new", "were", "made", "during", "the", "experiment", "."]
            }
          ]
        },
        {
          id: 15,
          title: "Unit 3 Checkpoint Trophy",
          icon: "images/icon-trophy.svg",
          questions: [
            {
              type: "translate",
              prompt: "Assemble: 'Although it was late , we continued our research .'",
              sentence: "Although it was late , we continued our research .",
              chips: ["late", "Although", "it", "was", ",", "we", "continued", "our", "research", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Which sentence demonstrates correct relative pronoun usage?",
              options: ["The doctor who treated me was very kind.", "The doctor which treated me was very kind.", "The doctor whose treated me was very kind.", "The doctor whom treated me was very kind."],
              answer: 0,
              explanation: "Use 'who' for people acting as subject."
            },
            {
              type: "translate",
              prompt: "Assemble: 'By the time we arrived , the show had already started .'",
              sentence: "By the time we arrived , the show had already started .",
              chips: ["time", "By", "the", "we", "arrived", ",", "the", "show", "had", "already", "started", "."]
            },
            {
              type: "multiple_choice",
              prompt: "What is the past participle of 'write'?",
              options: ["Wrote", "Written", "Writing", "Writes"],
              answer: 1,
              explanation: "Write - wrote - written."
            }
          ]
        }
      ]
    },
    {
      unitNumber: 4,
      title: "Unit 4: Workplace & Professional Dialogue",
      desc: "Conduct meetings, deliver elevator pitches, negotiate deadlines, and email clients.",
      levels: [
        {
          id: 16,
          title: "Meeting Etiquette",
          icon: "images/level-work.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "How do you diplomatically disagree in an executive meeting?",
              options: ["You are totally wrong.", "I see your point, but perhaps we could consider an alternative.", "Never do that.", "I hate that idea."],
              answer: 1,
              explanation: "'I see your point, but perhaps...' acknowledges the speaker while offering an alternative diplomatically."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Let us review the key objectives of today meeting .'",
              sentence: "Let us review the key objectives of today meeting .",
              chips: ["review", "Let", "us", "the", "key", "objectives", "of", "today", "meeting", "."]
            },
            {
              type: "multiple_choice",
              prompt: "How do you hand over the floor to a colleague in a meeting?",
              options: ["Shut up now.", "I would like to pass the microphone to Sarah for the update.", "Sarah speak.", "Stop talking."],
              answer: 1,
              explanation: "'I would like to pass the microphone to...' is polished and courteous."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Thank you all for your valuable contributions today .'",
              sentence: "Thank you all for your valuable contributions today .",
              chips: ["Thank", "you", "all", "for", "your", "valuable", "contributions", "today", "."]
            }
          ]
        },
        {
          id: 17,
          title: "Negotiating Deadlines",
          icon: "images/level-work.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which phrase asks for a deadline extension professionally?",
              options: ["Give me more time now.", "Would it be feasible to deliver the draft by next Wednesday?", "I cannot do it.", "Forget the date."],
              answer: 1,
              explanation: "'Would it be feasible to deliver...' is courteous and professional."
            },
            {
              type: "translate",
              prompt: "Assemble: 'We need to adjust our timeline to ensure quality .'",
              sentence: "We need to adjust our timeline to ensure quality .",
              chips: ["need", "We", "to", "adjust", "our", "timeline", "to", "ensure", "quality", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Which word means reaching a mutual agreement where both sides make concessions?",
              options: ["Compromise", "Stalemate", "Ultimatum", "Dispute"],
              answer: 0,
              explanation: "A compromise balances both parties' interests."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Can we find a solution that satisfies both teams ?'",
              sentence: "Can we find a solution that satisfies both teams ?",
              chips: ["find", "Can", "we", "a", "solution", "that", "satisfies", "both", "teams", "?"]
            }
          ]
        },
        {
          id: 18,
          title: "Executive Summaries",
          icon: "images/level-work.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which term means 'able to be maintained at a steady rate without depleting resources'?",
              options: ["Volatile", "Sustainable", "Fictitious", "Tentative"],
              answer: 1,
              explanation: "'Sustainable' means durable and environmentally/economically maintainable."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Our key findings highlight significant growth opportunities .'",
              sentence: "Our key findings highlight significant growth opportunities .",
              chips: ["key", "Our", "findings", "highlight", "significant", "growth", "opportunities", "."]
            },
            {
              type: "multiple_choice",
              prompt: "What does 'ROI' stand for in business analysis?",
              options: ["Return on Investment", "Rate of Interest", "Risk of Inflation", "Range of Income"],
              answer: 0,
              explanation: "'Return on Investment' measures financial yield."
            },
            {
              type: "translate",
              prompt: "Assemble: 'The data demonstrates clear operational efficiency gains .'",
              sentence: "The data demonstrates clear operational efficiency gains .",
              chips: ["data", "The", "demonstrates", "clear", "operational", "efficiency", "gains", "."]
            }
          ]
        },
        {
          id: 19,
          title: "Client Communications",
          icon: "images/level-work.svg",
          questions: [
            {
              type: "translate",
              prompt: "Assemble: 'Please find attached the updated project proposal .'",
              sentence: "Please find attached the updated project proposal .",
              chips: ["Please", "attached", "the", "find", "updated", "proposal", "project", ".", "send"]
            },
            {
              type: "multiple_choice",
              prompt: "What is the most appropriate email sign-off for a new corporate client?",
              options: ["Best regards,", "Thx,", "Later,", "Bye bye,"],
              answer: 0,
              explanation: "'Best regards,' is standard executive email etiquette."
            },
            {
              type: "translate",
              prompt: "Assemble: 'We look forward to collaborating with your team .'",
              sentence: "We look forward to collaborating with your team .",
              chips: ["look", "We", "forward", "to", "collaborating", "with", "your", "team", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Which phrase acknowledges receipt of an email professionally?",
              options: ["Got it.", "Thank you for sending this over; I will review and reply by end of day.", "K thanks.", "Read it."],
              answer: 1,
              explanation: "Setting clear review expectations shows strong business professionalism."
            }
          ]
        },
        {
          id: 20,
          title: "Unit 4 Checkpoint Trophy",
          icon: "images/icon-trophy.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "What does 'synergy' mean in business collaboration?",
              options: ["Extreme competition", "Combined effort yielding greater results than individual parts", "Bankruptcy risk", "Secret agreement"],
              answer: 1,
              explanation: "'Synergy' is the combined effect that exceeds the sum of individual efforts."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Effective leadership inspires innovation across all departments .'",
              sentence: "Effective leadership inspires innovation across all departments .",
              chips: ["Effective", "leadership", "inspires", "innovation", "across", "all", "departments", "."]
            },
            {
              type: "multiple_choice",
              prompt: "What does 'benchmarking' mean?",
              options: ["Comparing performance metrics against industry best standards", "Sitting on a bench", "Dismissing employees", "Lowering standards"],
              answer: 0,
              explanation: "Benchmarking measures processes against top industry standards."
            },
            {
              type: "translate",
              prompt: "Assemble: 'We are committed to delivering exceptional value to our stakeholders .'",
              sentence: "We are committed to delivering exceptional value to our stakeholders .",
              chips: ["committed", "We", "are", "to", "delivering", "exceptional", "value", "to", "our", "stakeholders", "."]
            }
          ]
        }
      ]
    },
    {
      unitNumber: 5,
      title: "Unit 5: Advanced IELTS & Master Articulation",
      desc: "High band-score vocabulary, nuanced idiomatic phrases, and rhetorical eloquence.",
      levels: [
        {
          id: 21,
          title: "Academic Lexical Resource",
          icon: "images/level-ielts.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which word is an academic synonym for 'present everywhere simultaneously'?",
              options: ["Ubiquitous", "Ephemeral", "Obsolete", "Ambiguous"],
              answer: 0,
              explanation: "'Ubiquitous' means omnipresent or found everywhere."
            },
            {
              type: "translate",
              prompt: "Assemble: 'The research demonstrates a profound paradigm shift in science .'",
              sentence: "The research demonstrates a profound paradigm shift in science .",
              chips: ["research", "The", "demonstrates", "a", "profound", "paradigm", "shift", "in", "science", "."]
            },
            {
              type: "multiple_choice",
              prompt: "What is a direct synonym for 'ephemeral'?",
              options: ["Permanent", "Transient and short-lived", "Ancient", "Continuous"],
              answer: 1,
              explanation: "'Ephemeral' means lasting for a very short time."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Hypotheses must be empirically tested before arriving at conclusions .'",
              sentence: "Hypotheses must be empirically tested before arriving at conclusions .",
              chips: ["empirically", "Hypotheses", "must", "be", "tested", "before", "arriving", "at", "conclusions", "."]
            }
          ]
        },
        {
          id: 22,
          title: "Speaking Part 3 In-Depth Analysis",
          icon: "images/level-speaking.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which phrase is ideal for introducing a multi-faceted viewpoint in IELTS Speaking Part 3?",
              options: ["Because yes.", "On the one hand..., yet from a broader socio-economic perspective...", "I think maybe.", "End of story."],
              answer: 1,
              explanation: "Structuring with balanced perspectives demonstrates high-band discourse management."
            },
            {
              type: "translate",
              prompt: "Assemble: 'From a global perspective , urban development has significant environmental impacts .'",
              sentence: "From a global perspective , urban development has significant environmental impacts .",
              chips: ["perspective", "From", "a", "global", ",", "urban", "development", "has", "significant", "environmental", "impacts", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Which discourse marker signals an example in formal speaking?",
              options: ["For instance", "Like basically", "Stuff like", "You know"],
              answer: 0,
              explanation: "'For instance' is an exemplary academic discourse marker."
            },
            {
              type: "translate",
              prompt: "Assemble: 'It is widely argued that education plays a pivotal role in societal progress .'",
              sentence: "It is widely argued that education plays a pivotal role in societal progress .",
              chips: ["widely", "It", "is", "argued", "that", "education", "plays", "a", "pivotal", "role", "in", "societal", "progress", "."]
            }
          ]
        },
        {
          id: 23,
          title: "Writing Task 2 Cohesion",
          icon: "images/level-writing.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which sentence demonstrates advanced inverted syntax for emphasis?",
              options: ["Seldom have we witnessed such rapid technological transformation.", "We seldom witnessed tech.", "Tech is changing fast.", "Transformation happens seldom."],
              answer: 0,
              explanation: "'Seldom have we witnessed...' uses negative inversion for high-band stylistic elegance."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Consequently , urgent measures must be taken to mitigate climate risks .'",
              sentence: "Consequently , urgent measures must be taken to mitigate climate risks .",
              chips: ["Consequently", ",", "urgent", "measures", "must", "be", "taken", "to", "mitigate", "climate", "risks", "."]
            },
            {
              type: "multiple_choice",
              prompt: "Which cohesive device introduces a counter-argument effectively?",
              options: ["Admittedly, critics may argue that..., however...", "Also...", "And then...", "So anyway..."],
              answer: 0,
              explanation: "'Admittedly... however...' sets up a counter-argument concessions structure."
            },
            {
              type: "translate",
              prompt: "Assemble: 'In summary , the advantages far outweigh the potential drawbacks .'",
              sentence: "In summary , the advantages far outweigh the potential drawbacks .",
              chips: ["summary", "In", ",", "the", "advantages", "far", "outweigh", "the", "potential", "drawbacks", "."]
            }
          ]
        },
        {
          id: 24,
          title: "Idioms & Rhetorical Nuance",
          icon: "images/level-diamond.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "What does 'to play devil's advocate' mean?",
              options: ["To commit an offense", "To argue against an idea to test its validity", "To praise excessively", "To give up easily"],
              answer: 1,
              explanation: "'Playing devil's advocate' means presenting a counter-argument to critically probe a viewpoint."
            },
            {
              type: "translate",
              prompt: "Assemble: 'We should evaluate both sides of the coin before deciding .'",
              sentence: "We should evaluate both sides of the coin before deciding .",
              chips: ["evaluate", "We", "should", "both", "sides", "of", "the", "coin", "before", "deciding", "."]
            },
            {
              type: "multiple_choice",
              prompt: "What does the idiom 'double-edged sword' signify?",
              options: ["A physical weapon", "Something that has both favorable and unfavorable consequences", "An easy solution", "A sharp argument"],
              answer: 1,
              explanation: "A double-edged sword has both benefits and drawbacks."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Striking a balance between economic growth and conservation is essential .'",
              sentence: "Striking a balance between economic growth and conservation is essential .",
              chips: ["balance", "Striking", "a", "between", "economic", "growth", "and", "conservation", "is", "essential", "."]
            }
          ]
        },
        {
          id: 25,
          title: "Ultimate Fluency Grand Crown",
          icon: "images/icon-crown.svg",
          questions: [
            {
              type: "multiple_choice",
              prompt: "Which word best completes: 'The empirical evidence strongly ___ the initial hypothesis.'",
              options: ["contradicts", "substantiates", "diminishes", "confounds"],
              answer: 1,
              explanation: "'Substantiates' means provides proof or corroborating evidence to support."
            },
            {
              type: "translate",
              prompt: "Assemble: 'Congratulations on achieving master level fluency on your English journey !'",
              sentence: "Congratulations on achieving master level fluency on your English journey !",
              chips: ["achieving", "Congratulations", "on", "master", "level", "fluency", "on", "your", "English", "journey", "!"]
            },
            {
              type: "multiple_choice",
              prompt: "What is the highest band score achievable in IELTS examinations?",
              options: ["Band 9.0", "Band 10.0", "Band 8.0", "Band 100"],
              answer: 0,
              explanation: "Band 9.0 represents Expert User in the IELTS scoring system."
            },
            {
              type: "translate",
              prompt: "Assemble: 'You have unlocked the Grand Crown of FluentPath Mastery !'",
              sentence: "You have unlocked the Grand Crown of FluentPath Mastery !",
              chips: ["unlocked", "You", "have", "the", "Grand", "Crown", "of", "FluentPath", "Mastery", "!"]
            }
          ]
        }
      ]
    }
  ],

  init() {
    this.loadProgress();
    this.renderUnits();
    this.bindEvents();
    this.updateUI();
  },

  loadProgress() {
    const saved = localStorage.getItem("fluentpath_duo_progress");
    if (saved) {
      try {
        this.progress = JSON.parse(saved);
      } catch (e) {
        this.progress = { completedLevels: [1, 2], currentLevel: 3, hearts: 5 };
      }
    } else {
      this.progress = { completedLevels: [1, 2], currentLevel: 3, hearts: 5 };
      this.saveProgress();
    }
    this.hearts = this.progress.hearts || 5;
  },

  saveProgress() {
    localStorage.setItem("fluentpath_duo_progress", JSON.stringify(this.progress));
  },

  updateUI() {
    const user = FluentPath.getUser() || FluentPath.defaultUser;
    const heartsEl = document.getElementById("duo-hearts-display");
    const streakEl = document.getElementById("duo-streak-display");
    const xpEl = document.getElementById("duo-xp-display");
    const coinsEl = document.getElementById("duo-coins-display");

    if (heartsEl) heartsEl.textContent = `${this.hearts} / 5 Lives`;
    if (streakEl) streakEl.textContent = `${user.streak || 14} Day Streak`;
    if (xpEl) xpEl.textContent = `${(user.xp || 1850).toLocaleString()} XP`;
    if (coinsEl) coinsEl.textContent = `${(user.gameCredits || 150).toLocaleString()} Coins`;
  },

  isVoiceMuted: false,
  isCatJumping: false,

  toggleVoice() {
    this.isVoiceMuted = !this.isVoiceMuted;
    const btn = document.getElementById("duo-voice-toggle");
    if (btn) {
      btn.textContent = this.isVoiceMuted ? "🔇 Voice Muted" : "🔊 Auto-Voice ON";
    }
    if (this.isVoiceMuted && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    } else if (!this.isVoiceMuted) {
      this.speakText("Auto voice enabled!");
    }
  },

  speakText(text) {
    if (this.isVoiceMuted || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const clean = text.replace(/<[^>]*>/g, "").trim();
      if (!clean) return;
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.rate = 0.95;
      utterance.pitch = 1.1;
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech Synthesis error:", e);
    }
  },

  renderUnits() {
    const container = document.getElementById("duo-units-container");
    if (!container) return;

    container.innerHTML = this.units.map(unit => `
      <section class="duo-unit">
        <div class="duo-unit-header">
          <div>
            <span class="duo-unit-badge">Unit ${unit.unitNumber}</span>
            <h2 style="font-size: 1.5rem; font-weight:800; margin:0.2rem 0;">${unit.title}</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem;">${unit.desc}</p>
          </div>
          <div style="background:var(--vibe-gradient-soft); padding:0.5rem 1rem; border-radius:var(--radius-full); font-weight:800; font-size:0.9rem; color:var(--primary);">
            ⭐ 5 Levels
          </div>
        </div>

        <div class="duo-path-container">
          ${unit.levels.map((level, idx) => {
            const isCompleted = this.progress.completedLevels.includes(level.id);
            const isActive = this.progress.currentLevel === level.id;
            const isLocked = !isCompleted && !isActive;

            let stateClass = "locked";
            if (isCompleted) stateClass = "completed";
            else if (isActive) stateClass = "active";

            // Offset layout: 0 = center, 1 = left, 2 = center, 3 = right, 4 = center
            let offsetClass = "";
            if (idx % 4 === 1) offsetClass = "offset-left";
            if (idx % 4 === 3) offsetClass = "offset-right";

            return `
              <div class="duo-node-row ${offsetClass}">
                ${isActive ? `
                  <div class="cleo-mascot-trail-node">
                    <img src="images/cat-avatar.svg" class="cleo-trail-cat-img ${this.isCatJumping ? 'cleo-jump-anim' : ''}" alt="Cleo the Cat">
                    <div class="cleo-speech-mini">Level ${level.id}! 🐾</div>
                  </div>
                ` : ""}
                <div style="display:flex; flex-direction:column; align-items:center;">
                  <button 
                    class="duo-node-btn ${stateClass}" 
                    title="${level.title}"
                    onclick="DuoLevels.startLevel(${level.id})"
                    ${isLocked ? "disabled" : ""}
                  >
                    ${isCompleted ? `<div class="duo-crown-badge">👑</div>` : ""}
                    <div class="duo-node-icon">${level.icon}</div>
                  </button>
                  <div class="duo-node-label">${level.title}</div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </section>
    `).join("");
  },

  bindEvents() {
    const closeBtn = document.getElementById("duo-modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeLessonModal());
    }

    const submitBtn = document.getElementById("duo-submit-btn");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => this.handleAnswerCheck());
    }
  },

  startLevel(levelId) {
    if (this.hearts <= 0) {
      FluentPath.showToast("Out of lives! Spend 20 coins to refill ❤️", "error");
      this.promptRefillHearts();
      return;
    }

    // Find level
    let targetLevel = null;
    for (const unit of this.units) {
      const found = unit.levels.find(l => l.id === levelId);
      if (found) {
        targetLevel = found;
        break;
      }
    }

    if (!targetLevel) return;

    this.currentLevel = targetLevel;
    this.currentQuestionIdx = 0;
    this.selectedChips = [];

    const submitBtn = document.getElementById("duo-submit-btn");
    if (submitBtn) {
      submitBtn.style.display = "inline-block";
      submitBtn.onclick = () => this.handleAnswerCheck();
    }

    const modal = document.getElementById("duo-lesson-modal");
    if (modal) modal.style.display = "flex";

    this.renderQuestion();
  },

  closeLessonModal() {
    const modal = document.getElementById("duo-lesson-modal");
    if (modal) modal.style.display = "none";
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  },

  renderQuestion() {
    const modalBody = document.getElementById("duo-modal-body");
    const progressFill = document.getElementById("duo-quiz-progress");
    const heartsModal = document.getElementById("duo-modal-hearts");
    const feedbackText = document.getElementById("duo-feedback-text");
    const submitBtn = document.getElementById("duo-submit-btn");

    if (heartsModal) heartsModal.textContent = this.hearts;
    if (feedbackText) {
      feedbackText.textContent = "";
      feedbackText.className = "";
    }

    const questions = this.currentLevel.questions;
    const q = questions[this.currentQuestionIdx];

    const pct = Math.round(((this.currentQuestionIdx + 1) / questions.length) * 100);
    if (progressFill) progressFill.style.width = `${pct}%`;

    if (submitBtn) {
      submitBtn.textContent = "Check Answer ➔";
      submitBtn.disabled = false;
      submitBtn.className = "btn btn-primary btn-lg";
    }

    this.selectedChips = [];
    this.selectedChoiceIdx = null;
    this.isAnswerChecked = false;

    // Automatic Speech Voice (Without clicking button)
    this.speakText(q.prompt);

    if (q.type === "multiple_choice") {
      modalBody.innerHTML = `
        <div class="duo-prompt-bubble">
          <div style="font-size:2.2rem;">🦉</div>
          <div>
            <span class="badge badge-vibe" style="font-size:0.75rem;">Question ${this.currentQuestionIdx + 1} of ${questions.length}</span>
            <div style="font-size:1.2rem; font-weight:700; margin-top:0.4rem;">${q.prompt}</div>
          </div>
        </div>
        <div class="quiz-options-grid" id="duo-options-container">
          ${q.options.map((opt, i) => `
            <button class="quiz-option-btn duo-choice-btn" data-index="${i}" onclick="DuoLevels.selectOption(${i})">
              ${opt}
            </button>
          `).join("")}
        </div>
      `;
    } else if (q.type === "translate") {
      modalBody.innerHTML = `
        <div class="duo-prompt-bubble">
          <div style="font-size:2.2rem;">🦉</div>
          <div>
            <span class="badge badge-vibe" style="font-size:0.75rem;">Sentence Construction (Question ${this.currentQuestionIdx + 1} of ${questions.length})</span>
            <div style="font-size:1.2rem; font-weight:700; margin-top:0.4rem;">${q.prompt}</div>
          </div>
        </div>
        
        <div class="duo-word-chips-container" id="duo-selected-box">
          <span style="color:var(--text-muted); font-size:0.9rem; align-self:center;">(Tap word chips below to build the phrase)</span>
        </div>

        <div style="display:flex; flex-wrap:wrap; gap:0.6rem; justify-content:center; margin-top:1.5rem;" id="duo-chips-pool">
          ${q.chips.map((word, i) => `
            <button class="duo-chip" data-word="${word}" onclick="DuoLevels.tapChip('${word}', this)">
              ${word}
            </button>
          `).join("")}
        </div>
      `;
    }
  },

  selectOption(idx) {
    this.selectedChoiceIdx = idx;
    const btns = document.querySelectorAll(".duo-choice-btn");
    btns.forEach(b => b.style.borderColor = "var(--border-color)");
    const activeBtn = document.querySelector(`.duo-choice-btn[data-index="${idx}"]`);
    if (activeBtn) {
      activeBtn.style.borderColor = "var(--primary)";
      activeBtn.style.background = "var(--primary-light)";
    }
    FluentPath.playClickBeep();
    if (this.currentLevel && this.currentLevel.questions) {
      const q = this.currentLevel.questions[this.currentQuestionIdx];
      if (q && q.options && q.options[idx]) {
        this.speakText(q.options[idx]);
      }
    }
  },

  tapChip(word, btn) {
    if (btn.classList.contains("selected")) return;
    btn.classList.add("selected");
    this.selectedChips.push({ word, btn });
    FluentPath.playClickBeep();
    this.speakText(word);

    const selectedBox = document.getElementById("duo-selected-box");
    if (selectedBox) {
      selectedBox.innerHTML = this.selectedChips.map((item, idx) => `
        <button class="duo-chip" onclick="DuoLevels.removeChip(${idx})" style="background:var(--primary); color:#fff;">
          ${item.word}
        </button>
      `).join("");
    }
  },

  removeChip(index) {
    const item = this.selectedChips[index];
    if (item && item.btn) {
      item.btn.classList.remove("selected");
    }
    this.selectedChips.splice(index, 1);
    const selectedBox = document.getElementById("duo-selected-box");
    if (selectedBox) {
      if (this.selectedChips.length === 0) {
        selectedBox.innerHTML = `<span style="color:var(--text-muted); font-size:0.9rem; align-self:center;">(Tap word chips below to build the phrase)</span>`;
      } else {
        selectedBox.innerHTML = this.selectedChips.map((it, idx) => `
          <button class="duo-chip" onclick="DuoLevels.removeChip(${idx})" style="background:var(--primary); color:#fff;">
            ${it.word}
          </button>
        `).join("");
      }
    }
  },

  handleAnswerCheck() {
    const q = this.currentLevel.questions[this.currentQuestionIdx];
    const feedbackText = document.getElementById("duo-feedback-text");
    const submitBtn = document.getElementById("duo-submit-btn");

    if (this.isAnswerChecked) {
      if (this.hearts <= 0) {
        this.promptRefillHearts();
        return;
      }
      this.currentQuestionIdx++;
      if (this.currentQuestionIdx < this.currentLevel.questions.length) {
        this.renderQuestion();
      } else {
        this.levelCompleted();
      }
      return;
    }

    let isCorrect = false;

    if (q.type === "multiple_choice") {
      if (this.selectedChoiceIdx === null || this.selectedChoiceIdx === undefined) {
        FluentPath.showToast("Please choose an answer option!", "info");
        return;
      }
      isCorrect = (this.selectedChoiceIdx === q.answer);
    } else if (q.type === "translate") {
      if (this.selectedChips.length === 0) {
        FluentPath.showToast("Please select word chips to build the phrase!", "info");
        return;
      }
      const built = this.selectedChips.map(c => c.word).join(" ");
      isCorrect = (built.trim() === q.sentence.trim());
    }

    this.isAnswerChecked = true;
    const isLast = (this.currentQuestionIdx === this.currentLevel.questions.length - 1);

    if (isCorrect) {
      FluentPath.playSuccessChime();
      feedbackText.textContent = "🎉 Excellent! That is correct!";
      feedbackText.style.color = "var(--accent-emerald)";
      submitBtn.textContent = isLast ? "Finish Level ➔" : "Next Question ➔";
      submitBtn.className = "btn btn-primary btn-lg";
      this.speakText("Excellent! That is correct!");
    } else {
      this.hearts--;
      if (this.hearts < 0) this.hearts = 0;
      this.progress.hearts = this.hearts;
      this.saveProgress();
      this.updateUI();

      const heartsModal = document.getElementById("duo-modal-hearts");
      if (heartsModal) heartsModal.textContent = this.hearts;

      feedbackText.textContent = `❌ Not quite. ${q.explanation || "Review the correct pattern and try again."}`;
      feedbackText.style.color = "var(--accent-rose)";
      this.speakText("Not quite. " + (q.explanation || "Try again."));

      if (this.hearts === 0) {
        submitBtn.textContent = "Out of Lives (Refill)";
        submitBtn.className = "btn btn-secondary btn-lg";
      } else {
        submitBtn.textContent = isLast ? "Finish Level ➔" : "Next Question ➔";
        submitBtn.className = "btn btn-primary btn-lg";
      }
    }
  },

  levelCompleted() {
    const modalBody = document.getElementById("duo-modal-body");
    const feedbackText = document.getElementById("duo-feedback-text");
    const submitBtn = document.getElementById("duo-submit-btn");

    FluentPath.playSuccessChime();

    // Trigger Cleo the Cat jumping animation on the path
    this.isCatJumping = true;

    // Mark completed
    if (!this.progress.completedLevels.includes(this.currentLevel.id)) {
      this.progress.completedLevels.push(this.currentLevel.id);
    }

    const nextLevelId = this.currentLevel.id + 1;
    if (this.progress.currentLevel === this.currentLevel.id) {
      this.progress.currentLevel = Math.min(25, nextLevelId);
    }

    this.saveProgress();
    this.renderUnits();

    setTimeout(() => {
      this.isCatJumping = false;
      this.renderUnits();
    }, 1400);

    // Rewards
    FluentPath.addGameCredits(20, `Completed Level ${this.currentLevel.id}`);
    const user = FluentPath.getUser() || FluentPath.defaultUser;
    user.xp = (user.xp || 1850) + 30;
    FluentPath.saveUser(user);
    this.updateUI();

    const hasNextLevel = (nextLevelId <= 25);
    this.speakText(`Congratulations! Level ${this.currentLevel.id} completed! Cleo the cat is jumping to level ${nextLevelId}!`);

    modalBody.innerHTML = `
      <div style="text-align:center; padding: 1.5rem 1rem;">
        <div style="position:relative; display:inline-block; margin-bottom:1rem;">
          <img src="images/victory-trophy-cat.jpg" alt="Victory Cleo" style="width:200px; height:200px; border-radius:var(--radius-xl); object-fit:cover; border:3px solid var(--accent-amber); box-shadow:0 0 35px rgba(245, 158, 11, 0.45); animation: cleoJumpBadge 1.2s ease-in-out infinite alternate;">
          <div style="position:absolute; bottom:-8px; right:-8px; font-size:2.5rem; animation: floatAvatar 2s ease-in-out infinite;">🏆</div>
        </div>
        <h2 style="font-size: 2rem; font-weight: 800; margin: 0.5rem 0; color: var(--accent-amber);">
          Level ${this.currentLevel.id} Completed!
        </h2>
        <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 440px; margin: 0 auto 1.2rem;">
          Outstanding work! <b>Cleo the Cat</b> has leaped forward to unlock <b>Level ${nextLevelId <= 25 ? nextLevelId : 'Mastery'}</b>!
        </p>

        <div style="display:flex; justify-content:center; gap:1.5rem; margin-bottom: 1.8rem;">
          <div style="background:var(--vibe-gradient-soft); border:2px solid var(--accent-amber); padding:0.85rem 1.4rem; border-radius:var(--radius-lg); text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:var(--accent-amber);">+30</div>
            <div style="font-size:0.85rem; font-weight:700;">XP Points</div>
          </div>
          <div style="background:var(--vibe-gradient-soft); border:2px solid var(--accent-emerald); padding:0.85rem 1.4rem; border-radius:var(--radius-lg); text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:var(--accent-emerald);">+20</div>
            <div style="font-size:0.85rem; font-weight:700;">Star Coins</div>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin-top:0.5rem;">
          ${hasNextLevel ? `
            <button class="btn btn-emerald btn-lg" onclick="DuoLevels.startLevel(${nextLevelId})" style="min-width:200px;">
              🚀 Start Next Level ${nextLevelId} ➔
            </button>
          ` : `
            <div style="font-weight:800; color:var(--accent-amber); margin-bottom:1rem; width:100%;">🎉 All 25 Levels Mastered!</div>
          `}
          <button class="btn btn-secondary btn-lg" onclick="DuoLevels.closeLessonModal()" style="min-width:140px;">
            🗺️ Back to Path
          </button>
        </div>
      </div>
    `;

    if (feedbackText) feedbackText.textContent = "";
    if (submitBtn) {
      if (hasNextLevel) {
        submitBtn.style.display = "inline-block";
        submitBtn.textContent = `Start Level ${nextLevelId} ➔`;
        submitBtn.className = "btn btn-emerald btn-lg";
        submitBtn.onclick = () => this.startLevel(nextLevelId);
      } else {
        submitBtn.style.display = "none";
      }
    }
  },

  promptRefillHearts() {
    const user = FluentPath.getUser() || FluentPath.defaultUser;
    if ((user.gameCredits || 0) >= 20) {
      if (confirm("Refill 5 Lives for 20 Star Coins?")) {
        FluentPath.spendGameCredits(20, "Heart Refill");
        this.hearts = 5;
        this.progress.hearts = 5;
        this.saveProgress();
        this.updateUI();

        const heartsModal = document.getElementById("duo-modal-hearts");
        if (heartsModal) heartsModal.textContent = this.hearts;

        const submitBtn = document.getElementById("duo-submit-btn");
        if (submitBtn && this.isAnswerChecked) {
          const isLast = (this.currentQuestionIdx === this.currentLevel.questions.length - 1);
          submitBtn.textContent = isLast ? "Finish Level ➔" : "Next Question ➔";
          submitBtn.className = "btn btn-primary btn-lg";
        }

        FluentPath.showToast("Hearts restored to 5! ❤️❤️❤️❤️❤️", "success");
      }
    } else {
      FluentPath.showToast("Earn more coins in Kids Corner or Daily Challenge!", "info");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  DuoLevels.init();
});

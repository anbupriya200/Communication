/**
 * FluentPath - English Communication Categories & Scenarios Database
 */

const communicationDatabase = {
  "daily-conversation": {
    title: "Daily Conversation",
    icon: "☕",
    level: "Beginner to Intermediate",
    situation: "Meeting a neighbor or acquaintance in the apartment hallway or a local coffee shop on a Sunday morning.",
    dialogue: [
      { speaker: "Liam", text: "Morning, Sarah! Lovely weather we're having today, isn't it?" },
      { speaker: "Sarah", text: "Good morning, Liam! Absolutely gorgeous. Are you heading out to the farmers' market?" },
      { speaker: "Liam", text: "Yes, exactly! I'm hoping to grab some fresh sourdough bread before they sell out." },
      { speaker: "Sarah", text: "Good call. Don't forget their locally roasted coffee beans either; they're outstanding!" }
    ],
    usefulPhrases: [
      { phrase: "How have you been keeping lately?", meaning: "A polite way to ask about someone's recent life and well-being." },
      { phrase: "Fancy bumping into you here!", meaning: "Used when meeting someone unexpectedly in a pleasant way." },
      { phrase: "I won't keep you any longer.", meaning: "Polite phrase to wrap up a casual conversation smoothly." },
      { phrase: "Let's definitely catch up soon.", meaning: "Friendly promise to meet again." }
    ],
    vocabulary: [
      { word: "Acquaintance", def: "A person one knows slightly, but who is not a close friend." },
      { word: "Small talk", def: "Polite conversation about unimportant or everyday subjects." },
      { word: "Impromptu", def: "Done without being planned, organized, or rehearsed." }
    ],
    betterSentences: [
      { weak: "What do you do now?", polished: "What are you currently working on these days?" },
      { weak: "I want coffee.", polished: "I could really go for a freshly brewed cup of coffee right now." },
      { weak: "Bye, see you.", polished: "It was so wonderful running into you! Take care and speak soon." }
    ],
    practiceActivity: "Roleplay: You see a neighbor carrying heavy grocery bags. Initiate small talk, offer assistance politely, and wrap up the conversation gracefully."
  },

  "college-english": {
    title: "College English",
    icon: "🎓",
    level: "Intermediate to Advanced",
    situation: "Discussing an upcoming seminar presentation and assignment deadline with your professor during office hours.",
    dialogue: [
      { speaker: "Student", text: "Good afternoon, Professor Davis. Do you have a quick moment to discuss my thesis outline?" },
      { speaker: "Professor", text: "Certainly, Priya. Come on in. How is the literature review section progressing?" },
      { speaker: "Student", text: "I've synthesized the recent studies on renewable energy grids, but I'm unsure if my scope is too broad." },
      { speaker: "Professor", text: "That is a common hurdle. Let's narrow the focal point to decentralized urban microgrids." }
    ],
    usefulPhrases: [
      { phrase: "Could you clarify what you mean by...?", meaning: "Asking for deeper academic explanation politely." },
      { phrase: "Based on empirical evidence...", meaning: "Grounding your academic statement in published research." },
      { phrase: "I would like to request an extension on...", meaning: "Formal inquiry regarding assignment dates." },
      { phrase: "From my perspective, the methodology seems robust.", meaning: "Critiquing an academic approach respectfully." }
    ],
    vocabulary: [
      { word: "Synthesize", def: "To combine different ideas, styles, or systems into a coherent whole." },
      { word: "Prerequisite", def: "A thing that is required as a prior condition for something else." },
      { word: "Peer-reviewed", def: "Evaluated by other experts in the same field before publication." }
    ],
    betterSentences: [
      { weak: "I didn't understand your lecture.", polished: "Could you provide additional clarification on the theoretical framework discussed on Tuesday?" },
      { weak: "I need more time for my essay.", polished: "Due to unforeseen circumstances, would it be possible to submit my paper by Friday?" }
    ],
    practiceActivity: "Practice requesting constructive feedback on a drafted essay draft during professor office hours."
  },

  "workplace-english": {
    title: "Workplace English",
    icon: "💼",
    level: "Intermediate to Advanced",
    situation: "Providing a project status update during a cross-functional Monday morning stand-up meeting.",
    dialogue: [
      { speaker: "Project Lead", text: "Thanks everyone for joining. Let's run through sprint blockers. Rohan, how is the deployment pipeline looking?" },
      { speaker: "Rohan", text: "We completed staging integration ahead of schedule. However, we're currently awaiting final security sign-off from compliance." },
      { speaker: "Project Lead", text: "Understood. I will escalate that with the security director right after this call to keep us on track." },
      { speaker: "Rohan", text: "Appreciated! That will ensure we hit our targeted Thursday release date without delay." }
    ],
    usefulPhrases: [
      { phrase: "To circle back on our previous discussion...", meaning: "Returning to an earlier topic or action item." },
      { phrase: "Let's take this offline.", meaning: "Proposing to discuss a detailed topic outside the large meeting." },
      { phrase: "I will follow up with an email summary.", meaning: "Committing to document agreed next steps." },
      { phrase: "We need to align our deliverables.", meaning: "Ensuring all teams work toward matching targets." }
    ],
    vocabulary: [
      { word: "Deliverable", def: "A tangible product or service to be provided as a result of a project." },
      { word: "Bandwidth", def: "The capacity or time needed to take on more work." },
      { word: "Stakeholder", def: "A person with an interest or concern in something, especially a business." }
    ],
    betterSentences: [
      { weak: "I don't have time to do this.", polished: "I'm currently at full capacity with the Q3 audit, but I can prioritize this early next week." },
      { weak: "Tell me what you think.", polished: "I would greatly appreciate your strategic perspective on this draft proposal." }
    ],
    practiceActivity: "Deliver a 90-second project status update addressing current progress, one roadblock, and requested action."
  },

  "travel-english": {
    title: "Travel English",
    icon: "✈️",
    level: "All Levels",
    situation: "Checking in at an international airport counter and inquiring about baggage allowance and seat selection.",
    dialogue: [
      { speaker: "Passenger", text: "Hello! I'm flying to Melbourne on flight QF402. Here is my passport and e-ticket." },
      { speaker: "Agent", text: "Welcome! Do you have any checked baggage or just carry-on luggage today?" },
      { speaker: "Passenger", text: "Just this one checked suitcase and a small backpack. Would it be possible to get an aisle seat?" },
      { speaker: "Agent", text: "Let me check... Yes, 14C is available. Here is your boarding pass; gate 22 opens at 14:15." }
    ],
    usefulPhrases: [
      { phrase: "Is there a layover or is it a direct flight?", meaning: "Checking for connecting stops." },
      { phrase: "Could you tell me where the baggage claim is?", meaning: "Asking for luggage arrival location." },
      { phrase: "I would like to declare these items.", meaning: "Informing customs officials at immigration." }
    ],
    vocabulary: [
      { word: "Itinerary", def: "A planned route or journey." },
      { word: "Transit", def: "Passing through or across a place on the way to elsewhere." },
      { word: "Customs", def: "The official department that administers and collects duties levied by a government on imported goods." }
    ],
    betterSentences: [
      { weak: "Where is my bag?", polished: "Excuse me, my checked suitcase hasn't arrived on carousel 4. Could you assist me with filing a trace?" },
      { weak: "Give me window seat.", polished: "Could you please check if there are any window seats remaining toward the front?" }
    ],
    practiceActivity: "Simulate a hotel reception check-in, asking about breakfast hours, Wi-Fi password, and airport shuttle service."
  },

  "shopping-english": {
    title: "Shopping English",
    icon: "🛍️",
    level: "Beginner to Intermediate",
    situation: "Asking a sales associate about clothing sizes, trying on outfits, and inquiring about exchange policies.",
    dialogue: [
      { speaker: "Customer", text: "Excuse me, do you have this navy blazer in a medium size?" },
      { speaker: "Associate", text: "Let me check the back storage for you. Yes, here is one! The fitting rooms are right around the corner." },
      { speaker: "Customer", text: "Thank you! Also, if it doesn't fit properly, what is your exchange policy?" },
      { speaker: "Associate", text: "You can exchange or return it within 30 days as long as the original tags remain attached." }
    ],
    usefulPhrases: [
      { phrase: "Does this come with a manufacturer warranty?", meaning: "Asking about electronics or appliance guarantees." },
      { phrase: "I'm just browsing for now, thank you.", meaning: "Politely declining immediate sales pressure." },
      { phrase: "Could you gift-wrap this, please?", meaning: "Asking for gift packaging." }
    ],
    vocabulary: [
      { word: "Receipt", def: "A written acknowledgment of having received a specified amount of money or goods." },
      { word: "Defective", def: "Imperfect or faulty." },
      { word: "Refund", def: "A repayment of a sum of money." }
    ],
    betterSentences: [
      { weak: "It is too expensive.", polished: "This is a bit beyond my current budget; do you have comparable alternatives on sale?" },
      { weak: "I want to change this.", polished: "I'd like to exchange this item for a different color if possible." }
    ],
    practiceActivity: "Ask a store assistant for help returning a purchased item that turned out to be the incorrect size."
  },

  "restaurant-english": {
    title: "Restaurant English",
    icon: "🍽️",
    level: "All Levels",
    situation: "Booking a table, ordering a three-course dinner, and handling dietary restrictions with a courteous server.",
    dialogue: [
      { speaker: "Server", text: "Good evening! Welcome to The Olive Branch. Are you ready to order or would you like a few more minutes?" },
      { speaker: "Guest", text: "We are ready, thank you. Could you recommend the chef's specialty pasta?" },
      { speaker: "Server", text: "Certainly! The wild mushroom ravioli with truffle cream is exceptionally popular tonight." },
      { speaker: "Guest", text: "Sounds wonderful. My dining partner has a mild peanut allergy—could we verify that with the kitchen?" }
    ],
    usefulPhrases: [
      { phrase: "Could we have the bill/check, please?", meaning: "Requesting to pay for the meal." },
      { phrase: "May we get a table for four near the window?", meaning: "Requesting specific restaurant seating." },
      { phrase: "Could you pack the leftovers to go?", meaning: "Asking for takeaway packaging." }
    ],
    vocabulary: [
      { word: "Appetizer", def: "A small dish of food or a drink taken before a meal or the main course." },
      { word: "Entrée", def: "The main course of a meal." },
      { word: "Complimentary", def: "Given or supplied free of charge as a courtesy." }
    ],
    betterSentences: [
      { weak: "Give me water.", polished: "Could we please have a carafe of tap water for the table?" },
      { weak: "The food is cold.", polished: "Excuse me, I believe my soup was brought out a little lukewarm. Would you mind having it reheated?" }
    ],
    practiceActivity: "Order a multi-course meal, request one substitution due to dietary preferences, and ask for separate checks."
  },

  "telephone-english": {
    title: "Telephone English",
    icon: "📞",
    level: "Intermediate",
    situation: "Placing a formal telephone call to arrange an interview appointment or reschedule a consultation.",
    dialogue: [
      { speaker: "Receptionist", text: "Good morning, Apex Solutions. Emily speaking, how may I direct your call?" },
      { speaker: "Caller", text: "Hello Emily. I'm calling to speak with Mr. Harrison regarding the senior marketing specialist opening." },
      { speaker: "Receptionist", text: "I'm afraid Mr. Harrison is currently in a conference. Would you like to leave a voicemail or call back?" },
      { speaker: "Caller", text: "May I leave a brief message with my contact details so he can reach me when convenient?" }
    ],
    usefulPhrases: [
      { phrase: "Could you please hold the line for a moment?", meaning: "Asking the caller to pause while transferring." },
      { phrase: "You're breaking up a little bit; could you repeat that?", meaning: "Addressing poor mobile connection." },
      { phrase: "Thank you for getting back to me so promptly.", meaning: "Polite opening when returning a missed call." }
    ],
    vocabulary: [
      { word: "Voicemail", def: "A centralized electronic system which can store messages from telephone callers." },
      { word: "Extension", def: "An additional telephone on the same line, or its telephone number." },
      { word: "Conference call", def: "A telephone call in which several participants talk at once." }
    ],
    betterSentences: [
      { weak: "Who are you?", polished: "May I ask who is calling, please?" },
      { weak: "I cannot hear you.", polished: "I'm having a little trouble hearing you clearly. Would you mind speaking up slightly?" }
    ],
    practiceActivity: "Practice leaving a concise 45-second professional voicemail stating your name, phone number, purpose, and preferred callback time."
  },

  "public-speaking": {
    title: "Public Speaking",
    icon: "🎙️",
    level: "Advanced",
    situation: "Delivering an opening keynote address at an academic or industry innovation symposium.",
    dialogue: [
      { speaker: "Speaker", text: "Distinguished guests, faculty, and colleagues—it is a true privilege to stand before you this morning." },
      { speaker: "Speaker", text: "Consider this: in the next sixty seconds, over five million queries will be generated globally across generative AI platforms." },
      { speaker: "Speaker", text: "Today, we are not just observing digital transformation; we are the architects charting its ethical horizon." }
    ],
    usefulPhrases: [
      { phrase: "Allow me to draw your attention to...", meaning: "Directing the audience to a key visual or data point." },
      { phrase: "To put this into broader perspective...", meaning: "Helping the audience understand significance." },
      { phrase: "In conclusion, let me leave you with one thought...", meaning: "Memorable concluding keynote statement." }
    ],
    vocabulary: [
      { word: "Rhetoric", def: "The art of effective or persuasive speaking or writing." },
      { word: "Enunciation", def: "The act of pronouncing words clearly and distinctly." },
      { word: "Cadence", def: "A modulation or inflection of the voice; rhythmic flow of words." }
    ],
    betterSentences: [
      { weak: "Today I will talk about stuff.", polished: "Today, I will unpack three fundamental breakthroughs redefining sustainable global logistics." },
      { weak: "That is all I have.", polished: "Thank you all very much for your time, and I welcome your questions during the panel discussion." }
    ],
    practiceActivity: "Prepare a captivating 60-second opening hook for a speech about the future of green technology in cities."
  },

  "group-discussion": {
    title: "Group Discussion",
    icon: "👥",
    level: "Intermediate to Advanced",
    situation: "Participating in a university tutorial debate evaluating remote learning vs. traditional in-person classrooms.",
    dialogue: [
      { speaker: "Moderator", text: "Let's open the floor to discuss whether universities should adopt permanent hybrid models." },
      { speaker: "Participant A", text: "While remote lectures offer undeniable flexibility, in-person labs cultivate indispensable interpersonal chemistry." },
      { speaker: "Participant B", text: "I see your point, A, but data shows that asynchronous recordings significantly boost retention for working students." },
      { speaker: "Participant A", text: "That is a valid counter-argument; perhaps a tailored compromise based on discipline is optimal." }
    ],
    usefulPhrases: [
      { phrase: "I would like to build upon what Sarah just highlighted.", meaning: "Adding constructive evidence to a peer's point." },
      { phrase: "I respectfully disagree with that assumption because...", meaning: "Disagreeing without being rude or confrontational." },
      { phrase: "Could we perhaps look at this from another angle?", meaning: "Reframing a stale debate to bring fresh insights." }
    ],
    vocabulary: [
      { word: "Consensus", def: "A general agreement among a group of people." },
      { word: "Nuance", def: "A subtle difference in or shade of meaning, expression, or sound." },
      { word: "Diplomatic", def: "Handling relationships and discussions with tact and sensitivity." }
    ],
    betterSentences: [
      { weak: "You are totally wrong.", polished: "While I understand that perspective, recent case studies suggest a very different outcome." },
      { weak: "Listen to me now.", polished: "May I briefly intervene to offer an alternative viewpoint on this topic?" }
    ],
    practiceActivity: "Politely intervene in an ongoing debate to bridge two opposing viewpoints with a balanced compromise."
  },

  "interview-english": {
    title: "Interview English",
    icon: "🎯",
    level: "Advanced",
    situation: "Answering the behavioral interview question: 'Tell me about a time you handled a crisis under pressure.'",
    dialogue: [
      { speaker: "Interviewer", text: "Could you walk me through an instance where an unexpected obstacle disrupted your project timeline?" },
      { speaker: "Candidate", text: "Certainly. During our annual product launch, our primary cloud database experienced an unpredicted outage 48 hours before go-live." },
      { speaker: "Candidate", text: "I quickly rallied a triage team, instituted hourly client briefings to maintain transparency, and coordinated a seamless database failover." },
      { speaker: "Interviewer", text: "That demonstrates admirable poise. What was the ultimate outcome?" },
      { speaker: "Candidate", text: "We went live with zero data corruption and received commendations from executive leadership for proactive crisis management." }
    ],
    usefulPhrases: [
      { phrase: "My core strength lies in translating complex challenges into actionable workflows.", meaning: "Highlighting problem-solving capabilities." },
      { phrase: "I thrive in collaborative, high-paced environments.", meaning: "Expressing cultural and organizational fit." },
      { phrase: "The key takeaway from that experience was...", meaning: "Demonstrating self-reflection and growth mindset (STAR method)." }
    ],
    vocabulary: [
      { word: "Adaptability", def: "The quality of being able to adjust to new conditions." },
      { word: "Poise", def: "Graceful and elegant bearing in a person; composed demeanor under stress." },
      { word: "Accomplishment", def: "Something that has been achieved successfully." }
    ],
    betterSentences: [
      { weak: "I worked hard and fixed it.", polished: "I systematically diagnosed the bottleneck, formulated a risk contingency plan, and executed the resolution." },
      { weak: "I don't have any weaknesses.", polished: "I continuously work on delegating tasks earlier, ensuring team members have room to exercise autonomy." }
    ],
    practiceActivity: "Structure a 2-minute answer to 'Why should we hire you for this position?' using the STAR framework."
  }
};

window.communicationDatabase = communicationDatabase;

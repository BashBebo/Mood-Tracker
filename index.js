const moodbutton = document.querySelectorAll('.mood-btn')
let selectedMood = null;

moodbutton.forEach(button => {
    button.addEventListener('click', ()=> {
        moodbutton.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedMood = button.dataset.mood;
    });
});

const moodResponses = {
  happy: {
    messages: [
      "That's amazing! Keep spreading good vibes!",
      "Your energy is contagious! 🌟",
      "Happiness is a habit — you're mastering it.",
      "Smile and let the world smile back at you!",
      "Every day is a new opportunity to shine.",
      "Celebrate the little victories in life!",
      "Your happiness inspires those around you.",
      "Keep chasing the things that make you happy.",
      "Happiness is the best gift you can give yourself.",
      "Spread joy wherever you go!"
    ],
    tips: [
      "Write down 3 things you're grateful for.",
      "Call someone and share your joy.",
      "Do something kind for someone else.",
      "Dance to your favorite song.",
      "Spend time outdoors and soak in the sunshine.",
      "Create a list of things that make you happy.",
      "Treat yourself to something you love.",
      "Share your happiness on social media.",
      "Plan a fun activity for the weekend.",
      "Take a moment to appreciate the present."
    ]
  },
  sad: {
    messages: [
      "It’s okay to feel this way. This moment will pass.",
      "You’re not alone — even this helps you grow.",
      "Gentleness with yourself is strength.",
      "Every storm eventually passes.",
      "You are stronger than you think.",
      "Take it one step at a time — you’ll get through.",
      "It’s okay to ask for help when you need it.",
      "Your feelings are valid and important.",
      "This is just a chapter, not the whole story.",
      "Be kind to yourself — you deserve it."
    ],
    tips: [
      "Try journaling how you feel.",
      "Put on music that uplifts you.",
      "Go outside for a short walk and breathe deeply.",
      "Talk to a trusted friend or family member.",
      "Watch a movie or show that makes you laugh.",
      "Practice mindfulness or meditation.",
      "Write down positive affirmations.",
      "Spend time with a pet or loved one.",
      "Do something creative like drawing or painting.",
      "Take a warm bath and relax."
    ]
  },
  tired: {
    messages: [
      "You’ve done enough. Rest is productive too.",
      "Even machines need to recharge.",
      "Feeling tired means you're pushing — be proud.",
      "Rest is the key to renewed energy.",
      "Take a break — you deserve it.",
      "Listen to your body and give it what it needs.",
      "Tomorrow is another chance to try again.",
      "Fatigue is a sign to slow down and recover.",
      "You’re doing your best — that’s enough.",
      "Rest now, and you’ll come back stronger."
    ],
    tips: [
      "Take a power nap or stretch for 5 minutes.",
      "Drink water and take 10 deep breaths.",
      "Walk around, rest your eyes, and reset.",
      "Listen to calming music or nature sounds.",
      "Turn off screens and rest in a quiet space.",
      "Do a quick meditation or breathing exercise.",
      "Eat a healthy snack to refuel your energy.",
      "Read a book or listen to an audiobook.",
      "Spend time in a comfortable, cozy space.",
      "Plan a good night's sleep for tonight."
    ]
  },
  excited: {
    messages: [
      "Let that energy flow into something great!",
      "Ride the wave! Start that thing you’ve been putting off.",
      "Use this fire to fuel your future.",
      "Your excitement is contagious — share it!",
      "Channel your energy into something meaningful.",
      "This is your moment — make the most of it!",
      "Let your enthusiasm inspire others.",
      "You’re unstoppable when you’re excited!",
      "Turn your excitement into action and results.",
      "Celebrate the things that make you feel alive."
    ],
    tips: [
      "Start a mini project right now!",
      "Tell someone what you're excited about.",
      "Turn that energy into action.",
      "Write down your ideas and plans.",
      "Share your excitement with a friend.",
      "Take a moment to visualize your goals.",
      "Do something creative to channel your energy.",
      "Plan a fun activity to keep the momentum going.",
      "Celebrate your excitement with a small reward.",
      "Use this energy to tackle a challenging task."
    ]
  },
  focused: {
    messages: [
      "You're in the zone! Keep it up!",
      "Focus is your superpower right now.",
      "Channel this energy into your goals.",
      "Stay locked in — you’re making progress.",
      "Your determination is inspiring.",
      "Keep your eyes on the prize — you’ve got this!",
      "Focus is the key to achieving greatness.",
      "You’re unstoppable when you’re focused.",
      "Stay disciplined and watch your efforts pay off.",
      "Every step forward is a step closer to success."
    ],
    tips: [
      "Break your task into smaller steps.",
      "Take short breaks to maintain your focus.",
      "Celebrate small wins to stay motivated.",
      "Eliminate distractions from your environment.",
      "Set clear goals and prioritize your tasks.",
      "Use a timer to stay on track.",
      "Write down your progress to stay motivated.",
      "Listen to instrumental music to stay focused.",
      "Visualize the outcome of your efforts.",
      "Reward yourself after completing a task."
    ]
  },
  angry: {
    messages: [
      "It's okay to feel anger — let it out constructively.",
      "Channel your anger into positive action.",
      "Take a moment to breathe and reflect.",
      "Anger is a signal — listen to what it’s telling you.",
      "You’re strong enough to handle this emotion.",
      "Let go of what you can’t control.",
      "Use your anger as motivation to improve.",
      "Take time to cool down and think clearly.",
      "This feeling is temporary — it will pass.",
      "You’re capable of turning this into something positive."
    ],
    tips: [
      "Step away and take deep breaths.",
      "Write down what’s bothering you.",
      "Engage in physical activity to release tension.",
      "Practice mindfulness or meditation.",
      "Talk to someone you trust about your feelings.",
      "Listen to calming music or nature sounds.",
      "Do something creative to express your emotions.",
      "Take a walk and clear your mind.",
      "Focus on solutions instead of problems.",
      "Remind yourself of the things that bring you peace."
    ]
  }
};


const logMood = document.getElementById('LogMood');
const resultBox = document.getElementById('response-box'); // make sure this ID matches in HTML

logMood.addEventListener('click', () => {
  // 1. Check if mood is selected
  if (!selectedMood) {
    alert('Please select a mood before logging it!');
    return;
  }

  // 2. Get mood data
  const moodData = moodResponses[selectedMood];

  // 3. Pick random message and tip
  const randomMsg = moodData.messages[Math.floor(Math.random() * moodData.messages.length)];
  const randomTip = moodData.tips[Math.floor(Math.random() * moodData.tips.length)];

  // 4. Generate output HTML
  const resultHTML = `
    <h2>Mood: ${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)}</h2>
    <p><strong>Message:</strong> ${randomMsg}</p>
    <p><strong>Tip:</strong> ${randomTip}</p>
  `;

  // 5. Show it in the result box
  resultBox.innerHTML = resultHTML;
  resultBox.style.display = 'block';
});

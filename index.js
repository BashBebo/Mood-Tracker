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
      "Happiness is a habit — you're mastering it."
    ],
    tips: [
      "Write down 3 things you're grateful for.",
      "Call someone and share your joy.",
      "Do something kind for someone else."
    ]
  },
  sad: {
    messages: [
      "It’s okay to feel this way. This moment will pass.",
      "You’re not alone — even this helps you grow.",
      "Gentleness with yourself is strength."
    ],
    tips: [
      "Try journaling how you feel.",
      "Put on music that uplifts you.",
      "Go outside for a short walk and breathe deeply."
    ]
  },
  tired: {
    messages: [
      "You’ve done enough. Rest is productive too.",
      "Even machines need to recharge.",
      "Feeling tired means you're pushing — be proud."
    ],
    tips: [
      "Take a power nap or stretch for 5 minutes.",
      "Drink water and take 10 deep breaths.",
      "Walk around, rest your eyes, and reset."
    ]
  },
  excited: {
    messages: [
      "Let that energy flow into something great!",
      "Ride the wave! Start that thing you’ve been putting off.",
      "Use this fire to fuel your future."
    ],
    tips: [
      "Start a mini project right now!",
      "Tell someone what you're excited about.",
      "Turn that energy into action."
    ]
  },
  focused: {
    messages: [
      "You're in the zone! Keep it up!",
      "Focus is your superpower right now.",
      "Channel this energy into your goals."
    ],
    tips: [
      "Break your task into smaller steps.",
      "Take short breaks to maintain your focus.",
      "Celebrate small wins to stay motivated."
    ]
  },
  angry: {
    messages: [
      "It's okay to feel anger — let it out constructively.",
      "Channel your anger into positive action.",
      "Take a moment to breathe and reflect."
    ],
    tips: [
      "Step away and take deep breaths.",
      "Write down what’s bothering you.",
      "Engage in physical activity to release tension."
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

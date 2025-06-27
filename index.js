// 1. Select all mood buttons
const moodButtons = document.querySelectorAll('.mood-btn');
let selectedMood = null;

// 2. Handle mood button clicks
moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove previous selections
    moodButtons.forEach(btn => btn.classList.remove('selected'));

    // Highlight selected
    button.classList.add('selected');

    // Store selected mood
    selectedMood = button.dataset.mood;
  });
});

// 3. Mood messages and tips
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
  }
};

// 4. Log Mood button
const logMood = document.getElementById('LogMood'); // match your HTML ID
const resultBox = document.getElementById('response-box');

logMood.addEventListener('click', () => {
  if (!selectedMood) {
    alert('Please select a mood before logging it!');
    return;
  }

  const moodData = moodResponses[selectedMood];
  const randomMsg = moodData.messages[Math.floor(Math.random() * moodData.messages.length)];
  const randomTip = moodData.tips[Math.floor(Math.random() * moodData.tips.length)];

  const resultHTML = `
    <h2>Mood: ${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)}</h2>
    <p><strong>Message:</strong> ${randomMsg}</p>
    <p><strong>Tip:</strong> ${randomTip}</p>
  `;

  resultBox.innerHTML = resultHTML;
  resultBox.style.display = 'block';

  // Save entry to localStorage
  const timestamp = new Date().toLocaleString();
  const moodEntry = {
    mood: selectedMood,
    message: randomMsg,
    tip: randomTip,
    timestamp: timestamp
  };

  let moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
  moodHistory.push(moodEntry);
  localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
});

// 5. Show Mood History
document.getElementById('showHistory').addEventListener('click', () => {
  const historyContainer = document.getElementById('moodHistoryList');
  historyContainer.innerHTML = ''; // clear previous

  const moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];

  moodHistory.reverse().forEach(entry => {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'history-entry';
    entryDiv.innerHTML = `
      <p><strong>${entry.timestamp}</strong> - Mood: <em>${entry.mood}</em></p>
      <p>💬 ${entry.message}</p>
      <p>✅ ${entry.tip}</p>
      <hr />
    `;
    historyContainer.appendChild(entryDiv);
  });
});

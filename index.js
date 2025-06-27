const moodbutton = document.querySelectorAll('.mood-btn')
let selectedMood = null;

moodbutton.forEach(button => {
    button.addEventListener('click', ()=> {
        moodbutton.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedMood = button.dataset.mood;
    });
});

const LogMood = document.getElementById('LogMood');
LogMood.addEventListener('click', ()=> {
    if (selectedMood) {
        alert('Mood logged: ' + selectedMood);
        console.log(`Selected mood: ${selectedMood}`);
    } else {
        alert('Please select a mood before logging.');
    }
})

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
    }
  };
  
const moodbutton = document.querySelectorAll('.mood-btn');
let selectedMood = null;

moodbutton.forEach((button) => {
    button.addEventListener('click', () => {
        moodbutton.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedMood = button.dataset.mood;
    })
})

const logMood = document.getElementById('LogMood');
logMood.addEventListener('click', () => {
    if (selectedMood) {
        alert(`You have logged your mood as: ${selectedMood}`);
    } else {
        alert('Please select a mood before logging.');
    }
})
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

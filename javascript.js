document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-audio");
    const audioIcon = document.getElementById('audio-icon');

    audioIcon.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            audioIcon.textContent = '🔊'
        } else {
            audio.pause();
            audioIcon.textContent = '🔇'
        }
    })
});
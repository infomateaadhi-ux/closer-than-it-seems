const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {
    if (!playing) {
        bgMusic.play();
        musicBtn.innerHTML = "⏸ Pause";
        playing = true;
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = "♪ Press Play";
        playing = false;
    }
});

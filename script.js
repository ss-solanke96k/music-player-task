var audio = document.getElementById("aud");
var playBtn = document.getElementById("btn1");

// Toggle play/pause on click
playBtn.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playBtn.classList.remove("ri-play-circle-fill");
    playBtn.classList.add("ri-pause-circle-fill");
  } else {
    audio.pause();
    playBtn.classList.remove("ri-pause-circle-fill");
    playBtn.classList.add("ri-play-circle-fill");
  }
});

audio.addEventListener("timeupdate", () => {
  let percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent;
});

// Seek when user drags progress bar
progress.addEventListener("input", () => {
  let newTime = (progress.value / 100) * audio.duration;
  audio.currentTime = newTime;
});

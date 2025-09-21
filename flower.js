onload = () => {
  document.body.classList.remove("container");
};
const btn = document.getElementById('musicBtn');
const audio = document.getElementById('music');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸";
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
});

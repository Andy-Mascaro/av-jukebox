const audio = document.getElementById('audio');

const carSound = document.getElementById('car');
carSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/car.mp3';
  audio.play(); 
});
const rocketSound = document.getElementById('rocket-sound');
rocketSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/rocket.mp3';
  audio.play();
});

const boatSound = document.getElementById('boat-sound');
boatSound.addEventListener('click', () => {
  audio.src = 'assets/sounds/boat.mp3';
  audio.play();
});

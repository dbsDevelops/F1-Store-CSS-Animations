// Get the animated element
const animatedCar = document.querySelector('.f1-car');

// Listen for when the user scrolls down to the first section
window.addEventListener('scroll', () => {
  if (window.scrollY >= 190) {
    animatedCar.classList.add('animate');
    // Start animation
    startAnimation();
    // Remove car after animation
    removeCar();
  } else {
    animatedCar.classList.remove('animate');
  }
});

function startAnimation() {
  // Listen for the 'animationstart' event to trigger the audio
  animatedCar.addEventListener('animationstart', () => {
    // Get the audio element
    const audio = document.getElementById('f1-sound');
    // Play the audio
    audio.play();
  });
}

function removeCar() {
  // Listen for the 'animationend' event to trigger the removal
  animatedCar.addEventListener('animationend', () => {
    // Remove the element from the DOM
    animatedCar.remove();
  });
}


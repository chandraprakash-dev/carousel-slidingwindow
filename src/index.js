const carousel = document.querySelector('.carousel');
const images = document.querySelector('.images');

const prev = carousel.querySelector('.prev');
const next = carousel.querySelector('.next');

// Required globals, modify these values when the count
// size, no. of images required in a scroll change
const imageWidth = 130;
const ribbonWidth = 3;
let currentPosition = 0;
let newPosition = 0;
const imageCount = 9;

function scroll(left=true) {
  if(left) {
    newPosition = currentPosition + ribbonWidth;
  } else {
    newPosition = currentPosition - ribbonWidth;
  }

  if(newPosition < 0 || newPosition > imageCount) return;

  currentPosition = newPosition;

  const off = currentPosition * imageWidth;
  images.style.transform = `translateX(-${off}px)`;
}

next.addEventListener('click', scroll);
prev.addEventListener('click', () => scroll(false));

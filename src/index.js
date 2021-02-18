const carousel = document.querySelector('.carousel');
const images = document.querySelector('.images');

const prev = carousel.querySelector('.prev');
const next = carousel.querySelector('.next');

const width = 150;
const count = 3;
let position = 0;

function scrollLeft() {
  position += count;
  console.log(position);
  const off = position * width;
  images.style.transform = `translateX(-${off}px)`;
}

function scrollRight() {
  position -= count;
  console.log(position);
  const off = position * width;
  images.style.transform = `translateX(-${off}px)`;
}

prev.addEventListener('click', scrollRight);
next.addEventListener('click', scrollLeft);

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const trackWidth = track.getBoundingClientRect().width;
const carouselButtons = document.querySelector('.two-buttons-container');
const adminButton = carouselButtons.firstElementChild;
const memberButton = carouselButtons.lastElementChild;

// ----- Functions -----

function handleOnHoverEffect() {
  if (!this.classList.contains('current-button')) {
    this.style.outline = '1px solid var(--background-dark)';
  }
}

function handleOffHoverEffect() {
  if (!this.classList.contains('current-button')) {
    this.style.outline = '1px solid transparent';
  }
}

function handleBorderShadow() {
  const otherButton = this.nextElementSibling || this.previousElementSibling;
  this.style.outline = '1px solid var(--background-dark)';
  otherButton.style.outline = '1px solid transparent'
}

// Move the slides when clicking on the buttons
function moveSlides(translateAmount) {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling || currentSlide.previousElementSibling;

  // Move slides
  currentSlide.style.transform = `translateX(${translateAmount}px)`;
  nextSlide.style.transform = `translateX(${translateAmount}px)`;

  nextSlide.classList.add('current-slide');
  currentSlide.classList.remove('current-slide');
}

// Set the slides position relative to where the carousel track is
function positionSlides(slides) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${trackWidth * i}px`;
    slides[i].style.right = `-${trackWidth * i}px`;
  }
};

positionSlides(slides);

// ----- Listeners -----

// Slides movement on click
memberButton.addEventListener('click', (e) => {
  e.preventDefault();
  const sibling = e.currentTarget.nextElementSibling || e.currentTarget.previousElementSibling;
  e.currentTarget.classList.add('current-button');
  sibling.classList.remove('current-button');
  moveSlides(-trackWidth);
});

adminButton.addEventListener('click', (e) => {
  e.preventDefault();
  const sibling = e.currentTarget.nextElementSibling || e.currentTarget.previousElementSibling;
  e.currentTarget.classList.add('current-button');
  sibling.classList.remove('current-button');
  moveSlides(0);
});

// Buttons border shadow effect
adminButton.addEventListener('click', handleBorderShadow);
memberButton.addEventListener('click', handleBorderShadow);

adminButton.addEventListener('mouseover', handleOnHoverEffect);
adminButton.addEventListener('mouseleave', handleOffHoverEffect);

memberButton.addEventListener('mouseover', handleOnHoverEffect);
memberButton.addEventListener('mouseleave', handleOffHoverEffect);

// Slides movement on drag
let isDown;
let startX;

track.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.screenX - track.offsetLeft
  console.log(startX);
});

track.addEventListener('mouseleave', () => {
  isDown = false;
});

track.addEventListener('mouseup', () => {
  isDown = false;
});

track.addEventListener('mousemove', () => {
  if (!isDown) return
});

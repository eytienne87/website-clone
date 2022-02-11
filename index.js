const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const trackWidth = track.getBoundingClientRect().width;
const carouselButtons = document.querySelector('.two-buttons-container');
const adminButton = carouselButtons.firstElementChild;
const memberButton = carouselButtons.lastElementChild;


function handleBorderShadow() {
  const otherButton = this.nextElementSibling || this.previousElementSibling;

}


// Move the current slide and the next/previous slide when clicking on the buttons
function handleSlideToggle(translateAmount) {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling || currentSlide.previousElementSibling;

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


memberButton.addEventListener('click', (e) => {
  e.preventDefault();
  handleSlideToggle(-trackWidth);
});

adminButton.addEventListener('click', (e) => {
  e.preventDefault();
  handleSlideToggle(0);
});

adminButton.addEventListener('click', handleBorderShadow)
memberButton.addEventListener('click', handleBorderShadow)

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const trackWidth = track.getBoundingClientRect().width;
const carouselButtons = document.querySelector('.two-buttons-container');
const adminButton = carouselButtons.firstElementChild;
const memberButton = carouselButtons.lastElementChild;


function handleSlideToggle(e) {
  e.preventDefault();
  if (slides[1].classList.contains('current-slide')) return;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${trackWidth}px)`;
  }

  slides[1].classList.add('current-slide');
}



function positionSlides(slides) {
  for (let i = 0; i < slides.length; i++) {
    // console.log(slides[i].style.left);
    slides[i].style.left = `${trackWidth * i}px`;
    slides[i].style.right = `-${trackWidth * i}px`;
  }
};

positionSlides(slides);



memberButton.addEventListener('click', handleSlideToggle)

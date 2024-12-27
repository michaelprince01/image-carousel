const carouselImages = document.querySelectorAll('.carousel-image');
const indicators = document.querySelectorAll('.indicator');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;

// Show the current slide and update the active indicator
function updateSlide() {
  carouselImages.forEach((image, index) => {
    image.style.display = index === current ? 'block' : 'none';
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === current);
  });
}

// Move to the previous slide
function slideLeft() {
  current = (current - 1 + carouselImages.length) % carouselImages.length;
  updateSlide();
}

// Move to the next slide
function slideRight() {
  current = (current + 1) % carouselImages.length;
  updateSlide();
}

// Set the slide to the clicked indicator
function goToSlide(index) {
  current = index;
  updateSlide();
}

// Auto-slide functionality
let autoSlide = setInterval(slideRight, 3000);

// Restart auto-slide on manual navigation
function restartAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(slideRight, 3000);
}

// Initialize the carousel
function initCarousel() {
  updateSlide();

  // Event listeners for buttons
  prevBtn.addEventListener('click', () => {
    slideLeft();
    restartAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    slideRight();
    restartAutoSlide();
  });

  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index);
      restartAutoSlide();
    });
  });
}

// Start the carousel
initCarousel();

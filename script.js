let currentIndex = 0;
const imagesPerSet = 2;
const slideWidth = 100 / imagesPerSet;

function nextSlide() {
  if (currentIndex < 6 - imagesPerSet) {
    // Ensure not to exceed available sets
    currentIndex++;
    updateSlidePosition();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
}

function updateSlidePosition() {
  const slide = document.querySelector(".slide");
  slide.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

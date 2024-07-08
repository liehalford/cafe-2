let currentIndex = 0;
let imagesPerSet = 3;
let slideWidth = 100 / imagesPerSet;

function updateVariables() {
  if (window.innerWidth <= 600) {
    imagesPerSet = 2;
  } else {
    imagesPerSet = 3;
  }
  slideWidth = 100 / imagesPerSet;
  updateSlidePosition();
}

window.addEventListener("resize", updateVariables);
window.addEventListener("load", updateVariables);

function nextSlide() {
  if (currentIndex < 6 - imagesPerSet) {
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

updateVariables(); // Initialize on page load

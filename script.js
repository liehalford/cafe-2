let carousels = [];

function initializeCarousels() {
  document.querySelectorAll(".slider-container").forEach((carousel, index) => {
    const slide = carousel.querySelector(".slide");
    const images = slide.querySelectorAll("img").length;
    const imagesPerSet = parseInt(carousel.getAttribute("data-images-per-set"));
    let currentIndex = 0;
    let slideWidth = 100 / imagesPerSet;

    function updateVariables() {
      if (window.innerWidth <= 900) {
        imagesPerSet = 2;
      } else {
        imagesPerSet = 3;
      }
      slideWidth = 100 / imagesPerSet;
      updateSlidePosition();
    }

    function updateSlidePosition() {
      slide.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }

    function nextSlide() {
      if (currentIndex < images - imagesPerSet) {
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

    carousels.push({ nextSlide, prevSlide, updateVariables });

    window.addEventListener("resize", updateVariables);
    window.addEventListener("load", updateVariables);

    updateVariables(); // Initialize on page load
  });
}

function nextSlide(index) {
  carousels[index].nextSlide();
}

function prevSlide(index) {
  carousels[index].prevSlide();
}

initializeCarousels();

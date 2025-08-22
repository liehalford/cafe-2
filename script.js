// Define a class for Carousel
class Carousel {
  constructor(carouselId, imagesPerSet) {
    this.carouselId = carouselId;
    this.currentIndex = 0;
    this.imagesPerSet = imagesPerSet;
    this.slideWidth = 100 / this.imagesPerSet;

    // Select carousel elements
    this.carousel = document.getElementById(carouselId);
    this.slideContainer = this.carousel.querySelector(".slide");
    this.prevButton = this.carousel.querySelector(".prev");
    this.nextButton = this.carousel.querySelector(".next");

    // Initialize event listeners
    this.prevButton.addEventListener("click", () => this.prevSlide());
    this.nextButton.addEventListener("click", () => this.nextSlide());

    // Initialize on page load
    this.updateVariables();
    this.updateSlidePosition();

    // Resize event listener
    window.addEventListener("resize", () => this.updateVariables());
  }

  // Update variables based on window width
  updateVariables() {
    if (window.innerWidth <= 900) {
      this.imagesPerSet = 1;
    } else {
      this.imagesPerSet = 3;
    }
    this.slideWidth = 100 / this.imagesPerSet;
    this.updateSlidePosition();
  }

  // Move to the next slide
  nextSlide() {
    if (this.currentIndex < this.slideCount() - this.imagesPerSet) {
      this.currentIndex++;
      this.updateSlidePosition();
    }
  }

  // Move to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlidePosition();
    }
  }

  // Update slide position based on currentIndex
  updateSlidePosition() {
    this.slideContainer.style.transform = `translateX(-${
      this.currentIndex * this.slideWidth
    }%)`;
  }

  // Get total number of slides
  slideCount() {
    return this.slideContainer.querySelectorAll("img").length;
  }
}

// Initialize carousels on page load
window.addEventListener("load", () => {
  // Create instances for each carousel on the page
  const carousel1 = new Carousel("carousel1", 3); // Replace with actual IDs and imagesPerSet values
  const carousel2 = new Carousel("carousel2", 3); // If you have multiple carousels
  const carousel3 = new Carousel("carousel3", 3);
  const carousel4 = new Carousel("carousel4", 3);
  const carousel5 = new Carousel("carousel5", 3);
  // Add more carousel instances as needed
});

// lighbox functions

document.addEventListener("DOMContentLoaded", function () {
  const openFormBtn = document.getElementById("openFormBtn");
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("closeBtn");
  const contactForm = document.getElementById("contactForm");

  openFormBtn.addEventListener("click", function () {
    lightbox.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:marcoroma1@icloud.com?subject=Contact%20From%20Website&body=Name:%20${encodeURIComponent(
      name
    )}%0A
    Surname:%20${encodeURIComponent(surname)}%0A
    Email:%20${encodeURIComponent(email)}%0A
    Message:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  });
});

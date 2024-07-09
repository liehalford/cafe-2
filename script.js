let currentIndex = 0;
let imagesPerSet = 3;
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

document.addEventListener("DOMContentLoaded", function () {
  function checkScreenWidth() {
    const contentDiv = document.getElementById("home");
    if (window.matchMedia("(max-width: 900px)").matches) {
      // If the screen width is 900px or less
      containerHeroDiv.innerHTML = `
      <div class="containerHero">

  <header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-*" >
  <div class="container-fluid">
       <a class="navbar-brand d-lg-none d-sm-block" href="#">
        <img src="img/logo.png" alt="">
       </a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"> 
      
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="products.html">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="location.html">Locations</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="events.html">Events</a>
        </li>
         <li class="nav-item">
          <a id="border-item" class="nav-link" href="contact.html">Collab with Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">🇺🇸</a></li>
            <li><a class="dropdown-item" href="#">🇮🇹</a></li>

          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
<div class="hero-home" id="home">
<div class="logo ">
  <img class="img-fluid" src="img/logo.png" alt="logo of Cafe de Anatolia">
</div>
</div>
    </div>
      `;
    } else {
      // If the screen width is more than 900px
      containerHeroDiv.innerHTML = `
       <div class="containerHero">
<div class="hero-home" id="home">
  <header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-*" >
  <div class="container-fluid">
       <a class="navbar-brand d-lg-none d-sm-block" href="#">
        <img src="img/logo.png" alt="">
       </a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"> 
      
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="products.html">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="location.html">Locations</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="events.html">Events</a>
        </li>
         <li class="nav-item">
          <a id="border-item" class="nav-link" href="contact.html">Collab with Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">🇺🇸</a></li>
            <li><a class="dropdown-item" href="#">🇮🇹</a></li>

          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
<div class="logo ">
  <img class="img-fluid" src="img/logo.png" alt="logo of Cafe de Anatolia">
</div>
    </div>
    </div>`;
    }
  }

  // Initial check
  checkScreenWidth();

  // Add event listener for window resize
  window.addEventListener("resize", checkScreenWidth);
});

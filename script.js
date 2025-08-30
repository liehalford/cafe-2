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
// back to top btn
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    // после hero
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// swiper
document.addEventListener("DOMContentLoaded", function () {
  const galleries = document.querySelectorAll(".swiper.my-gallery");
  const swipers = [];

  galleries.forEach((gallery, i) => {
    swipers[i] = new Swiper(gallery, {
      loop: true,
      spaceBetween: 15,
      autoplay: false, // autoplay стартуем вручную
      speed: 800,
      pagination: {
        el: gallery.querySelector(".swiper-pagination"),
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      },
    });
  });

  // Observer следит за каждой галереей
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = [...galleries].indexOf(entry.target);
        if (index !== -1) {
          if (entry.isIntersecting) {
            swipers[index].autoplay.start(); // запускаем
          } else {
            swipers[index].autoplay.stop(); // останавливаем
          }
        }
      });
    },
    { threshold: 0.3 } // 30% галереи видно — считаем активной
  );

  galleries.forEach((gallery) => observer.observe(gallery));
});

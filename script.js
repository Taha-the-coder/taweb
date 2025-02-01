// Preloader
window.addEventListener("load", () => {
      document.getElementById("preloader").style.display = "none";
  });
  
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  
  menuToggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
  });
  
  // Slideshow
  const slides = document.querySelectorAll("#slideshow .slides img");
  let currentSlide = 0;
  
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
      });
  }
  
  document.getElementById("prev").addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  });
  
  document.getElementById("next").addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  });
  
  showSlide(currentSlide);
  
(function() {
  document.querySelector(".quote-carousel .next").addEventListener("click", nextSlide);
  document.querySelector(".quote-carousel .prev").addEventListener("click", previousSlide);
  
  var slides = document.getElementsByClassName("quoteCarouselBlock");
  var slideIndex = 0;
  showSlides();

  function nextSlide() {
    setSlide(slideIndex + 1);
  }

  function previousSlide() {
    setSlide(slideIndex - 1);
  }

  function setSlide(n) {
    if (n < 0) {
      slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
      slideIndex = 0;
    } else {
      slideIndex = n;
    }
    
    showSlides();
  }

  function showSlides() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.add("hidden");
    }
    slides[slideIndex].classList.remove("hidden");
  }
})();
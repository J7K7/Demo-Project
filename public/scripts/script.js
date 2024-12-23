document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('[data-carousel-item]');
  const prevBtn = document.querySelector('[data-carousel-prev]');
  const nextBtn = document.querySelector('[data-carousel-next]');
  let currentSlide = 0;
  const slideInterval = 3000; // Interval for automatic slide transition (in ms)

  // Function to show a particular slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.add('hidden'); // Hide all slides
      if (i === index) slide.classList.remove('hidden'); // Show the current slide
    });
  }

  // Show the current slide at the beginning
  showSlide(currentSlide);

  // Automatically change the slide every 'slideInterval' milliseconds
  setInterval(function () {
    currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide, loop back to 0 after the last one
    showSlide(currentSlide);
  }, slideInterval);

  // Handle previous and next buttons
  prevBtn.addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});

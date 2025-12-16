/*Banner con flechas*/ 
/*document.addEventListener('DOMContentLoaded', () => {
    const slider  = document.querySelector('.banner__slider');
    const slides  = document.querySelectorAll('.banner__slide');
    const prevBtn = document.querySelector('.banner__arrow--left');
    const nextBtn = document.querySelector('.banner__arrow--right');
    const dots    = document.querySelectorAll('.banner__dot');

    let current = 0;

    function updateSlide() {
        slider.style.transform = `translateX(-${current * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('banner__dot--active', i === current);
        });
    }

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        current++;
        if (current >= slides.length) current = 0;
        updateSlide();
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        current--;
        if (current < 0) current = slides.length - 1;
        updateSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            current = index;
            updateSlide();
        });
    });
});*/

/* Autoplay Slider */
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.banner__slider');
  const slides = document.querySelectorAll('.banner__slide');
  const dots   = document.querySelectorAll('.banner__dot');

  let current = 0;
  const INTERVAL = 4500; // ms
  let timer;

  function goToSlide(index) {
    current = (index + slides.length) % slides.length;
    slider.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) =>
      dot.classList.toggle('is-active', i === current)
    );
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(() => {
      goToSlide(current + 1);
    }, INTERVAL);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  // dots click 
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      startAutoplay();
    });
  });

  // pausa al tocar (mobile UX)
  slider.addEventListener('touchstart', stopAutoplay, { passive: true });
  slider.addEventListener('touchend', startAutoplay, { passive: true });

  // inicio
  startAutoplay();
});


/*Products */
document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.product__image');
  const thumbs = document.querySelectorAll('.thumb');
  const prevBtn = document.querySelector('.thumbs__arrow--up');
  const nextBtn = document.querySelector('.thumbs__arrow--down');

  let currentIndex = 0;

  function updateImage(index) {
    const img = thumbs[index];
    if (!img) return;

    mainImage.src = img.src;

    thumbs.forEach(t => t.classList.remove('is-active'));
    img.classList.add('is-active');

    currentIndex = index;
  }

  // Click en miniaturas
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      updateImage(index);
    });
  });

  // Flecha izquierda
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const next = (currentIndex - 1 + thumbs.length) % thumbs.length;
    updateImage(next);
  });

  // Flecha derecha
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const next = (currentIndex + 1) % thumbs.length;
    updateImage(next);
  });

  // Inicial
  updateImage(0);
});
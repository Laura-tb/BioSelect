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

  // Click on thumbnails
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      updateImage(index);
    });
  });

  // Left arrow
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const next = (currentIndex - 1 + thumbs.length) % thumbs.length;
    updateImage(next);
  });

  // Right arrow
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const next = (currentIndex + 1) % thumbs.length;
    updateImage(next);
  });

  // Initial
  updateImage(0);
});
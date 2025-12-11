const mainImg = document.querySelector('.product__image');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImg.src = thumb.src;
    document.querySelector('.thumb.is-active')?.classList.remove('is-active');
    thumb.classList.add('is-active');
  });
});
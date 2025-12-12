/*Banner*/ 
document.addEventListener('DOMContentLoaded', () => {
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
});


/*Products */

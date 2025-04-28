const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" alt="Banana"></div>',
    '<div><img src="img/girl.svg" alt="Girl"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>'
];

let currentSlide = 0;

function renderCarousel() {
    const slideContainer = document.querySelector('.products-carousel__slides');
    slideContainer.innerHTML = slides[currentSlide];
    if (window.matchMedia("(min-width: 768px)").matches) {
        const secondSlide = (currentSlide + 1) % slides.length;
        slideContainer.innerHTML += slides[secondSlide];
        if (window.matchMedia("(min-width: 1024px)").matches) {
            const thirdSlide = (currentSlide + 2) % slides.length;
            slideContainer.innerHTML += slides[thirdSlide];
        }
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    renderCarousel();
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderCarousel();
}

// setInterval(nextSlide, 3000); // Change slide every 3 seconds
renderCarousel();

const nextButton = document.querySelector('.products-carousel__button--next');
nextButton.addEventListener('click', nextSlide);

const prevButton = document.querySelector('.products-carousel__button--prev');
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderCarousel);

// Цей спосіб не рекомендується:
// window.onresize = renderCarousel;
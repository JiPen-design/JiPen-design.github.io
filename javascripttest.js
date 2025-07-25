let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;
const slider = document.getElementById('slider');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function changeSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startSlideShow() {
    slideInterval = setInterval(changeSlide, 3000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

slider.addEventListener('mouseover', stopSlideShow);
slider.addEventListener('mouseout', startSlideShow);

startSlideShow();

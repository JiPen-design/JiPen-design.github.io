let currentIndex = 0;
const intervalTime = 3000; // 自动切换间隔时间（毫秒）
let slideInterval;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length; // 包括克隆的图片

function showSlide(index) {
    const slider = document.querySelector('.slider');
    
    // 更新当前索引并处理克隆图片
    if (index >= totalSlides) {
        slider.style.transition = 'none'; // 禁用过渡效果
        currentIndex = 0;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // 强制重绘，确保跳转到第一张图片后再启用过渡效果
        slider.offsetHeight; // Trigger a reflow
        
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
    } else if (index < 0) {
        slider.style.transition = 'none'; // 禁用过渡效果
        currentIndex = totalSlides - 2; // 跳到倒数第二张图片
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // 强制重绘，确保跳转到最后一张图片后再启用过渡效果
        slider.offsetHeight; // Trigger a reflow
        
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
    } else {
        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function nextSlide() {
    showSlide(currentIndex + 1);
    resetInterval();
}

function prevSlide() {
    showSlide(currentIndex - 1);
    resetInterval();
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

function resetInterval() {
    stopSlideShow();
    startSlideShow();
}

// Initialize the slideshow
startSlideShow();

// Pause slideshow when mouse hovers over the slider container
document.querySelector('.slider-container').addEventListener('mouseover', stopSlideShow);

// Resume slideshow when mouse leaves the slider container
document.querySelector('.slider-container').addEventListener('mouseout', startSlideShow);

document.addEventListener('DOMContentLoaded', () => {
    // Swiper configuration
    if (document.querySelector('.mySwiper')) {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    // Battery Scroll Progress Logic
    const batteryLevel = document.getElementById('battery-level');
    const batteryText = document.getElementById('battery-text');

    if (batteryLevel && batteryText) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = Math.round((scrollTop / (docHeight - winHeight)) * 100);

            batteryLevel.style.width = `${scrollPercent}%`;
            batteryText.textContent = `${scrollPercent}%`;

            if (scrollPercent < 20) {
                batteryLevel.style.backgroundColor = '#ff453a';
            } else if (scrollPercent < 50) {
                batteryLevel.style.backgroundColor = '#ffd60a';
            } else {
                batteryLevel.style.backgroundColor = '#32d74b';
            }
        });
    }
});

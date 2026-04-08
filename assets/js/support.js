document.addEventListener('DOMContentLoaded', () => {

    const batteryLevel = document.getElementById('battery-level');
    const batteryText = document.getElementById('battery-text');

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

        if (batteryLevel) {
            batteryLevel.style.width = `${scrollPercent}%`;
            
            // Dynamic Color Coding
            if (scrollPercent < 20) {
                batteryLevel.style.backgroundColor = '#ff453a';
            } else if (scrollPercent < 50) {
                batteryLevel.style.backgroundColor = '#ffd60a';
            } else {
                batteryLevel.style.backgroundColor = '#32d74b';
            }
        }
        if (batteryText) {
            batteryText.textContent = `${scrollPercent}%`;
        }
    }

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    // Search Bar Focus Effects
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('scale-[1.02]');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('scale-[1.02]');
        });
    }
});

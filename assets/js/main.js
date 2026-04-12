// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });


    // Mega Menu
    const megaMenu = document.getElementById('mega-menu');
    const menuItems = document.querySelectorAll('[data-menu]');
    const allPanels = document.querySelectorAll('.menu-panel');
    let hideTimer = null;

    function openMenu(id) {
        clearTimeout(hideTimer);
        allPanels.forEach(p => p.classList.remove('is-active'));
        const panel = document.getElementById(`menu-${id}`);
        if (panel) {
            panel.classList.add('is-active');
            megaMenu.classList.add('is-open');
        }
    }

    function closeMenu() {
        hideTimer = setTimeout(() => {
            megaMenu.classList.remove('is-open');
            allPanels.forEach(p => p.classList.remove('is-active'));
        }, 120);
    }

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => openMenu(item.dataset.menu));
        item.addEventListener('mouseleave', closeMenu);
    });

    megaMenu.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    megaMenu.addEventListener('mouseleave', closeMenu);
});


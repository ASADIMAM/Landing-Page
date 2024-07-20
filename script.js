// JavaScript for menu toggle and footer animation
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    const footer = document.querySelector('footer');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Downscroll code
            footer.classList.add('footer-hide');
        } else {
            // Upscroll code
            footer.classList.remove('footer-hide');
        }

        lastScrollTop = scrollTop;
    });
});

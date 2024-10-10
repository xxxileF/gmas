document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const logo = document.getElementById('header-logo');
    let scrolled = false;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
            if (!scrolled) {
                header.classList.add('scrolled');
                logo.style.marginRight = 'auto';
                scrolled = true;
            }
        } else {
            if (scrolled) {
                header.classList.remove('scrolled');
                logo.style.marginRight = '0'; 
                scrolled = false;
            }
        }
    });
});
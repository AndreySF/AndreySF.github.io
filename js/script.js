window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuLink = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('menu--active');
    });

    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger--active');
            menu.classList.toggle('menu--active');
        })
    })
})
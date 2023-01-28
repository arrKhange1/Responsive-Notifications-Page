const burger = document.querySelector('.header__burger');
const closer = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');

function toggleNav() {
    nav.classList.toggle('nav--disabled');
}

function toggleBurger() {
    burger.classList.toggle('header__burger--disabled');
}

burger.addEventListener('click', e => {
    toggleNav();
    toggleBurger();
});

closer.addEventListener('click', e => {
    toggleNav();
    toggleBurger();
})


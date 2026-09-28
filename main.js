'use strict';

const menuOpenBtn = document.querySelector('.header__menu');
const menuCloseBtn = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');


menuOpenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.add('is-active');
});


menuCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('is-active');
});

const navLinks = document.querySelectorAll('.nav__item a, .nav__txt a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('is-active');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    if (!header || !footer) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add('is-hide');
            } else {
                header.classList.remove('is-hide');
            }
        });
    }, observerOptions);

    observer.observe(footer);
});

const images = document.querySelectorAll('.mainVisual__img');
let currentIndex = 0;

function showNextImage() {
    if (images.length === 0) return;

    images[currentIndex]?.classList.remove('is-active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex]?.classList.add('is-active');
}

setInterval(showNextImage, 9000);

window.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.cuisine__sub__image, .hotspring__sub__image');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-show');
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

"use strict";

/* open accordion on button click */
const button = document.querySelectorAll('.button');

button.forEach(x => x.addEventListener('click', () => {
    const content = x.closest('.container').querySelector('.content');
    content.classList.toggle('content__opened');
    x.querySelector('.icon').classList.toggle('icon__opened');
}));
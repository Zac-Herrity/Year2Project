//adds functions to buttons to open and close navbar
const openBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.overlay-menu');

//arrow functions to add and remove class
openBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});
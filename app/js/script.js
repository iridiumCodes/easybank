const body = document.querySelector('body');
const btnHamburger = document.getElementById('btnHamburger');
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
  this.classList.toggle('open');
  header.classList.toggle('open');

  if (header.classList.contains('open')) {
    body.classList.add('noscroll');
    fadeElements.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  } else {
    body.classList.remove('noscroll');
    fadeElements.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
});

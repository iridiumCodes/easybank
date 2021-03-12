const btnHamburger = document.getElementById('btnHamburger');
const header = document.querySelector('header');

btnHamburger.addEventListener('click', function () {
  this.classList.toggle('open');
  header.classList.toggle('open');
});

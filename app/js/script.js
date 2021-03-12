const btnHamburger = document.getElementById('btnHamburger');

btnHamburger.addEventListener('click', function () {
  console.log('click hamburger');
  this.classList.toggle('open');
});

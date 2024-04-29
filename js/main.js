document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.header__hamburger');
  const headerDown = document.querySelector('.header__down');

  hamburger.addEventListener('click', function() {
    headerDown.classList.toggle('header__down--open');
  });
});
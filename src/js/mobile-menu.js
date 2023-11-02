(() => {
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');

  closeMenuBtn.style.display = 'none';

  const toggleMenu = e => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (e.currentTarget === openMenuBtn) {
      openMenuBtn.style.display = 'none';
      closeMenuBtn.style.display = 'block';
    } else {
      openMenuBtn.style.display = 'block';
      closeMenuBtn.style.display = 'none';
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
})();

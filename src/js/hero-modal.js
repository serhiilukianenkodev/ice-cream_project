(() => {
  const refs = {
    openHeroModalBtn: document.querySelector('[data-hero-modal-open]'),
    closeHeroModalBtn: document.querySelector('[data-hero-modal-close]'),
    HeroModal: document.querySelector('[data-hero-modal]'),
  };

  refs.openHeroModalBtn.addEventListener('click', toggleModal);
  refs.closeHeroModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.HeroModal.classList.toggle('is-hidden');
  }
})();
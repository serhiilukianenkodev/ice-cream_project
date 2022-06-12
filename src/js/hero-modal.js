(() => {
  const refs = {
    openHeroModalBtn: document.querySelector('[hero-modal-open]'),
    closeHeroModalBtn: document.querySelector('[hero-modal-close]'),
    HeroModal: document.querySelector('[hero-modal]'),
  };

  refs.openHeroModalBtn.addEventListener('click', toggleModal);
  refs.closeHeroModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.HeroModal.classList.toggle('is-hidden');
  }
})();
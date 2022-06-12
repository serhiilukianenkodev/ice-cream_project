(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[data-about-modal-open]'),
    closeAboutModalBtn: document.querySelector('[data-about-modal-close]'),
    AboutModal: document.querySelector('[data-about-modal]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.AboutModal.classList.toggle('is-hidden');
  }
})();

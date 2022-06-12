(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[about-modal-open]'),
    closeAboutModalBtn: document.querySelector('[about-modal-close]'),
    AboutModal: document.querySelector('[about-modal]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.AboutModal.classList.toggle('is-hidden');
  }
})();

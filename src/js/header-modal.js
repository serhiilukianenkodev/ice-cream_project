(() => {
    const refs = {
      openHeaderModalBtn: document.querySelector('[header-modal-open]'),
      closeHeaderModalBtn: document.querySelector('[header-modal-close]'),
      HeaderModal: document.querySelector('[header-modal]'),
    };
  
    refs.openHeaderModalBtn.addEventListener('click', toggleModal);
    refs.closeHeaderModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.HeaderModal.classList.toggle('is-hidden');
    }
  })();
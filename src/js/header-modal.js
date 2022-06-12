(() => {
    const refs = {
      openMobileModalBtn: document.querySelector('[mobile-modal-open]'),
      closeMobileModal: document.querySelector("[data-menu]"),
      closeMobileModalBtn: document.querySelector("[data-menu-button]"),

      openHeaderModalBtn: document.querySelector('[header-modal-open]'),
      closeHeaderModalBtn: document.querySelector('[header-modal-close]'),
      HeaderModal: document.querySelector('[header-modal]'),
    };
    
    refs.openMobileModalBtn.addEventListener('click', toggleModalMenu);
    refs.openHeaderModalBtn.addEventListener('click', toggleModal);
    refs.closeHeaderModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.HeaderModal.classList.toggle('is-hidden');
    }
    function toggleModalMenu() {
      refs.HeaderModal.classList.toggle('is-hidden');
      refs.closeMobileModal.classList.remove('is-open');
      refs.closeMobileModalBtn.classList.remove('is-open');
    }
  })();
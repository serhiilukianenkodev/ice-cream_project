(()=>{const e={openMobileModalBtn:document.querySelector("[mobile-modal-open]"),closeMobileModal:document.querySelector("[data-menu]"),closeMobileModalBtn:document.querySelector("[data-menu-button]"),openHeaderModalBtn:document.querySelector("[header-modal-open]"),closeHeaderModalBtn:document.querySelector("[header-modal-close]"),HeaderModal:document.querySelector("[header-modal]")};function o(){e.HeaderModal.classList.toggle("is-hidden")}e.openMobileModalBtn.addEventListener("click",(function(){e.HeaderModal.classList.toggle("is-hidden"),e.closeMobileModal.classList.remove("is-open"),e.closeMobileModalBtn.classList.remove("is-open")})),e.openHeaderModalBtn.addEventListener("click",o),e.closeHeaderModalBtn.addEventListener("click",o)})(),(()=>{const e={openHeroModalBtn:document.querySelector("[hero-modal-open]"),closeHeroModalBtn:document.querySelector("[hero-modal-close]"),HeroModal:document.querySelector("[hero-modal]")};function o(){e.HeroModal.classList.toggle("is-hidden")}e.openHeroModalBtn.addEventListener("click",o),e.closeHeroModalBtn.addEventListener("click",o)})(),(()=>{const e={openAboutModalBtn:document.querySelector("[about-modal-open]"),closeAboutModalBtn:document.querySelector("[about-modal-close]"),AboutModal:document.querySelector("[about-modal]")};function o(){e.AboutModal.classList.toggle("is-hidden")}e.openAboutModalBtn.addEventListener("click",o),e.closeAboutModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[contacts-modal-open]"),closeModalBtn:document.querySelector("[contacts-modal-close]"),modal:document.querySelector("[contacts-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[franchise-modal-open]"),closeModalBtn:document.querySelector("[franchise-modal-close]"),modal:document.querySelector("[franchise-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-mobile-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")})),o.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.remove("is-open"),e.setAttribute("aria-expanded",!o),t.classList.remove("is-open")}))})();
//# sourceMappingURL=index.582a08cb.js.map

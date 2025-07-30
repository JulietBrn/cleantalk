document.addEventListener("DOMContentLoaded", function () {
  /* burger */
  const burger = document.querySelector(".burger");

  if (burger) {
    const navLinks = document.querySelectorAll(
      ".header__nav-menu .nav-menu__item, .logo-img"
    );
    const nav = document.querySelector(".header__nav-menu");
    const body = document.querySelector("body");

    burger.addEventListener("click", () => {
      toggleMenu();
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    function toggleMenu() {
      burger.classList.toggle("burger-rotate");
      nav.classList.toggle("nav-hidden");
      body.classList.toggle("hidden");
    }

    function closeMenu() {
      burger.classList.remove("burger-rotate");
      nav.classList.remove("nav-hidden");
      body.classList.remove("hidden");
    }
  }

  /* select */
  const selectWrap = document.querySelector(".input-wrap--select");
  if (selectWrap) {
    const select = selectWrap.querySelector("select");

    select.addEventListener("click", () => {
      selectWrap.classList.toggle("opened");
    });
    select.addEventListener("blur", () => {
      selectWrap.classList.remove("opened");
    });
  }

  /* input password visibility control */
  const inputWraps = document.querySelectorAll(".input-wrap");
  if (inputWraps.length) {
    inputWraps.forEach((wrap) => {
      const icon = wrap.querySelector(".input-wrap__icon");
      const input = wrap.querySelector(".input-wrap__input");
      if (icon && input && input.type === "password") {
        icon.addEventListener("click", () => {
          if (input.type === "password") {
            input.type = "text";
            icon
              .querySelector("use")
              .setAttribute("xlink:href", "assets/img/sprite.svg#icon-eye-off");
          } else {
            input.type = "password";
            icon
              .querySelector("use")
              .setAttribute("xlink:href", "assets/img/sprite.svg#icon-eye");
          }
        });
      }
    });
  }

  /* input filled */
  const inputs = document.querySelectorAll(".input-wrap__input");
  if (inputs.length) {
    inputs.forEach((input) => {
      input.addEventListener("input", toggleFilled);

      function toggleFilled() {
        if (input.value.trim() !== "") {
          this.classList.add("filled");
        } else {
          this.classList.remove("filled");
        }
      }
    });
  }

  /* modal */
  const openButtons = document.querySelectorAll(".js-open-modal");
  const closeButtons = document.querySelectorAll(".modal-close");
  const modals = document.querySelectorAll(".modal-wrap");
  const backdrop = document.querySelector(".backdrop");

  function openModal(modalName) {
    const targetModal = document.querySelector(
      `.modal-wrap[data-modal="${modalName}"]`
    );
    if (targetModal) {
      targetModal.classList.add("active");
      backdrop.classList.add("active");
    }
  }

  function closeAllModals() {
    modals.forEach((modal) => modal.classList.remove("active"));
    backdrop.classList.remove("active");
  }

  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalName = btn.dataset.modal;
      closeAllModals();
      openModal(modalName);
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeAllModals);
  });

  backdrop?.addEventListener("click", closeAllModals);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });
});

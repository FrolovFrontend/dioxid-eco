const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelector(".header");
const lockPaddingValue = window.innerWidth - body.offsetWidth + "px";

let unlock = true;

const timeout = 400;

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", (e) => {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseBtn = document.querySelectorAll(".form-modal__close");
if (popupCloseBtn.length > 0) {
  for (let i = 0; i < popupCloseBtn.length; i++) {
    const el = popupCloseBtn[i];
    el.addEventListener("click", (e) => {
      popupClose(el.closest(".form-modal"));
      e.preventDefault();
    });
  }
}

const popupOpen = (currentPopup) => {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector(".form-modal.open-modal");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add("open-modal");
    currentPopup.addEventListener("click", (e) => {
      if (!e.target.closest(".form-modal__panel")) {
        popupClose(e.target.closest(".form-modal"));
      }
    });
  }
};

const popupClose = (popupActive, doUnlock = true) => {
  if (unlock) {
    popupActive.classList.remove("open-modal");
    if (doUnlock) {
      bodyUnlock();
    }
  }
};

const bodyLock = () => {
  lockPadding.style.paddingRight = lockPaddingValue;
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");
};

const bodyUnlock = () => {
  setTimeout(() => {
    lockPadding.style.paddingRight = "0px";
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);
};

document.addEventListener("keydown", (e) => {
  if (e.which === 27) {
    const popupActive = document.querySelector(".form-modal.open-modal");
    popupClose(popupActive);
  }
});

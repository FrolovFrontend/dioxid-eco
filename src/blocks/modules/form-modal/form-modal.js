const formModal = document.querySelector(".form-modal");
const btnOpen = document.querySelectorAll(".form-modal__btn-open");
const btnCLose = document.querySelector(".form-modal__close");

const body = document.querySelector("body");
const lockPadding = document.querySelector(".header");

const lockPaddingValue = window.innerWidth - body.offsetWidth + "px";
const timeout = 400;

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

function openModal(btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    formModal.classList.add("open-modal");
    bodyLock();
  });
}

btnOpen.forEach((btn) => openModal(btn));

btnCLose.addEventListener("click", function (e) {
  e.preventDefault();
  formModal.classList.remove("open-modal");
  bodyUnlock();
});

formModal.addEventListener("click", (e) => {
  if (!e.target.closest(".form-modal__panel")) {
    formModal.classList.remove("open-modal");
    bodyUnlock();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.which === 27) {
    formModal.classList.remove("open-modal");
    bodyUnlock();
  }
});

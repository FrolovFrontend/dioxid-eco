const formModal = document.querySelector(".form-modal-success");
const btnCLose = document.querySelector(".form-modal-success__close");

const body = document.querySelector("body");
const lockPadding = document.querySelector(".header");

const lockPaddingValue = window.innerWidth - body.offsetWidth + "px";
const timeout = 400;

const bodyUnlock = () => {
  setTimeout(() => {
    lockPadding.style.paddingRight = "0px";
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);
};

btnCLose.addEventListener("click", function (e) {
  e.preventDefault();
  formModal.classList.remove("open-modal-success");
  bodyUnlock();
});

formModal.addEventListener("click", (e) => {
  if (!e.target.closest(".form-modal-success__panel")) {
    formModal.classList.remove("open-modal-success");
    bodyUnlock();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.which === 27) {
    formModal.classList.remove("open-modal-success");
    bodyUnlock();
  }
});

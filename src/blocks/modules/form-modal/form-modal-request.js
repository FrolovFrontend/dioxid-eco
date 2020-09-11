const body = document.querySelector("body");
const formSuccessModal = document.querySelector(".form-modal-success");
const lockPadding = document.querySelector(".header");
const lockPaddingValue = window.innerWidth - body.offsetWidth + "px";
const form = document.getElementById("form-consultation");
const formFile = document.getElementById("file-attach");
// const errorMessage = document.getElementById("my-form-error");
const formBtn = document.getElementById("form-consultation-button");

// Модалка успеха
const bodyLock = () => {
  lockPadding.style.paddingRight = lockPaddingValue;
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");
};
const openModal = () => {
  formSuccessModal.classList.add("open-modal-success");
  bodyLock();
};
const success = () => {
  formBtn.removeAttribute("disabled");
  form.reset();
  formFile.innerHTML = "Выберите файл";
  openModal();
};

// ошибка
function error() {
  formBtn.removeAttribute("disabled");
  // successMessage.style = "display: none";
  // errorMessage.style = "display: block";
}

// отправка формы
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  formBtn.setAttribute("disabled", "disabled");
  const data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

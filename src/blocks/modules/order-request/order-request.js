const body = document.querySelector("body");
const formSuccessModal = document.querySelector(".form-modal-success");
const lockPadding = document.querySelector(".header");
const lockPaddingValue = window.innerWidth - body.offsetWidth + "px";
const form = document.getElementById("my-form");
const formFile = document.getElementById("attach-file-request");
// const errorMessage = document.getElementById("my-form-error");

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
  form.reset();
  formFile.innerHTML = "Выберите файл";
  openModal();
};

// ошибка
function error() {
  // successMessage.style = "display: none";
  // errorMessage.style = "display: block";
}

// отправка формы
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
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

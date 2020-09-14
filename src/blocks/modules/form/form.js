import IMask from "imask";

// маска для инпутов ввода телефона
const phoneMasks = document.querySelectorAll('input[type="tel"]');
phoneMasks.forEach((input) => {
  IMask(input, {
    mask: "+{7}(000)000-00-00",
  });
});

// стили для плейсхолдера
const fields = document.querySelectorAll(".form__input");
fields.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value) {
      input.classList.add("valid");
    } else if (!input.value) {
      input.classList.remove("valid");
    }
  });
});

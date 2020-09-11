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

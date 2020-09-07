const accordion = document.querySelector(".accordion");
const items = document.querySelectorAll(".accordion__item");
const toggleBtn = document.querySelectorAll(".accordion__btn");

function toggleAccordion() {
  let thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem === item) {
      thisItem.classList.toggle("open");
      return;
    }
    // item.classList.remove("open");
  });
}

toggleBtn.forEach((item) => {
  item.addEventListener("click", toggleAccordion);
});

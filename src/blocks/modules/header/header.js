const header = document.querySelector(".header");
const headerHeight = header.clientHeight;

const anchors = document.querySelectorAll("a.scroll-to");
const navLinks = Array.from(document.querySelectorAll(".scroll-to"));
const sections = Array.from(document.querySelectorAll("section"));

const watch = [];
const ACTIVE_DESKTOP = "is-active--desktop";
const ACTIVE_MOBILE = "is-active--mobile";

sections.forEach((section) => {
  const links = navLinks.filter(
    (link) =>
      link.getAttribute("href").replace("#", "") === section.getAttribute("id")
  );

  if (!links.length) return;
  watch.push((scrollTop) => {
    const top = section.getBoundingClientRect().top + scrollTop;
    const bottom = top + section.offsetHeight;
    const scrollY = scrollTop + (window.innerHeight / 100) * 50;

    if (scrollY >= top && scrollY < bottom) {
      links.forEach((link) => {
        if (link.classList.contains("header__link")) {
          link.classList.add(ACTIVE_DESKTOP);
        }
        if (link.classList.contains("mobile-menu__link")) {
          link.classList.add(ACTIVE_MOBILE);
        }
      });
    } else {
      links.forEach((link) => {
        if (link.classList.contains("header__link")) {
          link.classList.remove(ACTIVE_DESKTOP);
        }
        if (link.classList.contains("mobile-menu__link")) {
          link.classList.remove(ACTIVE_MOBILE);
        }
      });
    }
  });
});

const detect = () => {
  if (!watch.length) return;
  const scrollTop = window.scrollY || window.pageYOffset;
  watch.forEach((fn) => fn(scrollTop));
};

detect();
window.addEventListener("scroll", detect);
window.addEventListener("resize", detect);

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// поведение синей плашки хедера
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const monitorHeight = document.documentElement.clientHeight + headerHeight;

  scrolled >= monitorHeight
    ? header.classList.remove("scroll")
    : header.classList.add("scroll");
});

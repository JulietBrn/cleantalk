/* header scroll */
let lastScroll = 0;
const header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
      header.classList.remove("header--show");
      header.classList.add("header--hide");
    } else {
      header.classList.remove("header--hide");
      header.classList.add("header--show");
    }

    lastScroll = currentScroll;
  });
}

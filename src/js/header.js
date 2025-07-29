/* header */
const header = document.querySelector("header");

if (header) {
  function checkHeader() {
    if (window.scrollY > 0) {
      header.classList.add("bg-fill");
    } else {
      header.classList.remove("bg-fill");
    }
  }
  // Check on page load
  checkHeader();
  // Check on scroll
  window.addEventListener("scroll", () => {
    checkHeader();
  });
}

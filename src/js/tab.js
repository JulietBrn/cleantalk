/* tabs */
const tabLinks = document.querySelectorAll(".tabs a");
if (tabLinks.length) {
  tabLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = this.getAttribute("data-rel");
      tabLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
      const targetElement = document.getElementById(target);
      const tabBoxes = document.querySelectorAll(".tab-box");
      tabBoxes.forEach(function (box) {
        box.classList.remove("visible");
      });
      targetElement.classList.add("visible");
    });
  });
}

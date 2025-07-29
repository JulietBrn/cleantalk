/* show more */
const showWraps = document.querySelectorAll(".show-wrap");
if (showWraps.length) {
  showWraps.forEach((wrap) => {
    const showMoreBtn = wrap.querySelector(".show-more-btn");
    if (showMoreBtn) {
      showMoreBtn.addEventListener("click", function () {
        wrap.classList.add("show");
        showMoreBtn.classList.add("hide");
      });
    }
  });
}

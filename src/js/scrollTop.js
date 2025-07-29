/* scroll to top. Place to the END! */
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (!scrollToTopBtn) return;

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

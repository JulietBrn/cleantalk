/* FAQ */
const faqItems = document.querySelectorAll(".faq-item");
if (faqItems.length) {
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
}

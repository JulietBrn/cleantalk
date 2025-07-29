/* select */
const productSelects = document.querySelectorAll(".product-select");

if (productSelects.length) {
  productSelects.forEach((select) => {
    const navLinks = select.querySelectorAll(".tab__link");
    const productCards = select.querySelectorAll(".card");
    const dataAttr = "data-rel";

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        const selected = link.getAttribute(dataAttr);

        productCards.forEach((card) => {
          const season = card.getAttribute(dataAttr);
          const showCard = selected === "all" || season === selected;

          card.classList.toggle("hidden", !showCard);
        });
      });
    });
  });
}

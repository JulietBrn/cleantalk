/* slider */
const sliders = document.querySelectorAll(".slider");
if (sliders.length) {
  sliders.forEach((slider) => {
    const sliderItems = slider.querySelectorAll(".slide");
    const prevButton = slider.querySelector(".arrow-left");
    const nextButton = slider.querySelector(".arrow-right");
    let currentIndex = 0;

    function showSlide(index) {
      sliderItems.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
    }

    function prevSlide() {
      currentIndex =
        (currentIndex - 1 + sliderItems.length) % sliderItems.length;
      showSlide(currentIndex);
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      showSlide(currentIndex);
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    showSlide(currentIndex);

    // setInterval(() => {
    //   nextSlide();
    // }, 3000);
  });
}

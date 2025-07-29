/* gallery */
const lightbox = document.getElementById("lightbox");

if (lightbox) {
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const nextBtn = lightbox.querySelector(".nav-arr.next");
  const prevBtn = lightbox.querySelector(".nav-arr.prev");
  const images = Array.from(document.querySelectorAll(".gallery-img"));
  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      lightboxImg.src = img.src;
      lightbox.classList.remove("hide");
    });
  });

  function closeLightbox() {
    lightbox.classList.add("hide");
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("hide")) {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    }
  });
}

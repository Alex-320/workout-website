document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelector(".new-arrivals__list");
  const items = Array.from(productList.children);
  const itemWidth = items[0].offsetWidth; 
  let currentIndex = 0;

  function updateCarousel() {
    productList.style.transition = "transform 0.5s ease-in-out";
    productList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  document
    .querySelector(".new-arrivals__next")
    .addEventListener("click", () => {
      if (currentIndex < items.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; 
      }
      updateCarousel();
    });

  document
    .querySelector(".new-arrivals__prev")
    .addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = items.length - 1;
      }
      updateCarousel();
    });
});

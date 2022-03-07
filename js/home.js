const productContainers = document.querySelectorAll(".product-container");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

productContainers.forEach((item, i) => {
  const containerDimensions = item.getBoundingClientRect();
  const containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

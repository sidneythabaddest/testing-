/// variables

let thumbnails = document.getElementsByClassName("thumbnail");

let slider = document.getElementById("product1");

let buttonRight = document.getElementById("slide-right-button");

let buttonLeft = document.getElementById("slide-left-button");

buttonLeft.addEventListener("click", () => {
  slider.scrollLeft -= 125;
});

buttonRight.addEventListener("click", () => {
  slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

// alert(maxScrollLeft);

//Auto Play slider

function autoPlay() {
  if (slider.scrollLeft > maxScrollLeft - 1) {
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}
let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDER ON HOVER
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  thumbnails[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoPlay, 50));
  });
}

// Additional information slider

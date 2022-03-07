// const selectElement = (element) => document.querySelector(element);
// selectElement(element ,'.menu-icons' ).addEventListener(type ,'click' ) ,listener () => {

// }

//

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const slider3 = document.getElementById("glide_3");

// Testimonial
if (slider3) {
  new Glide(slider3, {
    type: "carousel",
    startAt: 0,
    // hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
  }).mount();
}

$(document).ready(function () {
  $(".searchbtn").click(function () {
    $(this).toggleClass("bg-green");
    $(".fa-search").toggleClass("color-white");
    $(".input").focus().toggleClass("active-width").val("");
  });
});

//

let suggestion = [
  "dumps",
  "paypal",
  "genesis",
  "groupon",
  "bankdrops",
  "counterfeit",
  "burners",
  "Carded",
  "westernunion",
  "deposit",
  "database",
  "cashapp",
  "cart",
  "FAQ",
  "about",
  "contact",
];

// let landingpage = document.querySelector("#landing-image");

// const ti = new TimelineMax();

// ti.fromTo(
//   landingpage,
//   1,
//   { height: "0%" },
//   { height: "100%", ease: Power2.linear }
// ).fromTo(
//   landingpage,
//   1.2,
//   { width: "80%" },
//   { width: "100%", ease: Power2.linear }
// );

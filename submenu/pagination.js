$(document).ready(function () {
  $(".next").click(function () {
    $(".page").find(".pageNumber.active").next().addClass("active");
  });

  $(".prev").click(function () {
    $(".page").find(".pageNumber.active").prev().removeClass("active");
  });
});

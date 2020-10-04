$(document).ready(function () {
  $(".header-carousel").slick({
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='slick-button button-left'><i class='icon-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-button button-right'><i class='icon-right' aria-hidden='true'></i></button>",
  });
});

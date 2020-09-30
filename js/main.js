$(document).ready(function () {
  $(".header-carousel").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      "<button class='carousel-icon'><i class='icon-left'></i></button>",
      "<button class='carousel-icon'><i class='icon-right'></i></button>",
    ],
  });
});

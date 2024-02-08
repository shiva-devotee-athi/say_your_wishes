$(document).ready(function () {
  if ($(".owl-carousel").length > 0) {
    $(".owl-carousel").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      nav: false,
      dots: false,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          stagePadding: 0,
          items: 1,
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: true,
          items: 1,
        },
      },
    });
  }
});

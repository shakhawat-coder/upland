$(document).ready(function(){
    $('.slider_wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        prevArrow: ".prev",
        nextArrow: ".next",
        slidesToShow: 3,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
  });
      
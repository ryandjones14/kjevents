$(function(){

  // Scroll images
  $('.variable-width').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  // Minimize header
  $(window).scroll( function() {
      var value = $(this).scrollTop();
      if ( value > 100 ) {
        $('.header').addClass('header2');
        $('.services').addClass('services2');
        $('.wrapper').addClass('wrapper2');
      } else {
        $('.header').removeClass('header2');
        $('.services').removeClass('services2');
        $('.wrapper').removeClass('wrapper2');
      }
  });
})

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
      if ( value > 850 ) {
        $('.header').addClass('header2');
        $('.wrapper').addClass('wrapper2');
      } else {
        $('.header').removeClass('header2');
        $('.wrapper').removeClass('wrapper2');
      }
  });
  // var hidden;
  // $(window).scroll( function() {
  //     var value = $(this).scrollTop();
  //     if ( value > 1000 ) {
  //       $('.landing-image').css('display', 'none');
  //       hidden = true;
  //     }
  //     if (hidden && value > 175){
  //       $('.header').addClass('header2');
  //       $('.wrapper').addClass('wrapper2');
  //       $('.header2').animate({top: '100px'});
  //     } else {
  //       $('.header').removeClass('header2');
  //       $('.wrapper').removeClass('wrapper2');
  //     }
  // });
})

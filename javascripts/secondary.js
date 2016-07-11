$(function(){
  // Minimize header
  $(window).scroll( function() {
      var value = $(this).scrollTop();
      if ( value > 100 ) {
        $('.header').addClass('header2');
        $('.services').addClass('services2');
        $('.about').addClass('wrapper2');
        $('.form').addClass('wrapper2');
      } else {
        $('.header').removeClass('header2');
        $('.services').removeClass('services2');
        $('.wrapper').removeClass('wrapper2');
        $('.about').removeClass('wrapper2');
        $('.form').removeClass('wrapper2');
      }
  });
})

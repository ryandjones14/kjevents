$(function(){
  // Minimize header
  $(window).scroll( function() {
      var value = $(this).scrollTop();
      if ( value > 200 ) {
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

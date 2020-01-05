//- When passed do stuff
function whenPassed() {
  var extraOffset = 2;
  var navpos = $('.header').offset();
  var x = navpos.top*extraOffset;
  console.log(x);
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > x) {
      $('.navbar-brand').show();
      $('nav').removeClass('fixed');
      $('nav').addClass('fixed-top');
        //- $('.header').css('font-size','0vw');
    }
    else {
      $('nav').removeClass('fixed-top');
      $('nav').addClass('fixed');
      $('.navbar-brand').hide();
      //- $('.header').css('font-size','14vw');
    }
  });
}

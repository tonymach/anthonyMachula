// I'll admit this is quite untidy, but I'll clean up after it all works!


// For the typed text, cuddos to you Sir btw, as it is sweeet!

var prettyWords = ['wonder^250ful.', 'pretty innovative.', 'awe^450some.', 'creative.', 'new.', 'visionary.'];
$(function(){
    $(".italicised").typed({
        strings: prettyWords,
        typeSpeed: 40,
        loop: true
    });
});


// A basic reveal
window.sr = ScrollReveal({ reset: false });
sr.reveal('.header');
sr.reveal('.headline');
sr.reveal('.theOne');

// Needs one for each
$("#frontEnd").fitText();
$("#backEnd").fitText();
$("#magiciansToolkit").fitText(1.3,{ minFontSize: '4.5rem'});
// $(".navbar-brand").fitText(0.2);


// Initialize tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  var feed = new Instafeed({
    get: 'user',
    userId: '3915843660',
    accessToken: '3915843660.1677ed0.958f9896dfb5482b90d63e8bf07cb156',
    resolution: 'standard_resolution',
    template: '<a class="animation" href="{{link}}"><img class="img-responsive " src="{{image}}" width=612 height=612 /></a>'

  });
  feed.run();

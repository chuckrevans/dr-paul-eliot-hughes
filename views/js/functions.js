//Scroll to top on reload
//////////////////////////////////
$(document).ready(function() {
  $("html,body").animate({scrollTop: 0}, 100); //100ms for example
});

// fade out text on scroll
//////////////////////////////////
$(window).scroll(function(){
    $(".fadeOut").css("opacity", 1 - $(window).scrollTop() / 150);
  });
  

// Active Link
//////////////////////////////////



 
// Header change in scroll
//////////////////////////////////
  $(function() {
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();

          if (scroll >= 15) {
            $('#NAV').addClass('color');
              } else {
            $('#NAV').removeClass('color');
          }
          if (scroll >= 15) {
            $('nav').addClass('shrink');
             } else {
            $('nav').removeClass('shrink');
          }
          if (scroll >= 15) {
            $('#btHow,#btJoin,#btContact,#btLogin').addClass('shift');
             } else {
            $('#btHow,#btJoin,#btContact,#btLogin').removeClass('shift');
          }
          if (scroll >= 15) {
            $('#btHow,#btJoin,#btContact').addClass('shift2');
             } else {
            $('#btHow,#btJoin,#btContact').removeClass('shift2');
          }
          if (scroll >= 15) {
            $('#btLogin').addClass('border');
             } else {
            $('#btLogin').removeClass('border');
          }
          if (scroll >= 15) {
            $('#btLogin').addClass('fill');
             } else {
            $('#btLogin').removeClass('fill');
          }
      });
  });

// Initialization for ES Users
import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Input });

// navigation
var OnePageNav = function() {
    $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
         e.preventDefault();

         var hash = this.hash,
                 navToggler = $('.navbar-toggler');
         $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });


      if ( navToggler.is(':visible') ) {
          navToggler.click();
      }
    });
    $('body').on('activate.bs.scrollspy', function () {
      console.log('nice');
    })
};
OnePageNav();

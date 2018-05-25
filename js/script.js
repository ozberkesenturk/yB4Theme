//navbar scrool effect

function checkScroll() {
    var startY = $('.navbar').height();

    if ($(window).scrollTop() > startY) {
        $('#navbar .navbar').addClass("scrolled-navbar");

      } else {
        $('.navbar').removeClass("scrolled-navbar");
        $('.navbar').addClass("navbar");// for transition 
          
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}
 window.sr = ScrollReveal();
    function rev() {
    var ww =  $( window ).width();
    if (ww >=1000) {
       

      sr.reveal('.header-text', { 
        duration: 1000,
        scale: 0.4,
        delay: 200,
        rotate: { x: 250, y: 150, z: 40 },
        mobile: false,
         });

      sr.reveal('#about .col-md-3', { 
        duration: 1000,
        scale: 0.4,
        delay: 300,
        rotate: { x: 250, y: 150, z: 40 },
        mobile: false,
         });

      sr.reveal('#about .about-top', { 
        duration: 1000,
        scale: 0.4,
        delay: 200,
        mobile: false,
         });

       sr.reveal('.bg-column', { 
        duration: 1000,
        scale: 0.4,
        delay: 200,
        mobile: false,
         });


       sr.reveal('#about2 .img-column', { 
        duration: 1000,
        scale: 0.4,
        delay: 200,
        rotate: { x: 50, y: 50, z: 10 },
        mobile: false,
         });

       sr.reveal('#blog .row1', { 
        duration: 700,
        scale: 0.4,
        delay: 200,
        rotate: { x: 50, y: 50, z: 10 },
        mobile: false,
         });


       sr.reveal('#blog .row .c-1', { 
        duration: 1300,
        delay: 200,
        origin:"bottom",
        distance: '420px',
        rotate: { x: 530, y: 350, z: 130 },
        mobile: false,
         });

        sr.reveal('#blog .row .c-2', { 
        duration: 1300,
        scale: 0.4,
        delay: 400,
        origin:"bottom",
        distance: '420px',
        rotate: { x: 530, y: 350, z: 130 },
        mobile: false,
         });

         sr.reveal('#blog .row .c-3', { 
        duration: 1300,
        scale: 0.4,
        delay: 600,
        origin:"bottom",
        distance: '420px',
        rotate: { x: 530, y: 350, z: 130 },
        mobile: false,
         });

          sr.reveal('#blog .row .c-4', { 
        duration: 1300,
        scale: 0.4,
        delay: 800,
        origin:"bottom",
        distance: '420px',
        rotate: { x: 530, y: 350, z: 130 },
        mobile: false,
         });


        sr.reveal('#info', { 
        duration: 1300,
        scale: 0.4,
        delay: 300,
        mobile: false,
         });

        sr.reveal('.i2-text-column', { 
        duration: 1000,
        scale: 0.4,
        delay: 200,
        mobile: false,
         });

        sr.reveal('.i2-img-column img', { 
        duration: 1000,
        scale: 0.4,
        delay: 200,
        rotate: { x: 0, y: 300, z: 0 },
        mobile:false
         });

        sr.reveal('#team', { 
        duration: 1000,
        scale: 0.4,
        delay: 200,
        rotate: { x: 100, y: 300, z: 0 },
        mobile:false
         });


        sr.reveal('#contact', { 
        duration: 1000,
        scale: 0.7,
        delay: 200,
        mobile:false
         });
    }
}



/*w.resize*/

$( document ).ready(rev());








// reveal js //

/*

*/
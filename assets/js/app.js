$(document).ready(function(){

    // materialize declarations
    // =============================================================================================
    $('.sidenav').sidenav();



    // global variables
    // =============================================================================================




    // functions
    // =============================================================================================

    function navScrollEffect() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $(".main-nav").addClass('fade-height');
        } else {
            $(".main-nav").removeClass('fade-height');
        }
    }

    function scrollTo(element) {
        $("a.nav-link").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top - 40
              }, 800, function(){
                window.location.hash = hash;
              });
            }
        });
    }


    // main process
    // =============================================================================================
    
    window.onscroll = function() {navScrollEffect()};

    $(".nav-menu li a").on('click', scrollTo);


});
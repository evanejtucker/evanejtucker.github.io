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

    // function scrollTo(element) {
    //     $("a").on('click', function(event) {
    //         if (this.hash !== "") {
    //           event.preventDefault();
    //           var hash = this.hash;
    //           var targetOffset = $(hash).offset().top;
    //           $('html, body').animate({
    //             scrollTop: targetOffset
    //           }, 800, function(){
    //             window.location.hash = hash;
    //           });
    //         }
    //       });
    // }


    // main process
    // =============================================================================================
    
    window.onscroll = function() {navScrollEffect()};

    // $(".nav-menu li a").on('click', scrollTo);


});
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


    // main process
    // =============================================================================================
    
    window.onscroll = function() {navScrollEffect()};


});
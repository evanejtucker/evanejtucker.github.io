$(document).ready(function(){

// materialize declarations
// =============================================================================================
    $('.sidenav').sidenav();



// global variables
// =============================================================================================|




// functions
// =============================================================================================|

    // scroll effect when user scrolls off of the nav
    function navScrollEffect() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $(".main-nav").addClass('fade-height');
        } else {
            $(".main-nav").removeClass('fade-height');
        }
    }

    // scroll effect that happens over the about section
    function aboutScrollEffect() {
        var hT = $('#about').offset().top,
            hH = $('#about').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $(".profilePic").addClass("animated slideInLeft");
            $(".bioText").addClass("animated slideInRight");
            $(".profilePic").show();
            $(".bioText").show();

        }
    }

// main process
// =============================================================================================|
    
    $(".profilePic").hide();
    $(".bioText").hide();

    window.onscroll = function() {
        navScrollEffect();
        aboutScrollEffect();
    };



});
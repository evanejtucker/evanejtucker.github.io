

$(document).ready(function(){

// materialize declarations
// =============================================================================================
    $('.sidenav').sidenav();
    $('.modal').modal();



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

    // scroll effect that happens over the skills section
    function skillsScrollEffect() {
        var hT = $('#skills').offset().top,
            hH = $('#skills').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $(".skillsList").addClass("animated zoomIn");
            $(".skillsList").show();
        }
    }

    // dynamically added bio image and text to about section
    function addAbout() {

        var image = $("<img>");
        image.attr("src", about.image);
        image.attr("alt", "bio-image");

        var imageDiv = $("<div>");
        imageDiv.addClass("profilePic");
        imageDiv.append(image);

        var bioText = $("<div>");
        bioText.addClass("bioText")
        for (var i=0; i<about.text.length; i++) {
            var p = $("<p>");
            p.text(about.text[i].p);
            bioText.append(p);
        }

        $("#about-container").append(imageDiv, bioText);
        
        
    }

    // dynamically add skills to page
    function addSkills() {
        for (var i=0; i<skills.length; i++) {
            var div = $("<div>");
            div.addClass("skillsList");

            var img = $("<img>");
            img.addClass("skillsImage");
            img.attr("src", skills[i].image);
            img.attr("alt", "skills-icon");

            var p = $("<p>");
            p.addClass("skillsTitle");
            p.text(skills[i].title);

            var ul = $("<ul>");
            if (!skills[i].image  && !skills[i].title) {
                console.log('no image or title');
            } else if (!skills[i].image && skills[i].title) {
                ul.append(p);
            } else if (skills[i].image && !skills[i].title) {
                ul.append(img);
            } else {
                ul.append(img, p);
            }

            for (var j=0; j<skills[i].skills.length; j++) {
                var li = $("<li>");
                li.text(skills[i].skills[j]);
                ul.append(li);
            }

            div.append(ul);
            $("#skills-container").append(div);
            
        }
    }

    function modalTrigger() {
        $(".portfolioLink").on("click", function() {
            $('#portfolioModal').modal('open');
        });
    }

// main process
// =============================================================================================|
    
    addAbout();
    addSkills();

    $(".profilePic").hide();
    $(".bioText").hide();
    $(".skillsList").hide();

    window.onscroll = function() {
        navScrollEffect();
        aboutScrollEffect();
        skillsScrollEffect();
    };

    modalTrigger();



});
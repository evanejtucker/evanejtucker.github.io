

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

    // scroll effect that happens over the portfolio section
    function portfolioScrollEffect() {
        var hT = $('#portfolio').offset().top,
            hH = $('#portfolio').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $(".portfolioPiece").addClass("animated rotateInUpLeft");
            $(".portfolioPiece").show();
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


    // <div class="portfolioPiece">
    //     <div class="portfolioLink" projectId="1">
    //         <img src="assets/images/friend-finder.jpg" alt="portfolio-link" class="portfolioImage"/>
    //         <div class="overlay">
    //             <div class="text"><i class="fas fa-search-plus"></i></div>
    //         </div>
    //     </div>
    //     <p class="portfolioTitle">Friend Finder</p>
    //     <p class="portfolioInfo">Take the survey to find your Game of Thrones best friend!</p>
    // </div>

    function addPortfolio() {
        console.log('function hit');
        for (var i=0; i<portfolio.length; i++) {
            var portfolioPiece = $("<div>");
            portfolioPiece.addClass("portfolioPiece");
            
            var portfolioLink = $("<div>");
            portfolioLink.addClass("portfolioLink");

            var image = $("<img>");
            image.addClass("portfolioImage");
            image.attr("src", portfolio[i].titleImage);
            image.attr("alt", "portfolio-link");

            var overlay = $("<div>");
            overlay.addClass("overlay");
            var text = $("<div class='text'><i class='fas fa-search-plus'></i></div>")
            overlay.append(text);

            var portfolioTitle = $("<p>");
            portfolioTitle.addClass("portfolioTitle");
            portfolioTitle.text(portfolio[i].projectName);

            var portfolioInfo = $("<p>");
            portfolioInfo.addClass("portfolioInfo");
            portfolioInfo.text(portfolio[i].teaser);

            portfolioLink.append(image, overlay);
            portfolioPiece.append(portfolioLink, portfolioTitle, portfolioInfo);
            $(".portfolioBox").append(portfolioPiece);
        }
    }

    // function to open and close the project modal
    // to do: add logic to dynamically add project info to modal
    function modalTrigger() {
        $(".portfolioLink").on("click", function() {
            $('#portfolioModal').modal('open');
        });

        $("#closeBtn").on("click", function() {
            $('#portfolioModal').modal('close');
        })
    }

// main process
// =============================================================================================|
    
    addAbout();
    addSkills();
    addPortfolio();

    $(".profilePic").hide();
    $(".bioText").hide();
    $(".skillsList").hide();
    $(".portfolioPiece").hide();

    window.onscroll = function() {
        navScrollEffect();
        aboutScrollEffect();
        skillsScrollEffect();
        portfolioScrollEffect()
    };

    modalTrigger();

});
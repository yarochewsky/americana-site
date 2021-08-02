"use strict";

(function() {        

    window.onload = function() {

        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (width > 600) {
            $.scrollify({
                interstitialSection:"header",
                section :"section",
                easing:"easeOutExpo",
                scrollSpeed: 900,
                setHeights:false,
            });
        }

        $("div#definitions-content > div").mouseenter(function(){
                $(this).find("h2").addClass("opacity-hover");
                $(this).find("p").addClass("opacity-hover");
        });

        $("div#definitions-content > div").mouseleave(function(){
            $(this).find("h2").removeClass("opacity-hover");
            $(this).find("p").removeClass("opacity-hover");
        });

        $("#hire").click(function() {
            $("#contact").addClass("show");
            $("body,html").animate(
                {
                  scrollTop: $("#contact").offset().top
                },
                2000 //speed
              );
        });

    const form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        $("#thank-you").addClass("show");
        startConfetti();
        $("form").addClass("hide");

        setTimeout(function() {
            form.reset();
            stopConfetti();
            location.reload();
        }, 1000 * 3);
      }).catch(error => {
            form.reset();
            $("#thanks").innerHTML = "Oops!";
            $("#message").innerHTML = "There was a problem submitting your form.";
      });
    }
    form.addEventListener("submit", handleSubmit);

        $("#content").mouseleave(function(){
            $('#content-display').addClass("hidden");
            $("#arts").removeClass("hidden");
            $("#sciences").removeClass("hidden");
        });

        $(window).scroll(function() {
            if (window.location.hash == "#3") {
                if ($(window).width() > 500) {
                    $('ul.hidden').removeClass("hidden", 1000 * 30, "easeInCubic");
                }
            }
        });

        $('#arts-sciences').mouseenter(function() {
            $('ul.hidden').removeClass("hidden", 1000 * 30, "easeInCubic");
        });

         $('#arts-sciences').mouseleave(function() {
             if ($(window).width() > 500) {
                $('ul').addClass("hidden", 1000 * 30, "easeInCubic");
             }
         });
    };

})();
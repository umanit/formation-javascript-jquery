"use strict";

(function($) {
    $.fn.slideshow = function(){

        var context = $(this),
            slides = $(".slides .slide", context),
            indicators = $(".indicators li", context),
            prevButton = $(".controls .prev", context),
            nextButton = $(".controls .next", context);

        prevButton.on("click", function(e){

            e.preventDefault();

            var slide = slides.filter(".active"),
                currentIndex = slides.index(slide),
                newIndex = currentIndex - 1;

            if (newIndex < 0) {
                newIndex = slides.length - 1;
            }

            doSlide(newIndex);
        });

        nextButton.on("click", function(e){

            e.preventDefault();

            var slide = slides.filter(".active"),
                currentIndex = slides.index(slide),
                newIndex = currentIndex + 1;

            if (newIndex >= slides.length) {
                newIndex = 0;
            }

            doSlide(newIndex);
        });

        indicators.on("click", function(e){

            e.preventDefault();

            var index = $(this).index();

            doSlide(index);
        });

        function doSlide(index) {
            slides.removeClass("active").eq(index).addClass("active");
            indicators.removeClass("active").eq(index).addClass("active");
        }
    };
})(jQuery);

$(document).ready(function(){
    $(".slideshow").slideshow();
});

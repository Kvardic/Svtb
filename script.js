if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    alert("Stránka není plně optimalizována pro mobilní zařízení.");
}

(function($) {
  var selector = ".extent";
  var direction;
  var $slide;
  var offsetTop;
  var $slides = $(selector);
  var currentSlide = 0;
  var isAnimating = false;

  var stopAnimation = function() {
    setTimeout(function() {
      isAnimating = false;
    }, 300);
  };

  var bottomIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.bottom <= $(window).height();
  };

  var topIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.top >= 0;
  };

  document.addEventListener(
    "wheel",
    function(event) {
      var $currentSlide = $($slides[currentSlide]);

      if (isAnimating) {
        event.preventDefault();
        return;
      }

      direction = -event.deltaY;

      if (direction < 1) {
        // next
        if (currentSlide + 1 >= $slides.length) {
          return;
        }
        if (!bottomIsReached($currentSlide)) {
          return;
        }
        event.preventDefault();
        currentSlide++;
        $slide = $($slides[currentSlide]);
        offsetTop = $slide.offset().top;
        isAnimating = true;
        $("html, body").animate({
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      } else {
        // back
        if (currentSlide - 1 < 0) {
          return;
        }
        if (!topIsReached($currentSlide)) {
          return;
        }
        event.preventDefault();
        currentSlide--;
        $slide = $($slides[currentSlide]);
        offsetTop = $slide.offset().top;
        isAnimating = true;
        $("html, body").animate({
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      }
    }, {
      passive: false
    }
  );
})(jQuery);
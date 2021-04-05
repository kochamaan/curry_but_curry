$(function () {
  // Drawer menu
  $('.js-button-hamburger').click(function () {
    $('body').toggleClass('is-active-drawer');

    if ( $(this).attr('aria-expanded') == 'false' ){
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });

  const boxes = document.querySelector(".hero");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(doWhenIntersect, options);
    observer.observe(boxes);
    function doWhenIntersect(e) {
      if (e[0]["isIntersecting"] === false) {
        document.querySelector(".slide-bottom").classList.add("show");
      } else if (e[0]["isIntersecting"] === true) {
        document.querySelector(".slide-bottom").classList.remove("show");
      }
    }
      $(function () {
      $(window).scroll(function () {
        $(".fadein").each(function () {
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
          }
        });
      });
      });
});

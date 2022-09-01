$(document).ready(function () {
  $(window).scroll(function () {
    var windowWidth = $(window).width();
    if (windowWidth > 800) {
      var scrollTop = $(window).scrollTop();
      $("header .textos").css({
        transform: "translate(0px, " + scrollTop / 2 + "%)",
      });
      $(".acerca-de article").css({
        transform: "translate(0px, -" + scrollTop / 4 + "%)",
      });
    }
  });
  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 800) {
      $(".acerca-de article").css({
        transform: "translate(0px, 0px)",
      });
    }
  });
});

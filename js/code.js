$(document).ready(function () {
  //Efecto Menu
  $("header .menu a").each(function (indexInArray, valueOfElement) {
    $(this).css({
      top: "-200px",
    });
    $(this).animate(
      {
        top: "0",
      },
      2000 + indexInArray * 500
    );
  });

  //Efecto header
  if ($(window).width() > 800) {
    $("header .textos").css({
      opacity: 0,
      marginTop: 0,
    });

    $("header .textos").animate(
      {
        opacity: 1,
        marginTop: "-32px",
      },
      1200
    );
  }

  //Scroll de los botones

  var acercaDe = $("#acerca-de").offset().top,
    productos = $("#productos").offset().top,
    galeria = $("#galeria").offset().top,
    ubicacion = $("#ubicacion").offset().top;

  $("#btn-acerca-de").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: acercaDe,
      },
      500
    );
  });
  $("#btn-productos").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: productos,
      },
      500
    );
  });
  $("#btn-galeria").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: galeria,
      },
      500
    );
  });
  $("#btn-ubicacion").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: ubicacion,
      },
      500
    );
  });
});

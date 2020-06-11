//myJavaScript
$(document).ready( function() {

  //Click Event menu scroll
  $(".with_scroll").click( function() {
    $(this).siblings().children().removeClass("visible")
    $(this).children().toggleClass("visible");
  });

  //mouse enter Event menu
  $(".with_scroll").mouseenter( function() {
    $(this).siblings().children().removeClass("visible")
    $(this).children().addClass("visible");
  });

  //mouse leave Event menu
  $(".with_scroll").mouseleave( function() {
    $(".with_scroll").children().removeClass("visible")
  });

  //mouse enter Event lang
  $(".lang").mouseenter( function () {
    $(".with_scroll").siblings().children().removeClass("visible")
    $(this).children().children("i").toggleClass("fa-chevron-up");
  });

  //mouse leave Event lang
  $(".lang").mouseleave( function () {
    $(this).children().children("i").toggleClass("fa-chevron-up");
  });


});

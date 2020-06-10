//myJavaScript
$(document).ready(function () {

//click event
$(".with_scroll").on( "click", function() {
  //quando io clicco su una voce del .menu.inline
  //tolgo la classe visible a tutti i .menu.scroll
  //passo la classe .visible al relativo .menu.scroll
  //$(".menu.scroll").removeClass("visible");
  $(".menu.scroll").removeClass("visible");
  $(this).children(".menu.scroll").addClass("visible");
  }
)

//click event
$(".with_scroll").on( "dblclick", function() {
  //quando io duble-clicco su una voce del .menu.inline
  //tolgo la classe visible a tutti .menu.scrol
  //passo la classe .visible al relativo .menu.scroll
  //$(".menu.scroll").removeClass("visible");
  $(".menu.scroll").removeClass("visible");
  }
)


});

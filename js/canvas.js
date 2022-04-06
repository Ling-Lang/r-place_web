var canvas = document.getElementById("c_1");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#2364aa";
ctx.fillRect(0, 0, 150, 75);

$( document ).on( "mousemove", function( event ) {
    $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  });



/*document
  .getElementById("video")
  .setAttribute(
    "style",
    "position: absolute; top: 0px; left: 0px; width: " +
      (window.innerWidth - 2) +
      "px; height: " +
      (window.innerHeight - 2) +
      "px; border: 1px solid #000000"
  );*/

$("#video").height() = window.innerHeight;
$("#video").width() = window.innerWidth;

$( window ).resize(function() {
    $('div.box').css({'right': parseInt(window.innerWidth/2),
                      'bottom': parseInt(window.innerHeight/2)
                     });
});

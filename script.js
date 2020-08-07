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
/*
*/let video = $("#video");/*
console.log("test");

video.width() = $(window).innerWidth();

$(window).resize(function() {
   video.width() = $(window).innerWidth();
*/
 $(window).resize(function() {
   alert($window.width());
 });

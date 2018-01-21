$(document).ready(function() {
  $("#content").readingTime({
    readingTimeTarget: $(".time-to-read"),
    wordCountTarget: $(".word-count"),
    success: function() {
      $(".read-time").removeClass("hide");
    }
  });
});
$("a").on("touchend", function(event) {
  window.location.href = $(this).attr("href");
});

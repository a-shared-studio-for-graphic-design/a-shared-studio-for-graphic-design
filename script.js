$(document).ready(function () {
  $('.work-img').resizable();
  $('.block').draggable({ containment: ".kv-wrapper", scroll: false });
  $('.timestamp-text').html("last addition " + document.lastModified);
  // $("body").on('DOMSubtreeModified', ".kv-wrapper", function() {
  //   alert('changed');
  // });
});

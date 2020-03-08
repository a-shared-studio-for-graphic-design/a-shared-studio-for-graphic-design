$(document).ready(function () {
  $('.work-img').resizable();
  $('.block').draggable({ containment: ".kv-wrapper", scroll: false });
  $('.timestamp-text').html("last modified " + document.lastModified);
  // $("body").on('DOMSubtreeModified', ".kv-wrapper", function() {
  //   alert('changed');
  // });
});

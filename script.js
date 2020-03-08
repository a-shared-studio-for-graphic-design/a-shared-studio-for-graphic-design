function pad(n) {
  return n<10 ? '0'+n : n
}

$(document).ready(function () {
  $('.work-img').resizable();
  $('.block').draggable({ containment: ".kv-wrapper", scroll: false });

  // var date = new Date(document.lastModified).toString();

  var estTime = new Date(document.lastModified).toLocaleString("en-US", {timeZone: "America/New_York"});
  estTime = new Date(estTime);
  var month = pad(estTime.getMonth() + 1);
  var date = pad(estTime.getDate());
  var year = pad(estTime.getFullYear());
  var hour = pad(estTime.getHours());
  var min = pad(estTime.getMinutes());
  var sec = pad(estTime.getSeconds());

  var formatted = month + "/" + date + "/" + year + " " + hour + ":" + min + ":" + sec + " (UTC -5)";

  $('.timestamp-text').html("last addition: " + formatted);
});

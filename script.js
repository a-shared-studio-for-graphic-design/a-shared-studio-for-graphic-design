// for padding time/dates with leading 0's
function pad(n) {
  return n<10 ? '0'+n : n
}

// for storing size and position info
var positions = JSON.parse(localStorage.positions || "{}");
var sizes = JSON.parse(localStorage.sizes || "{}");

$(document).ready(function () {
  // for remembering size + position
  var d = $("[id=draggable]").attr("id", function (i) {
    var uniqueID = "draggable_" + i;
    return uniqueID;
  })

  var r = $("[id=resizable]").attr("id", function (i) {
    var uID = "resizable_" + i;
    return uID;
  })

  $.each(positions, function (id, pos) {
      $("#" + id).css(pos);
  })


  $.each(sizes, function (id, size) {
      $("#" + id).css(size);
  })

  r.resizable({
    containment: ".kv-wrapper",
    scroll: false,
    stop: function (event, ui) {
        sizes[this.children[0].id] = ui.size
        localStorage.sizes = JSON.stringify(sizes)
    }
  });

  d.draggable({
    containment: ".kv-wrapper",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
  });

  // for displaying time
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

var moment = require("moment");

function renderClock() {
  $('#current-time').text(moment().format('LL') + " " + moment().format('LTS'));
}

function updateClock() {
  $('#current-time').empty();
  renderClock();
  setTimeout(updateClock, 1000);
}

$(function() {
  renderClock();
  updateClock();

  $("#set-alarm").submit(function(event) {
    event.preventDefault();
    var timeString = $("#alarm-date").val() + " " + $("#alarm-time").val();
    var alarmTime = moment(timeString);

    $(".alarm").countdown(alarmTime.valueOf())
      .on("finish.countdown", function() {
        $(".alarm-on").show();
      });
  });
});

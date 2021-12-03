function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function startTime() {
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  // add a zero in front of numbers<10
  hour = checkTime(hour);
  min = checkTime(min);
  document.getElementById('time').innerHTML = hour + ":" + min;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

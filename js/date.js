function checkDate(j) {
 if (j < 10) {
   j = "0" + j;
 }
 return j;
}
function startDate() {
	var day_string = new Date();
	var month = new Date();
	var day = new Date();
	
	var days_string = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	
	document.getElementById("day").innerHTML = days_string[day_string.getDay()] + ", " + months[month.getMonth()] + " " + day.getDate();
	d = setTimeout(function() {
		startDate()
  }, 500);
}
startDate();

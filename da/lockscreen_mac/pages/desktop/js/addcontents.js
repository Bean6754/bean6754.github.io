var active = 0;

function addcontents() {
    if (active == 0) {
	var div = document.getElementById('taskbar-contents');
	div.innerHTML += '<link href="css/addedcontents.css" rel="stylesheet" type="text/css">\
		<a href="../../lockscreen.htm">Log Out User...</a>\
		<br>\
		';
    active = 1;
    	
    } else {
	document.getElementById("taskbar-contents").innerHTML = '';
	active = 0;
    }
}

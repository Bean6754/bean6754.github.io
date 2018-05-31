var active = 0;

function orbClick() {

if (active == 0) {
	var div = document.getElementById('orbdiv');
	div.innerHTML += '<link href="css/orb.css" rel="stylesheet" type="text/css">\
	<div id="orbdiv-contents">\
		<button onClick="">User</button><br>\
		<a href="../../index.htm">Sign out</a><br>\
		<a href="https://github.com/bean6754">About Me</a>\
	</div>\
	';
	
	active = 1;
	// window.location.href = '../../index.htm';
	} else {
		// var div = document.getElementById('orbdiv');
		// div.innerHTML += '';
		document.getElementById("orbdiv").innerHTML = '';
		
		active = 0;
	}
}

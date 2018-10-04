var active = 0;

function addcontents() {
    if (active == 0) {
	var div = document.getElementById('login2');
	div.innerHTML += '<link href="css/addedcontents.css" rel="stylesheet" type="text/css">\
		<form action="pages/desktop/index.htm">\
			<input id="formpassword" type="text" name="password" value="Enter Password" onfocus="if(this.value==\'Enter Password\') this.value=\'\';">\
			<button id="loginButton">Login</button>\
		</form>\
		<div id="custombuttons" align="center">\
			<button id="sleepButton">Sleep</button>\
			<button id="restartButton">Restart</button>\
			<button id="shutdownButton">Shut Down</button>\
		</div>\
		';
    active = 1;
    	
    } else {
	document.getElementById("login2").innerHTML = '';
	active = 0;
    }
}

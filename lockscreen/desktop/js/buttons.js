var activeOrb = 0;

function orbClick() {

	if (activeOrb == 0) {
		var divOrb = document.getElementById('orbdiv');
		divOrb.innerHTML += '<link href="css/orb.css" rel="stylesheet" type="text/css">\
		<div id="orbdiv-contents">\
			<p><a href="">User</a></p>\
			<p><a href="../lockscreen.htm">Sign out</a></p>\
			<p><a href="https://github.com/bean6754">About Me</a></p>\
		</div>\
		';
		
		activeOrb = 1;
		// window.location.href = '../../lockscreen.htm';
		} else {
			// var div = document.getElementById('orbdiv');
			// div.innerHTML += '';
			document.getElementById("orbdiv").innerHTML = '';
			
			activeOrb = 0;
		}
}

var activeFM = 0;

function fm() {
	if (activeFM == 0) {
		var divFM = document.getElementById('fmdiv');
		divFM.innerHTML += '<div id="mydiv">\
			<!-- Include a header DIV with the same name as the draggable DIV, followed by "header" -->\
			<div id="mydivheader">Click here to move</div>\
			<p>Move</p>\
			<p>this</p>\
			<p>DIV</p>\
		</div>\
		';
		var importedModal = document.createElement('script');
		importedModal.src = 'js/modal.js';
		document.head.appendChild(importedModal);
		
		activeFM = 1;
		// window.location.href = '../../lockscreen.htm';
		} else {
			// var div = document.getElementById('orbdiv');
			// div.innerHTML += '';
			document.getElementById("fmdiv").innerHTML = '';
			
			activeFM = 0;
		}
	}
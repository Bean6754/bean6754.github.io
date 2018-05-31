function hideimg() {
    var dragging = false;
    var iY;
	$("#lockscreen #background").mousedown(function(e) {
		dragging = true;
		iY = e.clientY - this.offsetTop;
		this.setCapture && this.setCapture();
		return false;
	});
        $("#lockscreen #time").mousedown(function(e) {
		dragging = true;
		iY = e.clientY - this.offsetTop;
		this.setCapture && this.setCapture();
		return false;
	});
        $("#lockscreen #day").mousedown(function(e) {
		dragging = true;
		iY = e.clientY - this.offsetTop;
		this.setCapture && this.setCapture();
		return false;
	});
	document.onmousemove = function(e) {
		if (dragging) {
			var e = e || window.event;
			var oY = e.clientY - iY;
			$("#lockscreen #background").css({"top":oY + "px"});
                        /* $("#lockscreen #time").css({"top":oY + "px"});
                        $("#lockscreen #day").css({"top":oY + "px"}); */
                        $("#lockscreen #time").animate({left: '100%'});
			$("#lockscreen #day").animate({left: '100%'});
                        $("#footer").animate({left: '100%'});	
			return false;
                }
	};
	$(document).mouseup(function(e) {
		dragging = false;
		$("#lockscreen #background")[0].releaseCapture();
                $("#lockscreen #time")[0].releaseCapture();
                $("#lockscreen #day")[0].releaseCapture();
                $("#footer")[0].releaseCapture();
                $("#lockscreen").remove();
		e.cancelBubble = true;
       });
}

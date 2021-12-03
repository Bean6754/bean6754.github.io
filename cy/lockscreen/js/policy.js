// Disable highlighting.
function disableSelect(el){			
    if(el.addEventListener){
        el.addEventListener("mousedown",disabler,"false");
    } else {
        el.attachEvent("onselectstart",disabler);
    }
}
 
function enableSelect(el){
    if(el.addEventListener){
	el.removeEventListener("mousedown",disabler,"false");
    } else {
        el.detachEvent("onselectstart",disabler);
    }
}
 
function disabler(e){
    if(e.preventDefault){ e.preventDefault(); }
    return false;
}

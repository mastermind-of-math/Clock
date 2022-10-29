var time = "";
var hour = 00;
var mins = 00;
var secs = 00;
var mils = 000;

Number.prototype.addZeros = function(n){
    for (var i = this.toString(); i.length < n; i = "0" + i);
    return i;
};

function getTime(){
    var current = new Date();
    hour = current.getHours();
    mins = current.getMinutes();
    secs = current.getSeconds();
    mils = current.getMilliseconds();
}

function allZeros(){
    hour = hour.addZeros(2)
    mins = mins.addZeros(2)
    secs = secs.addZeros(2)
    mils = mils.addZeros(3)
}

function displayTime(){
    if(document.getElementById("ampm").checked == false){
        if(hour > 12){
            hour = hour - 12
        }
    }
    if(document.getElementById("milli").checked){
        time = hour + ":" + mins + ":" + secs + ":" + mils;
    } else {
        time = hour + ":" + mins + ":" + secs;
    }
    if(document.getElementById("ampm").checked == false){
        if(hour > 12){
            time = time + " PM"
        } else {
            time = time + " AM"
        }
    }
    document.getElementById("main").innerHTML = time
}

function updateTime(){
    getTime()
    allZeros()
    displayTime()
}

function changed(){
    document.getElementById("main").style.color = document.getElementById("textcolor").value
    document.getElementById("main").style.fontSize = document.getElementById("fontsize").value + "px"
    document.getElementById("backcolor").style.backgroundColor = document.getElementById("backgroundcolor").value
}

function reset(){
    document.getElementById("textcolor").value = "#00b8d9"
    document.getElementById("fontsize").value = "125"
    document.getElementById("backgroundcolor").value = "#333333"
    document.getElementById("ampm").checked = true
    document.getElementById("milli").checked = true
    changed()
}

window.setInterval(updateTime, 1)
var fullscreen = 0;
var element = document.documentElement;

function openFull(){
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}  

function closeFull(){
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function toggle(){
    if(fullscreen = 1){
        openFull();
        fullscreen = 0;
    } else {
        closeFull();

    }
}

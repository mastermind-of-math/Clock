var time = "";
var pm = false;
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
    hour = hour.addZeros(2);
    mins = mins.addZeros(2);
    secs = secs.addZeros(2);
    mils = mils.addZeros(3);
}

function displayTime(){
    if(document.getElementById("ampm").checked == false){
        pm = false;
        if(hour > 12){
            pm = true;
            hour = hour - 12;
        }
    }
    if(document.getElementById("milli").checked){
        time = hour + ":" + mins + ":" + secs + ":" + mils;
    } else {
        time = hour + ":" + mins + ":" + secs;
    }
    if(document.getElementById("ampm").checked == false){
        if(pm){
            time = time + " PM";
        } else {
            time = time + " AM";
        }
    }
    document.getElementsByClass("main").innerHTML = time;
}

function updateTime(){
    getTime();
    allZeros();
    displayTime();
}

function changed(){
    document.getElementsByClass("main").style.color = document.getElementById("textcolor").value;
    document.getElementsByClass("main").style.fontSize = document.getElementById("fontsize").value + "px";
    document.getElementById("backcolor").style.backgroundColor = document.getElementById("backgroundcolor").value;
    document.getElementById("label-six").innerText = "Font Family: Azeret Mono";
}

function reset(){
    document.getElementById("textcolor").value = "#00b8d9";
    document.getElementById("fontsize").value = "125";
    document.getElementById("backgroundcolor").value = "#333333";
    document.getElementById("backcolor").style.fontFamily = "Azeret Mono";
    document.getElementById("ampm").checked = true;
    document.getElementById("milli").checked = true;
    changed()
}

window.setInterval(updateTime, 1);

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

function toggle(){
    openFull()
}

function selectFont() {
    document.getElementById("items").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

function font(id){
    document.getElementById("backcolor").style.fontFamily = id;
    document.getElementById("label-six").innerText = "Font Family: " + id;
}

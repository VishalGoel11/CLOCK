// window.addEventListener("load",function(){
var date1 = new Date();
let d = date1.getSeconds();
d *= 6;
let b1 = date1.getMinutes() % 60;
let b0 = date1.getMinutes() % 60;
b1 *= 6;
let c1 = date1.getHours() % 12;
c1 *= 6;
var time = document.getElementById("time");
let secondAxis = document.getElementById("secAxis");
let minAxis = document.getElementById("minAxis");
let hourAxis = document.getElementById("hourAxis");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
secAxis.style.transform = "rotate(" + (d * 6) + "deg)";
minAxis.style.transform = "rotate(" + (b1) + "deg)";
hourAxis.style.transform = "rotate(" + (c1) + "deg)";
setInterval(function () {
    var date = new Date();
    let m = date.getSeconds();
    let n = date.getMinutes();
    let o = date.getHours();
    secondAxis.style.transform = "rotate(" + (m * 6) + "deg)";
    minAxis.style.transform = "rotate(" + (n* 6) + "deg)";
    hourAxis.style.transform = "rotate(" + (o* 30) + "deg)";
    var time = document.getElementById("time");
    if (m < 10) {
        m = "0" + m;
    }
    if (n < 10) {
        n = "0" + n;
    }
    if (o < 10) {
        o = "0" + o;
    }
    time.innerHTML = "<h1 id='time' style:'text-align:center'>" + o + " : " + n + " : " + m + "</h1>";
}, 1000)

// })
// window.addEventListener("load",function(){
    let secondAxis=document.getElementById("secAxis");
    let minAxis=document.getElementById("minAxis");
    let hourAxis=document.getElementById("hourAxis");
    minAxis.style.transform="rotate(30deg)";
    let a=0,b=30,c=0;
    var date;
    setInterval(function(){
    secondAxis.style.transform="rotate("+a+"deg)";
    if(a%360==0 && a!=0){
    minAxis.style.transform="rotate("+b+"deg)";
    b+=30;
    }
    if(a%(360*60)==0 && a!=0){
    hourAxis.style.transform="rotate("+c+"deg)";
    c+=30;
    }
    a+=6;
    date= new Date();
    var a=date.getSeconds();
    var b=date.getMinutes();
    var c=date.getHours();
    var time = document.getElementById("time");
    if(a<10){
        a="0"+a;
    }
    time.innerHTML="<h1 id='time' style:'text-align:center'>"+c+" : "+b+" : "+a+"</h1>";
    },1000)

// })
// window.addEventListener("load",function(){
    let secondAxis=document.getElementById("secAxis");
    let minAxis=document.getElementById("minAxis");
    let hourAxis=document.getElementById("hourAxis");
    minAxis.style.transform="rotate(30deg)";
    let a=0,b=30,c=0;
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
    
    },1000)
// })
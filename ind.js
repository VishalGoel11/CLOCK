// window.addEventListener("load",function(){
    var date1= new Date();
    let d=date1.getSeconds();
    d*=6;
    let b1=date1.getMinutes()%60;
    b1*=6;
    let c1=date1.getHours()%12;
    c1*=6;
    var time = document.getElementById("time");
    let secondAxis=document.getElementById("secAxis");
    let minAxis=document.getElementById("minAxis");
    let hourAxis=document.getElementById("hourAxis");
    secAxis.style.transform="rotate("+(d*6)+"deg)";
    minAxis.style.transform="rotate("+(b1)+"deg)";
    hourAxis.style.transform="rotate("+(c1)+"deg)";
    // let a=0,b=0,c=0;
    // var date;
    var q=0;
    setInterval(function(){
        var date= new Date();
        let m=date.getSeconds();
        var k;
        if(d==360){
            d=0;
            // flag=false;
            q++;
         k=360;
        }else{
            k=0;
        }
    secondAxis.style.transform="rotate("+(m*6)+"deg)";

    if(k==360){
        b1+=6;
    minAxis.style.transform="rotate("+b1+"deg)";
    }
    if(q==60){
        c1+=30;
    hourAxis.style.transform="rotate("+c1+"deg)";
    q=0;
    }

    d+=6;
    let n=date.getMinutes();
    let o=date.getHours();
    var time = document.getElementById("time");
    if(m<10){
        m="0"+m;
    }
    if(n<10){
        n="0"+n;
    }
    if(o<10){
        o="0"+o;
    }
    time.innerHTML="<h1 id='time' style:'text-align:center'>"+o+" : "+n+" : "+m+"</h1>";
    },1000)

// })
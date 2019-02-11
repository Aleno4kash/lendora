  var i=1;
  var elem1=document.getElementById("elem1");
   var s="background-size: cover;overflow: hidden; min-height: 400px;width: 100%;background-size: cover;background-position: 50% 50%; position: relative;";
  var arr=["img/slider1.png","img/slider2.png","img/slider3.png"];
  var len=arr.length;
  window.setInterval(Start,10000);
  function Start()
  {
     if(i==len)
        i=0;
     if(i==0)
     {
       elem1.style.background="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) ,transparent url("+arr[0]+") center center";
       elem1.style.cssText+=s;
     }
     else
     {
       elem1.style.background="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) ,transparent url("+arr[i]+") center center";
       elem1.style.cssText+=s;
     }
     i++;
   
  }
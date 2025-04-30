window.addEventListener("DOMContentLoaded",init,false);

function init(){
    var zone = document.getElementById("zoneDessin");
    var gc = zone.getContext("2d");
    
    gc.beginPath();
    
    gc.moveTo(100,100);
    gc.lineTo(150,100);
    gc.lineTo(150,75);
    gc.lineTo(162.5,90);
    gc.lineTo(175,75);
    gc.lineTo(187.5,90);
    gc.lineTo(200,75);
    gc.lineTo(200,100);
    gc.lineTo(250,150);
    gc.lineTo(350,150);
    gc.lineTo(400,100);
    gc.lineTo(400,150);
    gc.lineTo(450,150);
    gc.lineTo(400,200);
    gc.lineTo(450,200);
    gc.lineTo(350,300);
    gc.lineTo(250,300);
    gc.lineTo(200,250);
    gc.lineTo(200,200);
    gc.lineTo(100,100);

    gc.stroke();
    gc.closePath();
    
    gc.beginPath();
    gc.moveTo(150,150);
    gc.lineTo(150,100);
    gc.lineTo(200,100);
    gc.stroke();
    gc.closePath();
    
     
    gc.beginPath();
    gc.moveTo(350,300);
    gc.lineTo(350,375);
    gc.moveTo(350,350);
    gc.lineTo(300,350);
    gc.moveTo(350,350);
    gc.lineTo(320,370);
    gc.stroke();
    gc.closePath();
    
    gc.beginPath();
    gc.moveTo(250,300);
    gc.lineTo(250,375);
    gc.moveTo(250,350);
    gc.lineTo(200,350);
    gc.moveTo(250,350);
    gc.lineTo(220,370);
    gc.stroke();
    gc.closePath();
    
    gc.beginPath();
    gc.arc(165,115,5,0, Math.PI*2);
    gc.fillStyle = "black";
    gc.fill();
    gc.closePath();
   
   
}
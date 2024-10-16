window.addEventListener("DOMContentLoaded",init,false);

function init(){
    var zone = document.getElementById("zoneDessin");
    var gc = zone.getContext("2d");
    
    gc.beginPath();
    gc.arc(100,100,100,0, Math.PI*2);
    gc.fillStyle = "black";
    gc.fill();
    gc.closePath();
    
    gc.beginPath();
    gc.arc(100,100,90,0, Math.PI*2);
    gc.fillStyle = "white";
    gc.fill();  
    gc.closePath();
    
    gc.beginPath();
    gc.arc(100,100,80,0, Math.PI*2);
    gc.fillStyle = "black";
    gc.fill();
    gc.closePath(); 
    
    gc.beginPath();
    gc.arc(100,100,70,0, Math.PI*2);
    gc.fillStyle = "white";
    gc.fill();
    gc.closePath();
    
    gc.beginPath();
    gc.arc(100,100,60,0, Math.PI*2);
    gc.fillStyle = "black";
    gc.fill();
    gc.closePath();
    
    gc.beginPath();
    gc.arc(100,100,50,0, Math.PI*2);
    gc.fillStyle = "white";
    gc.fill();
    gc.closePath();
    
    gc.beginPath();
    gc.arc(100,100,60,0, Math.PI*2);
    gc.fillStyle = "black";
    gc.fill();
    gc.closePath();
    
    gc.beginPath();
    gc.arc(100,100,50,0, Math.PI*2);
    gc.fillStyle = "white";
    gc.fill();
    gc.closePath();
    
    gc.beginPath();
    gc.arc(100,100,40,0, Math.PI*2);
    gc.fillStyle = "black";
    gc.fill();
    gc.closePath();
    
    gc.beginPath();
    gc.arc(100,100,30,0, Math.PI*2);
    gc.fillStyle = "white";
    gc.fill();
    gc.closePath();

    gc.beginPath();
    gc.arc(100,100,20,0, Math.PI*2);
    gc.fillStyle = "black";
    gc.fill();
    gc.closePath();
    
    gc.beginPath();
    gc.arc(100,100,10,0, Math.PI*2);
    gc.fillStyle = "red";
    gc.fill();
    gc.closePath();
    
   
}
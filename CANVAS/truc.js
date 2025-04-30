// CANVAS.js

var gc;
var indice = 0;
var dessin = [
    cible,
    echec,
    poule,
    forme
];

window.addEventListener("DOMContentLoaded", init, false);

function init() {
    var zone = document.getElementById("zoneDessin");
    gc = zone.getContext('2d');

    dessin[indice]();

    var button = document.getElementById("dessinButton");
    button.addEventListener("click", changerDessin, false);
}

function changerDessin() {
    gc.clearRect(0, 0, gc.canvas.width, gc.canvas.height);

    indice = (indice + 1) % dessin.length;
    dessin[indice]();
}

function cible() {
  gc.lineWidth = 10;

    gc.beginPath();
    gc.fillStyle = "red";
    gc.arc(250, 250, 20, 0, Math.PI*2);
    gc.fill();
    gc.closePath();

    var rayon=20;

    for( var i=0 ; i<5 ; i++) {
        gc.beginPath();
        gc.arc(250, 250, rayon+(20*i), 0, Math.PI*2);
        gc.stroke();
        gc.closePath();
    }
}

function echec() {
    var cases = 0;
    var horiz = 0;
    var vert = 50;
    gc.beginPath();
    var couleur;
    var ligne = 0;
    var colonne = 0 ;
    gc.lineWidth = 2;
    
    while (cases<100){
        
       
        if ((ligne+colonne)%2 == 1 ){
            couleur="white";
        }else{
            couleur="black";
        }
        
        if (colonne > 8 ){
            
            gc.fillStyle = couleur;
            gc.strokeStyle = "black";
            gc.fillRect(horiz,vert,25,25);
            gc.strokeRect(horiz,vert,25,25);
            
            cases++;
            horiz=0;
            vert=vert+25;
            ligne++;
            colonne=0;
        } else {
            
            gc.fillStyle = couleur;
            gc.strokeStyle = "black";
            gc.fillRect(horiz,vert,25,25);
            gc.strokeRect(horiz,vert,25,25);
            
            cases++;
            horiz=horiz+25;
            colonne++;
        }
        

        }
    gc.closePath();
   
}


function poule() {
    gc.lineWidth = 2;
  

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




function forme() {

    gc.strokeStyle = "black"; 
    gc.lineWidth = 2;
    gc.beginPath();

    // Carré.
    gc.moveTo(100, 100);
    gc.lineTo(100, 400);
    gc.lineTo(400, 400);
    gc.lineTo(400, 100);
    gc.lineTo(100, 100);

    for (let i = 0; i < 30; i++) {
        gc.moveTo(100, 100 + i * 10);
        gc.lineTo(100 + i * 10, 400);
    }

    for (let i = 0; i < 30; i++) {
        gc.moveTo(100 + i * 10, 100);
        gc.lineTo( 400, 100 + i * 10);
    }

    gc.stroke();
    gc.closePath();
}




window.addEventListener("DOMContentLoaded",init,false);

function init(){
    var zone = document.getElementById("zoneDessin");
    var gc = zone.getContext("2d");
    
    var cases = 0;
    var horiz = 0;
    var vert = 50;
    gc.beginPath();
    var couleur;
    var ligne = 0;
    var colonne = 0 ;
    
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
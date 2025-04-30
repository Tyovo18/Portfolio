document.addEventListener("DOMContentLoaded",init,false);


var mc;
var gc;

function init() {
    mc = document.getElementById('moncanvas');
    gc = mc.getContext('2d');
    bouton = document.getElementById('addPenguin');
    bouton.addEventListener("click",ajouterPingouin);
   
}



function afficherImage(imageObj) {
    var min = 1;
    var max = 300;
    var random_int = Math.floor(Math.random() * (max - min + 1) + min);
    var imageX ;
    var imageY ;
    var imageWidth = imageObj.width / 15;
    var imageHeight = imageObj.height / 15;
    gc.drawImage(imageObj, imageX, imageY, imageWidth, imageHeight);
}


function ajouterPingouin() {
    var img = new Image();
    img.src = "penguin.png";
    img.onload = function() {
        afficherImage(this);
    }
}

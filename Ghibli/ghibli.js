window.addEventListener("DOMContentLoaded",run);

async function run(){
    try {
        let reponse = await fetch("https://ghibli.rest/films");
        let users = await reponse.json();
        affichage(users);
    }
    catch(e){
        console.log(e);
    }

    function affichage(data){
        console.log(data);
        let ulElement = document.createElement("ul");
        document.body.appendChild(ulElement);
        var compteur=0;
        data.forEach(user => {
			
			
            let liElement = document.createElement("li");
            ulElement.appendChild(liElement);
            let bouton = document.createElement("button");
            liElement.appendChild(bouton);
            let liElement1 = document.createElement("h3");
            bouton.appendChild(liElement1);
            let texte = document.createTextNode(user.title);
            liElement1.appendChild(texte);
            bouton.id = compteur;
            let liElement2 = document.createElement("img");
			liElement.appendChild(liElement2);				
			liElement2.src = user.image;
            compteur = compteur+1;
			
        });
    }

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", async () => {
            let response = await fetch("https://ghibli.rest/films");
            let data = await response.json();
            let film = data[button.id];
            let desc = film.description;
            let ban = film.movie_banner;
            let jptitre = film.original_title;
            let rmtitre = film.original_title_romanised;
            let tete = `${jptitre} / ${rmtitre}`;
            let date = film.release_date;
            console.log(await modale(desc, ban,tete,date));
        });
    });

    function modale(desc, ban,tete,date) {
        let calc = document.createElement("div");
        calc.setAttribute("class", "calc");
        document.body.appendChild(calc);

        let fenetre = document.createElement("div");
        fenetre.setAttribute("class", "modale");
        let og = document.createElement("h4");
        og.innerText = tete;
        fenetre.appendChild(og);
        let rdate = document.createElement("h4");
        rdate.innerText = date;
        fenetre.appendChild(rdate);
        let banner = document.createElement("img"); 
        banner.src = ban;
        fenetre.appendChild(banner);
        let para = document.createElement("p");
        para.innerText = desc;
        fenetre.appendChild(para);
        calc.appendChild(fenetre);

        let confirm = document.createElement("button");
        confirm.innerText = "Retour";
        fenetre.appendChild(confirm);

        return new Promise(resolve => {
            calc.addEventListener("click", () => {
                calc.remove();
                resolve(false);
            });
            fenetre.addEventListener("click", (evt) => {
                evt.stopPropagation();
            });
            confirm.addEventListener("click", () => {
                calc.remove();
                resolve(true);
            });
        });
    }





}

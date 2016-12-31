/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

for (var i = 0 ; i < listeLiens.length ; i++) {
    //création des éléments
    var blocLien = document.createElement("div");

    var spanTitre = document.createElement("span");

    var lienWeb = document.createElement("a");

    var br = document.createElement("br");

    var spanAuteur = document.createElement("span");


    //modification du contenu des éléments
    spanTitre.classList.add("titre");
    spanTitre.appendChild(document.createTextNode(listeLiens[i]["titre"]));

    lienWeb.classList.add("lien");
    lienWeb.href = listeLiens[i]["url"];
    lienWeb.appendChild(document.createTextNode(listeLiens[i]["url"]));

    spanAuteur.classList.add("auteur");
    spanAuteur.appendChild(document.createTextNode("Ajouté par "+listeLiens[i]["auteur"]));

    //modification du style des éléments
    blocLien.style.backgroundColor = "white";
    blocLien.style.marginTop = "20px";
    blocLien.style.padding= "10px";

    spanTitre.style.color = "#428bca";
    spanTitre.style.fontWeight = "bold";
    spanTitre.style.fontSize = "110%";

    lienWeb.style.color = "black";
    lienWeb.style.textDecoration = "none";

    spanAuteur.style.fontSize = "105%";

    //disposition des éléments dans sur le DOM
    blocLien.appendChild(spanTitre);

    blocLien.appendChild(lienWeb);

    blocLien.appendChild(br);

    blocLien.appendChild(spanAuteur);

    document.getElementById("contenu").appendChild(blocLien);
}
 /*
<div>
    <span class="titre">Titre</span><a href="www.lien.fr" class="lien">www.lien.fr</a><br/>
    <span class="auteur">Ajouté par Auteur</span>
</div>
*/
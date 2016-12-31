var styleCSS = getComputedStyle(document.getElementById("contenu"));
var hauteur = styleCSS.height;
var longueur = styleCSS.width;

var infosCSS = document.createElement("p");
infosCSS.appendChild(document.createTextNode("Informations sur l'élément :"));

var listeCSS = document.createElement("ul");
var puceHauteur = document.createElement("li");
puceHauteur.appendChild(document.createTextNode("Hauteur : "+hauteur));
var puceLongueur = document.createElement("li");
puceLongueur.appendChild(document.createTextNode("Longueur : "+longueur));

listeCSS.appendChild(puceHauteur);
listeCSS.appendChild(puceLongueur);

document.getElementById("infos").appendChild(infosCSS);
document.getElementById("infos").appendChild(listeCSS);
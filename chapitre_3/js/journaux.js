// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
var titres = ["Le Monde", "Le Figaro", "Libération"];
var ids = ["leMonde", "leFigaro", "libération"];
// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

//création de la liste
var liste = document.createElement("ul");
liste.id = "listeJournaux";
document.getElementById("contenu").appendChild(liste);

//ajout des articles à la liste
for (var i =0 ; i < journaux.length ; i++) {
	var lien = document.createElement("a");
	lien.href = journaux[i];
	lien.appendChild(document.createTextNode(titres[i]));

	var puce = document.createElement("li");
	puce.id = ids[i];
	puce.appendChild(lien);
	document.getElementById("listeJournaux").appendChild(puce);
}
//selection des elts par tag
var titreElts = document.getElementsByTagName("h2");
console.log(titreElts[0]);
console.log(titreElts.length);

//selection des elts par classes
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i=0 ; i<merveillesElts.length ; i++) {
	console.log(merveillesElts[i]);
}

//selection par id
console.log(document.getElementById("nouvelles"));

//selection par selecteur CSS
console.log(document.querySelectorAll("p").length);

console.log(document.querySelectorAll("#contenu p").length);

console.log(document.querySelectorAll(".existe").length);


//récupération du contenu html
console.log(document.getElementById("contenu").innerHTML);

console.log(document.getElementById("contenu").textContent);

//Récupération d'un attribut d'une balise
console.log(document.querySelector("a").getAttribute("href"));
//Attributs directements récupérables : id, value, href
console.log(document.querySelector("a").href);
console.log(document.querySelector("ul").id);
//vérif de la présence d'un attribut
if(document.querySelector("a").hasAttribute("target")) {
	console.log("Le premier lien possède l'attribut target");
} else {
	console.log("Le premier lien ne possède pas l'attribut target");
}

//Récupération des classes
var classes = document.getElementById("antiques").classList;
console.log(classes.length);
console.log(classes[0]);
//Vérif de la présence d'une classe dans un élément html
if(document.getElementById("antiques").classList.contains("merveilles")) {
	console.log("L'élément identifié par \"antiques\" possède la classe mervelle");
} else {
	console.log("L'élément identifié par \"antiques\" ne possède pas la classe mervelle");
}
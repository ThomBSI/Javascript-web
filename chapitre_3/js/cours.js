/**Cours**/
/*

//Méthodes à utiliser pour de petites modifications :

	//ajout d'un élément html
		document.getElementById("langages").innerHTML += '<li id="c">C</li>';

	//supperssion d'un élément
		//document.getElementById("C").innerHTML += '';

	//ajout d'un élément textuel à une balise
		document.querySelector("h1").textContent += " de programmation";



//modification d'un attribut dans un élément
	document.querySelector("h1").setAttribute("id","titre");

	//attributs directements modifiables : id, value, href
	document.querySelector("div").id = "contenu_du_site";

//modification de classes
	var eltTitre = document.querySelector("h1");
	eltTitre.classList.add("titre");
	eltTitre.classList.remove("debut");
	console.log(eltTitre);
	

//Grosses modification du code html

	//ajouter un élement html
	var langPython = document.createElement("li");//création de l'élément
	langPython.id = "python";//def de l'id
	langPython.textContent = "Python"; //def du texte
	document.getElementById("langages").appendChild(langPython); //insertion de l'élement

	//variante d'ajout d'élément avec createTextNode
	var langRuby = document.createElement("li");
	langRuby.id = "ruby";
	langRuby.appendChild(document.createTextNode("Ruby"));
	document.getElementById("langages").appendChild(langRuby);

	//inserssion d'élément avant un autre
	var langPerl = document.createElement("li");
	langPerl.id = "perl";
	langPerl.appendChild(document.createTextNode("Perl"));
	document.getElementById("langages").insertBefore(langPerl, document.getElementById("php"));

	//insersion d'un nouvel élément à un endroit précis
	document.getElementById("langages").insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');
	//4 possibilités d'insertion :
		//afterbegin ==> à l'interieur, avant le premier enfant
		//beforend ==> à l'intérieur, après le dernier enfant
		//beforebegin ==> à l'extérieur, juste avant l'élément
		//afterend ==> à l'extérieur, juste après l'élément


	//remplacement d'un élément par un autre
	var langBash = document.createElement("li");
	langBash.id = "bash";
	langBash.appendChild(document.createTextNode("Bash"));
	document.getElementById("langages").replaceChild(langBash, document.getElementById("perl"));

	//supression d'un élément enfant
	document.getElementById("langages").removeChild(document.getElementById("bash"));	

*/

/**Exo**/

//ajout des langages
document.getElementById("langages").insertAdjacentHTML("afterbegin", "<li id='javascipt'>JavaScript</li>");

var eltC = document.createElement("li");
eltC.id = "c";
eltC.appendChild(document.createTextNode("C"));
document.getElementById("langages").appendChild(eltC);

var eltPython = document.createElement("li");
eltPython.id = "python";
eltPython.appendChild(document.createTextNode("Python"));
document.getElementById("langages").appendChild(eltPython);

var eltRuby = document.createElement("li");
eltRuby.id = "ruby";
eltRuby.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(eltRuby);

//ajout du lien
document.getElementById("langages").insertAdjacentHTML("afterend", "<p>Et voici une <a id='lien_wiki'></a> plus complète</p>");
var lien_wiki = document.getElementById("lien_wiki");
lien_wiki.appendChild(document.createTextNode("liste"));
lien_wiki.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
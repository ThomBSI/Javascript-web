//Accéder et manipuler le style dans le code html

var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.backgroundColor = "Black";
pElt.style.fontFamily = "Verdana";

var paragraphesElt = document.getElementsByTagName("p");
console.log(paragraphesElt[0].style.color);
console.log(paragraphesElt[1].style.color);
console.log(paragraphesElt[2].style.color); //Style ineccessiblme car dans une fuille css externe

//accès au style dans une feuille css
var stylePara = getComputedStyle(document.getElementById("para")); //récupère le style dans le css
console.log(stylePara.fontStyle);
console.log(stylePara.color);
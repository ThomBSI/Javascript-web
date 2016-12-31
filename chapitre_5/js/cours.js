function clic() {
    console.log("Clic !");
}
var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
	boutonElt.addEventListener("click", clic);
// Suppression du gestionnaire pour l'événement click
	//boutonElt.removeEventListener("click", clic);

/*
Autre manière de procéder avec une fonction ananyme :
	var boutonElt = document.getElementById("bouton");
	// Ajout d'un gestionnaire pour l'événement click
	boutonElt.addEventListener("click", function () {
	    console.log("Clic !");
	});
Problème : removeEventListener impossible à utiliser dans ce cas
*/

//ajout d'un gestionnaire qui affiche le type et la cible de l'évenement
	document.getElementById("bouton").addEventListener("click", function (e) {
		console.log("Evènement : "+e.type +", texte de la cible : "+e.targer.textContent);
	});

	document.addEventListener("onkeypress", function(e){
		console.log('Vous avez appuyé sur la touche '+String.fromCharCode(e.charCode));
	});
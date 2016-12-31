function infosLiens() {
	console.log(document.querySelectorAll("a").length);
	var liens = document.querySelectorAll("a");
	console.log(liens[0].href);
	console.log(liens[liens.length-1].href);
}

function possede(id,classe) {
	if(document.getElementById(id).classList.contains(classe)) {
		console.log("true");
	} else {
		console.log("false");
	}
}


infosLiens();


possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
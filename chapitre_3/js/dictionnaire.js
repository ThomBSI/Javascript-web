// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
var blocDefListe = document.createElement("dl");

for (var i = 0 ; i < mots.length ; i++) {
    var gras = document.createElement("strong");
    var blocTerme = document.createElement("dt");
    blocTerme.appendChild(document.createTextNode(mots[i]["terme"]));
    gras.appendChild(blocTerme);
    blocDefListe.appendChild(gras);
    var blocDef = document.createElement("dd");
    blocDef.appendChild(document.createTextNode(mots[i]["definition"]));
    blocDefListe.appendChild(blocDef);
}

document.getElementById("contenu").appendChild(blocDefListe);
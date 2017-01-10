var nombreSaisi;
var compteur = 1;

nombreSaisi = prompt("Combien de case voulez-vous ?");
nombreSaisi = parseInt(nombreSaisi);
while(compteur != nombreSaisi){
	clonage();
	console.log(compteur);
	compteur++;
}


function clonage() {
    var item = document.getElementById("liste").lastChild;
    var clonage = item.cloneNode(true);
    document.getElementById("liste").appendChild(clonage);
}
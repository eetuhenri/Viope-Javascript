var taulukko = [];
var summa = 0;


function lisaaLuku() {
var luku = parseInt(document.getElementById("luku").value);
taulukko.push(luku)


}
function tulostaTiedot() {
	var pituus = taulukko.length;
	for (var i = 0; i < pituus; i++) 
	summa += taulukko[i];

var keski_arvo =  summa/ pituus;
console.log('Taulukossa on ' + pituus + ' arvoa.');
console.log('Lukujen keskiarvo on ' + keski_arvo);
}

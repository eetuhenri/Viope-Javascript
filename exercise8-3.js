var Valilyonti = "";
var Sijainti = lause.search(/k+a+n+a+/gi);
var Arvo = lause.substr(Sijainti, 4).toLowerCase();


for (var i = 0; i < Sijainti; i++) {
Valilyonti = Valilyonti + " ";
}

tuloste = Valilyonti + Arvo;

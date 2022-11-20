function Henkilo(etunimi, sukunimi) {
	this.etunimi = etunimi;
	this.sukunimi = sukunimi;
}
Henkilo.prototype.nimi = function() {return (this.sukunimi + " " + this.etunimi)}


function Asiakas (etunimi, sukunimi, id, kulut, bonus) {
Henkilo.call(this,etunimi, sukunimi)
this.id = id;
this.kulut = kulut;
this.bonus = bonus;


function bonus() {
Asiakas.call(this, kulut);

if (kulut>5000){
return "kulta";
}else if (kulut>1000) {
return "hopea";
}else {
return "perus";
}
}
}


Asiakas.prototype.nimi = function() {return (this.sukunimi + " " + this.etunimi)}

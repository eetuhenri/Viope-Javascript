const henk1 = {
nimi: "Mikko",
tyo: "JS-koodari",
palkka: 5000,
vertaaPalkka: function (inputValue) {
const erotus = this.palkka - inputValue.palkka;
console.log("Mikko tienaa " + erotus + " enemmän kuin Lea");
}
};


const henk2 = {
nimi: "Lea",
tyo: "Python-koodari",
palkka: 1500,
vertaaPalkka: function (inputValue) {
const erotus = this.palkka - inputValue.palkka;
console.log("Mikko tienaa " + erotus + " enemmän kuin Lea");
}
};


const henk3 = {
nimi: "Pena",
tyo: "Opettaja",
palkka: 1000,
vertaaPalkka: function (inputValue) {
const erotus = inputValue.palkka - this.palkka;
erotus === 0 ? console.log("Pena tienaa yhtä paljon kuin " + inputValue.nimi) :
console.log("Pena tienaa " + erotus + " vähemmän kuin Lea");

}
};

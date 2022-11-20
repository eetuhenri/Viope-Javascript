var testi = /\d/g;
var numerot;
var numerotMerkkijonona = []
if (testi.test(lause)){
numerot = (lause.match(testi));
for (var i in numerot){
numerotMerkkijonona += (numerot[i]) + ',';
}
numerotMerkkijonona = numerotMerkkijonona.substring(0,numerotMerkkijonona.length - 1);
console.log(numerotMerkkijonona);
}

else{
console.log("Ei numeroita!");
}

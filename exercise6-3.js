function checkFunc(taulu) {
var numerot = 0;
var sanat = 0;

for (var i = 0; i < taulu.length; i++) {
if (isNaN(taulu[i])) {
sanat += 1;
} else {
numerot += 1;
}
}
if (sanat > 0) {
return false;
} else if (numerot > 0 && sanat == 0) {
return true;
}
}


function combineFunc(taulu) {
console.log('Taulukossa tekstiä. Yhdistetään sanat:');
let lause = "";
for (var i = 0; i < taulu.length; i++) {
if (i < taulu.length) {
lause = lause + taulu[i].toString() + " ";
} else {
lause += taulu[i];
}
}
return lause.toString();
}

function sumFunc(taulu) {
console.log('Taulukossa vain lukuja. Lasketaan summa:');
let summa = 0;
for (var i = 0; i < taulu.length; i++) {
summa += taulu[i];
}
return summa;
}

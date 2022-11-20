console.log("Taulukko 1: " + array1)
console.log("Taulukko 2: " + array2)

let numero = 1;	
	
while (array2.length > 0) {
if(numero%2==1){
	numero++
array1.push(array2.pop());
}else if (numero%2==0){
array1.push(array2.shift());
	numero++
}}
console.log("Lopputulos: " + array1)


function noudaArvo(x) {
	var luku= document.getElementById("luku").value
	var eksp= document.getElementById("eksponentti").value
	if (x === "luku") return luku;
	if (x === "eksponentti") return eksp;
}
function laskePotenssi(luku, eksp) {
	document.getElementById("eksponentti").value;
	eksp = luku ** eksp
	return eksp
}

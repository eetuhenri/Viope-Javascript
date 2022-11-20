function toisto(maara,i, func) {
if (maara<1){return "Toistoja tulee olla ainakin yksi!"}
if (maara=>1){
for (a=0; a<=maara; a++){
while (a<maara){
i=func(i)
a=a+1}
if (a=maara){return i}
}
}
}


var puolitus= function(i){
return i=i/2}
var nelio=function(i){
return i=i*i}

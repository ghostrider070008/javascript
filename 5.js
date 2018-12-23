function slozhenie(x,y){
return(x+y);
}
function raznost(x,y){
	return(x-y);
}
function umnozhenie(x,y){
	return(x*y);
}
function delenie(x,y){
	return(x/y);
}
var a=Math.round(Math.random()*50-25), b=Math.round(Math.random()*50-25);
alert("a="+a);
alert("b="+b);
alert("Сложение="+slozhenie(a,b));
alert("Разность="+raznost(a,b));
alert("Умножение="+umnozhenie(a,b));
alert("Деление="+delenie(a,b));
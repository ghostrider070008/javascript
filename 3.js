var a,b;
a=Math.round((Math.random()*50-25));
b=Math.round((Math.random()*50-25));
alert("а="+a);
alert("b="+b);
if (a>=0 && b>=0)
	alert("Переменные больше нуля="+(a-b));
if (a<0 && b<0)
	alert("Переменные меньше нуля="+(a*b));
if ((a>=0 && b<0) || (a<0 && b>=0))
	alert("Переменные разных знаков="+(a+b));
var number = {
	//единицы
		units: function (my_numberfun ) {
	this.units = my_numberfun % 10;
},
//десятки
	decades: function (my_numberfun ) {
	this.decades = parseInt((my_numberfun/10) % 10);
},
//сотни
	hundreds: function (my_numberfun ) {
	this.hundreds = parseInt((my_numberfun/100) % 10);
}
}
var my_input=+prompt("Введите число от 0 до 999:");//ввод числа
/*while ((my_input<0) || (my_input>999)){
	alert("Число должно находиться в промежутке от 0 до 999");
	my_input=+prompt("Введите число от 0 до 999:");
};*/
if ((my_input >0) && (my_input<=999)){ 
number.units(my_input);
number.decades(my_input);
number.hundreds(my_input);
console.log("\'единицы\' : "+number.units+", \'десятки\' : "+number.decades+", \'сотни\' : "+number.hundreds);
}
else {
	console.log('Число не входит в заданный диапазон от 0 до 999');
	number={};
}
console.log(number);
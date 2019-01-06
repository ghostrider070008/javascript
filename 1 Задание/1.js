var number = {
	hundreds: function (my_numberfun ) {
	this.hundreds = parseInt((my_numberfun/100) % 10);
},
	decades: function (my_numberfun ) {
	this.decades = parseInt((my_numberfun/10) % 10);
},
	units: function (my_numberfun ) {
	this.units = my_numberfun % 10;
}
};
var my_input=+prompt("Введите число от 0 до 999:");
while ((my_input<0) || (my_input>999)){
	alert("Число должно находиться в промежутке от 0 до 999");
	my_input=+prompt("Введите число от 0 до 999:");
};
number.hundreds(my_input);
number.decades(my_input);
number.units(my_input);
console.log(number);
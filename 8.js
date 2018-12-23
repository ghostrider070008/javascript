alert("Задание 8");
function power(val,pow){
	if (pow===0)
		return 1;
	else {
		return val*power(val,pow-1);
	}
}
alert("Степнь="+power(+prompt("Введите число"),+prompt("Введите степень")));
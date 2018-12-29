var x,p,k,i=0,j=0,n=[],t=1,str_comp="",str_user="",korov=0,byk=0,popytka=0,korova="",byk_str="";
//проверка первого значения
n[i]=Math.round(Math.random()*9+1);
console.log(n[i]);
i++;
//заполнение значениями
while (i<4){
	while (t=1){
	
 x=Math.round(Math.random()*9+0);
if (n.indexOf(x)==-1){
	n[i]=x;
	break;
}
	}
console.log(n[i]);
	i++;
}
i=0;
j=0;

//перевод массива в строку
for (i=0;i<n.length;i++){
	str_comp+=n[i];
}
i=0;
//проверка числа
while (str_comp!=str_user){
	str_user=prompt('Введите четырехзначное число, чтобы угадать:');
	korov=0;
	byk=0;
	korova="";
	byk_str="";
	i=0;

	while (i<n.length){
		if (str_comp==str_user){
		break;
	}
	//проверка быков
	if (str_comp[i]==str_user[i]){
		byk++;
		byk_str+=" цифра "+"\""+str_user[i]+"\"";
	}
	//проверка коров
	if (str_comp[i]!=str_user[i]){
		if (str_comp.indexOf(str_user[i])!=-1){
	korov++;
	korova+=" цифра"+"\""+str_user[i]+"\"";
	}
	}
	i++;
	}
	i=0;
	
	popytka++;
	//вывод
	if (korov>0){
		alert(korov+" корова"+" "+korova);
	console.log(korov+" корова"+" "+korova);
	}
	if (byk>0){
		alert(byk+" бык"+byk_str);
	console.log(byk+" бык"+byk_str);
	}
	}
	if (popytka>1){
		alert("Вы угадали число с "+popytka+" попыток");
	console.log("Вы угадали число с "+popytka+" попыток");
	}
else {
	alert("Вы просто экстрасенс. Поздравляем!!!!")
	console.log("Вы просто экстрасенс. Поздравляем!!!!");

	}


var x,p,k,i=0,j=0,n=[],t=1,str_comp="",str_user="",korov=0,byk,popytka=0,korova="";
/*x=prompt("Введите число из неповторяющихся цифр");
x+=x+"";*/
n[i]=Math.round(Math.random()*9+0);
if (n[i]==0)
n[i]=Math.round(Math.random()*9+0);
console.log(n[i]);
i++;
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
for (i=0;i<n.length;i++){
	str_comp+=n[i];
}
i=0;
while (str_comp!=str_user){
	str_user=prompt('Введите четырехзначное число, чтобы угадать:');
	while (i<n.length){
	if (str_comp=str_user){
		console.log("Вы выиграли c "+popytka+"Количеством попыток");
		break;
	}
	if (str_comp.indexOf(str_user[i])!=-1){
	korov++;
	korova+=" "+str_user[i]+" цифра";
	}
	i++;
}
	i=0;
	while (i<n.length){
	if (str_comp[i]==str_user[i]){
		byk=str_user[i];
		console.log(byk+" бык");
	}
	i++;
	}
	popytka++;
	}
console.log(korov+" корова"+" "+korova);
console.log(popytka+" попыток");


/*while (i<4){
n[i]=Math.round(Math.random()*8+1);
j=0;

	while (j<=n.length-1){
	if ((n[i]==n[j]) && (j!=n.length) && (i!=j)){
	n[i]=Math.round(Math.random()*8+1);
	if (n[i]==n[j]){
	n[i]=Math.round(Math.random()*8+1);
	}
	k=0;
	while (k<=n.length-1){
		if ((n[i]==n[k]) && (k!=n.length) && (i!=k)){
		n[i]=Math.round(Math.random()*8+1);
	if (n[i]==n[k]){
	n[i]=Math.round(Math.random()*8+1);
	}
		}
		k++;
	}
		}
	j++;
	}
console.log(n[i]);
i++;
}
i=0;
j=i+1;
k=0;	*/

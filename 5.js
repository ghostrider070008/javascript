var x,p,k,i=0,j=0,n=[],t=1,str_comp="",str_user="";
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
str_user=prompt('Введите четырехзначное число, чтобы угадать:');
i=0;
j=0;
//while (i<n.length){

//}

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

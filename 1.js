var i=2, j=1, n=0;
while (i<=100){
	n=0;
	if (i%2!=0){
		j=1;
		while(j<=100){
			if (n<=2){
				if (i%j==0){
					console.log(i);
					n++;
					j++;				
				}
			if (n>2){
			break;
			}
			
			}
		}
}

i++;
}

var n=2, i,j;
var table="<table>", tr=1,temp,td;
table+="<tr>"+"<td>"+n+"</td>";
n++;
while (n<=100) {
	i=2;
	j=0;
	if (n%2!=0){
	while ((i*i<=n)&&(j!=1)){
	if (n%i==0){
		j=1;
	}
	i++;
	}
	if (j==0){
		table+="<td>"+n+"</td>";
		}
	}
	n++;
}
table+="</tr></table>";
document.write(table);

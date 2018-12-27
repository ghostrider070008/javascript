var ch=0;
do {
if (ch==0) {
	document.write(ch+" - это ноль"+"<br>");
	ch++;
	continue;
}
if (ch%2==0){
	document.write(ch+" - это четное число"+"<br>");
}
if (ch%2!=0){
	document.write(ch+" - это нечетное число"+"<br>");
}
ch++;
} while (ch<=10)



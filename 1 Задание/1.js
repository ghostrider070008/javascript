var i, div_w,div_b;

for (i=0; i<=15; i++){
	div_w = document.createElement("div");// белая ячейка
	div_w.width = "50 px";
	div_w.height = "50 px";
	div_w.backgroundColor = "black";
	var elemText = document.createTextNode("Привет мир");
	div_w.appendChild(elemText);
	console.log(div_w);
	
}
var articleDiv = document.querySelector("div.article");
// создаем элемент
var elem = document.createElement("h2");
// создаем для него текст
var elemText = document.createTextNode("Привет мир");
// добавляем текст в элемент в качестве дочернего элемента
elem.appendChild(elemText);
// получаем первый элемент, перед которым будет идти добавление
var firstElem = articleDiv.firstChild.nextSibling;
// добавляем элемент в блок div перед первым узлом
articleDiv.insertBefore(elem, firstElem);
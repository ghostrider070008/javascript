function f(id_prod){
var product1 = document.getElementsByClassName("car");
	var	productId = "productId"+id_prod;
	if (document.getElementById (productId) != null){
		var colprod = document.getElementById(colprodID);
		var colvo = colprod.textContent;
		productCar[id_prod].col++;
		colprod.innerHTML = productCar[id_prod].col;
		//colprod.textContent = productCar[id_prod].col;
		//colprod.remove();
		var trprod = document.getElementById(idstr);
		price = document.getElementById(priceid);
		sumid = "sum"+id_prod;
	var	producttdsum = document.getElementById(sumid)
		sum = product[id_prod].price*productCar[id_prod].col;
	producttdsum.innerHTML = sum;
	totalSum += productCar[id_prod].price*productCar[id_prod].col;
	totaltd = document.getElementById("tdtotalsum");
	totaltd.innerHTML = totalSum;
	
		//trprod.insertBefore(colprod,price);
	}
	if (document.getElementById (productId) == null){
	var productprov = document.getElementById(productId);
var productTr = document.createElement("tr"), productTdName = document.createElement("td");
var cartable = document.getElementsByTagName("table");
	productTdName.id = productId;
	idstr = "tr"+ id_prod;
	productTr.id = "tr"+ id_prod;
	//productTdName.textContent = product[id_prod].name;
	productTdName.innerHTML = product[id_prod].name;
	productTr.appendChild(productTdName);
var	productTdcol = document.createElement("td");
	col++;
	productTdcol.id = "col"+id_prod;
	colprodID = "col";
	colprodID+=id_prod;
	productCar[id_prod].col++;
	productTdcol.textContent = productCar[id_prod].col;
	productTr.appendChild(productTdcol);
	
	productTdName = document.createElement("td");
	priceid = "priceId"+id_prod;
	productTdName.id = priceid;
	productTdName.textContent = product[id_prod].price;
	productTr.appendChild(productTdName);
	productTdName = document.createElement("td");
	sumid = "sum"+id_prod;
	productTdName.id = "sum"+id_prod;
var sum = product[id_prod].price*productCar[id_prod].col;
	productTdName.innerHTML = sum;
	productTr.appendChild(productTdName);
	console.log(productTr);
	console.log(cartable);
	console.log(productprov);
	cartable[0].appendChild(productTr);
	//итог
	if (document.getElementById("tdtotalsum") != null){
	totalSum += productCar[id_prod].price*productCar[id_prod].col;
	totaltd = document.getElementById("tdtotalsum");
	totaltd.innerHTML = totalSum;
	}
	if (document.getElementById("tdtotalsum") == null){
	totaltr = document.createElement("tr");
	totaltr.id = "total";
	totaltr.appendChild(document.createElement("td"));
	totaltd = document.createElement("td");
	totaltd.innerHTML = "Итого:";
	totaltr.appendChild(totaltd);
	totaltr.appendChild(document.createElement("td"));
		totalSum += productCar[id_prod].price*productCar[id_prod].col;
	totaltd = document.createElement("td");
	totaltd.id = "tdtotalsum";
	totaltd.innerHTML = totalSum;
	totaltr.appendChild(totaltd);
	cartable[0].appendChild(totaltr);
	console.log(productCar);
	}
	
	}
	
	

/*productName1 = document.createElement("h3");
productName1.className = "nametovarCar";
productName1.textContent = product[id].name;
product1[0].appendChild(productName1);*/
}
/*
var div_clear, image_max;
//функция генерации изображения основная
function generationImg(){
var img, i = 0, div;

img = document.createElement('img');
img.className = ("img_max_style");
img.alt = Image[i].alt;
img.src = Image[i].src_img;
conteiner.appendChild(img);
 div = document.createElement ('div');
 link = document.createElement('a');
 link.textContent = "Предыдущая";
 link.href = "#";
 link.style.marginLeft = "150px";
 div.appendChild(link);
 conteiner.appendChild(div);
 
 // Предыдущая
 link.onclick = function (){
	 i--;
	 if (i<0) {
		 i = Image.length - 1;
	 }
	 img.remove();
	 img = document.createElement('img');
	img.className = ("img_max_style");
	img.alt = Image[i].alt;
img.src = Image[i].src_img;
link = document.querySelectorAll('a');
var div_rod = document.querySelectorAll('div');
console.log(link[1]);
div_rod[1].insertBefore(img, link[1]);
 }
 //создаем кнопку следующая
 linkNext = document.createElement('a');
 linkNext.textContent = "Следующая";
 linkNext.href = "#";
 linkNext.style.marginLeft = "800px";
 div.appendChild(linkNext);
 
 //Следующая
 linkNext.onclick = function (){
	 i++;
	 if (i>Image.length - 1) {
		 i = 0;
	 }
	 img.remove();
	 img = document.createElement('img');
	img.className = ("img_max_style");
	img.alt = Image[i].alt;
img.src = Image[i].src_img;
linkNext = document.querySelectorAll('a');
var div_rod = document.querySelectorAll('div');
console.log(linkNext[1]);
div_rod[1].insertBefore(img, linkNext[1]);
 }
}
*/
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

var div_clear, image_max;
//функция генерации изображения основная
function generationImg(){
var i = 0, images;

for (i = 0; i<Image.length; i++){
	generationImgMin(Image, i);
}
var img_click = document.createElement('img');
	img_click.className = "img_max_style";
	img_click.alt = '';
	img_click.src = '';
	conteiner.appendChild(img_click);
}
// функция генерация маленьких изображений
function generationImgMin(Image, i){
	var images = document.createElement('img');
	images.className = "img_style";
	images.id = i;
	images.alt = Image[i].alt;
	images.src = Image[i].src_img;
	conteiner.appendChild(images);
	console.log(images);
	//обработчик собития "клика"
	images.onclick = function (){
	 var img_click = document.getElementsByClassName("img_max_style");
	 if (img_click.length !=0) {
		img_click[0].remove();
	 }
	img_click = document.createElement('img');
		img_click.className = "img_max_style";
		img_click.alt = Image_1[i].alt;
		img_click.src = Image_1[i].src_img;
		conteiner.appendChild(img_click);
		//обработчик события ошибки (если изображение отсутствует)
		img_click.onerror = function() {
		var	img_click_1 = document.getElementsByClassName("img_max_style");
		if (img_click_1.length !=0) {
		img_click_1[0].remove();
		}
		alert("Изображение не найдено");
		}
	
		//document.getElementsByClassName("img_max_style").textContent = "Изображение отсутствует!";
	}
	
}
/*
function generationDivImage(){
	var div_clear, image_max;
	//div_clear = document.createElement('div');
	image_max = document.createElement('img');
	image_max.className = "img_max_style";
	//div_clear.appendChild(image_max);
	//conteiner.appendChild(div_clear);
	conteiner.appendChild(image_max);
	img_click.onclick = function f(){
		var img_click = document.getElementById("0");
		img_click.src = Image[0].src_img;
		console.log(img_click);
	}
}*/

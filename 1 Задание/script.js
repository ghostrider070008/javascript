function generationImg(){
var i = 0, images;

for (i = 0; i<Image.length; i++){
	generationImgMin(Image, i);
}
generationDivImage();
}

function generationImgMin(Image, i){
	images = document.createElement('img');
	images.className = "img_style";
	images.id = i;
	images.alt = Image[i].alt;
	images.src = Image[i].src_img;
	conteiner.appendChild(images);
	console.log(images);
}

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
}

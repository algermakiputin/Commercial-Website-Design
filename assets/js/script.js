window.onload = function () {
	function element(id) {
		return document.getElementById(id);
	}
	var set = 1;
	var image1 = element('image-1');
	var image2 = element('image-2');
	var image3 = element('image-3');
	var image4 = element('image-4');

	var src1 = "assets/images/pork-adobo.png";
	var src2 = "assets/images/crispy_pata.png";
	var src3 = "assets/images/chicken_afritada.png";
	var src4 = "assets/images/chicken_inasal.png";
	var src5 = "assets/images/karekare.png";
	var src6 = "assets/images/bulalo.png";
	var src7 = "assets/images/pork-adobo.png";
	var src8 = "assets/images/pork_sinigang.png";
	var prev = element('slider-prev');
	var next = element('slider-next');
	var image_slider = element('home-image-slider');
	var image_slider = function () {
		if (set == 1) {
			image1.src = src5;
			image2.src = src6;
			image3.src = src7;
			image4.src = src8;
			set = 2;
		}else if (set == 2) {
		
			image1.src = src1;
			image2.src = src2;
			image3.src = src3;
			image4.src = src4;
		
			set = 1;
		} 
	}
	setInterval(image_slider, 3500);

	prev.onhover = function () {
		alert('test');
	}
	prev.onclick = function () {

		if (set == 1) {

			image1.src = src5;
			image2.src = src6;
			image3.src = src7;
			image4.src = src8;
	
			set = 2;
		}else if (set == 2) {
		
			image1.src = src1;
			image2.src = src2;
			image3.src = src3;
			image4.src = src4;
		
			set = 1;
		} 
	}

	next.onclick = function () {
		if (set === 2) {
	
			image1.src = src1;
			image2.src = src2;
			image3.src = src3;
			image4.src = src4;
	
			set = 1;
		}else if (set === 1) {
		
			image1.src = src5;
			image2.src = src6;
			image3.src = src7;
			image4.src = src8;

			set = 2;
		} 
	}
}
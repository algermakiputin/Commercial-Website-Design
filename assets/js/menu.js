window.onload = function() {
	var menu = document.getElementsByClassName('img-thumbnail');
	var search_icon = document.getElementsByClassName('fa-search');
	var image_modal = document.getElementById('image-modal');
	var view_more = document.getElementsByClassName('view-more');

	// for(i = 0; i < menu.length; i++) {
	// 	console.log(i);
	// 	menu[i].addEventListener('mouseover',function() {
	// 		search_icon[i].style.display = 'block';
	// 		search_icon[i].style.color = 'white';
	//  		menu[i].style.cursor = 'pointer';
	//  		search_icon[i].style.cursor = 'pointer';
	// 	});

	// 	menu[i].addEventListener("mouseout",function() {
	//  		search_icon[i].style.display = 'none';
	//  	});
	// }


	menu[0].addEventListener("mouseover",function() {
			search_icon[0].style.display = 'block';
			search_icon[0].style.color = 'white';
			menu[0].style.cursor = 'pointer';
			search_icon[0].style.cursor = 'pointer';
	
	});
	menu[0].addEventListener("mouseout",function() {
			search_icon[0].style.display = 'none';
	});

	menu[1].addEventListener("mouseover",function() {
			search_icon[1].style.display = 'block';
			search_icon[1].style.color = 'white';
			menu[1].style.cursor = 'pointer';
			search_icon[1].style.cursor = 'pointer';
	});
	menu[1].addEventListener("mouseout",function() {
			search_icon[1].style.display = 'none';
	});

	menu[2].addEventListener("mouseover",function() {
			search_icon[2].style.display = 'block';
			search_icon[2].style.color = 'white';
			menu[2].style.cursor = 'pointer';
			search_icon[2].style.cursor = 'pointer';
	
	});
	menu[2].addEventListener("mouseout",function() {
			search_icon[2].style.display = 'none';
	});

	menu[3].addEventListener("mouseover",function() {
			search_icon[3].style.display = 'block';
			search_icon[3].style.color = 'white';
			menu[3].style.cursor = 'pointer';
			search_icon[3].style.cursor = 'pointer';
	});
	menu[3].addEventListener("mouseout",function() {
			search_icon[3].style.display = 'none';
	});

	menu[4].addEventListener("mouseover",function() {
			search_icon[4].style.display = 'block';
			search_icon[4].style.color = 'white';
			menu[4].style.cursor = 'pointer';
			
	});
	menu[4].addEventListener("mouseout",function() {
			search_icon[4].style.display = 'none';
	});

	menu[5].addEventListener("mouseover",function() {
			search_icon[5].style.display = 'block';
			search_icon[5].style.color = 'white';
			menu[5].style.cursor = 'pointer';
			search_icon[5].style.cursor = 'pointer';
	});
	menu[5].addEventListener("mouseout",function() {
			search_icon[5].style.display = 'none';
	});

	menu[6].addEventListener("mouseover",function() {
			search_icon[6].style.display = 'block';
			search_icon[6].style.color = 'white';
			menu[6].style.cursor = 'pointer';
			search_icon[6].style.cursor = 'pointer';
	});
	menu[6].addEventListener("mouseout",function() {
			search_icon[6].style.display = 'none';
	});

	menu[7].addEventListener("mouseover",function() {
			search_icon[7].style.display = 'block';
			search_icon[7].style.color = 'white';
			menu[7].style.cursor = 'pointer';
			search_icon[7].style.cursor = 'pointer';
	});
	menu[7].addEventListener("mouseout",function() {
			search_icon[7].style.display = 'none';
	});

	menu[8].addEventListener("mouseover",function() {
			search_icon[8].style.display = 'block';
			search_icon[8].style.color = 'white';
			menu[8].style.cursor = 'pointer';
			search_icon[8].style.cursor = 'pointer';
	});
	menu[8].addEventListener("mouseout",function() {
			search_icon[8].style.display = 'none';
	});

	menu[9].addEventListener("mouseover",function() {
			search_icon[9].style.display = 'block';
			search_icon[9].style.color = 'white';
			menu[9].style.cursor = 'pointer';
			search_icon[9].style.cursor = 'pointer';
	});
	menu[9].addEventListener("mouseout",function() {
			search_icon[9].style.display = 'none';
	});

	var close_btn = document.getElementById('close-btn');
	var modalImage = document.getElementById('modalImage');
	var name = document.getElementById('name');
	var price = document.getElementById('price');
	close_btn.addEventListener('click', function() {
		image_modal.style.display = 'none';
		
	});



	menu[0].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/chicken_afritada.png";
		name.innerText = "Chicken Afritada";
		price.innerText = "Price : ₱115";
	});
	search_icon[0].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/chicken_afritada.png";
		name.innerText = "Chicken Afritada";
		price.innerText = "Price : ₱115";
	});
	view_more[0].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/chicken_afritada.png";
		name.innerText = "Chicken Afritada";
		price.innerText = "Price : ₱115";
	});

	menu[1].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/karekare.png";
		name.innerText = "Kare Kare";
		price.innerText = "Price : ₱90";
	});
	search_icon[1].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/karekare.png";
		name.innerText = "Kare Kare";
		price.innerText = "Price : ₱90";
	});
	view_more[1].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/karekare.png";
		name.innerText = "Kare Kare";
		price.innerText = "Price : ₱90";
	});

	menu[2].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/bulalo.png";
		name.innerText = "Bulalo";
		price.innerText = "Price : ₱190";
	});
	search_icon[2].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/bulalo.png";
		name.innerText = "Bulalo";
		price.innerText = "Price : ₱190";
	});
	view_more[2].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/bulalo.png";
		name.innerText = "Bulalo";
		price.innerText = "Price : ₱190";
	});

	menu[3].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/chicken_adobo.png";
		name.innerText = "Chicken Adobo";
		price.innerText = "Price : ₱290";
	});
	view_more[3].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/chicken_adobo.png";
		name.innerText = "Chicken Adobo";
		price.innerText = "Price : ₱290";
	});

	menu[4].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/pork_lechon.png";
		name.innerText = "Lechon";
		price.innerText = "Price : ₱499";
	});
	search_icon[4].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/pork_lechon.png";
		name.innerText = "Lechon";
		price.innerText = "Price : ₱499";
	});
	view_more[4].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/pork_lechon.png";
		name.innerText = "Lechon";
		price.innerText = "Price : ₱499";
	});

	menu[5].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/pork_sinigang.png";
		name.innerText = "Pork Sinigang";
		price.innerText = "Price : ₱199";
	});
	search_icon[5].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/pork_sinigang.png";
		name.innerText = "Pork Sinigang";
		price.innerText = "Price : ₱199";
	});
	view_more[5].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/pork_sinigang.png";
		name.innerText = "Pork Sinigang";
		price.innerText = "Price : ₱199";
	});

	menu[6].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/pork_barbecue.png";
		name.innerText = "Pork Barbecue";
		price.innerText = "Price : ₱90";
	});
	search_icon[6].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/pork_barbecue.png";
		name.innerText = "Pork Barbecue";
		price.innerText = "Price : ₱90";
	});
	view_more[6].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/pork_barbecue.png";
		name.innerText = "Pork Barbecue";
		price.innerText = "Price : ₱90";
	});

	menu[7].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/liempo.png";
		name.innerText = "Inihaw na liempo";
		price.innerText = "Price : ₱120";
	});
	search_icon[7].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/liempo.png";
		name.innerText = "Inihaw na liempo";
		price.innerText = "Price : ₱120";
	});
	view_more[7].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/liempo.png";
		name.innerText = "Inihaw na liempo";
		price.innerText = "Price : ₱120";
	});

	menu[8].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/champorado.png";
		name.innerText = "Champorado";
		price.innerText = "Price : ₱65";
	});
	search_icon[8].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/champorado.png";
		name.innerText = "Champorado";
		price.innerText = "Price : ₱65";
	});
	view_more[8].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/champorado.png";
		name.innerText = "Champorado";
		price.innerText = "Price : ₱65";
	});

	menu[9].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/chicken_inasal.png";
		name.innerText = "Chicken Inasal";
		price.innerText = "Price : ₱160";
	});	
	search_icon[9].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/chicken_inasal.png";
		name.innerText = "Chicken Inasal";
		price.innerText = "Price : ₱160";
	});	
	view_more[9].addEventListener("click",function() {
		image_modal.style.display = "block";
		modalImage.src = "assets/images/chicken_inasal.png";
		name.innerText = "Chicken Inasal";
		price.innerText = "Price : ₱160";
	});

}
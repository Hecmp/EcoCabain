// Бургер

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


// Scrolled

window.onscroll = function showHeader(){
	let header = document.querySelector('.header');

	if(window.pageYOffset > 50){
		header.classList.add('_scroll');
	} else{
		header.classList.remove('_scroll');
	}
}

// Swipper

const swiper = new Swiper('.slider-materials', {
	// Optional parameters
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	autoplay:{
		delay: 3000,
	},

});
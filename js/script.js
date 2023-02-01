// init Swiper:
const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 2,
	navigation: {
		nextEl: '.swip-button-next',
		prevEl: '.swip-button-prev'
	},
});
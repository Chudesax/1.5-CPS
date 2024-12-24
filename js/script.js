let btnShow = document.querySelector('.brands__show');
let list = document.querySelectorAll('.brands__item--visible');
console.log(list);

btnShow.addEventListener('click', function () {
	if (btnShow.textContent == 'Показать все') {
		btnShow.textContent = 'Скрыть';
	} else {
		btnShow.textContent = 'Показать все';
	};

	if (btnShow.textContent == 'Скрыть') {
		btnShow.classList.add('arrows-up')
	} else {
		btnShow.classList.remove('arrows-up')
	};

	for (let i = 0; i < list.length; i++) {
		list[i].classList.toggle('hidden');
		console.log(list[i]);
	}
});

let swiper;

const swiperActivator = function () {
	if (!swiper) {
		if (window.innerWidth < 768) {
			swiper = new Swiper('.swiper', {
				// Optional parameters
				direction: 'horizontal',
				loop: true,

				// If we need pagination
				pagination: {
					el: '.swiper-pagination',
				},

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

				// And if we need scrollbar
				scrollbar: {
					el: '.swiper-scrollbar',
				},
			});
		}
	} else {
		swiper.destroy(true, true);
		swiper = null;
	}
};


window.addEventListener('resize', swiperActivator);
swiperActivator();
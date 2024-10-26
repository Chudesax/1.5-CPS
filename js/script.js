let btnShow = document.querySelector('.brands__show');
let list = document.querySelectorAll('.brands__item--visible');
console.log(list);

btnShow.onclick = function () {
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
};
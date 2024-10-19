let btnShow = document.querySelector('.brands__show');
let list = document.querySelectorAll('.brands__item--visible');
btnShow.onclick = function () {
    // Проверяем содержимое текста кнопки
    if (btnShow.textContent == 'Показать все') {
        btnShow.textContent = 'Скрыть';
    } else {
        btnShow.textContent = 'Показать все'
    };

    btnShow.classList.toggle('arrows-up');

    for (let i = 0; i < list.length; i++) {
        list[i].classList.toggle('hidden');
    };
};

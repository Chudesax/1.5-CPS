let btnShow = document.querySelector('.brands__show');

btnShow.onclick = function () {
    // Проверяем содержимое текста кнопки
    if (btnShow.textContent == 'Показать все') {
        btnShow.textContent = 'Скрыть';
    } else {
        btnShow.textContent = 'Показать все';
    }
};

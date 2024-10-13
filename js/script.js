const toggleButton = document.querySelector('.brands__show');
const hiddenItems = document.querySelectorAll('.brands__item.hidden');

toggleButton.addEventListener('click', () => {
    hiddenItems.forEach(item => {
        item.classList.toggle('hidden'); // Переключаем класс hidden
    });

    // Изменяем текст кнопки в зависимости от состояния
    if (toggleButton.textContent === 'Показать всё') {
        toggleButton.textContent = 'Скрыть';
    } else {
        toggleButton.textContent = 'Показать все';
    }
});
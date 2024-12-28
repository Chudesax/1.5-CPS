let actionButton = document.querySelector('.btn__action');
let list = document.querySelectorAll('.card:nth-child(n+9)')
console.log(list);

actionButton.addEventListener('click', function () {
    if (actionButton.textContent === 'Показать всё') {
      actionButton.textContent = 'Скрыть';
    } else {
      actionButton.textContent = 'Показать всё';
    };

    if (actionButton.textContent === 'Скрыть') {
      actionButton.classList.add('arrows__up');
    } else {
      actionButton.classList.remove('arrows__up');
    }

    for (let i = 0; i < list.length; i++) {
      list[i].classList.toggle('hidden')
    }
});


let swiper;

const swiperActivator = function () {
  if (window.innerWidth < 768) {
    if (!swiper) {
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1.5,
        spaceBetween: 50,
        breakpoints: {
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
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

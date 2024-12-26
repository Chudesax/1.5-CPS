let actionButton = document.querySelector('.btn__show');
console.log(actionButton);
let list = document.querySelectorAll('.brands__item--mod');
console.log(list);
let listPc = document.querySelectorAll('.brands__item--pc');

actionButton.addEventListener('click', function () {
  if (window.innerWidth < 1138) {
    if (actionButton.textContent === 'Показать всё') {
      actionButton.textContent = 'Скрыть';
    } else {
      actionButton.textContent = 'Показать всё';
    };

    for (let i = 0; i < list.length; i++) {
      list[i].classList.toggle('hidden')
    }
  }
});

actionButton.addEventListener('click', function () {
  if (window.innerWidth > 1139) {
    if (actionButton.textContent === 'Показать всё') {
      actionButton.textContent = 'Скрыть';
    } else {
      actionButton.textContent = 'Показать всё';
    };

    for (let i = 0; i < list.length; i++) {
      listPC[i].classList.toggle('hidden')
    }
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

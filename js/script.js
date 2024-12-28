"use strick";

let actionButton = document.querySelector('.btn__action');
let list = document.querySelectorAll('.brands__item');
console.log(list.length);

function updateVisibility() {
  for (let i = 0; i < list.length; i++) {
    if (window.innerWidth > 1140) {

      if (i >= 8) {
        list[i].classList.add('hidden');
      } else {
        list[i].classList.remove('hidden');
      }
    } else if (window.innerWidth > 768 && window.innerWidth < 1139) {

      if (i >= 6) {
        list[i].classList.add('hidden');
      } else {
        list[i].classList.remove('hidden');
      }
    } else {

      list[i].classList.remove('hidden');
    }
  }
}

updateVisibility();
window.addEventListener('resize', updateVisibility);

actionButton.addEventListener('click', function () {
  if (actionButton.textContent === 'Показать всё') {
    actionButton.textContent = 'Скрыть';
  } else {
    actionButton.textContent = 'Показать всё';
  }

  if (actionButton.textContent === 'Скрыть') {
    actionButton.classList.add('arrows__up');
  } else {
    actionButton.classList.remove('arrows__up');
  }

  for (let i = 0; i < list.length; i++) {
    if (i >= 8 && list[i].classList.contains('hidden')) {
      
      list[i].classList.remove('hidden');
    } else if (i >= 8 && !list[i].classList.contains('hidden')) {
      
      list[i].classList.add('hidden');
    }
  }
});


let swiper;

const swiperActivator = function () {
  if (window.innerWidth < 768) {
    if (!swiper) {
        swiper = new Swiper('.swiper', {
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
/*     swiper = null; */
  }

};


window.addEventListener('resize', swiperActivator);
swiperActivator();

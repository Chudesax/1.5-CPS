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
    swiper?.destroy(true, true);
    swiper = null;
  }

};

swiperActivator();
window.addEventListener('resize', swiperActivator);


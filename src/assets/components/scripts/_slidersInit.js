import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

//===========================//
//# Main intro slider
//===========================//

const introSliderBtnPrev = document.querySelector('.intro .slider__prev-btn');
const introSliderBtnNext = document.querySelector('.intro .slider__next-btn');

const introSlider = new Swiper('.intro__slider', {
  modules: [Autoplay, Pagination],
  speed: 1000,
  touchRatio: 0.8,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  lazy: {
    loadPrevNext: true,
  },
});

introSliderBtnPrev.addEventListener('click', () => introSlider.slidePrev());
introSliderBtnNext.addEventListener('click', () => introSlider.slideNext());

//===========================//
//# Trending categories slider
//===========================//

const trendCategoriesSliderBtnPrev = document.querySelector(
  '.trend-categories .swiper-button-prev'
);
const trendCategoriesSliderBtnNext = document.querySelector(
  '.trend-categories .swiper-button-next'
);

const trendCategoriesSlider = new Swiper('.trend-categories__slider.swiper', {
  slidesPerView: 6,
  loop: true,
  breakpoints: {
    1150: {
      slidesPerView: 6, // max value
    },
    920: {
      slidesPerView: 5,
    },
    750: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    440: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
    },
  },
});

trendCategoriesSliderBtnPrev.addEventListener('click', () =>
  trendCategoriesSlider.slidePrev()
);
trendCategoriesSliderBtnNext.addEventListener('click', () =>
  trendCategoriesSlider.slideNext()
);

export { trendCategoriesSlider };

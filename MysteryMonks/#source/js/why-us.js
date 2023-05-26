const whyUsSlider = '.why-us .why-us__slider.swiper';

new Swiper(whyUsSlider, {
    //Todo: Пагінація
    pagination: {
        el: `${whyUsSlider} .swiper-pagination`,
    },

    //Todo: Кількість слайдів водночас
    slidesPerView: 4,
    //Todo: Відключаємо свайпер якщо недостатньо слайдів
    watchOverflow: true,
    //Todo: Вимкнення свайпу
    simulateTouch: false,
    //Todo: Відступ
    spaceBetween: 18,

    //Todo: Адаптив
    breakpoints: {
        1300: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 18,
            simulateTouch: false,
        },
        1180: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 18,
            simulateTouch: false,
        },
        900: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 18,
            simulateTouch: true,
        },
        700: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 18,
            simulateTouch: true,
        },
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            simulateTouch: true,
        }
    },
});
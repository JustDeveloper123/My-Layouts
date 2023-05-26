const ourPartnersSlider = '.our-clients .our-clients__slider.swiper';

new Swiper(ourPartnersSlider, {
    //Todo: Пагінація
    pagination: {
        el: `${ourPartnersSlider} .swiper-pagination`,
    },

    //Todo: Кількість слайдів водночас
    slidesPerView: 5,
    //Todo: Відключаємо свайпер якщо недостатньо слайдів
    watchOverflow: true,
    //Todo: Вимкнення свайпу
    simulateTouch: false,

    //Todo: Адаптив
    breakpoints: {
        1100: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            grid: {
                rows: 2,
            },
            simulateTouch: false,
        },
        900: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            grid: {
                rows: 2,
            },
            simulateTouch: true,
        },
        700: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            grid: {
                rows: 2,
            },
            simulateTouch: true,
        },
        400: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
                rows: 1,
            },
            simulateTouch: true,
        },
        0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
                rows: 1,
            },
            simulateTouch: true,
        },
    },
});
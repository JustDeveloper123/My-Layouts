const aboutUsSlider = '.about-us__slider.swiper';

new Swiper(aboutUsSlider, {
    //Todo: Пагінація
    pagination: {
        el: `${aboutUsSlider} .swiper-pagination`,
    },

    //Todo: Кількість слайдів водночас
    slidesPerView: 4,
    //Todo: Відключаємо свайпер якщо недостатньо слайдів
    watchOverflow: true,
    //Todo: Відступи
    spaceBetween: 110,
    //Todo: Вимкнення свайпу
    simulateTouch: false,

    //Todo: Адаптив
    breakpoints: {
        1300: {
            spaceBetween: 110,
            slidesPerView: 4,
            slidesPerGroup: 1,
            simulateTouch: false,
        },
        1150: {
            spaceBetween: 50,
            slidesPerView: 4,
            slidesPerGroup: 1,
            simulateTouch: false,
        },
        900: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 1,
            simulateTouch: true,
        },
        600: {
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerGroup: 2,
            simulateTouch: true,
        },
        0: {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            simulateTouch: true,
        }
    },
});
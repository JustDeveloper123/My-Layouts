const ourCustomerSlider = '.our-customer .our-customer__slider.swiper';

const slider = new Swiper(ourCustomerSlider, {
    navigation: {
        prevEl: `${ourCustomerSlider} .swiper__prev-btn`,
        nextEl: `${ourCustomerSlider} .swiper__next-btn`,
    },

    centeredSlides: true,
    slidesPerView: 2.5,
    initialSlide: 1,
    spaceBetween: 10,
    grabCursor: true,
    slideToClickedSlide: true,
    speed: 700,

    breakpoints: {
        1200: {
            slidesPerView: 2.5,
        },
        800: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 1.5,
        },
        0: {
            slidesPerView: 1.05,
        },
    },
});
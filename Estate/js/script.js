const reviewsItems = document.querySelector('.testimonials__items');
const reviewsTitle = [
    `We found the perfect home!`,
    `We're so happy with Estate.`,
    `Thank you for our beautiful home.`,
    `We love our new home.`
];
const reviewsText = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.`,
    `Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`
];
const reviewsName = [
    `Nate Davidsson`,
    `Laura Paulie`,
    `Greg Todd`,
    `Sven Dunlop`
];

const svgStar = `
<svg>
    <use xlink:href="svg/sprites.svg#star"></use>
</svg>
`;
const svgEmptyStar = `
<svg>
    <use xlink:href="svg/sprites.svg#empty-star"></use>
</svg>
`;

for (let i = 0; i < reviewsTitle.length; i++) {
    reviewsItems.innerHTML += `
    <div class="testimonials__item">
        <div class="testimonials__item__rate"></div>
        <h2 class="testimonials__item__title">${reviewsTitle[i]}</h2>
        <p class="testimonials__item__text">${reviewsText[i]}</p>
        <p class="testimonials__item__name">${reviewsName[i]}</p>
    </div>
     `;

    let rateItem = document.querySelectorAll('.testimonials__item__rate');

    if (i === 0) {
        rateItem[0].innerHTML += svgStar.repeat(5);
    }
    if (i === 1) {
        rateItem[1].innerHTML = svgStar.repeat(4);
        rateItem[1].innerHTML += svgEmptyStar.repeat(1);
    };
    if (i === 2) {
        rateItem[2].innerHTML += svgStar.repeat(5);
    };
    if (i === 3) {
        rateItem[3].innerHTML += svgStar.repeat(4);
        rateItem[3].innerHTML += svgEmptyStar.repeat(1);
    };
}

const reviewsLeftBtn = document.querySelector('.testimonials__left-btn');
const reviewsRightBtn = document.querySelector('.testimonials__right-btn');

let offset = 0;

reviewsItems.style.left = 0;

reviewsLeftBtn.addEventListener('click', () => {
    let gap = window.getComputedStyle(document.querySelector('.testimonials__items')).gap;
    let width = document.querySelector('.testimonials__item').clientWidth + Number.parseInt(gap);
    offset -= width;
    if (offset < 0) offset = width * (reviewsTitle.length - 2);
    reviewsItems.style.left = -offset + 'px';
});
reviewsRightBtn.addEventListener('click', () => {
    let gap = window.getComputedStyle(document.querySelector('.testimonials__items')).gap;
    let width = document.querySelector('.testimonials__item').clientWidth + Number.parseInt(gap);
    offset += width;
    if (offset > width * (reviewsTitle.length - 2)) offset = 0;
    reviewsItems.style.left = -offset + 'px';
});
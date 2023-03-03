function buildWebsiteContent() {
    function brandsContent() {
        const content = [
            {
                img: 'img/products/watch-product-4.png',
                name: 'Hublot',
            },
            {
                img: 'img/products/watch-product-5.png',
                name: 'Zenith',
            },
            {
                img: 'img/products/watch-product-6.png',
                name: 'Breguet',
            },
        ];

        const itemsBlock = document.querySelector('.brands__items');

        for (let i = 0; i < content.length; i++) {
            itemsBlock.innerHTML += `
                <div class="brands__item item remove">
                    <div class="item__img">
                        <img src="${content[i].img}" alt="Product">
                    </div>
                    <div class="item__content">
                        <p class="item__title">
                            ${content[i].name}
                        </p>
                    </div>
                </div>
                `;
        }
    }
    brandsContent();



    function topSellContent() {
        const content = [
            {
                img: 'img/products/watch-product-10.png',
                name: 'Rolex',
                description: 'Datejust 41',
                price: '€ 17 000',
            },
            {
                img: 'img/products/watch-product-11.png',
                name: 'Patek Philippe',
                description: 'Nautilus 5711/1R-001',
                price: 'On order',
            },
            {
                img: 'img/products/watch-product-12.png',
                name: 'Datejust 126231-0019',
                description: 'Rolex',
                price: 'On order',
            },
        ];

        const itemsBlock = document.querySelector('.top-sell__items');

        for (let i = 0; i < content.length; i++) {
            itemsBlock.innerHTML += `
                <div class="top-sell__item item remove">
                    <div class="item__img">
                        <img src="${content[i].img}" alt="Product">
                    </div>
                    <div class="item__content">
                        <p class="item__title">
                            ${content[i].name}
                        </p>
                        <p class="item__subtitle">
                            ${content[i].description}
                        </p>
                        <p class="item__price">${content[i].price}</p>
                    </div>
                </div>
                `;
        }
    }
    topSellContent();



    function reviewsContent() {
        const content = [
            {
                name: 'Michael Thompson',
                text: 'It was a great experience I purchased a watch and bought a watch. Communication with their representatives was great. Fair pricing and very professional. I will do business with them again.',
                rating: 5,
            },
            {
                name: 'Carlos Mason',
                text: '3rd Purchase. Once again, it was fast and friendly. 100% positive. Thank you! Jason S. Chicago Incredibly easy to work with, and Larry went above and beyond and making an easy transaction. Would highly recommend!',
                rating: 5,
            },
            {
                name: 'Sam Dwightle',
                text: 'Incredible service and quality. The consultant quickly answered all my questions. We were able to quickly decide on the watch and order. Thank you!',
                rating: 5,
            },
        ];

        const itemsBlock = document.querySelector('.reviews__items');

        for (let i = 0; i < content.length; i++) {
            itemsBlock.innerHTML += `
                <div class="reviews__item item remove">
                    <p class="item__name">${content[i].name}</p>
                    <div class="item__rating">
                        ${`<svg class="item__star-rate">
                        <use xlink:href="svg/sprites.svg#star-rate"></use>
                    </svg>`.repeat(content[i].rating)}
                    </div>
                    <p class="item__text">
                        ${content[i].text}
                    </p>
                </div>
                `;
        }
    }
    reviewsContent();



    function newsContent() {
        const content = [
            {
                img: 'img/products/news-4.png',
                text: 'THM Recommends: Festive Watches To Bring On Your A-game',
            },
            {
                img: 'img/products/news-5.png',
                text: 'Record-Breaking Watches: From Thinnest To Most Complicated',
            },
            {
                img: 'img/products/news-6.png',
                text: 'Top 5 Blue Watches We Loved This Season',
            },
            {
                img: 'img/products/news-7.png',
                text: 'Luxury Rolex Watches Defying Underwater Pressures',
            },
            {
                img: 'img/products/news-8.png',
                text: 'Marking The Hours with Auction Hero Aurel Bacs, Senior Consultant...',
            },
            {
                img: 'img/products/news-9.png',
                text: 'Rolex And Sport: A Century Long Love Affair',
            },
        ];

        const itemsBlock = document.querySelector('.news__items');

        for (let i = 0; i < content.length; i++) {
            if (i < 1) {
                itemsBlock.innerHTML += `
                    <div class="news__item item" >
                        <div class="item__img">
                            <img src="${content[i].img}" alt="Photo">
                        </div>
                        <p class="item__text">
                            ${content[i].text}
                        </p>
                    </>
                    `;
            } else {
                itemsBlock.innerHTML += `
                    <div class="news__item item remove" >
                        <div class="item__img">
                            <img src="${content[i].img}" alt="Photo">
                        </div>
                        <p class="item__text">
                            ${content[i].text}
                        </p>
                    </div>
                    `;
            }
        }
    }
    newsContent();
}
buildWebsiteContent();









function searchHover() {
    const searchBlockEl = document.querySelector('.header__search');
    const searchIconBlockEl = document.querySelector('.header__search .search-icon');
    const searchIconSvgEl = document.querySelector('.header__search .search-icon svg');
    const searchInputEl = document.querySelector('.header__search input');
    const searchClearInputEl = document.querySelector('.header__search .clear-input');

    searchBlockEl.addEventListener('click', (e) => {
        e.preventDefault();
    })

    searchBlockEl.addEventListener('mouseenter', () => {
        searchIconSvgEl.classList.add('hover');
    })
    searchBlockEl.addEventListener('mouseleave', () => {
        searchIconSvgEl.classList.remove('hover');

        if (searchIconSvgEl.hasAttribute('class') & searchIconSvgEl.classList.length === 0) {
            searchIconSvgEl.removeAttribute('class');
        }
    })


    searchInputEl.addEventListener('focus', () => {
        searchBlockEl.classList.add('focus');
    })
    searchInputEl.addEventListener('blur', () => {
        searchBlockEl.classList.remove('focus');
        searchClearInputEl.classList.remove('active');
    })


    searchIconBlockEl.addEventListener('mousedown', (e) => {
        if (document.activeElement === searchInputEl) {
            e.preventDefault();
        }
    })
    searchIconBlockEl.addEventListener('click', () => {
        const value = searchInputEl.value;

        if (value) {
            window.open('index.html', '_blank');
        } else {
            searchClearInputEl.classList.add('active');

            if (searchClearInputEl.classList.contains('active')) {
                setTimeout(() => {
                    searchClearInputEl.classList.remove('active');
                }, 2000)
            }
        }
    })
}
searchHover();



function setTopHeightNav(top, unit) {
    function topHeightNav() {
        const mainBgNavEl = document.querySelector('.main-bg__nav');
        const headerHeight = parseInt(document.querySelector('.header').offsetHeight);

        const topHeight = headerHeight + parseInt(top);

        if (window.innerWidth <= 900) {
            mainBgNavEl.style.top = topHeight - parseInt(top) + unit;
        } else {
            mainBgNavEl.style.top = topHeight + unit;
        }
    }
    topHeightNav();

    window.addEventListener('resize', () => {
        topHeightNav();
    })
}
setTopHeightNav(22, 'px');



function searchAdapt() {
    const searchBtnEl = document.querySelector('.main-bg__search__wrap .main-bg__search .search-icon');
    const searchInputEl = document.querySelector('.main-bg__search__wrap .main-bg__search input');

    searchBtnEl.addEventListener('click', () => {
        const value = searchInputEl.value;

        if (value) {
            window.open('index.html', '_blank');
        }
    })
}
searchAdapt();



function headerBgAdapt() {
    const headerEl = document.querySelector('.header');

    document.addEventListener('scroll', () => {
        if (window.scrollY > 15) {
            headerEl.classList.add('bg');
        } else {
            headerEl.classList.remove('bg');
        }
    })
}
headerBgAdapt();



function startBurger() {
    const burgerEl = document.querySelector('.header__burger.burger');

    const burgerBtnEl = document.querySelector('.header__burger.burger .burger__btn');
    const burgerMenuEl = document.querySelector('.header__burger.burger .burger__nav');

    burgerBtnEl.addEventListener('click', () => {
        document.body.classList.toggle('lock');
        burgerEl.classList.toggle('active');
    })


}
startBurger();



function startFooterAcc() {
    const accTitleEls = document.querySelectorAll('.footer__nav .footer__nav__title.acc__title');

    for (let i = 0; i < accTitleEls.length; i++) {
        accTitleEls[i].addEventListener('click', function () {
            const accContent = this.nextElementSibling;

            this.classList.toggle('active');

            if (accContent.style.maxHeight) {
                accContent.style.maxHeight = null;
            } else {
                accContent.style.maxHeight = accContent.scrollHeight + 'px';
            }
        })
    }
}
startFooterAcc();
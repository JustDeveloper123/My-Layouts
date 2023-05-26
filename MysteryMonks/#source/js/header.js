//* Відступ вверх від фіксованого хедеру

const headerEl = document.querySelector('header.header');
const introEl = document.querySelector('.intro');

function setPaddingTop() {
    let headerHeight = headerEl.offsetHeight;

    introEl.style.marginTop = `${headerHeight}px`;
}
setPaddingTop();
window.addEventListener('resize', setPaddingTop)



//* Функціонал бургер меню

const burgerMenuEl = document.querySelector('.burger');
const burgerMenuBtn = burgerMenuEl.querySelector('.burger__btn');

function openBurger() {
    burgerMenuEl.classList.add('_active');
    document.body.classList.add('_scroll-lock');
}
function closeBurger() {
    burgerMenuEl.classList.remove('_active');
    document.body.classList.remove('_scroll-lock');
}

burgerMenuBtn.addEventListener('click', () => {
    !burgerMenuEl.classList.contains('_active') ? openBurger() : closeBurger();
});



//* Закриваємо актів клас якщо ми його не закрили при збільшенні розміру екрану

const burgerOpenWidth = 1150;

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;

    if (burgerOpenWidth < windowWidth && burgerMenuEl.classList.contains('_active')) {
        closeBurger();
    }
});



//* Клік поза бургеру

function clickOutside() {
    const burgerMenuContentEl = burgerMenuEl.querySelector('.burger__content');

    document.addEventListener('click', (e) => {
        let target = e.target,
            isClickInside = null;

        isClickInside =
            burgerMenuContentEl.contains(target) ||
            burgerMenuBtn.contains(target);

        if (!isClickInside && burgerMenuEl.classList.contains('_active')) {
            closeBurger();
        }
    });
}
clickOutside();



//* Нижня тінь хедеру при скроллі

function setBottomShadow() {
    const posY = window.pageYOffset;

    posY > 10 ?
        headerEl.classList.add('_bottom-shadow') :
        headerEl.classList.remove('_bottom-shadow');
}
setBottomShadow();
document.addEventListener('scroll', setBottomShadow);



//* Навігація по секціям при кліку на лінки

//Todo: Navbar on click
let links = document.querySelectorAll('header.header .header__links a'),
    sections = document.querySelectorAll('section');

for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        let elmId = link.getAttribute('href'),
            section = document.querySelector(elmId);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
}
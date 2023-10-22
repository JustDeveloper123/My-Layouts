const burgerMenuEl = document.querySelector('.burger-menu'),
  burgerMenuBtn = document.querySelector('.burger-menu-btn'),
  overlayEl = document.querySelector('.overlay'),
  headerEl = document.querySelector('.header');

//% Класи, які будуть змінюватись
const changeableClasses = {
  scrollLock: '_scroll-lock',
  burger: 'burger-menu--active',
  overlay: 'overlay--hidden',
};
//% Якщо бургер-меню активне
const isBurgerActive = () =>
  burgerMenuEl.classList.contains(changeableClasses.burger);

//% Функція зміни статусу бургер-меню
const toggleBurgerMenuStatus = function () {
  //^ Шаблон для зміни класів
  const toggleStatus = function ({
    scrollLock = 'toggle',
    burgerMenuStatus = 'toggle',
    headerStatus = 'toggle',
    overlayStatus = 'toggle',
    burgerMenuBtnStatus = 'toggle',
  }) {
    document.body.classList[!scrollLock ? 'add' : 'remove'](
      changeableClasses.scrollLock
    );
    burgerMenuEl.classList[burgerMenuStatus](changeableClasses.burger);
    headerEl.classList[headerStatus](changeableClasses.burger);
    overlayEl.classList[overlayStatus](changeableClasses.overlay);
    burgerMenuBtn.classList[burgerMenuBtnStatus](changeableClasses.burger);
    return arguments[0];
  };

  //? if open
  if (isBurgerActive()) {
    return toggleStatus({
      scrollLock: true,
      burgerMenuStatus: 'remove',
      headerStatus: 'remove',
      overlayStatus: 'add',
      burgerMenuBtnStatus: 'remove',
    });
  }
  //? if closed
  if (!isBurgerActive()) {
    return toggleStatus({
      scrollLock: false,
      burgerMenuStatus: 'add',
      headerStatus: 'add',
      overlayStatus: 'remove',
      burgerMenuBtnStatus: 'add',
    });
  }
};

//% Burger btn event
burgerMenuBtn.addEventListener('click', toggleBurgerMenuStatus);

//% Click outside
document.addEventListener('click', function (e) {
  if (!isBurgerActive()) return;
  const target = e.target;
  if (target.classList.contains('overlay')) toggleBurgerMenuStatus();
});

//# Header observer

const headerObserver = function () {
  const introSliderTarget = document.querySelector('.intro__slider');

  const shadowCallback = function (entry) {
    !entry[0].isIntersecting
      ? headerEl.classList.add('_scroll-shadow')
      : headerEl.classList.remove('_scroll-shadow');
  };

  const shadowObserver = new IntersectionObserver(shadowCallback, {
    root: null,
    threshold: 0,
    rootMargin: '-150px',
  });

  shadowObserver.observe(introSliderTarget);
};
headerObserver();

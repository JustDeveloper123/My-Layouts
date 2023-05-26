const portfolioTabsBtns = document.querySelectorAll('.portfolio .portfolio__tabs .tabs__nav button');
const portfolioTabsEls = document.querySelectorAll('.portfolio .portfolio__tabs .tabs__item');

portfolioTabsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let tabId = btn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!btn.classList.contains('_active-tab-btn')) {
            portfolioTabsBtns.forEach((btn) => {
                btn.classList.remove('_active-tab-btn');
            });
            portfolioTabsEls.forEach((tab) => {
                tab.classList.remove('_active-tab');
            });

            btn.classList.add('_active-tab-btn');
            currentTab.classList.add('_active-tab');
        }
    });
});

portfolioTabsBtns[0].click();
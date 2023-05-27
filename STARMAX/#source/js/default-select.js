let selectEls = document.querySelectorAll('.default-select .select__label'),
    selectElsContent = document.querySelector('.default-select .select__options'),
    selectElsOption = document.querySelectorAll('.default-select .select__option'),
    selectElsTitle = document.querySelector('.default-select .select__title'),
    selectElsInput = document.querySelector('.default-select .select__input');

selectElsOption.forEach((option) => {
    option.addEventListener('click', () => {
        selectElsTitle.innerHTML = option.innerHTML;
        selectElsInput.value = option.innerHTML;

        selectElsOption.forEach((item) => {
            item.classList.remove('_selected');
        });
        option.classList.add('_selected');

        selectElsContent.style.maxHeight = null;
        option.classList.remove('_active');

        selectEls.forEach((item) => {
            item.classList.remove('_active');
            item.classList.add('_active-color');
        })
    });
});

selectEls.forEach((item) => {
    item.addEventListener('click', () => {
        let selectElsContent = item.nextElementSibling;

        if (selectElsContent.style.maxHeight) {
            selectElsContent.style.maxHeight = null;
            selectElsContent.style.cssText = `
            max-height: ${null};
        `;
            item.classList.remove('_active');
        }
        else {
            selectElsContent.style.cssText = `
            max-height: ${selectElsContent.scrollHeight}px;
        `;
            item.classList.add('_active');
        }
    });

    // Click outside
    document.addEventListener('click', function (event) {
        let isClickInside = item.contains(event.target);

        // Custom select
        if (!isClickInside && selectElsContent.style.maxHeight) {
            selectElsContent.style.maxHeight = null;
            item.classList.remove('_active');
        }
    })
})
const buyProductBtns = document.querySelectorAll('.buy-product-btn');

const buyProductModal = document.querySelector('.buy-product-modal.modal');
const buyProductModalCloseBtn = document.querySelector('.buy-product-modal.modal .modal__close');

buyProductBtns.forEach((btn) => {
    function modalOpen() {
        buyProductModal.classList.add('_active');
        document.body.classList.add('_scroll-lock');
    }
    function modalClose() {
        buyProductModal.classList.remove('_active');
        document.body.classList.remove('_scroll-lock');
    }

    btn.addEventListener('click', () => modalOpen());
    buyProductModalCloseBtn.addEventListener('click', () => modalClose());
    window.addEventListener('click', (e) => {
        if (e.target === buyProductModal) {
            modalClose();
        }
    })
})
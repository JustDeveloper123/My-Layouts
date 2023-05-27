const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);

if (!isMobile) {
    const gallerySlider = document.querySelector('.gallery .gallery__items');
    let isDown = false;
    let startX;
    let scrollLeft;

    gallerySlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - gallerySlider.offsetLeft;
        scrollLeft = gallerySlider.scrollLeft;
    });

    gallerySlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    gallerySlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    gallerySlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallerySlider.offsetLeft;
        const walk = (x - startX) * 2; // Швидкість прокрутки
        gallerySlider.scrollLeft = scrollLeft - walk;
    });
}

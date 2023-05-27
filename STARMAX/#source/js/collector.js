document.addEventListener('DOMContentLoaded', () => {
    //@prepros-append 'scroll-nav.js'
    //@prepros-append 'buy-product-modal.js'
    //@prepros-append 'default-select.js'
    //@prepros-append 'gallery-slider.js'

    // Learn more button
    const learnMoreLinkEl = document.querySelector('.learn-more__link');
    learnMoreLinkEl.addEventListener('click', function () {
        this.blur();
    })

    // Video review
    const videoBlockEl = document.querySelector('.vid-review__video.video');
    const videoPosterEl = document.querySelector('.vid-review__video.video .video__poster');
    const videoStartBtn = document.querySelector('.vid-review__video.video .video__poster .video__start');
    const videoEl = document.querySelector('.vid-review__video.video .video__file');
    videoPosterEl.addEventListener('click', () => {
        videoBlockEl.classList.add('_active');
        videoStartBtn.classList.add('_hidden');
        videoEl.play();
    })
    videoEl.addEventListener('pause', function () {
        this.classList.add('_pause');
        videoStartBtn.classList.remove('_active');
        videoStartBtn.classList.remove('_hidden');
    })
    videoEl.addEventListener('play', function () {
        this.classList.remove('_pause');
        videoStartBtn.classList.add('_active');
        videoStartBtn.classList.add('_hidden');
    })
})
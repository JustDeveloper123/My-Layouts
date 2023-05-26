const videoBlock = document.querySelector('.intro .video');
const videoFileEl = document.querySelector('.intro .video .video__file video');
const videoStartBtn = document.querySelector('.intro .video .video__start-btn');

//Todo: Запуск відео при кліку по кнопці постеру
videoStartBtn.addEventListener('click', () => {
    videoBlock.classList.add('_active-video');
    videoFileEl.play();
});

//Todo: Подія при закінченні відео
videoFileEl.addEventListener('ended', () => {
    videoBlock.classList.remove('_active-video');
    videoFileEl.pause();
    videoTogglePauseBtn.classList.remove('_paused');
    videoBlock.classList.toggle('_fullscreen');
    document.body.classList.toggle('_scroll-lock');
});

//Todo: Зупинка відео при кліку по кнопці інтерфейсу відео
const videoCloseBtn = document.querySelector('.intro .video .video__close-btn');
videoCloseBtn.addEventListener('click', () => {
    videoBlock.classList.remove('_active-video');
    videoFileEl.pause();
    videoTogglePauseBtn.classList.remove('_paused');
    videoStartBtn.classList.remove('_show');
});

//Todo: Старт та зупинка відео при кліку
const videoTogglePauseBtn = document.querySelector('.intro .video .video__togglePlay');

function toggleVideoPause(btn) {
    if (btn.classList.contains('_paused')) {
        videoFileEl.play();
        videoTogglePauseBtn.classList.remove('_paused');
        videoStartBtn.classList.remove('_show');
    } else {
        videoFileEl.pause();
        videoTogglePauseBtn.classList.add('_paused');
        videoStartBtn.classList.add('_show');
    }
}

videoTogglePauseBtn.addEventListener('click', function () {
    toggleVideoPause(this);
});
videoFileEl.addEventListener('click', function () {
    toggleVideoPause(videoTogglePauseBtn);
});

//Todo: Fullscreen
const videoFullscreenBtn = document.querySelector('.intro .video .video__fullscreen-btn');
videoFullscreenBtn.addEventListener('click', () => {
    videoBlock.classList.toggle('_fullscreen');
    document.body.classList.toggle('_scroll-lock');
});
videoCloseBtn.addEventListener('click', () => {
    if (videoBlock.classList.contains('_fullscreen')) {
        videoBlock.classList.toggle('_fullscreen');
        document.body.classList.toggle('_scroll-lock');
    }
});
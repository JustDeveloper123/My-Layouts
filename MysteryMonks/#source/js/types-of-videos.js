const typesOfVideosVideos = document.querySelectorAll('.types-of-videos .row__video.video');

typesOfVideosVideos.forEach((video) => {
    video.addEventListener('click', function (e) {
        const videoFile = video.querySelector('video');

        //Todo: Зупиняємо інші відео
        for (let i = 0; i < typesOfVideosVideos.length; i++) {
            typesOfVideosVideos[i].classList.remove('_active-video');
            typesOfVideosVideos[i].querySelector('video').pause();
        }

        //Todo: Запускаємо відео
        video.classList.add('_active-video');
        videoFile.play();
    });
});

//Todo: Закриття відео по кнопці
const typesOfVideosCloseBtns = document.querySelectorAll('.types-of-videos .video__close-btn');

for (let i = 0; i < typesOfVideosCloseBtns.length; i++) {
    typesOfVideosCloseBtns[i].addEventListener('click', () => {
        setTimeout(() => {
            typesOfVideosVideos[i].querySelector('video').pause();
            typesOfVideosVideos[i].classList.remove('_active-video');
        }, 10);
    });
}
let button = document.querySelector('button');
let page = document.querySelector('.page');
let audio = document.createElement('audio');
audio.setAttribute('src', 'Dabro_-_Мой_путь_премьера_песни_2020[EagleConverter.com].mp3')
button.onclick = function(){
    page.classList.toggle('page_active');
    audio.play();
}

new Swiper ('.swiper', {
    autoplay : {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1500,
    loop: true,
    effect: 'flip',

})

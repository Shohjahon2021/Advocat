let intro = document.querySelector('.intro');
let introInfoHeight = document.querySelector('.intro__info').offsetHeight;
intro.style.height = introInfoHeight + 'px';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    effect: "fade",
    allowTouchMove: false,
});
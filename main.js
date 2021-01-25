// hide the other slide

const slides = document.querySelectorAll('.slide-container');

//slides[1].setAttribute('style', 'transform: translate(200%)');


const prevBtn = document.querySelectorAll('.fa-chevron-left')
const nextBtn = document.querySelectorAll('.fa-chevron-right')

prevBtn.forEach( btn => btn.addEventListener('click', prevSlide))
nextBtn.forEach( btn => btn.addEventListener('click', nextSlide))

function prevSlide() {
  slides[0].setAttribute('style', 'transform: translate(0%)');
  slides[1].setAttribute('style', 'transform: translate(400%)');
}
function nextSlide() {
  slides[0].setAttribute('style', 'transform: translate(400%)');
  slides[1].setAttribute('style', 'transform: translate(-300%)');
}
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");

const prevBtn = document.querySelectorAll('.fa-chevron-left')
const nextBtn = document.querySelectorAll('.fa-chevron-right')

prevBtn.forEach( btn => btn.addEventListener('click', changeSlide))
nextBtn.forEach( btn => btn.addEventListener('click', changeSlide))

function changeSlide() {

  if (slide1.style.transform === 'translate(-120%)') {
    slide1.setAttribute('style', 'visibility: visible;transform: translate(0%)');
    slide2.setAttribute('style', 'visibility: visible;transform: translate(50%)');

  } else {
    slide1.setAttribute('style', 'transform: translate(-120%)');
    slide2.setAttribute('style', 'visibility: visible;transform: translate(-100%)');
    
  }
}
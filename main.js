const testimonies = document.querySelectorAll('.testimony');
const authorImg = document.querySelector('#authorImg')

const names = ['images/image-tanya.jpg', 'images/image-john.jpg']

let current = 0;
authorImg.setAttribute('src', names[current])

const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

nextBtn.addEventListener('click', showHide);
prevBtn.addEventListener('click', showHide);

function showHide(){  
    current < names.length -1 
    ? current++      
    :current = 0

    authorImg.setAttribute('src', names[current])

    testimonies.forEach( node => node.classList.toggle('hide'))
}
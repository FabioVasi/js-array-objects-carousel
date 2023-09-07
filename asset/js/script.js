/*
Consegna:

Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo, questa volta usando gli oggetti.
Potete prendere come riferimento il codice scritto insieme nel live, che troverete direttamente nella mia repository di github a questo link: [https://github.com/fabiopacifici/104_js/tree/main/live_slider]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

Bonus 0:
Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
*/

const formElement = document.querySelector('form');

let sliderSpeed = 3000;

const slides = [
    {
        image: './asset/img/01.webp'
    },
    {
        image: './asset/img/02.webp'
    },
    {
        image: './asset/img/03.webp'
    },
    {
        image: './asset/img/04.webp'
    },
    {
        image: './asset/img/05.webp'
    }
];

console.log(slides);
  
let activeSlide = 0;
  
// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images');

const prevEl = document.querySelector('.prev');

const nextEl = document.querySelector('.next');
  
slides.forEach((element, index) => {

    console.log(`${element.image}`);

    const slidePath = element.image;

    console.log(slidePath);

    const sliderMarkup = `<img class="${activeSlide === index ? 'active' : ''}" src="${slidePath}" alt="">`

    sliderImagesEl.insertAdjacentHTML('beforeend', sliderMarkup);

});



const slidesImages = document.querySelectorAll('.slider .images > img');
console.log(slidesImages);

const thumbsElement = document.querySelector('.thumbnails');
  
slides.forEach((element, index) => {

    console.log(`${element.image}`);

    const thumbPath = element.image;

    const thumbMarkup = `<img class="thumb ${activeSlide === index ? 'active' : ''}" src="${thumbPath}" alt="">`

    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup);

});

let nextSlideInterval = setInterval(nextSlide, sliderSpeed);

// sul click ferma la riproduzione automatica

// intercept click on the next icon 
nextEl.addEventListener('click', nextSlide);
  
function nextSlide(){

    console.log('cliccato su next');
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide];
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active');
  
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active');
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active');
  
    
    // activeSlide = 4
  
    if (activeSlide === slidesImages.length - 1) {
      activeSlide = 0
      // activeSlide = 5
    } else {
      // increment the activeSlide of 1
      activeSlide++
    }
  
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active');
  
  
    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active');

}


  // intercept click on the prev icon
  
  
  // activeSlide = 0
prevEl.addEventListener('click', prevSlide);

function prevSlide() {
    console.log('cliccato su prev');
  
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active');

    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active');
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active');
  
    if (activeSlide === 0) {
      activeSlide = slidesImages.length - 1
      // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }
    
    
    console.log(activeSlide);
  
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active');

    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active');
}

formElement.addEventListener('click', function(ev) {
    
    ev.preventDefault();

    console.log(ev);

    const clock = setInterval(function() {

        clearInterval(clock);

    })

})
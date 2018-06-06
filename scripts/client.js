console.log('javascript loaded');

const about = document.querySelector('.about');
const moreAbout = document.querySelector('#about-more');
const lessAbout = document.querySelector('#about-less');
const moreAboutSection = document.querySelector('.more-about-section');
const myWork = document.querySelector('.my-work');
const portSlides = document.querySelectorAll('.port-item-slide');

console.log(portSlides);
portSlides.forEach(function (slide) {
  slide.addEventListener('mouseenter', showPortSlide)
})

console.log();

function showMoreAbout() {
  console.log('button clicked');
  moreAboutSection.classList.toggle('show');
  moreAbout.style.display = !'none';
}

function hideSections() {
  console.log('show work button clicked');
  about.style.display = 'none';
}

function showPortSlide() {
  console.log('item hover')
}

moreAbout.addEventListener('click', showMoreAbout);
lessAbout.addEventListener('click', showMoreAbout)
myWork.addEventListener('click', hideSections);
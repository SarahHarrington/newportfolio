console.log('javascript loaded');

const about = document.querySelector('.about');
const moreAbout = document.querySelector('#about-more');
const lessAbout = document.querySelector('#about-less');
const moreAboutSection = document.querySelector('#more-about-section');
const myWork = document.querySelector('.my-work');
const portSlides = [...document.querySelectorAll('.portfolio-item')];

portSlides.forEach(function (slide) {
  // console.log(slide);
  slide.querySelector('.slide-button').addEventListener('click', showPop);
  slide.addEventListener('mouseenter', showPortSlide);
  slide.addEventListener('mouseleave', showPortSlide);
})

function showMoreAbout() {
  console.log('button clicked');
  moreAboutSection.classList.toggle('not-show');
  moreAboutSection.classList.toggle('show-more-about-section');
  // moreAboutSection.classList.toggle('hidden');
  moreAbout.classList.toggle('hidden');
  lessAbout.classList.toggle('hidden');
}

function hideSections() {
  about.style.display = 'none';
}

function showPortSlide(e) {
  // console.log(e)
  e.target.children[0].classList.toggle('port-item-slide');
}

// function hidePortSlide(e) {
//   e.target.children[0].style.display = 'none';
// }

function showPop(e) {
  console.log('Show More button clicked', e)
}

moreAbout.addEventListener('click', showMoreAbout);
lessAbout.addEventListener('click', showMoreAbout)
myWork.addEventListener('click', hideSections);
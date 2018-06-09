console.log('javascript loaded');

const about = document.querySelector('.about');
const moreAbout = document.querySelector('#about-more');
const lessAbout = document.querySelector('#about-less');
const moreAboutSection = document.querySelector('#more-about-section');
const myWork = document.querySelector('.my-work');
const portSlides = [...document.querySelectorAll('.portfolio-item')];
const header = document.querySelector('.header');
const myWorkButton = document.querySelector('.my-work-button');

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
  moreAbout.classList.toggle('hidden');
  lessAbout.classList.toggle('hidden');
}

function hideSections() {
  about.style.display = 'none';
  header.style.background = '#F8FBF7';
}



function showPortSlide(e) {
  e.target.children[0].classList.toggle('port-item-slide');
}

function scrollToMyWork() {
  // location.href = "#portfolio";
  document.getElementById("portfolio").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

// function hidePortSlide(e) {
//   e.target.children[0].style.display = 'none';
// }

function showPop(e) {
  console.log('Show More button clicked', e.target.id);
  let activePop = document.querySelector(`.${e.target.id}`);
  console.log(activePop)
  activePop.style.display = 'grid';
}

moreAbout.addEventListener('click', showMoreAbout);
lessAbout.addEventListener('click', showMoreAbout)
myWork.addEventListener('click', hideSections);
myWorkButton.addEventListener('click', scrollToMyWork);
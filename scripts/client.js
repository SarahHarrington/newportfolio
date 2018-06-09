console.log('javascript loaded');

const about = document.querySelector('.about');
const portSlides = [...document.querySelectorAll('.portfolio-item')];
const header = document.querySelector('.header');
const myWork = document.querySelector('.my-work');
const myWorkButton = document.querySelector('.my-work-button');
const navLinks = document.querySelectorAll('.nav-link');

portSlides.forEach(function (slide) {
  // console.log(slide);
  slide.querySelector('.slide-button').addEventListener('click', showPop);
  slide.addEventListener('mouseenter', showPortSlide);
  slide.addEventListener('mouseleave', showPortSlide);
})

function hideSections() {
  about.style.display = 'none';
  header.style.background = '#F8FBF7';
}

function showPortSlide(e) {
  e.target.children[0].classList.toggle('port-item-slide');
}

function scrollToMyWork() {
  document.getElementById("portfolio").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  header.style.display = 'grid';
  header.style.background = '#F8FBF7';
  navLinks.forEach((link) => {
    link.classList.remove('more-button');
    link.classList.add('more-button-dark');
  })
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

myWork.addEventListener('click', scrollToMyWork);
myWorkButton.addEventListener('click', scrollToMyWork);
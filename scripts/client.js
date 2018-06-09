console.log('javascript loaded');

const about = document.querySelector('.about');
const portSlides = [...document.querySelectorAll('.portfolio-item')];
const header = document.querySelector('.header');
const myWorkButton = document.querySelector('.my-work-button');
const navLinks = document.querySelectorAll('.nav-link');
const portfolio = document.querySelector('.portfolio');

portSlides.forEach(function (slide) {
  slide.querySelector('.slide-button').addEventListener('click', showPop);
  slide.addEventListener('mouseenter', showPortSlide);
  slide.addEventListener('mouseleave', showPortSlide);
})

function showPortSlide(e) {
  e.target.children[0].classList.toggle('port-item-slide');
}

function scrollToMyWork() {
  document.getElementById("portfolio").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  header.style.display = 'grid';
  header.style.background = '#F8FBF7';
  navLinks.forEach((link) => {
    link.style.background = '#F8FBF7';
    link.style.color = '#19091C';
  })
}

function showPop(e) {
  console.log('Show More button clicked', e.target.id);
  let activePop = document.querySelector(`.${e.target.id}`);
  console.log(activePop)
  activePop.style.display = 'grid';
}

function scrolling(e) {
  console.log(e);
}
myWorkButton.addEventListener('click', scrollToMyWork);
portfolio.addEventListener('onscroll', scrolling);
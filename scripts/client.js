const container = document.querySelector('.container');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const portSlides = [...document.querySelectorAll('.portfolio-item')];
const header = document.querySelector('.header');
const homeButton = document.querySelector('.home-button');
const myWorkButton = document.querySelector('.my-work-button');
const aboutMeButton = document.querySelector('.about-me-button');
const navLinks = document.querySelectorAll('.nav-link');
const descriptText = document.querySelector('.descript-text');
const contactLinks = document.querySelectorAll('.contact-links');

let myHomeTop = header.offsetHeight;
let homeAndWorkBorder =  home.offsetHeight;
let workAndAboutBorder = home.offsetHeight + portfolio.offsetHeight;
let aboutAndContactBorder = header.offsetHeight + home.offsetHeight + portfolio.offsetHeight + about.offsetHeight;

portSlides.forEach(function (slide) {
  slide.querySelector('.slide-button').addEventListener('click', showPop);
  slide.addEventListener('mouseenter', showPortSlide);
  slide.addEventListener('mouseleave', showPortSlide);
})

function showPortSlide(e) {
  e.target.children[0].classList.toggle('port-item-slide');
}

contactLinks.forEach(function (link) {
  link.addEventListener('mouseenter', updateDescriptText);
  link.addEventListener('mouseleave', defaultText);
})

function updateDescriptText(e) {
  switch (e.target.id) {
    case 'email':
      descriptText.innerHTML = 'Email Me!';
      break;
    case 'github':
      descriptText.innerHTML = 'Check out my repos!';
      break;
    case 'twitter':
      descriptText.innerHTML = 'See my Tweets!';
      break;
    case 'linkedin':
      descriptText.innerHTML = 'Professional Networking!';
      break;
    case 'resume':
      descriptText.innerHTML = 'My resume in PDF!';
      break;
    default:
      descriptText.innerHTML = 'Modern Software Developer';
      break;
  }
}

function defaultText() {
  descriptText.innerHTML = 'Modern Software Developer';
}

let lastPosition = window.scrollY;

function scrollToHome() {
  document.getElementById("home-area").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollToMyWork() {
  document.getElementById("portfolio").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollToAboutMe() {
  document.getElementById("about-me").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollToContact() {
  document.getElementById("contact-me").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollDirection(e) {
  lastPosition = window.scrollY;
  if (lastPosition < workAndAboutBorder && lastPosition > homeAndWorkBorder) {
    header.style.background = '#F8FBF7';
    navLinks.forEach((link) => {
      link.style.background = '#F8FBF7';
      link.style.color = '#19091C';
    })
  }
  if (lastPosition > myHomeTop && lastPosition < homeAndWorkBorder) {
    header.style.background = '#19091C';
    navLinks.forEach((link) => {
      link.style.background = '#19091C';
      link.style.color = '#F8FBF7';
    })
  }
  if (lastPosition > workAndAboutBorder && lastPosition < aboutAndContactBorder) {
    header.style.background = '#19091C';
    navLinks.forEach((link) => {
      link.style.background = '#19091C';
      link.style.color = '#F8FBF7';
    })
  }
  if (lastPosition > aboutAndContactBorder) {
    header.style.background = '#F8FBF7';
    navLinks.forEach((link) => {
      link.style.background = '#F8FBF7';
      link.style.color = '#19091C';
    })
  }
}

function showPop(e) {
  let activePop = document.querySelector(`.${e.target.id}`);
  activePop.style.display = 'grid';
  activePop.querySelector('.close-pop').addEventListener('click', () => activePop.style.display = 'none');
}

window.addEventListener('scroll', scrollDirection);
homeButton.addEventListener('click', scrollToHome);
myWorkButton.addEventListener('click', scrollToMyWork);
aboutMeButton.addEventListener('click', scrollToAboutMe);
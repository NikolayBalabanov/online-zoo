const radioBtns = document.querySelectorAll('.form__radio');

radioBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    radioBtns.forEach(el => el.classList.remove('form__radio--active'));

    e.currentTarget.classList.add('form__radio--active');
  })
})

const circles = document.querySelectorAll('.progress-bar__circle');
const donates = document.querySelectorAll('.donate-box');
const inputDonate = document.querySelector('.form__input');
const donatesValues = document.querySelectorAll('.donate-box .donate-box__donate');

inputDonate.addEventListener('keypress', (e) => {
  if ( !(e.keyCode < 48 && e.keyCode > 57) && !(e.target.value.length <= 3) ) {
    e.preventDefault();
    return false;
  }
})


inputDonate.addEventListener('input', (e) => {
  circles.forEach(el => el.classList.remove('progress-bar__circle--active'));
  donates.forEach(el => el.classList.remove('donate-box--active'));

  donatesValues.forEach( value => {
    if (value.textContent === e.target.value) {

      const parent = value.parentNode;
      const target = value.parentNode.getAttribute('data-target');

      parent.classList.add('donate-box--active');
      const curCircle = document.querySelector(`[data-path="${target}"]`);
      curCircle.classList.add('progress-bar__circle--active');
      console.log(target)
    }
  })

})

circles.forEach(el => {
  el.addEventListener('click', (e) => {
    circles.forEach(el => el.classList.remove('progress-bar__circle--active'));
    donates.forEach(el => el.classList.remove('donate-box--active'));

    const path = e.currentTarget.getAttribute('data-path');
    e.currentTarget.classList.add('progress-bar__circle--active');
    const curDonate = document.querySelector(`[data-target="${path}"]`);
    curDonate.classList.add('donate-box--active');
    const curDonateValue = curDonate.querySelector('span');
    inputDonate.value = curDonateValue.textContent.trim();
  })
})

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav .nav__item .nav__link');
const headerLogo = document.querySelector('.header__logo .logo');
const navWrapp = document.querySelector('.nav-wrapp');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  headerLogo.classList.toggle('logo--active');
  navWrapp.classList.toggle('nav-wrapp--active')
})

navLinks.forEach(el => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    headerLogo.classList.remove('logo--active');
    navWrapp.classList.remove('nav-wrapp--active')
  })
})

navWrapp.addEventListener('click', (e) => {
  console.log(e.target)
  console.log(e.CurrentTarget)
  if (e.target === navWrapp) {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    headerLogo.classList.remove('logo--active');
    navWrapp.classList.remove('nav-wrapp--active')
  }
})

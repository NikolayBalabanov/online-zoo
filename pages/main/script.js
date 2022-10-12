let initTestiSlider = () => new Swiper(".testimotionals__slider", {
  slidesPerView: 4,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    clicable: true,
    dragSize: 115,
  },
  spaceBetween: 30,
  breakpoints: {
    0: {
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 15,
      mousewheel: true,
    },

    1000: {
      direction: 'horizontal',
      slidesPerView: 3,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 75,
      },
      spaceBetween: 30,
    },
    1200: {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },
});

initTestiSlider();

window.addEventListener("resize", function () {
  let timeDelay = setTimeout(() => {
    initTestiSlider();
  }, 200)
  clearTimeout(timeDelay)
});

function getWindowWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

function destroySlider(params) {
  params.petsSlider.destroy();
  params.cardsContainer.classList.remove("swiper-container");
  params.cardsWrap.classList.remove("swiper-wrapper");
  params.cardsWrap.removeAttribute("aria-live");
  params.cardsWrap.removeAttribute("id");
}

// pets
function petsSlider() {
  const MOBILE_WIDTH = 320;

  const sliderMobileParams = {
    cardsContainerName: "pets__slider",
    cardsWrapName: "pets__list",
    card: "pets__item",
    navClassName: "editions__navigation",
    navBtnClassName: "editions__btn",
    navPrev: "pets__btn-prev",
    navNext: "pets__btn-next"
  };

  function activatePetsSlider(params) {

    params.cardsContainer.classList.add("swiper-container");
    params.cardsWrap.classList.add("swiper-wrapper");

    params.petsSlider = new Swiper(`.${params.cardsContainerName}`, {
      loop: true,
      speed: 800,
      navigation: {
        nextEl: `.${params.navPrev}`,
        prevEl: `.${params.navNext}`
      },

      breakpoints: {
        321: {
          direction: 'horizontal',
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          mousewheel: true,
        },
        500: {
          direction: 'horizontal',
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 31,
        },
        999: {
          direction: 'horizontal',
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        }
      },
      keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slideVisibleClass: 'slide-visible',
      on: {
        beforeInit() {
          document.querySelectorAll(`.${params.card}`).forEach((el) => {
            el.classList.add("swiper-slide");
          });
        },

        beforeDestroy() {
          this.slides.forEach((el) => {
            el.classList.remove("swiper-slide");
            el.removeAttribute("role");
            el.removeAttribute("aria-label");
          });
        },
        progress() {
          console.log('йцуйцфывфцв')
        },
        // slideChange: function () {

        //   const petsCardData = [
        //     {
        //       image: "../../assets/images/pandas.jpg",
        //       alt: "Giant Pandas",
        //       title: "giant Pandas",
        //       native: "Native to&nbsp;Southwest China",
        //       text: "Giant pandas are bears and are members of&nbsp;the Order Carnivora.",
        //       vegan: true,
        //     },
        //     {
        //       image: "../../assets/images/sloth.jpg",
        //       alt: "Sloth",
        //       title: "Two-toed Sloth",
        //       native: "Mesoamerica, South America",
        //       text: "Sloths&mdash;the sluggish tree-dwellers of&nbsp;Central and South America&mdash;spend their lives in&nbsp;the tropical rain forests.",
        //       vegan: true,
        //     },
        //     {
        //       image: "../../assets/images/eagle.jpg",
        //       alt: "Eagles",
        //       title: "Eagles",
        //       native: "Native to&nbsp;South America",
        //       text: "Eagles choose a&nbsp;mate for life. They build large and strong nests, using branches.",
        //       vegan: false,
        //     },
        //     {
        //       image: "../../assets/images/cheetah.jpg",
        //       alt: "Cheetahs",
        //       title: "cheetahs",
        //       native: "Native to&nbsp;Africa",
        //       text: "Adult life for a&nbsp;cheetah in&nbsp;the wild is&nbsp;difficult.",
        //       vegan: false,
        //     },
        //     {
        //       image: "../../assets/images/gorilla.jpg",
        //       alt: "Gorillas",
        //       title: "Gorillas",
        //       native: "Native to&nbsp;Congo",
        //       text: "There are two species of&nbsp;gorilla, each containing two subspecies.",
        //       vegan: true,
        //     },
        //     {
        //       image: "../../assets/images/penguin.jpg",
        //       alt: "Penguins",
        //       title: "Penguins",
        //       native: "Native to&nbsp;Antarctica",
        //       text: "Penguins are a&nbsp;family of&nbsp;17&nbsp;to&nbsp;19&nbsp;species of&nbsp;birds that live primarily in&nbsp;the Southern Hemisphere.",
        //       vegan: false,
        //     },
        //     {
        //       image: "../../assets/images/alligators.jpg",
        //       alt: "Alligators",
        //       title: "Alligators",
        //       native: "Native to Southeastern U. S.",
        //       text: "They are very dangeroгs.",
        //       vegan: false,
        //     }
        //   ];

        //   const activeCard = document.querySelector('.swiper-slide-active');
        //   const pestSlides = document.querySelectorAll('.pets__item')
        //   // const petsCardsSubItems = document.querySelectorAll('.slide-visible .pats__wrap');
        //   const nodeList = Array.from(pestSlides)
        //   const cardsList = [];

        //   for (let i = nodeList.indexOf(activeCard); i < nodeList.indexOf(activeCard) + 3; i++) {
        //     cardsList.push(nodeList[i].children[0].children[0])
        //     cardsList.push(nodeList[i].children[0].children[1])
        //   }

        //   const randomCardData = petsCardData.slice().sort(() => Math.random() - 0.5)
        //   console.log('мы тут')
        //   for (let i = 0; i < cardsList.length; i++) {
        //     cardsList[i].innerHTML =
        //       `
        //         <article class="pats__wrap">
        //           <div class="pets__image">
        //             <img class="pets__img" src="${randomCardData[i].image}" alt="${randomCardData[i].alt}">
        //             <div class="pets__descr">
        //               <p class="pets__text">
        //                 ${randomCardData[i].text}
        //               </p>
        //             </div>
        //           </div>
        //           <div class="pets__content">
        //             <h3 class="pets__title">${randomCardData[i].title}</h3>
        //             <span class="pets__native">${randomCardData[i].native}</span>
        //             <div class="${randomCardData[i].vegan ? "pets__food-vegan" : "pets__food-meat"}"></div>
        //           </div>
        //         </article>
        //       `
        //   }
        // }
      }
    });
  }

  function checkWindowWidthMobile(params) {
    const currentWidth = getWindowWidth();
    params.cardsContainer = document.querySelector(
      `.${params.cardsContainerName}`
    );
    params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);
    if (
      currentWidth > MOBILE_WIDTH &&
      (!params.petsSlider || params.petsSlider.destroyed)
    ) {
      console.log('что-то произошло > 320')
      console.log('currentWidth', currentWidth)
      activatePetsSlider(params);
    } else if (currentWidth <= MOBILE_WIDTH && params.petsSlider ) {
      console.log('что-то произошло < 320')
      destroySlider(params);
    };
  };

  checkWindowWidthMobile(sliderMobileParams);

  window.addEventListener("resize", function () {
    checkWindowWidthMobile(sliderMobileParams);
  });
};

petsSlider();

// const petsCardData = [
//   {
//     image: "../../assets/images/pandas.jpg",
//     alt: "Giant Pandas",
//     title: "giant Pandas",
//     native: "Native to&nbsp;Southwest China",
//     text: "Giant pandas are bears and are members of&nbsp;the Order Carnivora.",
//     vegan: true,
//   },
//   {
//     image: "../../assets/images/sloth.jpg",
//     alt: "Sloth",
//     title: "Two-toed Sloth",
//     native: "Mesoamerica, South America",
//     text: "Sloths&mdash;the sluggish tree-dwellers of&nbsp;Central and South America&mdash;spend their lives in&nbsp;the tropical rain forests.",
//     vegan: true,
//   },
//   {
//     image: "../../assets/images/eagle.jpg",
//     alt: "Eagles",
//     title: "Eagles",
//     native: "Native to&nbsp;South America",
//     text: "Eagles choose a&nbsp;mate for life. They build large and strong nests, using branches.",
//     vegan: false,
//   },
//   {
//     image: "../../assets/images/cheetah.jpg",
//     alt: "Cheetahs",
//     title: "cheetahs",
//     native: "Native to&nbsp;Africa",
//     text: "Adult life for a&nbsp;cheetah in&nbsp;the wild is&nbsp;difficult.",
//     vegan: false,
//   },
//   {
//     image: "../../assets/images/gorilla.jpg",
//     alt: "Gorillas",
//     title: "Gorillas",
//     native: "Native to&nbsp;Congo",
//     text: "There are two species of&nbsp;gorilla, each containing two subspecies.",
//     vegan: true,
//   },
//   {
//     image: "../../assets/images/penguin.jpg",
//     alt: "Penguins",
//     title: "Penguins",
//     native: "Native to&nbsp;Antarctica",
//     text: "Penguins are a&nbsp;family of&nbsp;17&nbsp;to&nbsp;19&nbsp;species of&nbsp;birds that live primarily in&nbsp;the Southern Hemisphere.",
//     vegan: false,
//   },
//   {
//     image: "../../assets/images/alligators.jpg",
//     alt: "Alligators",
//     title: "Alligators",
//     native: "Native to Southeastern U. S.",
//     text: "They are very dangeroгs.",
//     vegan: false,
//   }
// ];

const petsNavBtns = document.querySelectorAll('.pets__nav-btn');

// petsNavBtns.forEach(el => {
//   el.addEventListener('click', () => {
//     const activeCard = document.querySelector('.swiper-slide-active');
//     const pestSlides = document.querySelectorAll('.pets__item')
//     // const petsCardsSubItems = document.querySelectorAll('.slide-visible .pats__wrap');
//     const nodeList = Array.from(pestSlides)
//     const cardsList = [];

//     for (let i = nodeList.indexOf(activeCard); i < nodeList.indexOf(activeCard) + 3; i++) {
//       cardsList.push(nodeList[i].children[0].children[0])
//       cardsList.push(nodeList[i].children[0].children[1])
//     }

//     const randomCardData = petsCardData.slice().sort(() => Math.random() - 0.5)
//     console.log('мы тут')
//     for (let i = 0; i < cardsList.length; i++) {
//       cardsList[i].innerHTML =
//         `
//           <article class="pats__wrap">
//             <div class="pets__image">
//               <img class="pets__img" src="${randomCardData[i].image}" alt="${randomCardData[i].alt}">
//               <div class="pets__descr">
//                 <p class="pets__text">
//                   ${randomCardData[i].text}
//                 </p>
//               </div>
//             </div>
//             <div class="pets__content">
//               <h3 class="pets__title">${randomCardData[i].title}</h3>
//               <span class="pets__native">${randomCardData[i].native}</span>
//               <div class="${randomCardData[i].vegan ? "pets__food-vegan" : "pets__food-meat"}"></div>
//             </div>
//           </article>
//         `
//     }
//   })
// })

// const petsCard = `
//   <div class="pets__cards-wrap">
//     <article class="pats__wrap">
//       <div class="pets__image">
//         <img class="pets__img" src="../../assets/images/pandas.jpg" alt="Giant Pandas">
//         <div class="pets__descr">
//           <p class="pets__text">
//             Giant pandas are bears and are members of&nbsp;the Order Carnivora.
//           </p>
//         </div>
//       </div>
//       <div class="pets__content">
//         <h3 class="pets__title">giant Pandas</h3>
//         <span class="pets__native">Native to&nbsp;Southwest China</span>
//         <div class="pets__food-vegan"></div>
//       </div>
//     </article>
//     <article class="pats__wrap">
//       <div class="pets__image">
//         <img class="pets__img" src="../../assets/images/sloth.jpg" alt="Sloth">
//         <div class="pets__descr">
//           <p class="pets__text">
//             Sloths&mdash;the sluggish tree-dwellers of&nbsp;Central and South America&mdash;spend their lives in&nbsp;the tropical rain forests.
//           </p>
//         </div>
//       </div>
//       <div class="pets__content">
//         <h3 class="pets__title">Two-toed Sloth</h3>
//         <span class="pets__native">Mesoamerica, South America</span>
//         <div class="pets__food-vegan"></div>
//       </div>
//     </article>
//   </div>
// `

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

// modal testi

const modBtns = document.querySelectorAll('.testimotionals__item');
const modalsOverlay = document.querySelector('.testimotionals__modals-overlay');
const modals = document.querySelectorAll('.testimotionals__modal');
const modalClose = document.querySelectorAll('.modal__close-btn');


modBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('testimotionals__modal_visible');
    });

    document.body.classList.add('stop-scroll');

    document.querySelector(`[data-target="${path}"]`).classList.add('testimotionals__modal_visible');
    modalsOverlay.classList.add('testimotionals__modals-overlay_visible');
  });
});

modalClose.forEach((el) => {
  el.addEventListener('click', (e) => {

    modals.forEach((el) => {
      el.classList.remove('testimotionals__modal_visible');
    });
    modalsOverlay.classList.remove('testimotionals__modals-overlay_visible');
    document.body.classList.remove('stop-scroll');
  });
});

modalsOverlay.addEventListener('click', (e) => {
  if (e.target == modalsOverlay) {
    modalsOverlay.classList.remove('testimotionals__modals-overlay_visible');
    modals.forEach((el) => {
      el.classList.remove('testimotionals__modal_visible');
    });
    document.body.classList.remove('stop-scroll');
  }

})

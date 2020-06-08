const toggle = document.getElementsByClassName("navbar-toggle");

toggle[0].addEventListener("click", function(event) {
  event.preventDefault();
  this.classList.toggle("is-active");
});

const swiper = new Swiper('.first-swiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});

const swiperSecond = new Swiper('.second-swiper ', {
  slidesPerView: 2,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


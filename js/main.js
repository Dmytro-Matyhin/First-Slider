const toggle = document.getElementsByClassName("navbar-toggle");

toggle[0].addEventListener("click", function(event) {
  event.preventDefault();
  this.classList.toggle("is-active");
});

const swiper = new Swiper('.swiper-container', {
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
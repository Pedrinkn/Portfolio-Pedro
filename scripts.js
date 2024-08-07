let header = document.getElementById('header')

window.addEventListener('scroll' , () => {
  if (window.scrollY >= 200) {
    header.style.background = '#191919'
  } else {
    header.style.background = 'transparent'
  }
})


let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
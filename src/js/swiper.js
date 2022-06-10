var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Add effect
  grabCursor: true,
  loop: true,
  autoplay: {
    deley: 3000,
    disableOnInteraction: false,
  },
  speed: 900,
});

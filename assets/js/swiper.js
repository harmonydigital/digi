var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
      autoplay: {
        delay: 2300,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
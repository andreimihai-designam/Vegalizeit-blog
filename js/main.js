$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  navText: ['&#10094;','&#10095;'],
  nav:true,
  dotsEach: false, 
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
})
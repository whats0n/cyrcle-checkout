import { ACTIVE, OWL } from '../constants';


$('.js-slider').each((i, container) => {

  $(container)
    .addClass(OWL)
    .owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      items: 1,
      smartSpeed: 300,
      dots: true,
      dotsClass: 'slider__dots',
      dotClass: 'slider__dot',
      loop: true,
      nav: true,
      navClass: [ 'slider__arrow slider__prev', 'slider__arrow slider__next' ],
      navText: [ '<span></span>', '<span></span>' ]
    });

});

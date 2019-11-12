$(document).ready(function(){
  $('.menu-toggle').on('click', function() {
    $('.nav').toggleClass('showing');
    $('.nav ul').toggleClass('showing');
  })

  $('.post-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });
});

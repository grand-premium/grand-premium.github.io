$('#category-check').change(function(){
    $('.categories__dropdown').toggleClass('active');
});
$('#brand-check').change(function(){
    $('.brands__dropdown').toggleClass('active');
});

$('.slider__slide').tilt({
  perspective: 2300,
  glare: true,
  maxGlare: .5
});
$('.collection').tilt({
  perspective: 2300,
  glare: true,
  maxGlare: .5
});
$('.collections__img').tilt({
  perspective: 5000,
  glare: true,
  maxGlare: .5
});
$('.slider__control').tilt({
  perspective: 1000,
  glare: true,
  maxGlare: .5
});
$('.slider__control').click(function(){
  var index = $(this).index();
  $('.slider__control').removeClass('active');
  $(this).addClass('active');
  $('.slider__slide').removeClass('active');
  $('.slider__slide').eq(index).addClass('active');
});
function nextslide(){
  var eqSlide = $('.slider__control.active').index();
  if (eqSlide == 5) {
    eqSlide = -1;
  }
  $('.slider__control').eq(eqSlide + 1).trigger('click');
}
var sliderTimer = setInterval(nextslide,5000);
$('.slider').hover(function(){
  clearInterval(sliderTimer);
}, function(){
  sliderTimer=setInterval(nextslide,5000);
});
$('.light-switcher').click(function(){
  $('body').toggleClass('dark');
});

$('.slider__element').click(function(){
  $('.good-popup').fadeIn();
});
$('.goods__btn--popup').click(function(){
  $('.good-popup').fadeIn();
});
$('.good-popup__close').click(function(){
  $('.good-popup').fadeOut();
});

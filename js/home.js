$('#category-check').change(function(){
    if ($('#brand-check').prop('checked')==true){
      $('#brand-check').prop('checked',false);
      $('.homeslider').toggleClass('homeslider--brands');
      $('.brands__dropdown').toggleClass('active');
      setTimeout(function() {
        $('.homeslider').removeClass('homeslider--start');
        $('.homeslider').addClass('homeslider--end');
        $('.homeslider').toggleClass('homeslider--categories');
        $('.categories__dropdown').toggleClass('active');
      }, 1000);
    } else {
      $('.homeslider').removeClass('homeslider--start');
      $('.homeslider').addClass('homeslider--end');
      $('.homeslider').toggleClass('homeslider--categories');
      $('.categories__dropdown').toggleClass('active');
    }
});
$('#brand-check').change(function(){
  if ($('#category-check').prop('checked')==true){
    $('#category-check').prop('checked',false);
    $('.homeslider').toggleClass('homeslider--categories');
    $('.categories__dropdown').toggleClass('active');
    setTimeout(function() {
      $('.homeslider').removeClass('homeslider--end');
      $('.homeslider').addClass('homeslider--start');
      $('.homeslider').toggleClass('homeslider--brands');
      $('.brands__dropdown').toggleClass('active');
    }, 1000);
  } else {
    $('.homeslider').removeClass('homeslider--end');
    $('.homeslider').addClass('homeslider--start');
    $('.homeslider').toggleClass('homeslider--brands');
    $('.brands__dropdown').toggleClass('active');
  }
});
$('.slider__slide').tilt({
  perspective: 2300,
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
$("#countdown1").countdown("2017/12/26", function(event) {
  $(this).html(
    event.strftime('<div>%D<span>дней</span></div><div>%H<span>часов</span></div><div>%M<span>минут</span></div><div>%S<span>секунд</span></div>')
  );
});
$("#countdown2").countdown("2017/12/14", function(event) {
  $(this).html(
    event.strftime('<div>%D<span>дней</span></div><div>%H<span>часов</span></div><div>%M<span>минут</span></div><div>%S<span>секунд</span></div>')
  );
});
$('.partner-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      1279:{
          items:7,
          slideBy: 7
      }
  }
});
setInterval(function(){
  var column = Math.floor((Math.random()*3)+1);
  var item = Math.floor((Math.random()*2)+1);
  var slide = Math.floor((Math.random()*2)+1);
  $('.trends__column:nth-of-type('+column+') .trends__item:nth-of-type('+item+') .item').removeClass('active');
  $('.trends__column:nth-of-type('+column+') .trends__item:nth-of-type('+item+') .item:nth-of-type('+slide+')').addClass('active');
},1000);

$('.brands__bottom').click(function(){
  var top = parseInt($('.brands__items').css('top').replace('px',''))-124;
  var max = -124 * ($('.brands__item').length - 4);
  if (top>=max){
    $('.brands__items').css('top',top+'px');
  } else {
    $('.brands__items').css('top','0px');
  }
});
$('.brands__top').click(function(){
  var top = parseInt($('.brands__items').css('top').replace('px',''))+124;
  var max = -124 * ($('.brands__item').length - 4);
  if (top<=0){
    $('.brands__items').css('top',top+'px');
  } else {
    $('.brands__items').css('top',max+'px');
  }
});
$('.categories__bottom').click(function(){
  var top = parseInt($('.categories__items').css('top').replace('px',''))-60;
  var max = -60 * ($('.categories__item').length - 8);
  if (top>=max){
    $('.categories__items').css('top',top+'px');
  } else {
    $('.categories__items').css('top','0px');
  }
});
$('.categories__top').click(function(){
  var top = parseInt($('.categories__items').css('top').replace('px',''))+60;
  var max = -60 * ($('.categories__item').length - 8);
  if (top<=0){
    $('.categories__items').css('top',top+'px');
  } else {
    $('.categories__items').css('top',max+'px');
  }
});

$('.good-popup__slider').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    nav:true
});

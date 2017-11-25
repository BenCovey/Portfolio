$(document).ready(function(){
  $('.accordionHead').click(function(){
    $('.accordionInner').removeClass('active');
    $('.accordionCnt').hide();
  $(this).parents('.accordionInner').addClass('active').children('.accordionCnt').slideDown();
    $('html, body, div').animate({
      scrollTop: $('.active').offset().top
    }, 500);
  });
});

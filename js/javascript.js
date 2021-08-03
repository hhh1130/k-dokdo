$(function(){

  // Language
  const $lng = $('header > .container > nav > .snb_2 > li:nth-of-type(5)');
  const $s_lnb = $('header > .container > nav .s_lnb');

  $lng.on('mouseover', function(){
    $s_lnb.stop().fadeIn(200);
  })
  $lng.on('mouseout', function(){
    $s_lnb.stop().fadeOut(200);
  })

  // nav
  const $gnb = $('header > .container > nav > .gnb');
  const $lnb = $('header > .container > nav .lnb');
  const $bg_lnb = $('header > .container > .bg_lnb');

  $gnb.on('mouseover', function(){
    $bg_lnb.stop().fadeIn(300);
    $lnb.stop().fadeIn(300);
  });
  $gnb.on('mouseout', function(){
    $bg_lnb.stop().fadeOut(300);
    $lnb.stop().fadeOut(300);
  });

  // section slides
  const $container = $('section > .slides-container');
  const $btnPrev = $('section > .slides-navigation.slides-prev');
  const $btnNext = $('section > .slides-navigation.slides-next');

  let nowIdx = 0;

  const moveFn = function(){
    $container.stop().animate({
      left : -1080 * nowIdx
    });
  }

  let intervalKey;

  intervalKey = setInterval(function(){
    if(nowIdx < 2){
      nowIdx++;
    }else{
      nowIdx = 0;
    }
    moveFn();
  }, 3000);

  $btnPrev.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx > 0){
      nowIdx--;
    }else{
      nowIdx = 2;
    }

    moveFn();
  });

  $btnNext.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx < 2){
      nowIdx++;
    }else{
      nowIdx = 0;
    }

    moveFn();
  });

  // footer slides
  setInterval(function(){
    const $footerContainer = $('footer > .footer-container > .footer-slides > .slides');
    const $slides = $footerContainer.children('li');

    $footerContainer.stop().animate({top: -45}, function(){
      $slides.eq(0).appendTo($footerContainer);
      $footerContainer.css({top: 0});
    });
  }, 2500);

});
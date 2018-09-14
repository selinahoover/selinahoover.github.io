$(function(){
  $('html,body').css('overflow','hidden');

 // loading --------------------------------------------------------------------
  $(window).on('load',function(){
    $('#loading').animate({
      opacity:0
    },2000,function(){
      $(this).remove();
      $('html, body').removeAttr('style');
    })
  })

  // nav -----------------------------------------------------------------------
  function resizing(){
    var contentH=$('section').height();
    var sidenavW=$('#sideNav').width();
    $('#sideNav').height(contentH);
    $('#sideNav > div').width(sidenavW);
  }
  $('#sideNav button').click(function(){
    $('#menu i').toggleClass('fa-bars fa-times');
    $('#sideNav').toggleClass('open');
    $('#sideNav ul').slideDown(1000);
  })
  $('#sideNav a, #goTop').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(id).offset().top
    },1000)
  })

  $(window).scroll(function(){
    var scroll=$(window).scrollTop();
    if(scroll>100){
      $('#goTop').addClass('on');
    }else{
      $('#goTop').removeClass('on');
    }
  // about skills --------------------------------------------------------------
    $('#about > div').each(function(index){
      var position=$(this).offset().top;
      var scroll=$(window).scrollTop();
      if(scroll+600 > position){
        if(index==0){             //About영역
          $(this).addClass('slide-left');
        }else {                 //Skills영역
          $(this).addClass('slide-right');
        }
      }
    })
  })







})

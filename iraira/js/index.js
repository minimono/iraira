$(function(){
  let startflag = false;
  let t = 0;
  setInterval(function(){
    $('.stage').css({transform: 'translateX('+Math.sin(t*0.02*Math.PI)*20+'px) translateY('+Math.sin(t*0.01*Math.PI)*10+'px)'})
    t++;
  }, 16);
  $('.start').mouseover(function(){
    startflag = true;
  });
  $('.stage').mouseleave(function(){
    if(startflag){
      startflag = false;
      $('h2').remove();
      $('.stage').remove();
      $('.container').append('<p class="img-wrap"><img src="img/bikkuri.png" alt="( ﾟдﾟ)"></p>');
      $('.container').append('<button class="reset" onclick="window.location.reload();">諦めない！</button>')
    }
  });
  $('.end').mouseover(function(){
    if(startflag){
      startflag = false;
      $('h2').text('やったあ！').css('margin-bottom', 0);
      $('.stage').remove();
      $('.container').append('<p class="img-wrap"><img src="img/yatta.png" alt="ヾ(*´∀`*)ﾉ"></p>');
    }
  });
});
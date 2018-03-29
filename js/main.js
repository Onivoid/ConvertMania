$(document).ready(function (){
  $('.welcome').fadeIn(500);
  $('.colorpicker').fadeIn(500);

  $('.welcome .start').click(function(){
    $('.welcome').fadeOut(500);
    $('.back').fadeIn(500);
    $('.first, .previous').delay(500).fadeIn(500);
    $('.previous').data('previous','welcome');
  });

  $('.first .start-deci').click(function(){
    $('.first').fadeOut(500);
    $('.romain').delay(500).fadeIn(500);
    $('.previous').data('previous','first');
  });

  $('.first .start-long').click(function (){
    $('.first').fadeOut(500);
    $('.longueurs').delay(500).fadeIn(500);
    $('.previous').data('previous','first');
  });

  $('.first .start-masse').click(function (){
    $('.first').fadeOut(500);
    $('.masse').delay(500).fadeIn(500);
    $('.previous').data('previous','first');
  });

  $('.first .start-monnaie').click(function (){
    $('.first').fadeOut(500);
    $('.monnaie').delay(500).fadeIn(500);
    $('.previous').data('previous','first');
  });


  $('.colorpicker button').click(function(){
    $('body').attr('class', '');
    let newBgColor = $(this).data('color');
    $('body').addClass(newBgColor);
  });

  $('.previous').click(function(){
    $('input').val('');
    let previousvalue = $(this).data('previous');
    switch (previousvalue) {
      case 'welcome':
        $('.previous, .first').fadeOut(500);
        $('.welcome').delay(500).fadeIn(500);
        break;
      case 'first':
        $('.romain, .longueurs, .masse, .monnaie').fadeOut(500);
        $('.first').delay(500).fadeIn(500);
        $('.previous').data('previous','welcome');
        break;
      default:
    }
  });

});

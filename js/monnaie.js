$(document).ready(function () {
  var ch1 = '';
  var ch2 = '';

  function convert(){
    var chmp1 = $('.monnaie #chmp1');
    var chmp2 = $('.monnaie #chmp2');


    switch (ch1) {
      case 'euro':
        switch (ch2) {
          case 'euro':
            chmp2.val(chmp1.val()*1);
            break;
          case 'livre':
            chmp2.val(chmp1.val()*0.8226);
            break;
          case 'dollar':
            chmp2.val(chmp1.val()*1.1838);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'livre':
        switch (ch2) {
          case 'euro':
            chmp2.val(chmp1.val()*1.1138);
            break;
          case 'livre':
            chmp2.val(chmp1.val()*1);
            break;
          case 'dollar':
            chmp2.val(chmp1.val()*1.39);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'dollar':
        switch (ch2) {
          case 'euro':
            chmp2.val(chmp1.val()*0.7330);
            break;
          case 'livre':
            chmp2.val(chmp1.val()*0.6394);
            break;
          case 'dollar':
            chmp2.val(chmp1.val()*1);
            break;
          default:
          chmp2.val("Sélectionnez la monnaie de convertion !");
        }
        break;
      default:
      chmp2.val("Sélectionnez la monnaie à convertir !");
    }
  }

  $('.monnaie #choice1 label').click(function(){
    ch1 = $(this).attr('id');
  });

  $('.monnaie #choice2 label').click(function(){
    ch2 = $(this).attr('id');
  });

  //Convertis après l'écriture du chiffre / nombre dans le champ de texte.

    $('.monnaie #chmp1').keyup(function (){
      convert();
    });

  //Convertis aux changements d'unités de mesure.

    $('.monnaie #choice2 label, .monnaie #choice1 label').click(function (){
      convert();
    });

  //Convertis au Click

    $('.monnaie #chmp1').click(function (){
      convert();
    });

  //Convertis au Copier coller.

    $('.monnaie #chmp1').bind('input propertychange',function (){
      convert();
    });
});

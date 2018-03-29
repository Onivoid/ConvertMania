$(document).ready(function () {
  var ch1 = '';
  var ch2 = '';

  function convert(){
    var chmp1 = $('.longueurs #chmp1');
    var chmp2 = $('.longueurs #chmp2');


    switch (ch1) {
      case 'mm':
        switch (ch2) {
          case 'mm':
            chmp2.val(chmp1.val()*1);
            break;
          case 'cm':
            chmp2.val(chmp1.val()/10);
            break;
          case 'dm':
            chmp2.val(chmp1.val()/100);
            break;
          case 'm':
            chmp2.val(chmp1.val()/1000);
            break;
          case 'dam':
            chmp2.val(chmp1.val()/10000);
            break;
          case 'hm':
            chmp2.val(chmp1.val()/100000);
            break;
          case 'km':
            chmp2.val(chmp1.val()/1000000);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'cm':
        switch (ch2) {
          case 'mm':
            chmp2.val(chmp1.val()*10);
            break;
          case 'cm':
            chmp2.val(chmp1.val()*1);
            break;
          case 'dm':
            chmp2.val(chmp1.val()/10);
            break;
          case 'm':
            chmp2.val(chmp1.val()/1000);
            break;
          case 'dam':
              chmp2.val(chmp1.val()/10000);
            break;
          case 'hm':
            chmp2.val(chmp1.val()/100000);
            break;
          case 'km':
            chmp2.val(chmp1.val()/1000000);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'dm':
        switch (ch2) {
          case 'mm':
            chmp2.val(chmp1.val()*100);
            break;
          case 'cm':
            chmp2.val(chmp1.val()*10);
            break;
          case 'dm':
            chmp2.val(chmp1.val()*1);
            break;
          case 'm':
            chmp2.val(chmp1.val()/10);
            break;
          case 'dam':
            chmp2.val(chmp1.val()/100);
            break;
          case 'hm':
            chmp2.val(chmp1.val()/1000);
            break;
          case 'km':
            chmp2.val(chmp1.val()/10000);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'm':
        switch (ch2) {
          case 'mm':
            chmp2.val(chmp1.val()*1000);
            break;
          case 'cm':
            chmp2.val(chmp1.val()*100);
            break;
          case 'dm':
            chmp2.val(chmp1.val()*10);
            break;
          case 'm':
            chmp2.val(chmp1.val()*1);
            break;
          case 'dam':
            chmp2.val(chmp1.val()/10);
            break;
          case 'hm':
            chmp2.val(chmp1.val()/100);
            break;
          case 'km':
            chmp2.val(chmp1.val()/1000);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'dam':
        switch (ch2) {
          case 'mm':
            chmp2.val(chmp1.val()*10000);
            break;
          case 'cm':
            chmp2.val(chmp1.val()*1000);
            break;
          case 'dm':
            chmp2.val(chmp1.val()*100);
            break;
          case 'm':
            chmp2.val(chmp1.val()*10);
            break;
          case 'dam':
            chmp2.val(chmp1.val()*1);
            break;
          case 'hm':
            chmp2.val(chmp1.val()/10);
            break;
          case 'km':
            chmp2.val(chmp1.val()/100);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'hm':
        switch (ch2) {
          case 'mm':
            chmp2.val(chmp1.val()*100000);
            break;
          case 'cm':
            chmp2.val(chmp1.val()*10000);
            break;
          case 'dm':
            chmp2.val(chmp1.val()*1000);
            break;
          case 'm':
            chmp2.val(chmp1.val()*100);
            break;
          case 'dam':
            chmp2.val(chmp1.val()*10);
            break;
          case 'hm':
            chmp2.val(chmp1.val()*1);
            break;
          case 'km':
            chmp2.val(chmp1.val()/10);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'km':
        switch (ch2) {
          case 'mm':
            chmp2.val(chmp1.val()*1000000);
            break;
          case 'cm':
            chmp2.val(chmp1.val()*100000);
            break;
          case 'dm':
            chmp2.val(chmp1.val()*10000);
            break;
          case 'm':
            chmp2.val(chmp1.val()*1000);
            break;
          case 'dam':
            chmp2.val(chmp1.val()*100);
            break;
          case 'hm':
            chmp2.val(chmp1.val()*10);
            break;
          case 'km':
            chmp2.val(chmp1.val()*10);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      default:
      chmp2.val("Sélectionnez l'unité à convertir !");

    }
  }

  $('.longueurs #choice1 label').click(function(){
    ch1 = $(this).attr('id');
  });

  $('.longueurs #choice2 label').click(function(){
    ch2 = $(this).attr('id');
  });

  //Convertis après l'écriture du chiffre / nombre dans le champ de texte.

    $('.longueurs #chmp1').keyup(function (){
      convert();
    });

  //Convertis aux changements d'unités de mesure.

    $('.longueurs #choice2 label, .longueurs #choice1 label').click(function (){
      convert();
    });

  //Convertis au Click

    $('.longueurs #chmp1').click(function (){
      convert();
    });

  //Convertis au Copier coller.

    $('.longueurs #chmp1').bind('input propertychange',function (){
      convert();
    });
});

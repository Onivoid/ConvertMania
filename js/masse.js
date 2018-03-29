$(document).ready(function () {
  var ch1 = '';
  var ch2 = '';

  function convert(){
    var chmp1 = $('.masse #chmp1');
    var chmp2 = $('.masse #chmp2');


    switch (ch1) {
      case 'mg':
        switch (ch2) {
          case 'mg':
            chmp2.val(chmp1.val()*1);
            break;
          case 'cg':
            chmp2.val(chmp1.val()/10);
            break;
          case 'dg':
            chmp2.val(chmp1.val()/100);
            break;
          case 'g':
            chmp2.val(chmp1.val()/1000);
            break;
          case 'dag':
            chmp2.val(chmp1.val()/10000);
            break;
          case 'hg':
            chmp2.val(chmp1.val()/100000);
            break;
          case 'kg':
            chmp2.val(chmp1.val()/1000000);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'cg':
        switch (ch2) {
          case 'mg':
            chmp2.val(chmp1.val()*10);
            break;
          case 'cg':
            chmp2.val(chmp1.val()*1);
            break;
          case 'dg':
            chmp2.val(chmp1.val()/10);
            break;
          case 'g':
            chmp2.val(chmp1.val()/1000);
            break;
          case 'dag':
              chmp2.val(chmp1.val()/10000);
            break;
          case 'hg':
            chmp2.val(chmp1.val()/100000);
            break;
          case 'kg':
            chmp2.val(chmp1.val()/1000000);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'dg':
        switch (ch2) {
          case 'mg':
            chmp2.val(chmp1.val()*100);
            break;
          case 'cg':
            chmp2.val(chmp1.val()*10);
            break;
          case 'dg':
            chmp2.val(chmp1.val()*1);
            break;
          case 'g':
            chmp2.val(chmp1.val()/10);
            break;
          case 'dag':
            chmp2.val(chmp1.val()/100);
            break;
          case 'hg':
            chmp2.val(chmp1.val()/1000);
            break;
          case 'kg':
            chmp2.val(chmp1.val()/10000);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'g':
        switch (ch2) {
          case 'mg':
            chmp2.val(chmp1.val()*1000);
            break;
          case 'cg':
            chmp2.val(chmp1.val()*100);
            break;
          case 'dg':
            chmp2.val(chmp1.val()*10);
            break;
          case 'g':
            chmp2.val(chmp1.val()*1);
            break;
          case 'dag':
            chmp2.val(chmp1.val()/10);
            break;
          case 'hg':
            chmp2.val(chmp1.val()/100);
            break;
          case 'kg':
            chmp2.val(chmp1.val()/1000);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'dag':
        switch (ch2) {
          case 'mg':
            chmp2.val(chmp1.val()*10000);
            break;
          case 'cg':
            chmp2.val(chmp1.val()*1000);
            break;
          case 'dg':
            chmp2.val(chmp1.val()*100);
            break;
          case 'g':
            chmp2.val(chmp1.val()*10);
            break;
          case 'dag':
            chmp2.val(chmp1.val()*1);
            break;
          case 'hg':
            chmp2.val(chmp1.val()/10);
            break;
          case 'kg':
            chmp2.val(chmp1.val()/100);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'hg':
        switch (ch2) {
          case 'mg':
            chmp2.val(chmp1.val()*100000);
            break;
          case 'cg':
            chmp2.val(chmp1.val()*10000);
            break;
          case 'dg':
            chmp2.val(chmp1.val()*1000);
            break;
          case 'g':
            chmp2.val(chmp1.val()*100);
            break;
          case 'dag':
            chmp2.val(chmp1.val()*10);
            break;
          case 'hg':
            chmp2.val(chmp1.val()*1);
            break;
          case 'kg':
            chmp2.val(chmp1.val()/10);
            break;
          default:
          chmp2.val("Sélectionnez l'unité de convertion !");
        }
        break;
      case 'kg':
        switch (ch2) {
          case 'mg':
            chmp2.val(chmp1.val()*1000000);
            break;
          case 'cg':
            chmp2.val(chmp1.val()*100000);
            break;
          case 'dg':
            chmp2.val(chmp1.val()*10000);
            break;
          case 'g':
            chmp2.val(chmp1.val()*1000);
            break;
          case 'dag':
            chmp2.val(chmp1.val()*100);
            break;
          case 'hg':
            chmp2.val(chmp1.val()*10);
            break;
          case 'kg':
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

  $('.masse #choice1 label').click(function(){
    ch1 = $(this).attr('id');
  });

  $('.masse #choice2 label').click(function(){
    ch2 = $(this).attr('id');
  });

  //Convertis après l'écriture du chiffre / nombre dans le champ de texte.

    $('.masse #chmp1').keyup(function (){
      convert();
    });

  //Convertis aux changements d'unités de mesure.

    $('.masse #choice2 label, .masse #choice1 label').click(function (){
      convert();
    });

  //Convertis au Click

    $('.masse #chmp1').click(function (){
      convert();
    });

  //Convertis au Copier coller.

    $('.masse #chmp1').bind('input propertychange',function (){
      convert();
    });
});

// Effacer le champ Romain.
function deleteromain() {
    document.getElementById('Romain').value = '';
}


function autowriteconvert() {
    var x = document.getElementById('Decimal').value;
    var y = document.getElementById('Romain').value;

    var a = x.charAt(0);
    var z = x.charAt(1);
    var e = x.charAt(2);
    var r = x.charAt(3);

    var q = y.charAt(0);
    var s = y.charAt(1);
    var d = y.charAt(2);
    var f = y.charAt(3);
    var g = y.charAt(4);
    var h = y.charAt(5);
    var j = y.charAt(6);
    var k = y.charAt(7);
    var l = y.charAt(8);
    var m = y.charAt(9);





    if (x >= 0 && x <= 3999) {



        //--------------------------------------------------------------------------------------------------------------------------------//

        /* Gestion des Millièmes */
        //--------------------------------------------------------------------------------------------------------------------------------//

        //Début Millièmes quand x est suppérieur à 999
        if (a == 1 && x > 999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'M';
        } else if (a == 2 && x > 999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'MM';
        } else if (a == 3 && x > 999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'MMM';
        }
        //Fin Millièmes

        //--------------------------------------------------------------------------------------------------------------------------------//

        /* Gestion des Centaines */
        //--------------------------------------------------------------------------------------------------------------------------------//

        //Début Centaines quand x supérieur à 1000 et inférieur à 3999
        if (z == 1 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'C';
        } else if (z == 2 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'CC';
        } else if (z == 3 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'CCC';
        } else if (z == 4 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'CD';

        } else if (z == 5 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'D';

        } else if (z == 6 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'DC';

        } else if (z == 7 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'DCC';

        } else if (z == 8 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'DCCC';

        } else if (z == 9 && x > 999 && x <= 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'CM';

        }
        //Fin Centaines pour 3999<x<1000

        //Début Centaines quand x inférieur à 1000 et suppérieur à 99
        if (a == 1 && s != 'C' && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'C';
        } else if (a == 2 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'CC';
        } else if (a == 3 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'CCC';
        } else if (a == 4 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'CD';

        } else if (a == 5 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'D';

        } else if (a == 6 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'DC';

        } else if (a == 7 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'DCC';

        } else if (a == 8 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'DCCC';

        } else if (a == 9 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'CM';

        }
        //Fin Centaines pour 1000<x<99

        //--------------------------------------------------------------------------------------------------------------------------------//

        /* Gestion des Dixaines */
        //--------------------------------------------------------------------------------------------------------------------------------//
        //Début Dixaines pour x > 999 et x < 3999
        if (e == 1 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'X';
        } else if (e == 2 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XX';
        } else if (e == 3 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XXX';
        } else if (e == 4 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XL';

        } else if (e == 5 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'L';

        } else if (e == 6 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'LX';

        } else if (e == 7 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'LXX';

        } else if (e == 8 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'LXXX';

        } else if (e == 9 && x > 999 && x <= 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XC';

        }
        //Fin Dixaines pour 3999<x<999

        //Début Dixaines quand x inférieur à 1000 et suppérieur à 99
        if (z == 1 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'X';
        } else if (z == 2 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XX';
        } else if (z == 3 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XXX';
        } else if (z == 4 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XL';

        } else if (z == 5 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'L';

        } else if (z == 6 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'LX';

        } else if (z == 7 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'LXX';

        } else if (z == 8 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'LXXX';

        } else if (z == 9 && x < 1000 && x > 99) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XC';

        }
        //Fin Dixaines pour 1000<x<99

        //Début Dixaines quand x inférieur à 100 et suppérieur à 9
        if (a == 1 && x < 100 && x > 9) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'X';
        } else if (a == 2 && x < 100 && x > 9) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XX';
        } else if (a == 3 && x < 100 && x > 9) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XXX';
        } else if (a == 4 && x < 100 && x > 9) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XL';

        } else if (a == 5 && x < 100 && x > 9) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'L';

        } else if (a == 6 && x < 100 && x > 9) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'LX';

        } else if (a == 7 && x < 100 && x > 9) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'LXX';

        } else if (a == 8 && x < 100 && x > 9) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'LXXX';

        } else if (a == 9 && x < 100 && x > 9) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'XC';

        }
        //Fin Dixaines pour 100<x<9

        //--------------------------------------------------------------------------------------------------------------------------------//

        /* Gestion des Unités */
        //--------------------------------------------------------------------------------------------------------------------------------//

        //Début Unités pour x > 999 et x < 3999
        if (r == 1 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'I';
        } else if (r == 2 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'II';
        } else if (r == 3 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'III';
        } else if (r == 4 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'IV';

        } else if (r == 5 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'V';

        } else if (r == 6 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VI';

        } else if (r == 7 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VII';

        } else if (r == 8 && x > 999 && x < 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VIII';

        } else if (r == 9 && x > 999 && x <= 3999) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'IX';

        }
        //Fin Unités pour 3999<x<999

        //Début Unités pour x > 99 et x < 1000
        if (e == 1 && x > 99 && x < 1000) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'I';
        } else if (e == 2 && x > 99 && x < 1000) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'II';
        } else if (e == 3 && x > 99 && x < 1000) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'III';
        } else if (e == 4 && x > 99 && x < 1000) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'IV';

        } else if (e == 5 && x > 99 && x < 1000) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'V';

        } else if (e == 6 && x > 99 && x < 1000) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VI';

        } else if (e == 7 && x > 99 && x < 1000) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VII';

        } else if (e == 8 && x > 99 && x < 1000) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VIII';

        } else if (e == 9 && x > 99 && x < 1000) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'IX';

        }
        //Fin Unités pour 1000<x<99

        //Début Unités pour x > 9 et x < 100
        if (z == 1 && x > 9 && x < 100) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'I';
        } else if (z == 2 && x > 9 && x < 100) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'II';
        } else if (z == 3 && x > 9 && x < 100) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'III';
        } else if (z == 4 && x > 9 && x < 100) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'IV';

        } else if (z == 5 && x > 9 && x < 100) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'V';

        } else if (z == 6 && x > 9 && x < 100) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VI';

        } else if (z == 7 && x > 9 && x < 100) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VII';

        } else if (z == 8 && x > 9 && x < 100) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VIII';

        } else if (z == 9 && x > 9 && x < 100) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'IX';

        }
        //Fin Unités pour 100<x<9

        //Début Unités pour x > 0 et x < 10
        if (x == 1) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'I';
        } else if (a == 2 && x < 10) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'II';
        } else if (a == 3 && x < 10) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'III';
        } else if (a == 4 && x < 10) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'IV';

        } else if (a == 5 && x < 10) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'V';

        } else if (a == 6 && x < 10) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VI';

        } else if (a == 7 && x < 10) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VII';

        } else if (a == 8 && x < 10) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'VIII';

        } else if (a == 9 && x < 10) {
            document.getElementById('Romain').value = document.getElementById('Romain').value + 'IX';

        }
        //Fin Unités pour 10<x<0


    } else if (x >= 4000) {
        document.getElementById('Romain').value = document.getElementById('Romain').value + 'Max = 3999';
    } else if (x < 0) {
        document.getElementById('Romain').value = document.getElementById('Romain').value + 'Minimum = 0';
    }

}
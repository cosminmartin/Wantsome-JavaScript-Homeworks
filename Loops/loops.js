/*
1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este
par sau impar si va raporta acest lucru in consola. (exemplu: '2 este numar par');
Scrieti functia in doua variante: while si for
*/

(function parImpar () {
    for (var x = 0; x <= 20; x++) {
        if (x === 0) {
                console.log(x +  " este numar par");
        }
        else if (x % 2 === 0) {
                console.log(x + " este numar par");
        }
        else {
                console.log(x + " este numar impar");
        }
    }
    return 'verifica daca numarul curent este par sau impar';
})();


(function parImpar () {
        var x = 0;
        while (x < 20) {
           x++;
           if (x === 0) {
             console.log(x +  " este numar par");
           }
           else if (x % 2 === 0) {
             console.log(x + " este numar par");
           }
           else {
             console.log(x + " este numar impar");
           }
        }
   return 'verifica daca numarul curent este par sau impar';
})();


/*
2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul
curent cu 9 si se va afisa rezultatul (exemplu:'3*9=27').
Scrieti functia in doua variante: while si for
*/

(function multiplyBy9() {
        for (var x = 0; x <= 10; x++) {
          console.log(x*9);
        }
        return 'multiplicarea unui numar cu 9';
})();
      
      
(function multiplyBy9() {
        var x = 0;
        while (x < 10) {
          x++;
          console.log(x*9);
        }
        return 'multiplicarea unui numar cu 9';
})();


/*
3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
(exemplu: 1 * 0 = 0
          1 * 1 = 1
          ...
          1 * 10 = 10)
Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + '\n'.
*/

(function multiplicationTable() {
        var res = '\n';
        for (var x = 1; x <= 10; x++) { 
          for (var y = 1; y <= 10; y++) {
          res += x * y + ' ';
        }
         res += '\n';
        }
        return res;
})();


/*
4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se poate obtine pentru
punctajele incepand de la 1 la 10. (exemplu: 'Pentru 2, obtii calificativul E. \n Pentru 7, obtii calificativul B \n ...samd').
Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei dezvoltate la tema anterioara!
*/

(function calificative () {
        for (punctaj = 0; punctaj <=10; punctaj++) {
        var verifCalificativ = function (punctaj) {
                if (punctaj <= 0) {
                return 'Punctaj incorect';
                }
                if (punctaj <= 3) {
                calificativ = 'E';
                return 'Calificativul corespunzator punctajului ' + punctaj + ' este ' + calificativ;
                }
                if (punctaj <= 6) {
                calificativ = 'D';
                return 'Calificativul corespunzator punctajului ' + punctaj + ' este ' + calificativ;
                }
                if (punctaj <= 8) {
                calificativ = 'B';
                return 'Calificativul corespunzator punctajului ' + punctaj + ' este ' + calificativ;
                }
                if (punctaj == 9) {
                calificativ = 'A';
                return 'Calificativul corespunzator punctajului ' + punctaj + ' este ' + calificativ;
                }
                if (punctaj == 10) {
                calificativ = 'A+';
                return 'Calificativul corespunzator punctajului ' + punctaj + ' este ' + calificativ;
                }
                else {
                return 'Punctaj incorect';
                }
        }
        console.log(verifCalificativ(punctaj));
        }
        return 'Punctajele incepand de la 1 la 10';
})();

//1. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".


function verifGen (cnp) {
    var verifCnp = /^\d{13}$/;
    if(verifCnp.test(cnp)) {
        if (cnp.charAt(0) == '1' ) {
            return 'Persoana verificata este de sexul Masculin';
        }
        if (cnp.charAt(0) == '2' ) {
            return 'Persoana verificata este de sexul Feminin';
        }
        else {
            return 'CNP gresit';
        }
    }
    else {
        return 'CNP gresit';
    }
    
}



/*2. Scrieti o functie de tip function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
1-3 = E
3-6 = D
7-8 = B
9 = A
10 = A+
Functia va returna un text de forma "Calificativul corespunzator punctajului [punctaj] este [calificativ]".*/


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


/*3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite.*/

//Named function
function carBrand (marca) {
    if (marca == 'Toyota') {
        tara = 'Japonia';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Audi') {
        tara = 'Germania';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Opel') {
        tara = 'Germania';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Citroen') {
        tara = 'Franta';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Fiat') {
        tara = 'Italia';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Dacia') {
        tara = 'Romania';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    else {
        return 'Marca este necunoscuta.'
    }
}

//Function expression
var carBrand = function (marca) {
    if (marca == 'Toyota') {
        tara = 'Japonia';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Audi') {
        tara = 'Germania';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Opel') {
        tara = 'Germania';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Citroen') {
        tara = 'Franta';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Fiat') {
        tara = 'Italia';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Dacia') {
        tara = 'Romania';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    else {
        return 'Marca este necunoscuta.'
    }
}


//Immediately Invoked Function Expression
(carBrand = function (marca) {
    if (marca == 'Toyota') {
        tara = 'Japonia';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Audi') {
        tara = 'Germania';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Opel') {
        tara = 'Germania';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Citroen') {
        tara = 'Franta';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Fiat') {
        tara = 'Italia';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    if (marca == 'Dacia') {
        tara = 'Romania';
        return 'Marca ' + marca + ' se produce in ' + tara + '.';
    }
    else {
        return 'Marca este necunoscuta.'
    }
})();



/*4. Scrieti o functie de tip IIFE care afiseaza in consola: "Afisez, deci ma autoapelez". Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin deschiderea paginii html in browser.*/

(autoAfis = function (textApel = 'Afisez, deci ma autopelez.') {
    document.write(textApel);
})();

//fisier html: indexIIFE.html
//fisier js: test.js
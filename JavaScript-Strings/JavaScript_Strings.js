/* 1.Scrieti o functie care verifica daca un input este sau nu de tip string. */

/*
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));*/

/* 2. Scrieti o functie care verifica daca un string este gol sau nu. */

/* 3. Scrieti o functie care accepta ca input un string si il transforma intr-un array de cuvinte: */

function string_to_array(str) {
	var string_to_array = str.split(',');
  	return string_to_array;
}

console.log(string_to_array('Robin,Singh'));

/* 4. Scrieti o functie care transforma un string in forma abreviata: */
/*function abbrev_name (strRS) {
    var LastName = strRS.trim().split(' ');
    if (strRS.length>1) {
        return(strRS[0] + ' ' + strRS[1].charAt(0) + '.');
    }
    return strRS;
}*/

function abbrev_name(strRS) {
    var LastName = strRS.split(',');
    var res = LastName + strRS.charAt(6) + '.';
    return res;
}

console.log(abbrev_name('Robin Singh'));

/* 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ): */
function capitalize(firstLetter) {
    var firstLetter = 'js string exercises';
    var capitalize = firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1);
    return capitalize;
} 

console.log(capitalize('js string exercises'));

/* 6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului: */

/* 7. Scrieti o functie care specifica daca caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu: */

/* 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string: */

/* 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string: */

/* 10. Scrieti o functie care compara doua string-uri case-insensitive: */

/* 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital: */
function Uncapitalize(Letter1) {
    var Letter1 = 'Js string exercises';
    var Uncapitalize = Letter1.charAt(0).toLowerCase() + Letter1.slice(1);
    return Uncapitalize;
} 

console.log(Uncapitalize('Js string exercises'));
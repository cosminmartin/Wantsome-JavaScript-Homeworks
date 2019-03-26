/* 1.Scrieti o functie care verifica daca un input este sau nu de tip string. */
function is_string (s) {
    return typeof s === 'string';
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


/* 2. Scrieti o functie care verifica daca un string este gol sau nu. */
function is_blank (empty) {
	return (!empty || 0 === empty.length);
}
console.log(is_blank(''));
console.log(is_blank('abc'));


/* 3. Scrieti o functie care accepta ca input un string si il transforma intr-un array de cuvinte: */

function string_to_array(str) {
	var string_to_array = str.split(',');
  	return string_to_array;
}
console.log(string_to_array('Robin,Singh'));


/* 4. Scrieti o functie care transforma un string in forma abreviata: */
function abbrev_name(strRS) {
    var secondName = strRS.slice(0,7) + '.';
    return secondName; 
console.log(abbrev_name('Robin Singh'));


/* 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ): */
function capitalize(firstLetter) {
    var firstLetter = 'js string exercises';
    var capitalize = firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1);
    return capitalize;
} 
console.log(capitalize('js string exercises'));


/* 6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului: */
function truncate_string (untruncated, length) {
    return untruncated.substring(0,length);
}
console.log(truncate_string('Robin Singh',4));


/* 7. Scrieti o functie care specifica daca caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu: */
function isUpperCaseAt(word, nr) {
    return word[nr] === word[nr].toUpperCase();
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));


/* 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string: */
function insert (stringWe, stringJs, location) {
    return [stringWe.slice(0,location), stringJs, stringWe.slice(location)].join(''); 
}
console.log(insert('We are doing some exercises.','Javascript ',18));


/* 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string: */
function remove_first_occurence (text, searchWord) {
    var index = text.indexOf(searchWord);
    return text.slice(0, index) + text.slice(index + searchWord.length);
}
console.log(remove_first_occurence('The quick brown fox jumps over the lazy dog', 'the'));


/* 10. Scrieti o functie care compara doua string-uri case-insensitive: */
function compare_strings (str1, str2) {
    return str1 !== str2;
}
console.log(compare_strings('abcd', 'AbcD'));
//true


/* 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital: */
function Uncapitalize(Letter1) {
    var Letter1 = 'Js string exercises';
    var Uncapitalize = Letter1.charAt(0).toLowerCase() + Letter1.slice(1);
    return Uncapitalize;
} 
console.log(Uncapitalize('Js string exercises'));
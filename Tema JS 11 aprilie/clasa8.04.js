//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - outpot 15 // myFunction(10,10) - output 100

function suma(a,b) {
  if (a != b) { 
    return a+b;
}
  else {
    return (a+b)*5;
  }
}


//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function trueIf30(a,b) {
    if (a === 30 && b === 30) {
      return true;
    }
    else if (a + b === 30) {
      return true;
    }
    else {
      return false;
    }
  }


//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkOrAddString (str) {
    
    if (str.includes('JS')) {
        return str;
    }
    else {
        return 'JS' + str;
    }
}


//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicates(str){
  var duplicate = "";
  for (var i=0;i<str.length;i++){
      if(duplicate.indexOf(str.charAt(i))==-1){
         duplicate += str[i];
      }
}
return duplicate;
}


//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

function longestString (str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let lengthArrElement = arr[i].length;    
        let maxStr = Math.max(lengthArrElement);
        let longStr = ;
        return longStr;
    }
}

//element.length -= maxStr 
//return


//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function outputAsterisk(){
  for(var i=1;i<=5;i++){
    var asterisk = "*";
    console.log(asterisk.repeat(i));
  }
}


//ex7
  /*const negativeNumbers = [];

  function extractNegativeNumbers(numbers) {
      // append any negative numbers found in the numbers array 
      // into the negativeNumbers array constant variable above
  }
  extractNegativeNumbers([1,2,-5,4,-6])*/

const negativeNumbers = [];
function extractNegativeNumbers(numbers) {
    for (var i=0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
             negativeNumbers.push(numbers[i]);
        }
    }
  return negativeNumbers;
}
console.log(extractNegativeNumbers([1,2,-5,4,-6]));


//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function arithmeticOperators (nr1, nr2, operator) {
  if (operator === 'add') {
      return nr1 + nr2;
  }
  else if (operator === 'substract') {
      return nr1 - nr2;
  }
  else if (operator === 'multiply') {
      return nr1 * nr2;
  }
  else if (operator === 'divide') {
      return nr1 / nr2;
  }
  else {
      return "Please use a valid operator: 'add','substract','multiply' or 'divide'."
  }
}


//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDiv (number) {
  var number;
  if (number % 3 === 0 && number % 5 === 0) {
  	return "BOTH";
 	} 
	else if (number % 3 === 0) { 
   return "THREE";
 	} 
	else if (number % 5 === 0){
   return "FIVE";
 	}
 	else {
   return number;
 }
}

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38


//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function validPin(PIN) {
  var fourDigits = /^\d{4}$/;
  var sixDigits = /^\d{6}$/;
if (fourDigits.test(PIN)||sixDigits.test(PIN)){
  return true;
  } 
  else {
  return false;
  }
}


//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}


//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

function isSquareNumber(nr) {
  let str = nr.toString();
  let lastChar = str.charAt(str.length-1);
  let lastNr = parseFloat(lastChar);
  let squareNrStr = [0, 1, 4, 5, 6, 9];
    for(i=0; i < squareNrStr.length; i++) {
        var squareLastNr = squareNrStr[i];
  }
  if(lastNr === squareLastNr) {
    return true;
      }
  else {
    return false;
      }
} //not working 

function isSquareNumber(nr){
	if(Math.sqrt(nr) % 1 === 0){
       return true
  } 
	else {
       return false;
  }
}


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

function isAnagram(strA, strB) {
  var a = strA.split("").sort().join("");
  var b = strB.split("").sort().join("");
      return a === b;
}
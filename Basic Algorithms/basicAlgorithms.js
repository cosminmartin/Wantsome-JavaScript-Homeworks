//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
    function protectEmail(em) {
        var splitEmail = em.split('@');
        var emailName = splitEmail[0]; 
        var slicedEmail = emailName.slice(0,3);
        var protectedEmail = slicedEmail + '...' + '@' + splitEmail[1];
        return protectedEmail;
    }

    
//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
    function capitalizeFirstLetter(text) {
        var splitText = text.split(' ');
        for (var i = 0; i < splitText.length; i++) {
            var finalText = splitText[i].toUpperCase(); 
        }
        return finalText;
    }

   

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function lowerUpper(string) {
	var textToChange = "";
    for(var i = 0; i < string.length; i++) {
      var char = string[i];
      if(char === char.toUpperCase()) {
        textToChange += char.toLowerCase();
      }
      else {
        textToChange += char.toUpperCase();
      }           
    }
    return textToChange;
}
 

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

    function concatString(text, nr) {  
        repeatedText = text.repeat(nr);
            return repeatedText;
    }


//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
   
    function verifyPalindrome(textToVerify) {
        var splitText = textToVerify.split('');
		var splitTextReversed = splitText.reverse();
		var joinReversedText = splitTextReversed.join('');
			if (textToVerify === joinReversedText) {
				return textToVerify + ' is a palindrome';
			}
			else {
				return textToVerify + ' is not a palindrome';
			}
    }   


//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

var numbers = [
    [243, 12, 23],
    [34, 2, 1, 553],
    [5, 65, 4]
]

function largestNumbers(numbers) {
	var largest = 0;
	for (var i = 0; i < largest; i++){
    if (numbers[i] > largest) {
        var largest = numbers[i];
    }
	return largest;
}
}

//functioneaza doar cu un simplu array, nu si cu nested array

//Ex7
// Implementati o functie care face reverse la un string

function reverseString(str) {
    var splitString = str.split('');
    var reverseArray = splitString.reverse();
    var reversedString = reverseArray.join('');
            return reversedString;
}

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function calculFactorial(numar) {
    if (numar === 0 || numar === 1)
      return 1;
    for (var i = numar - 1; i >= 1; i--) {
      numar *= i;
    }
    return numar;
  }

 // 4! = 4*3*2*1 = 24 (formula: N!=N*(N-1)!)
 

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function stringEnds (firstStr, secondStr) {
    if (firstStr.endsWith(secondStr)) {
        return firstStr + ' ends with ' + secondStr;
    }
    else {
         return firstStr + ' doesn\'t end with ' + secondStr;
    }
}


//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat
var arr = ['apple', true, 5, 'banana', 9, 3, false]

/*function getNumbers(arr) {
    var arrToString = arr.toString();
            var num = arrToString.replace(/[^0-9]/g, ''); 
            return parseInt(num,10);
}*/  


function returnFirstVerifiedValue (arr, verifyArr) {
    return verifyArr.charAt(0);
} 

//nu am inteles la ce se refera 'functie de adevar';
//nu am inteles prea bine cum pot fac o functie ca si parametru

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string

function containsString (firstStr, secondStr) {
    if (firstStr.includes(secondStr)) {
        return firstStr + ' contains ' + secondStr;
    }
    else {
         return firstStr + ' doesn\'t contain ' + secondStr;
    }
}


// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata


// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

function remove(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (isNaN(arr[i]) || arr[i] === 0 || arr[i] === false || arr[i] === "" || arr[i] === undefined || arr[i] === null) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate

function repeatString (str, nr) {
    return str.repeat(nr);
}




//Un fisier JavaScript care sa includa: 

//A
//Rezolvarea la 5 probleme implementate de catre voi pe codewars.com - Folositi sintaxa ES6


//A1
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), 
// from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

const divisors = (integer) => {
  let result = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      result.push(i);  
    }   
  }
  return result.length ? result : integer + ' is prime';
}


//A2
// Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.
// Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.
// Example:
// Arr: [1,3,4,4,4,4,5]
// Example Arr: [4,1,2,3,5]
// Result: [4,4,4,4,1,3,5]

const sortByExample = (arr,exampleArr) => {
  let result = [];
  for(let i = 0; i < exampleArr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] === exampleArr[i]){
        result.push(arr[j]);
      }
    }
  }
  return result;
}

sortByExample([1,3,4,4,4,4,5],[4,1,2,3,5])


//A3
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// Note: keep the original order of the names in the output.

const friend = (friends) => {
  let myFriends = [];
  for(let i = 0; i < friends.length; i++) {
    if(friends[i].length == 4) {
      myFriends.push(friends[i]);
    }
  }
  return myFriends.sort();
}

friend(["Ryan", "Kieran", "Jason", "Yous"]);

//A4
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

const countVowels = (str) => {
	return str.replace(/[^aeiou]/gi, '').length;
}

countVowels('abracadabra');

//A5
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: 
// a grade for the exam and a number of completed projects.

// This function should take two arguments: 
// exam - grade for exam (from 0 to 100); 
// projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

// Examples:
// finalGrade(100, 12);  // 100
// finalGrade(99, 0);    // 100
// finalGrade(10, 15);   // 100

// finalGrade(85, 5);    // 90

// finalGrade(55, 3);    // 75

// finalGrade(55, 0);    // 0
// finalGrade(20, 2);    // 0


const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10){ 
    return 100;
  }
  else if (exam > 75 && projects >= 5){ 
    return 90;
  }
  else if (exam > 50 && projects >= 2){
      return 75;
  }
  else {
    return 0; 
  }
}

//B
//Rescrieti folosind sintaxa ES6 cate o problema de la temele anterioare de la capitolul JavaScript ( 5 probleme )

//B1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - outpot 15 // myFunction(10,10) - output 100

//ES5
function suma(a,b) {
    if (a != b) { 
      return a+b;
  }
    else {
      return (a+b)*5;
    }
  }

//ES6
const suma = (a,b) => {
  if (a != b)
    return a + b;
  else 
    return (a + b) * 5;
}


//B2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

//ES5
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

//ES6
const trueIf30 = (a,b) => {
  if (a === 30 && b === 30)
    return true;
  else if (a + b === 30)
    return true;
  else 
    return false;
}
  

//B3
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

//ES5
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

//ES6
const removeVowels = (str) => {
  return str.replace(/[aeiou]/gi, '');
}


//B4
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

//ES5
function checkOrAddString (str) {
    
  if (str.includes('JS')) {
      return str;
  }
  else {
      return 'JS' + str;
  }
}

//ES6
const checkOrAddString = (str) => {
  if (str.includes('JS'))
    return str;
  else
    return 'JS' + str;
}


//B5
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

//ES5
function concatString(text, nr) {  
  var repeatedText = text.repeat(nr);
      return repeatedText;
}

//ES6
const concatString = (text, nr) => {
  let repeatedText = text.repeat(nr);
    return repeatedText;
}
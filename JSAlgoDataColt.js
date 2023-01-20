/* 

*Algorithms

*Big O notation

*Classify algorithms according to how their run time or space requirements grow as the input size grows

 */
Examples:

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo(n) {
  return n * (n + 1) / 2;
}

/* 
* Both do the same thing, but which is better?
*/
// Using method performance.now() to check how much time does it take to be completed

performance.now()  // returns the time in miliseconds since the session is active

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// Time Elapsed: 1.9589000000003725 seconds.

//The number of operations affect the overall performance

//on this example, there are 3 operations
return n * (n + 1) / 2; 

//on this example, there are x operations depending on n value + operations and assignments (5n + 2)(check countOps2.png)
let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }


//colt app to check operation time:
// https://rithmschool.github.io/function-timer-demo/
//alt 0178 = ²

//BIG O EXPRESSIONS

O(500)  ------>   O(1)  //this means that even having 500 operations , the function is constant, so its repesented by 1  //fast

O(2n)   ------>   O(n)  //this means that no matter how is n multiplied, the growing of the functions depends on n       //slower

O(1000n + 50) --> O(n)

O(13n²)  ------>  O(n²)                                                                                                  //slowest

O(n² + 5n + 8) --> O(n²)


//quiz 2
//Question 4:

let array = [1,2,3,4,5,6,7,8]

function onlyElementsAtEvenIndex(array) {                                   // O(n)
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
  
}

//Question 5:

function subtotals(array) {                                                 //O(n²)
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
      var subtotal = 0;
      for (var j = 0; j <= i; j++) {
          subtotal += array[j];
      }
      subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

//Space Complexity:

let num = 123456  //constant space O(1), same for boolean, null, undefined
let word = "word" //each lette takes space O(n)
let array1 = [1,2,3] //each number take space O(n), n = array.length, objects follow the same rule

//Example
//doubles each element of an array

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);  //<------ each element from arr * 2, arr modifies how much space is being taken depending of the quantity of elements on the array
  }                           //this means this is clasified as a O(n) space.                           
  return newArr;
}


//logarithmic time complexity

// log2 (8) = 3 -------------> 2³ = 8


//BIG O Objects

inserting - O(1)
removal - O(1)
Searching - O(n)
accessing - O(1)
Object.keys - O(n)
Object.values - O(n)
Object.entries - O(n)
hasOwnProperty - O(1)

//BIG O Arrays

/* 
Inserting ,removing , searching , accessing

when pushed or removed from the end of the array  , O(1)
when done on the begining of the array , O(n)
same for searching through an array , O(n) 
accessing, O(1)  
*/

push - O(1)
pop - O(1)
shift - O(n)
unshift - O(n)
concat - O(n)
slice - O(n)
splice - O(n)
sort - O(n*log n)
forEach/map/filter/reduce/etc. - O(n)

//PROBLEM SOLVING

1. Understand the problem

Restate the problem in your own words
What are the inputs?
What are the outputs that should come from the solution of the problem?
Can the outputs be detemined by the inputs?
How to label the impotant pieces of data?

2.Create concrete examples to help you visualize the possible solution


3.Break it down.

Explicity write out the steps you need to take.

Example:

Write a function which takes in a string and returns counts of each character in the string

1-Understanding the problem:

1st- Count each character from a string and return it in an Object
2nd- Input is a string
3rd- output is an object with the count of each character
4th- the output depend on the inputs
5th- function = charCount(), no more labels

2-basic example:

charCount("hello")
{
  h:1
  e:1
  l:2
  o:1
}

3-Break it down:

function charCount(str){
  //do something
  //return an object with keys that are alphanumeric characters in the string, and a value that corresponds with the quantity of keys
}

function charCount(str){
  //make object to  return at end
  //loop over string, for each character
    //if the char is a number/letter and is key in object, add one to count
    //if the char is a number/letter and not in object, add it to object and set value to 1
    //if the char is a something else(space, period, etc.) dont do anything
  //return object at the end
}

4-Solve or Simplify


//make object to  return at end
let result = {}

function charCount(str){
  //loop over string, for each character
  for(var i = 0 ; i < str.length ; i++){
    var char = str[i].toLowerCase()
    //if the char is a number/letter and is key in object, add one to count
    if(result[char] > 0) {
      result[char]++;
    }
    //if the char is a number/letter and not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    };
    //if the char is a something else(space, period, etc.) dont do anything
  //return object at the end
    return result;
  }
    
}

5- Refactor    

//first refactor which uses a regular expresions to filter non letters and numbers.
//also the loop is replaced with for of
function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/a-z0-9/.test(char)) { // /a-z0-9/ is a regular expresion that automaticaly filters from a to z and from 0 to 9
      obj [char] = ++obj [char] || 1; 
    }
  }
  return obj;
} 


// function that filter chars by code

function isAlphaNumeric(str) {
  var code;

  for (var i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if(!(code > 47 && code < 58) && //numeric (0-9)
       !(code > 64 && code < 91) && //upper alpha (A-Z)
       !(code > 96 && code < 123)) { //lower alpha (a-z)
          return false;
    }
  }
  return true;
}

isAlphaNumeric("text");

//modified function for isAlphaNumeric

function charCount(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) { 
      char = char.toLowerCase();
      obj [char] = ++obj [char] || 1; 
    }
  }
  return obj;
} 
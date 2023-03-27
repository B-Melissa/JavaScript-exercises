//Exercise 1:
//In your JavaScript file create a variable called myName with your name as the value.
//Put your name inside string quotes, e.g., "my name".
//Then add a line of code to print the variable name to the console after the previous message.

var myName = "Melissa"; 

console.log("My name is " + myName + ".");


/*Exercise 2
Create a variable called age with a number that is your age. Do not use string quotes for numbers.
Add a line to print that variable in the console. Save the file and reload the page.
You should see your name and your age.
*/

var age = 26; 

console.log("I am " + age + " years old.");

//Exercise 3
//Create a variable called juliaAge with a value 32.
//Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age.
//Print the value of ageDiff.
// You should see your age and the age difference. If you are younger than Julia, you should see a negative number.

var juliaAge = 32;
var ageDiff = age - juliaAge

//console.log(ageDiff); This used to be part of E3


/*Exercise 4
Write a conditional that compares the variable with your age with the number 21. It should print
either "You are older than 21" or "You are not older than 21", appropriately, depending on your age.
Try changing your age in the JavaScript file to make sure the other message prints when it should.
*/

// if (age > 21) {
//     message = "You are older than 21.";

// } else {
//     message ="You are not older than 21.";
// }
// console.log(message);

/*Exercise 5
Write a conditional that compares your age with Julia's age.
This conditional will need to test if you are older, younger, or the same age, and print, appropriately.
either "Julia is older than you", "Julia is younger than you", or "You have the same age as Julia".
*/
var age = 32; 
var juliaAge = 32;
if (age < juliaAge) {
    result = "Julia is older than you.";
} else if (age > juliaAge) {
    result = "Julia is younger than you.";
} else {
    result = "You have the same age as Julia.";
}
console.log(result);


//Exercise 6 - Sorting an Array and "for loop"

// const PurplePhoenix = ["Marta", "Alireza", "Sonja", "Sabir", "Mila", "Phouc", "Raul", "Melissa"];
// PurplePhoenix.sort();

//  console.log(PurplePhoenix[0]);
//  console.log(PurplePhoenix[7]);

// for (let i = 0; i < 1; i++) {
//    console.log(PurplePhoenix);
// }

//Exercise 7 Array filter() Methode

// let PurplePhoenixAge = [10, 13, 16, 15, 14, 9, 28, 22];
// PurplePhoenixAge.sort(function (a, b) { return a - b });
// const odds = PurplePhoenixAge.filter((num) => num % 2 === 1);
// console.log(odds);

//for (let i = 0; i < PurplePhoenixAge.length; i++) {
 //console.log(PurplePhoenixAge[i]);
//}
    

//Exercise 7 for...of Loop

//  const purplePhoenixAge = [10, 13, 16, 15, 14, 9, 28, 22];
//  const odds = [];
// for (var element of purplePhoenixAge) {
//      console.log('element :>> ', element);
//    if (element % 2 === 1) {
//        odds.push(element);
//       }
// }


// console.log('purplePhoenixAge :>> ', purplePhoenixAge[1]);
//  for (let i = 0; i < purplePhoenixAge.length; i++) {
//      if (purplePhoenixAge[i]% 2 === 1) {
//          odds.push(purplePhoenixAge[i]);
         
//     }
//     console.log('odds :>> ', odds);
//  }
//  console.log(odds);

//Exercise 7 while Loop

// const PurplePhoenixAge = [10, 13, 16, 15, 14, 9, 28, 22];
// PurplePhoenixAge.sort(function (a, b) { return a - b });
// let i = 0;
// let PurplePhoenixAgelength = PurplePhoenixAge.length;
// while (i < PurplePhoenixAgelength) {
//     if (PurplePhoenixAge[i] % 2 === 1) {
//         console.log(PurplePhoenixAge[i]);
//     }
//     i++;
// }


// Exercise 8 Find the lowest number with a function and without Min
// let numbers = [4, 2, 8, 9, 5];
//  let lowestNumber = findLowestNumber(numbers);

//  function findLowestNumber(numbers) {
//      let lowestNumber = numbers[0];                    // set the first element as the initial lowest number
     
//    for (let i = 0; i < numbers.length; i++) {          //schleife läuft so häufig wie es parameter im array gibt hier 6x startet von 0 weil i=0
//      if (numbers[i] < lowestNumber) {
//        lowestNumber = numbers[i];
//      }
//    }
//    return lowestNumber;
// }
 
function findMax(zahl) {

var maxNumber = zahl[0]
for (let i = 0; i < zahl.length; i++) {
    console.log('zahl[i] :>> ', zahl[i]);
    if (zahl[i] > maxNumber) {
       console.log("inside if condition")
       maxNumber = zahl[i]
    }
   
    
    
}
console.log('maxNumber :>> ', maxNumber);

}

let numbers = [4, 2, 8, 9, 5];
let numbers2= [400,699,7,8,9,23003]
 
findMax(numbers)
findMax(numbers2)





 console.log("The lowest in the array is: " + lowestNumber); 
 
 

// E8 without a function

// let array = [12, 28, 33, 7, 3, 1];
// let smallest = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (smallest > array[i]) {
//         smallest = array[i];
//     }
// }
// console.log(smallest);

let array = [12, 28, 33, 7, 3, 1];
let highest = array[0];

for (let i = 0; i < array.length; i++) {
    if (highest > array[i]) {
        highest = array[i];
    }
}
console.log(highest);
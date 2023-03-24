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

const PurplePhoenix = ["Marta", "Alireza", "Sonja", "Sabir", "Mila", "Phouc", "Raul", "Melissa",];
PurplePhoenix.sort();

 console.log(PurplePhoenix[0]);
 console.log(PurplePhoenix[7]);

for (let i = 0; i < 1; i++) {
   console.log(PurplePhoenix);
}

//Exercise 7 - Looping over an Array

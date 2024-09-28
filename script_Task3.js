// Q1
var age = 27;
if (age > 18) {
  console.log("You are an adult");
}

// Q2
let score = 45;
if (score <= 50) {
  console.log("You failed the test");
}

// Q3
let name = "John";
if (name === "John") {
  console.log("Hello, John");
}

// Q4
let day = "Monday";
if (day !== "Saturday" && day !== "Sunday") {
  console.log("It's a weekday");
}

// Q5
let num = 4;
if (num % 2 === 0) {
  console.log("The number is even");
}

// Q6
let char = "a";
if (char.match(/[a-zA-Z]/)) {
  console.log("It's a letter");
}

// Q7
let list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
}

// Q8
let x = 5;
if (x > 0) {
  console.log("x is a positive number");
}

// Q9
let y = -5;
if (y < 0) {
  console.log("y is a negative number");
}

// Q10
let z = 9;
if (z % 3 === 0) {
  console.log("z is a multiple of 3");
}

// Q11
let gpa = 3.5;
if (gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
}

// Q12
let password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}

// Q13
 age = 30;
if (age >= 18 && age <= 65) {
  console.log("You are of working age");
}

// Q14
let color = "red";
if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}

// Q15
function isNumber(input) {
  if (isNaN(input)) {
    console.log(input + " is not a number");
  } else {
    console.log(input + " is a valid number");
  }
}

isNumber(11); 
isNumber("19"); 
isNumber("xyz"); 
isNumber("17.5");
isNumber("21F");

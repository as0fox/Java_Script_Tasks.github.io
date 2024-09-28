// Q1
let numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(num => console.log(num));

// Q2
let numbers2 = [1, 2, 3, 4, 5];
let squaredNumbers = numbers2.map(num => num * 2);
console.log(squaredNumbers);

// Q3
let numbers3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Q4
let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers4.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Q5
let fruits = ["apple", "banana", "cherry"];
fruits.sort();
console.log(fruits);

// Q6
let fruits2 = ["apple", "banana", "cherry"];
fruits2.reverse();
console.log(fruits2);

// Q7
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = arr1.concat(arr2);
console.log(combinedArray);

// Q8
let numbers5 = [1, 2, 3, 4, 5, 6];
let slicedArray = numbers5.slice(2, 4);
console.log(slicedArray);

// Q9
let numbers6 = [1, 2, 3, 4, 5];
numbers6.splice(2, 1);
console.log(numbers6);

// Q10
let numbers7 = [1, 2, 3, 4, 5];
let index = numbers7.indexOf(3);
console.log(index);

// Q11
let numbers8 = [1, 2, 3, 4, 5];
let stringFromArray = numbers8.join(", ");
console.log(stringFromArray);

// Q12
let str = "1,2,3,4,5";
let arrayFromString = str.split(",");
console.log(arrayFromString);

// Q13
let numbers9 = [1, 2, 3, 4, 5];
console.log(numbers9.length);

// Q14
let numbers10 = [1, 2, 3, 4, 5];
for (let num of numbers10) {
  console.log(num);
}

// Q15
let numbers11 = [1, 2, 3, 4, 5];
for (let index in numbers11) {
  console.log(index);
}

// Q16
let numbers12 = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers12));

// Q17
let arrayLikeObject = { 0: "a", 1: "b", 2: "c", length: 3 };
let realArray = Array.from(arrayLikeObject);
console.log(realArray);

// Q18
let newArray = Array.of(1, 2, 3);
console.log(newArray);

// Q19
let numbers13 = [1, 2, 3, 4, 5];
numbers13.fill(0, 0, 3);
console.log(numbers13);

// Q20
let numbers14 = [1, 2, 3, 4, 5];
numbers14.copyWithin(1, 3, 4);
console.log(numbers14);

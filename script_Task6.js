
// Q1
let person = { name: "Adam", age: 25, gender: "male" };
console.log(person.name, person.age, person.gender);

// Q2
let person2 = { name: "Adam", age: 25 };
person2.gender = "male";
console.log(person2);

// Q3
let person3 = { name: "Adam", age: 25 };
person3["gender"] = "male";
console.log(person3);

// Q4
let person4 = { name: "Adam", age: 25 };
console.log(person4.name);

// Q5
let person5 = { name: "Adam", age: 25 };
console.log(person5["name"]);

// Mid

// Q6
let person6 = { name: "Adam", age: 25, gender: "male" };
for (let key in person6) {
  console.log(`${key}: ${person6[key]}`);
}

// Q7
let person7 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.keys(person7));

// Q8
let person8 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.values(person8));

// Q9
let person9 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.entries(person9));



// Q10
let person10 = { name: "Adam", age: 25 };
let additionalInfo = { gender: "male" };
let mergedPerson = Object.assign({}, person10, additionalInfo);
console.log(mergedPerson);

// Q11
let person11 = { name: "Adam", age: 25 };
Object.freeze(person11);
person11.age = 30; 
console.log(person11);

// Q12
let person12 = { name: "Adam", age: 25 };
Object.seal(person12);
person12.age = 30; 
person12.gender = "male";
console.log(person12);

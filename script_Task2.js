

//------------Q1-------------------

function findSmallest(arr) {
  let small = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }

  return small;
}

console.log(findSmallest([30, 45, 60, 7])); 
   

//------------Q2-------------------

function alphabeticalOrder(str) {

  return str.split('').sort().join('');

}

console.log(alphabeticalOrder('hello')); 

//------------Q3-------------------

var fact=1;

var num=prompt("enter your number to get factorial to this number")

for(var i=num;i>1;i--){

fact*=i;

}

console.log("factorial  ",num," is : " , fact);


// -----------Q4-------------------

if(num%2==0){
  console.log("the number ",num," is Even " );
}
else{
console.log("the number ",num," is Odd" );
}

//----------------Q5----------------


function evenNum(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));



// ---------------Q6--------------
function numbersOnly(arr) {
  return arr.filter(item => typeof item === 'number');
}

console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 

// ---------------Q7--------------
function addUp(n) {
  return (n * (n + 1)) / 2; 
}


console.log(addUp(8)); 

// ---------------Q8--------------
function minMaxLengthAverage(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = arr.reduce((sum, num) => sum + num, 0) / length;
  return [min, max, length, average];
}


console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 

// ---------------Q9--------------
function romanNumbers(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let roman = '';
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }
  return roman;
}


console.log(romanNumbers(1989)); 

// ---------------Q10--------------
function countWords(str) {
  return str.trim().split(/\s+/).length;
}


console.log(countWords('hello from CodingAcademy!'));

// ---------------Q11--------------
function multiplyByLength(arr) {
  const length = arr.length;
  return arr.map(num => num * length);
}

console.log(multiplyByLength([4, 2, 5]));

// ---------------Q12--------------
function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}


console.log(checkEnding("CodingSchool", "Ac")); 

// ---------------Q13--------------
function doubleChar(str) {
  return str.split('').map(char => char.repeat(2)).join('');
}


console.log(doubleChar('Coding')); 

// ---------------Q14--------------
function findIndex(arr, element) {
  return arr.indexOf(element);
}


console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 

// ---------------Q15--------------
function getAbsSum(arr) {
  return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}


console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));



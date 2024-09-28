
// Q1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // Q2
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
  
  // Q3
  let array1 = [1, 2, 3, 4, 5];
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
  }
  
  // Q4
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  
  // Q5
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(sum);
  
  // Q6
  let array2 = [1, 2, 3, 4, 5];
  let largest = array2[0];
  for (let i = 1; i < array2.length; i++) {
    if (array2[i] > largest) {
      largest = array2[i];
    }
  }
  console.log(largest);
  
  // Q7
  let array3 = [5, 4, 3, 2, 1];
  let smallest = array3[0];
  for (let i = 1; i < array3.length; i++) {
    if (array3[i] < smallest) {
      smallest = array3[i];
    }
  }
  console.log(smallest);
  
  // Q8
  let array4 = [1, 2, 3, 4, 5];
  let total = 0;
  for (let i = 0; i < array4.length; i++) {
    total += array4[i];
  }
  let average = total / array4.length;
  console.log(average);
  
  // Mid
  
  // Q9
  let number = 5;
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(factorial);
  
  // Q10
  let fibNumber = 10;
  let a = 0, b = 1, next;
  for (let i = 1; i <= fibNumber; i++) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
  }
  
  // Q11
  let primeLimit = 20;
  for (let i = 2; i <= primeLimit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
  
  // Q12
  let tableNum = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
  }
  
  // Advanced
  
  // Q13
  let array5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  for (let i = 0; i < array5.length; i++) {
    for (let j = 0; j < array5[i].length; j++) {
      console.log(array5[i][j]);
    }
  }
  
  // Q14
  let array6 = [1, 2, 3, 4, 5];
  for (let i = array6.length - 1; i >= 0; i--) {
    console.log(array6[i]);
  }
  
  // Q15
  let array7 = [1, 2, 3, 4, 5];
  let start = 2, end = 4;
  for (let i = start; i <= end; i++) {
    console.log(array7[i]);
  }
  
  // Q16
  let array8 = [1, 2, 3, 4, 5];
  let step = 2;
  for (let i = 0; i < array8.length; i += step) {
    console.log(array8[i]);
  }
  
  // Q17
  let array9 = [1, 2, 3, 4, 5];
  let target = 4;
  let found = false;
  for (let i = 0; i < array9.length; i++) {
    if (array9[i] === target) {
      found = true;
      break;
    }
  }
  console.log(found);
  
  // Q18
  let array10 = [1, 2, 1, 3, 2, 1];
  let frequencyTarget = 1;
  let count = 0;
  for (let i = 0; i < array10.length; i++) {
    if (array10[i] === frequencyTarget) {
      count++;
    }
  }
  console.log(count);
  
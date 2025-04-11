// Exercise 1: Temperature Check - if/else
let temp = 20;
if (temp < 0) {
  console.log("It's freezing!");
} else if (temp >= 0 && temp <= 15) {
  console.log("It's cold.");
} else if (temp >= 16 && temp <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

// Switch version (simplified using Math.floor)
let tempRange = Math.floor(temp / 10);
switch (tempRange) {
  case -1:
  case 0:
    console.log("It's freezing!");
    break;
  case 1:
    console.log("It's cold.");
    break;
  case 2:
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
}

// Exercise 2: Divisibility Check - if/else
let num = 6;
if (num % 2 === 0 && num % 3 === 0) {
  console.log("Divisible by both.");
} else if (num % 2 === 0) {
  console.log("Divisible by 2.");
} else if (num % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

// Switch version (using flags)
let isDivBy2 = num % 2 === 0;
let isDivBy3 = num % 3 === 0;
switch (true) {
  case isDivBy2 && isDivBy3:
    console.log("Divisible by both.");
    break;
  case isDivBy2:
    console.log("Divisible by 2.");
    break;
  case isDivBy3:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops
// 1-10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Even numbers between 1-20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Sum 1-100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100:", sum);

// Print each element
const nums1 = [1, 2, 3, 4, 5];
for (let i = 0; i < nums1.length; i++) {
  console.log(nums1[i]);
}

// Find largest number
const nums2 = [3, 7, 2, 5, 10, 6];
let max = nums2[0];
for (let i = 1; i < nums2.length; i++) {
  if (nums2[i] > max) {
    max = nums2[i];
  }
}
console.log("Largest number:", max);

// Exercise 4: While loops
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 2;
while (j <= 20) {
  console.log(j);
  j += 2;
}

let total = 0;
let k = 1;
while (k <= 100) {
  total += k;
  k++;
}
console.log("Sum using while:", total);

// Multiples of 5 less than 50
let m = 5;
while (m < 50) {
  console.log(m);
  m += 5;
}

// Exercise 5: Do While loops
let d = 1;
do {
  console.log(d);
  d++;
} while (d <= 10);

let doSum = 0;
let s = 1;
do {
  doSum += s;
  s++;
} while (s <= 100);
console.log("Sum using do...while:", doSum);

// Prompting for number > 10 (uncomment in browser/Node with prompt module)
// let userInput;
// do {
//   userInput = parseInt(prompt("Enter a number greater than 10:"));
// } while (userInput <= 10);

// Guessing game (uncomment in browser/Node with prompt module)
// const secret = Math.floor(Math.random() * 10) + 1;
// let guess;
// do {
//   guess = parseInt(prompt("Guess a number between 1 and 10:"));
// } while (guess !== secret);
// console.log("Correct! The number was", secret);

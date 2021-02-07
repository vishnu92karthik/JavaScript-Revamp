In JavaScript, you can generate a random number with the Math.random() function.

Math.random() returns a random floating-point number ranging from 0 to less than 1 (inclusive of 0 and exclusive of 1)

Generate a Random Number
let a = Math.random();
console.log(a);

We can use this value in the range (0,1) to find the random value between any two numbers using formula:

Math.random() * (highestNumber - lowestNumber) + lowestNumber

let a = Math.random()*(99-55)+55;
 console.log(a);

 You can use Math.floor() to get a random integer value. Math.floor() returns the number by decreasing the value to the nearest integer value.
 let a = Math.floor(5.3685258);
 console.log(a);

 let a =Math.floor( Math.random()*(99-55))+55;
 console.log(a);

 const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));
 
 const a = Math.floor(Math.random()*(max-min))+1;
 
 console.log(`${min} and ${max} is ${a}`)
 if you want to find the random integer in between min (inclusive) to max (inclusive), you can use the following formula:

Math.floor(Math.random() * (max - min + 1)) + min



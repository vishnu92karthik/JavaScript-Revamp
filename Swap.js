Using a Temporary Variable
//JavaScript program to swap two variables
let a = parseInt(prompt('enter a value: '));
let b = parseInt(prompt('enter b value: '));

let temp;
temp = a;
a=b;
b=temp;
console.log(`the value after swapping: ${a}`);
console.log(`the value after swapping: ${b}`);

// Using es6(ES2015) Destructuring assignment
let a = parseInt(prompt('enter a value: '));
 let b = parseInt(prompt('enter b value: '));
 
[a,b]=[b,a];
 console.log(`the value after swapping: ${a}`);
 console.log(`the value after swapping: ${b}`);

 //Using Arithmetic Operators
 let a = parseInt(prompt('enter a value: '));
 let b = parseInt(prompt('enter b value: '));
 
a= a+b;
b= a-b;
a = a-b;
 console.log(`the value after swapping: ${a}`);
 console.log(`the value after swapping: ${b}`);
 // Using Bitwise XOR operator

let a = parseInt(prompt('enter a value: '));
 let b = parseInt(prompt('enter b value: '));
 
a = a ^ b
b = a ^ b
a = a ^ b

 console.log(`the value after swapping: ${a}`);
 console.log(`the value after swapping: ${b}`);
 
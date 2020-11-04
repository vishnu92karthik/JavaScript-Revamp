Using if...else

// program to check if the number is even or odd
// take input from the user

const number = parseInt(prompt("Enter a number "));


 if(number%2 ==0){
 console.log('this is even integer');
 
 }else{
 console.log('this is odd integer');
 }

 const number = parseInt(prompt("Enter a number "));

const result = (number%2==0) ? 'even' : 'odd';

console.log(`The number is ${result}`)
 


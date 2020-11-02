Check Number Type with if...else if...else
const number = parseInt(prompt("Enter a number "));

 if (number>0){
 console.log("number is a positive number");
 
 }else if(number<0 ){
 console.log('number is a negative number');
 }else if (number == 0 ){
 console.log('number is a zero number');
 }
// Check Number Type with nested if...else
 const number = parseInt(prompt("Enter a number "));

 if (number>0){
 if(number>=0){
 console.log('this is positive integer');
 
 }else{
 console.log('this is zero integer');
 }
 }else{
 console.log('this is negative integer');
 }

 
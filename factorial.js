const num = parseInt(prompt("Enter a number "));
if (num>0){
let fact = 1;
for (let i=1; i<=num; i++){
 fact *= i;
} console.log(`The factorial of ${num} is ${fact}.`);
}else if (num === 0) {
    console.log(`The factorial of ${num} is 1.`);
} else {
console.log('Error! Factorial for negative number does not exist.');
}

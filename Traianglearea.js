If you know the base and height of a triangle, you can find the area using the formula:
area = (base * height) / 2
const base = parseInt(prompt('enter base value: '));
const height = parseInt(prompt('enter height value: '));
const area = (base*height)/2;
console.log(area);
 
If you know all the sides of a triangle, you can find the area using Herons' formula. If a, b and c are the three sides of a triangle, then

s = (a+b+c)/2
area = √(s(s-a)*(s-b)*(s-c))

const side1 = parseInt(prompt('enter side1 value: '));
 const side2 = parseInt(prompt('enter side2 value: '));
 const side3 = parseInt(prompt('enter side3 value: '));
 
 const s= (side1+side2+side3)/2
 const area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
 
 console.log(s);
  console.log(area);
 
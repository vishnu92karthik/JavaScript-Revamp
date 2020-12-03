var age = 60
if (age>50){
console.log('your old');
}  else if(age <=40 && age>30 ) {
console.log('your adult');
} else
{
console.log('your kid');
}
console.log('end of ladder')

var arr = [1,2,3,4,4,5];
for (var i = 0; i<arr.length; i++){
console.log(arr[i]);
}
 arr. forEach(function(element){
 console.log(element);
 })
 let j = 0;
 const a = 7;
 a= a+6;
 // "<a class='gotoLine' href='#45:2'>45:2</a> Uncaught TypeError: Assignment to constant variable."
 let j = 0;
 while(j<arr.length){
 console.log(arr[j]);
 j++
 }
 var arr = [1,2,3,4,4,5,7,8];
let j =0
do {
console.log(arr[j]);
j++;
}while(j<arr.length)
var arr = [1,2,3,4,4,5,7,8];
for (let i=0;i<arr.length;i++){
if(i==2){
break;
}
console.log(arr[i])
}
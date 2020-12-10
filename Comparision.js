var x =5
document.getElementById("demo").innerHTML = (x==5) //true
var x =5
document.getElementById("demo").innerHTML = (x==6) //false
var x =5
document.getElementById("demo").innerHTML = (x=='5') //true
var x =5
document.getElementById("demo").innerHTML = (x==='5')// true
var x =5
document.getElementById("demo").innerHTML = (x=== 5) //true
var x =6
document.getElementById("demo").innerHTML = (x!= 5) //true
var x = 5;
document.getElementById("demo").innerHTML = (x !== "5");//true
var x = 5;
document.getElementById("demo").innerHTML = (x !== 8);//true
var x = 5;
document.getElementById("demo").innerHTML = (x >= 8);//false
var x = 5;
document.getElementById("demo").innerHTML = (x <= 8);//true
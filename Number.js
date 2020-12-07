var x = 3.14;
var y = 66;
document.getElementById("demo").innerHTML = x +` <br/>` +y // 3.14, 66
var x = 123e5;
var y = 123e-5;
document.getElementById("demo").innerHTML = x +` <br/>` +y //12300000 0.00123
var x = 999999999999999;
var y = 9999999999999999;
document.getElementById("demo").innerHTML = x + "<br>" + y; //999999999999999 9999999999999999
var x = 0.2 + 0.1;
document.getElementById("demo").innerHTML = "0.2 + 0.1 = " + x; // 0.2 + 0.1 = 0.30000000000000004
var x = 0.2 + 0.1;
document.getElementById("demo1").innerHTML = "0.2 + 0.1 = " + x;
var y = (0.2*10 + 0.1*10) / 10;
document.getElementById("demo2").innerHTML = "0.2 + 0.1 = " + y; // 0.30000000000000004
var x = 10;
var y = 20;
var z = x + y;
document.getElementById("demo").innerHTML = z; //30
var x = "10";
var y = "20";
var z = x + y;
document.getElementById("demo").innerHTML = z; //1020
var x = 10;
var y = 20;
document.getElementById("demo").innerHTML =
"The result is: " + x + y; //1020
var x = "100";
var y = "10";
var z = x / y;   
document.getElementById("demo").innerHTML = z; //10
var x = "100";
var y = "10";
var z = x - y;   
document.getElementById("demo").innerHTML = z; //90
var x = "100";
var y = "10";
var z = x * y;   
document.getElementById("demo").innerHTML = z; //1000
var x = "100";
var y = "Apple";
var z = x / y;   
document.getElementById("demo").innerHTML = z; //NaN
document.getElementById("demo").innerHTML = 100 / "10"; //10
var x = NaN;
var y = 5;
document.getElementById("demo").innerHTML = x + y;//NaN
var x = NaN;
var y = "5";
document.getElementById("demo").innerHTML = x + y; //NaN5
var myNumber = 2; 
var txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber + "<br>";
}
document.getElementById("demo").innerHTML = txt;
var myNumber = 32;
document.getElementById("demo").innerHTML =
"32 = " + "<br>" + 
" Decimal " + myNumber.toString(10) + "<br>" +
" Hexadecimal " + myNumber.toString(16) + "<br>" +
" Octal " + myNumber.toString(8) + "<br>" +
" Binary " + myNumber.toString(2);
var x = 12;
var y = new Number(123);
var z = typeof(y);
console.log(z)
var x = 500;        
var y = new Number(500);  
document.getElementById("demo").innerHTML = (x==y); // true
var x = 500;        
var y = new Number(500);  
document.getElementById("demo").innerHTML = (x==y); // false
var x = new Number(123);;
var y = new Number(123);
var z = (x==y)
console.log(z) //false
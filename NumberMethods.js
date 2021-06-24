let x = 123;
let y= x.toString();
document.write(y) //123
let x = 123.369852;
let y= x.toExponential(4);
document.write(y) //1.2337e+2
let x = 123.369852;
let y= x.toPrecision(2); 
document.write(y)//1.2e+2
let x = 123.369852;
let y= x.valueOf; 
document.write(y)
document.getElementById("demo").innerHTML = 
Number(true) +"<br>"+
Number(false)+"<br>"+
Number("10")+"<br>"+
Number("Vishnu")+"<br>"+
Number("10.33") //1
0
10
NaN
10.33
document.getElementById("demo").innerHTML = Boolean(10<9)// false
document.getElementById("demo").innerHTML = Boolean(10>9) //true
document.getElementById("demo").innerHTML =
"100 is " + Boolean(100) + "<br>" +
"3.14 is " + Boolean(3.14) + "<br>" +
"-15 is " + Boolean(-15) + "<br>" +
"Any (not empty) string is " + Boolean("Hello") + "<br>" +
"Even the string 'false' is " + Boolean('false') + "<br>" +
"Any expression (except zero) is " + Boolean(1 + 7 + 3.14);
document.getElementById("demo").innerHTML = Boolean(x)// false
let x = '';
document.getElementById("demo").innerHTML = Boolean(x)// false
let y;
document.getElementById("demo").innerHTML = Boolean(y)// false
let x = null;
document.getElementById("demo").innerHTML = Boolean(x)// false
let x = false;         // x is a boolean
let y = new Boolean(false);  // y is an object
document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y; // false
let x = false;         // x is a boolean
let y = new Boolean(false);  // y is an object
document.getElementById("demo").innerHTML = (x==y); //true



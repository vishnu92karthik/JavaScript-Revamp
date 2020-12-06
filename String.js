var x = "John Doe";  
document.getElementById("demo").innerHTML = x;
var carName1 = "Volvo XC60"; 
var carName2 = 'Volvo XC60'; 

document.getElementById("demo").innerHTML =
carName1 + " " + carName2; 
var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"'; 

document.getElementById("demo").innerHTML =
answer1 + "<br>" + answer2 + "<br>" + answer3; 
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
document.getElementById("demo").innerHTML = sln;
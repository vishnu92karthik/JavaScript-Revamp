var date = new Date();
var x = date.getHours();
if(x<18){
 document.getElementById("demo").innerHTML = "Good night!";
} else{
 document.getElementById("demo").innerHTML = "Good day!";
} //Good day!
var date = new Date();
var x = date.getHours();
if(x>12 && x<16){
 document.getElementById("demo").innerHTML = "Good afternoon!";
} else if(x<12 && x>4){
 document.getElementById("demo").innerHTML = "Good morning!";
} else if(x>20 && x<4) {
document.getElementById("demo").innerHTML = "Good night!";
} else if(x>16 && x<20) {
document.getElementById("demo").innerHTML = "Good evening!";
}


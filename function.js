function add(a,b){
    return a+b;
    }
    document.getElementById("demo").innerHTML = add(5,6);
   
    function tocelsius(fh){
        var cel = 100;
        return (5/9)*(fh-32);
        typeof cel;
        }
        document.getElementById("demo").innerHTML = tocelsius(100);
        document.write(typeof cel);
        var x = tocelsius(200);
        document.write(x)
       
 //Exercise      
        Execute the function named myFunction.
function myFunction() {
  alert("Hello World!");
}
myFunction();
Create a function called "myFunction".
function myFunction(){
alert("Hello World!");
}
Make the function return "Hello".
function myFunction() {
  return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();
Make the function display "Hello" in the inner HTML of an element with the ID "demo".
function myFunction() {
  document.getElementById("demo").innerHTML= "Hello";
}
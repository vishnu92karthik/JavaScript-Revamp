Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
switch
(fruits) {
  
case"Banana":
    alert("Hello")
    break;
  
case "Apple":
    alert("Welcome")
    break;    
}
Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".


switch(fruits) {
  case "Banana":
    alert("Hello")
    break;
  case "Apple":
    alert("Welcome")
    break;
  
default:

    alert("Neither");
}
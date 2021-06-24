const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
document.getElementById("demo").innerHTML = fruits.toString(); //Banana,Orange,Apple,Mango,Lemon

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
document.getElementById("demo").innerHTML = fruits.join("*"); //Banana*Orange*Apple*Mango*Lemon

const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.pop();
document.getElementById("demo").innerHTML = fruits; //Banana,Orange,Apple

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.pop();  // x = "Mango"
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");   // Adds "Kiwi" to fruits

  
  
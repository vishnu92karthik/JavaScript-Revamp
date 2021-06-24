let car = ["BMW","Ferrari","hunda"];
document.getElementById("demo").innerHTML= car //BMW,Ferrari,hunda

let car = [
    "Saab",
    "Volvo",
    "BMW"
  ];
  document.getElementById("demo").innerHTML= car //Saab,Volvo,BMW

  let car = [
    "Saab",
    "Volvo",
    "BMW"
  ];
  document.getElementById("demo").innerHTML= car[1] //Volvo

  const car = new Array(
    "Saab",
    "Volvo",
    "BMW"
  );
  document.getElementById("demo").innerHTML= car[0] //Saab

  let car = [
    "Saab",
    "Volvo",
    "BMW"
  ];
  car[1] = "Opel"
  document.getElementById("demo").innerHTML= car[1] //Opel

  let car = [
    "Saab",
    "Volvo",
    "BMW"
  ];
  car[1] = "Opel"
  document.getElementById("demo").innerHTML= car //Saab,Opel,BMW

  const person = ["John", "Doe", 46];
  document.getElementById("demo").innerHTML= person[2] //46

  const person = {firstName:"John", lastName:"Doe", age:46};
  document.getElementById("demo").innerHTML= person.firstName //John
  
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo").innerHTML= fruits.length//4

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
document.getElementById("demo").innerHTML = fruits; //Banana,Orange,Apple,Mango,Lemon

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
document.getElementById("demo").innerHTML = typeof fruits;; //object
  
  
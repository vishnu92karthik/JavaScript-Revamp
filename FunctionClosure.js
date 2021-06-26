function myFunction() {
    let a = 4;
    return a * a;
  }
  let x = myFunction();
  document.getElementById("demo").innerHTML= x //16

  let a = 4;
  function myFunction() {
   return a * a;
  }
  let x = myFunction();
  document.getElementById("demo").innerHTML= x//16

  let counter = 0;

function add (){
let counter = 0;
return counter += 1;
}
let x = add()
document.getElementById("demo").innerHTML = x; //1

let counter = 0;

function add (){

return counter += 1;
}
let x = add()+add()
document.getElementById("demo").innerHTML = x;//3



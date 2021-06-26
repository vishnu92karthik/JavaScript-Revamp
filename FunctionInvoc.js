function myFunction(a, b) {
    return a * b;
  }
  let x = myFunction(10, 2); //20
  document.getElementById("demo").innerHTML = x;
  function myFunction(a, b) {
    return a * b;
  }
  let x = window.myFunction(10, 2);  //20
  document.getElementById("demo").innerHTML = x;

  let x = myfunc()
function myfunc(){
return this;
}
document.getElementById("demo").innerHTML = x; //[object Window]
const myObject = {
    firstName:"vishnu",
    lastName: "karthik",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
 let x= myObject.fullName(); 
 document.getElementById("demo").innerHTML = x; // vishnu karthik

 function myfunc(arg1,arg2){
    this.fname= arg1;
    this.lname = arg2
    }
    const myobj = new myfunc("vishnu", "karthik")
    let x = myobj.fname
    document.getElementById("demo").innerHTML = x; //vishnu
    

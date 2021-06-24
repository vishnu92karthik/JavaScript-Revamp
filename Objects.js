let car = {type:"fiat",model:"2020",color:"grey"}
document.write(car.type)// fiat
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  document.write(person.age) //50
  const person = {firstName:"Vishnu", lastName:"Karthik", age:20,eyeColor:"blue",
fullname: function(){
return this.firstName +""+ this.lastName
}
};
document.write(person.fullname()) // vishnu karthik

Alert "John" by extracting information from the person object.

const person = {
  firstName: "John",
  lastName: "Doe"
};

alert(
person.firstName
);

Add the following property and value to the person object: country: Norway.
const person = {
  firstName: "John",
  lastName: "Doe",
   country: "Norway"
};

Create an object called person with name = John, age = 50.
Then, access the object to alert("John is 50").


const person = {
  name: "John", 
  age: 50
};
alert(
person.name+ " is " + person.age
);
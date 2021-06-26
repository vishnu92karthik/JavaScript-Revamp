const person = {
    fullname: function (){
    return this.fname+" "+ this.lname;
    }
    }
    const person1 = {
    fname:"vishnu",
    lname:"karthik"
    }
    const person2 = {
    fname:"harish",
    lname:"madupuri"
    }
    let x = person.fullname.apply(person1)
    document.getElementById("demo").innerHTML = x; //vishnukarthik
    const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
      }
      
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
      document.getElementById("demo").innerHTML = person.fullName.apply(person1, ["Oslo", "Norway"]); //John Doe,Oslo,Norway

      
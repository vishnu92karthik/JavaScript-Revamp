const myobj= {
    fname:"vishnu",
    lname:"karthik",
    fullname: function() {
    return this.fname+this.lname
    }
    }
    let x = myobj.fullname()
    document.getElementById("demo").innerHTML = x; //vishnukarthik

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
        let x = person.fullname.call(person1)
        document.getElementById("demo").innerHTML = x; //vishnukarthik

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
            let x = person.fullname.call(person2)
            document.getElementById("demo").innerHTML = x; //harish madupuri

            const person = {
                fullname: function (city, country){
                return this.fname+" "+ this.lname +" "+city+" "+country;
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
                let x = person.fullname.call(person1, "Vijaywada","Andhra Pradesh")
                document.getElementById("demo").innerHTML = x; //vishnu karthik Vijaywada Andhra Pradesh
                
            
            
        
    
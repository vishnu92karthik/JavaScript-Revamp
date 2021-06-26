function myfunc(a,b){
    return a*b;
    }
    x= myfunc(4,5)
    document.getElementById("demo").innerHTML = x;//20
    const x = function(a,b) {return a+b}

    const z= x(3,4);
document.getElementById("demo").innerHTML = z; //7

(function(){
    document.getElementById("demo").innerHTML = "Hi i am self";
    })(); //Hi i am self
    
    const x = (a,b) => a*b;
    const z = x(6,7)
    document.getElementById("demo").innerHTML = z;//42

    const x = (a,b) => {return a+b}
const z = x(6,7)
document.getElementById("demo").innerHTML = z;//13
function myfunc(a,b){
    if (b === undefined){
    b=2
    }
    return a*b;
    }
    document.getElementById("demo").innerHTML = myfunc(8); //16

    function myfunc(a,b=9){

        return a*b;
        }
        document.getElementById("demo").innerHTML = myfunc(8); //72

        x = sumAll(1, 1523, 500, 115, 44, 88);

function sumAll(){
let sum=0;
for (i=0;i<arguments.length;i++){
sum += arguments[i]
}
return sum;
}
document.getElementById("demo").innerHTML = sumAll(x); 2271
        
    
    
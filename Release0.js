
 
function add(){
    var a,b,c;
    a= Number(document.getElementById("a1").value);
    b= Number(document.getElementById("a2").value);
    
    c= document.getElementById("answer");
    c.value = a%b;
}
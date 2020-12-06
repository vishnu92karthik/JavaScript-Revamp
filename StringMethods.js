var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
document.getElementById("demo").innerHTML = sln;
var str = "Please locate where 'locate' occurs!";
var loc = str.indexOf("locate");
console.log(loc);//7
var str = "Please locate where 'locate' occurs!";
var loc = str.lastIndexOf("locate");
console.log(loc)//21
var str = "Please locate where 'locate' occurs!";
var loc = str.lastIndexOf("john");
console.log(loc) // ans is -1
var str = "Please locate where 'locate' occurs!";
var loc = str.lastIndexOf("locate",21);
console.log(loc)//21
var str = "Please locate where 'locate' occurs!";
var loc = str.lastIndexOf("locate", 15);
console.log(loc)//7
var str = "Please locate where 'locate' occurs!";
var loc = str.search("locate");
console.log(loc)//7
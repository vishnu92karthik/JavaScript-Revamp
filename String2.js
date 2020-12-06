var str = "Please locate where 'locate' occurs!";
var loc = str.slice(7,20);
console.log(loc) //locate where
var str = "Apple, Banana, Kiwi";
var loc = str.slice(7,20);
console.log(loc)// "Banana, Kiwi"
var str = "Apple, Banana, Kiwi";
var loc = str.slice(-12,-6);
console.log(loc)//Banana
var str = "Apple, Banana, Kiwi";
var loc = str.slice(7);
console.log(loc)// "Banana, Kiwi"
var str = "Apple, Banana, Kiwi";
var loc = str.slice(-12);
console.log(loc)// "Banana, Kiwi"
var str = "Apple, Banana, Kiwi";
var loc = str.substring(12);
console.log(loc) //"a, Kiwi"
var str = "Apple, Banana, Kiwi";
var loc = str.substr(7,10);
console.log(loc) //"Banana, Ki"
var str = "Apple, Banana, Kiwi";
var loc = str.substr(10);
console.log(loc)//"ana, Kiwi"
var str = "Apple, Banana, Kiwi";
var loc = str.substr(-4);
console.log(loc) //"Kiwi"
var str = "Apple, Banana, Kiwi";
var loc = str.replace("Apple", "Vishnu");
console.log(loc) //"Vishnu, Banana, Kiwi"
str = "Please visit Microsoft and Microsoft!";
var loc = str.replace("Microsoft", "W3Schools");
console.log(loc) //"Please visit W3Schools and Microsoft!"
str = "Please visit Microsoft and Microsoft!";
var loc = str.replace(/MICROSOFT/i, "W3Schools");
console.log(loc)//"Please visit W3Schools and Microsoft!"
str = "Please visit Microsoft and Microsoft!";
var loc = str.replace(/MICROSOFT/g, "W3Schools");
console.log(loc)//"Please visit Microsoft and Microsoft!"
str = "Please visit Microsoft and Microsoft!";
var loc = str.toUpperCase()
console.log(loc) //"PLEASE VISIT MICROSOFT AND MICROSOFT!"
str = "Please visit Microsoft and Microsoft!";
var loc = str.toLowerCase()
console.log(loc)//"please visit microsoft and microsoft!"
var str = "Please visit Microsoft and Microsoft!";
var str1 = "Hi vishnu welcome"
var loc = str.concat(str,str1)
console.log(loc) //"Please visit Microsoft and Microsoft!Please visit Microsoft and Microsoft!Hi vishnu welcome"
var str = "Please visit Microsoft and Microsoft!";
var str1 = "Hi vishnu welcome"
var loc = str.concat(str,str1)
alert(str1.trim());
console.log(loc) //Hi vishnu welcome
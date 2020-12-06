var str = "     Hello World!     ";
alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')); // Hello World! 
if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }
  var str = "     Hello World!    ";
  alert(str.trim());
  var str = '5';
str= str.padStart(4,0)
console.log(str) //0005
var str = '5';
str= str.padEnd(4,0)
console.log(str) //5000
var str = "HELLO WORLD";
str= str.charAt(0)
console.log(str) //H
var str = "HELLO WORLD";
str= str.charCodeAt(0)
console.log(str) //72
var str = "HELLO WORLD";
str= str[6]
console.log(str)//W
var str = "HELLO WORLD";
str= str.split(",");
console.log(str) //["HELLO WORLD"]
var str = "a,b,c,d,e,f";
str= str.split(",");
console.log(str) //["a", "b", "c", "d", "e", "f"]
 
var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  text += arr[i] + "<br>"
}
console.log(text) // h e l l o in next line

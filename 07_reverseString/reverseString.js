
const reverseString = function(str) {
let palabra= str.split("").reverse().join("")
return palabra
};
let palabras=reverseString("hello there")
console.log(palabras);
// Do not edit below this line
module.exports = reverseString;

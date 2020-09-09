//importing
var add = require("./add");
var sub = require("./subtract");
var mul = require("./multiply");
var div = require("./divide");

//var fadd = require();
console.log("FAKE = ",add.fakeAddition(100,100));
console.log(add);
// add is above declared variable.
//addition is the function declared in imported file.
console.log("Sum = ",add.add(4,5));
console.log("Difference = ",sub.subtraction(4,5));
console.log("Product = ",mul.multiplication(4,5));
console.log("Remainder = ",div.division(4,5));

//require is similar to import
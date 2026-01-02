alert("1" + "1"); // Concatenation operator
alert(1 + 1);     // Addition operator
alert("1" + 1);   // Concatenation operator
alert(1+1+"2"); // Addition operator followed by concatenation operator
alert("2"+1+1); // Concatenation operator followed by addition operator

let number = 5;
alert(+number); // Unary plus operator converts number to a number (no effect here)

let str = "123";
alert(+str); // Unary plus operator converts string to number

let bool = true;
alert(+bool); // Unary plus operator converts boolean to number (true becomes 1)

let val1 = "10";
let val2 = "20";

alert(+val1 + +val2); // Converts both strings to numbers before addition

tasks


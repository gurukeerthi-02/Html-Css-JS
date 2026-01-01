// single line comment

/* Mutli line
Comment
*/

"use strict"

alert("Hello"); // this is a statement

alert(1 +
    2
    +3) // this will produce the output 6 since there is no need to add implict semi-colon in expression

alert("Hi")
[1,2].forEach(alert); 
// this will produce an error because the parser will treat it as a property access on the previous line



/*
Strict mode is a feature in JavaScript introduced in ECMAScript 5 (ES5) that allows you to place your program, or a function within your program, into a strict operating context.
When strict mode is enabled, the JavaScript engine applies additional rules and restrictions to your code, which helps to catch common coding mistakes and makes it easier to write secure JavaScript code.

To enable strict mode, you simply add the string "use strict"; at the beginning of your script or function. 
This directive can be used both at the global level and within function scope.
Here's how you can enable strict mode: */

"use strict";
let a=10;
console.log(a)

function test(){
   var b=20;
}
test();


/*

 a=10;
console.log(a) ---> Doesn't give error for this

function test(){
    "use strict" 
   b=20;      ---> Throws error
}
test();
 
 */


function sum(a,b,b){
    console.log(a+b+c)
}
sum(10,20,30) //---> Output: 70, it gives wrong output on  not  using the Strict mode, on using Strict mode it gives the error as Duplicate parameter name not allowed
/*setTimeOut Fuction:
- setTimeout is a function in JavaScript that allows you to execute a specified function or code snippet after a specified delay (in milliseconds). 
  It's commonly used to create delays or schedule code to run asynchronously.
- The Basic Syntax of setTimeOut function is,
    -setTimeOut(function,dealyinMilliseconds,parameter1,parameter2, ...)
 */


/*Callbacks
- A callback is a function that is passed as an argument to another function and is executed after a particular event or task completes. 
  In simpler terms, it's a way to ensure that certain code doesn't run until a specific action or process is finished.
- Callbacks are commonly used in asynchronous JavaScript to manage operations that take time to complete, such as fetching data from a server, reading files, or handling user events. 
  For instance, in an asynchronous operation like making an API request, you might specify a callback function that gets executed once the response is received from the server. */

/*Callback hell
- Callback hell refers to a situation in asynchronous JavaScript programming where multiple nested callbacks create complex and hard-to-read code. 
- This occurs when you have several asynchronous operations that depend on the results of previous asynchronous tasks. 
- As a result, code indentation increases, leading to deeply nested callbacks, which can make the code difficult to understand, maintain, and debug. 
- It Creates a kind of pyramid of Doom structure of code*/
console.log("This is Line 1")

setTimeout(
    function(){
        console.log("This is line 2, inside the setTimeOut Function")
    },5000
)

console.log("This is line 3")

/*
Importance of Callbacks
- Callbacks are a powerful way of handling async operations in JavaScripts
- Asynchronous programming in Javascript exists because Callbacks exists

Problems we face while writing Callbacks
- Callback hell
- Inversion of Control, i.e we loose control of our program, because we pass that callback function into another function and now we have given the control of this function to some other function, and we dont know that function will execute the callback or no
*/
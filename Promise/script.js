/*
A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
It's a built-in object that provides a cleaner way to deal with asynchronous code compared to callbacks.

A Promise can be in one of three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
A Promise is created using the new Promise() constructor, which takes a function as its argument.
This function, called the executor, accepts two parameters: resolve and reject. 
Inside the executor function, you perform your asynchronous operation, and then call resolve(value) when the operation succeeds or reject(reason) when it fails.
 */

/*
Syntax:
let prom = new Promise();

let prom = new Promise(function(){

})


let prom = new Promise(function(resolve,reject)}{

})

*/

//Example 1

let complete = true;

let prom = new Promise(function (resolve, reject) {
  if (complete) {
    resolve("I am successful");
  } else {
    reject("I am failed");
  }
});

console.log(prom);

//Example 2

function promm(completee) {
  return new Promise(function (resolve, reject) {
    if (completee) {
      resolve("I am successful 2");
    } else {
      reject("I am failed 2");
    }
  });
}

console.log(promm(false));

///Example 3

function prommm(completeee) {
  return new Promise(function (resolve, reject) {
    if (completeee) {
      resolve("I am successful 3");
    } else {
      reject("I am failed 3");
    }
  });
}

let onfulfilment = (result) => {
  console.log(result);
};

let onRejection = (error) => {
  console.log(error);
};

prommm(true).then(onfulfilment);
prommm(false).catch(onRejection);

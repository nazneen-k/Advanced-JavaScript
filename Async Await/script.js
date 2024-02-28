/*
- Async function always return a Promise
Promise ---> Javascript ES6
Async ---> Javascript ES 2017
*/

// function test(){
//     return "Hello"
// }
// console.log(test())
// Returns the String

// async function test() {
//   return "Hello";
// }
// console.log(test());
// // Here it returns a Promise

// test().then((result) => {
//   console.log(result); //---> Here it prints the result ie what the test function is returning
// });

// // Using Arrow function
// let test2 = async () => {
//   return "Hello 2";
// };

// test2().then((result2) => {
//   console.log(result2);
// });

// //Await
// async function test() {
//   console.log("A");
//   await console.log("B");
//   console.log("C");
// }
// test();
// console.log("D");
// console.log("E");

//Using Fetch

async function test3() {
  console.log("---1---");

  const response = await fetch("./student_data.json");
  const students = await response.json();
  return students;
}

console.log("---2---");
let a = test3();
console.log("---3---");
console.log(a);

//Using .then and .catch
console.log(".then")
async function test4() {
  const response = await fetch("./student_data.json");
  const students = await response.json();
  return students;
}

test4()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

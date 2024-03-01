// try {
//   console.log("Start of Try");
// bala
//   console.log("End of Try");
// } catch {
//     console.log("Error has occured")

// }

/*
try {
  console.log("Start of Try");
  bala;
  console.log("End of Try");
} catch (error) {
  console.log("Error has occured");
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
*/

/*\
Different types of Errors in JavaScript:
- EvalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError
- AggregrrateError */

try {
  console.log("Start of Try");
  bala;
  console.log("End of Try");
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("ReferenceError");
  } else if (error instanceof TypeError) {
    console.log("TypeError");
  } else {
    console.log("Unknown Error");
  }
}



try {
  let json = '{"name":"Yahoo Baaba","age":30}';
  let user = JSON.parse(json);

  if (!user.name) {
    throw new Error("Incomplete data: No name");
  }
  console.log(user.name);
  console.log(user.age);
} catch (error) {
    console.log(error)
} finally {
  console.log("Finally");
}

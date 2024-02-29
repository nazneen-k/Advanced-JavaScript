let number = [100, 200, 300];
console.log(number);

console.log(typeof number[Symbol.iterator]);

let iter = number[Symbol.iterator]();
console.log(iter);

iter.next();
iter.next();
console.log("Iterator");
console.log(iter.next().value); // Output: 300
console.log("Iterator");
console.log(iter.next().done); //Output: True

//Using Iterator in While Loop

let numbers = [100, 200, 300];
let itere = numbers[Symbol.iterator]();
let result = itere.next();
while (!result.done) {
  console.log(result.value);
  result = itere.next();
}

// Using Iterator with String

let str = "Yahoo Baaba";
let iterr = str[Symbol.iterator]();
let res = iterr.next();
while (!res.done) {
  console.log(res.value);
  res = iterr.next();
}

let strr = "Yahoo Baaba";
for (let char of strr) {
  console.log(char);
}

//Creating our own Iterator

function numberIterator(arr) {
  var nextNum = 0;
  return {
    next() {
      if (nextNum < arr.length) {
        return {
          value: arr[nextNum++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

let numbers2 = [100, 200, 300, 400, 500, 600, 700];
let num = numberIterator(numbers2);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

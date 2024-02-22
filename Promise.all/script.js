let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(20);
  }, 2 * 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

var total = 0;
Promise.all([p1, p2, p3])
  .then((result) => {
    for (var i in result) {
      total += result[i];
    }
    console.log(`Results: ${result} `);
    console.log(`Total: ${total} `);
  })
  .catch((error) => {
    console.log(`Error:${error}`);
  });

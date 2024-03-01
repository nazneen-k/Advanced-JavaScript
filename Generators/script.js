function* generateIt() {
  console.log("First Message");
  yield "Yield Nos 1";
  console.log("Second Message");
  yield "Yield Nos 2";
}
let g = generateIt();
console.log(g);
console.log(g.next().value);
console.log(g.next());

//to use all of the values
for (let value of g) {
  console.log(value);
}


//Using While loop

function *generate(){
    let nextNum=300;
    while(true){
        yield(nextNum++);
    }
}

let gg=generate();
// console.log(gg.next().value);
// console.log(gg.next());
// console.log(gg.next())

for(let value of gg){
    if(value>310) break;
    console.log(value);
}


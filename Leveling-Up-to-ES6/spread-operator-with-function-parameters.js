// Spread Operator ...
let numbers = [23, 1, 0, -1];

console.log(Math.max(...numbers));

// Spread Operator in arary
let person = ["anik", "hasan",]

let test = (fname, lname) => {
    console.log(`${fname} ${lname}`);
}
test(...person);

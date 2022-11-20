// var a = 1;
// let b = 2;
// const c = 3;

// a = a + 7;
// console.log(a);

// b = b + 7;
// console.log(b); 

// c = c + 7;
// console.log(c); // gave error. constant value is fixed .

// var a ;
// let b; // gave error. let cant reassign value
// const c;//gave error. constant value is fixed and cant reasign value


var a = 1;
let b = 2;

const c = 3;

console.log(`Global scope:`, a, b, c);

function test() {
    //function scope : var , let , const value is totally difference and cant chage the global scope value 
    var a = 4;
    let b = 5;
    const c = 6;

    console.log(`Functon scope:`, a, b, c);
}
test();
console.log(`Global scope:`, a, b, c);

if (true) {
    //if scope : if we decleare var , then the value wil also changed in global scope too!.
    var a = 7;
    let b = 8;
    const c = 9;

    console.log(`If Scope:`, a, b, c);
}
console.log(`Global scope:`, a, b, c);

for (var a = 0; a < 4; a++) {
    //for scope : if we decleare var , then the value wil also changed in global scope too!.
    console.log(`For loop scope:(var value-)`, a);
}
for (let b = 0; b < 4; b++) {
    console.log(`For loop scope:(let value-)`, b);
}
// for (const c = 0; c < 2; c++) {
//     console.log(`For loop scope:(cons value-)`, c);
// }
console.log(`Global scope:`, a, b, c);
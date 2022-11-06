//Global Scope

var a = 1;
let b = 2;
const c = 3;
var d = 10

console.log(`Global Scope: `, a, b, c)

//function scope
// we can access global scope in local scope , see vale of d
function test() {

    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function Scope: `, a, b, c, d)
}

test();
console.log(`Global Scope: `, a, b, c)


//if scope
if (true) {
    var a = 7; // var value will be changed in global ascope 
    let b = 8; // let value will be seperate form global scope
    const c = 9; // const value will be seperate from global scope
    console.log(`If scope:`, a, b, c);
}
console.log(`Global Scope: `, a, b, c);

//for scope 
for (var a = 0; a < 10; a++) {
    console.log(`Loop:`, a);
}
console.log(`Global Scope: `, a, b, c);


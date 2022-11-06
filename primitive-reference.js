//Primitive Types : deals width values
// number, string, boolean
//difference address 

let a = 7
let b = a;
console.log(b)
a = 45
console.log(a)



//reference type : works direct with address
//array , object

//when ones value is changed , oponents valus also changed 

let numnbers = [1, 2, 3, 4];
let newNumbers = numnbers;
console.log(newNumbers);
numnbers[1] = 400;
console.log(numnbers);
console.log(newNumbers);
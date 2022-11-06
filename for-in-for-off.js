// for in - string / array / object

// for in - (var x in name)
// ins work is save the index of string inself.

let x = ["Anik", " Hasan", "Ahmed", 12, 20];
let y = {
    name: "Sakib",
    age: 25,
    team: "Bangladesh",
    profession: "Cricketer",
}

for (var i in x) { //we will get index
    console.log(`Index ${i} and iteam ${x[i]}`)
}

//apply in - object
// for object there is no idex so for-in store property .

for (var o in y ){
console.log(`Property: ${o}; and value: ${y[o]}`)
}





// for off - string/ array
// for of use for get the value or iteam

let xx = ["Anik", " Hasan", "Ahmed", 12, 20];
let yy = {
    name: "Sakib",
    age: 25,
    team: "Bangladesh",
    profession: "Cricketer",
}

for (var z of xx) { // we will get iteams
    console.log(z)
}
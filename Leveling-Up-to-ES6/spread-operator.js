// //...spread operastor 
// let str = "Intellier";
// let newStr = [...str];
// console.log(newStr);


// spread opertaor in array 

let food1 = ["mango", "orange", "pinaple"];
let food2 = ["banana", "apple", "jackfruits"];
let food3 = "grape fruit"

let newArr = [...food1, food3, ...food2,];
console.log(newArr);

// spread opertaor in object
//spread on object (es8)

let person = {
    name: "anika",
    age: 30,
    dob: "31-12-95"
}
let newObj = { ...person, dob: "12-12-95" };
console.log(newObj);

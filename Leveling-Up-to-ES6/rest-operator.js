//rest operator in array
let fruits = ["apple", "orange", "pinaple", "peach", "grape"];
let [one, three, ...two] = fruits;

console.log(two);

//rest operator in object
let person = {
    fname: "anika",
    lname: "tasnim",
    dob: "12-12-95",
    email: "anika.tasnim@gmail.com",
}
let {fname, dob,...lname} = person;
console.log(lname);
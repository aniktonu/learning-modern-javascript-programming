// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

var person1 = {
    "name": "Rahim",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
}

var person_obj = JSON.stringify(person1);
var person_json = JSON.parse(person_obj);
console.log(person_obj);
console.log(person_json);

var person2 = {
    name: "Karim",
    age: 35,
    hometown: "Chittagong",
    married: true
};

console.log(person2);
console.log(person1);
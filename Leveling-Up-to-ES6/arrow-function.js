
//regular function define
function saySomething(name) {
    console.log("hello " + name);
}

saySomething("I am learning!");

//function expression 
let saySomething2 = function (name) {
    console.log("hello " + name);

}
saySomething2("javascript!");

//arrow function expression
let saySomething3 = (name, type) => {
    console.log("hello " + name + " " + type);
}
saySomething3("javascript ES6!", "arrow function");

//Parentheses can be avoided when there is a singler perameter
//curly braces can be avoided when there is a single statement (no return!)
let saySomething4 = name =>
    console.log("hello " + name);

saySomething4("javascript ES6 (single parameter!)");

//aroow function expression return 
let saySomething5 = number => { return number * number }
console.log(saySomething5(4));

//call back function
let number = [1, 2, 3, 4];
number.forEach(function (iteam, index) {
    console.log(iteam, index)
});

//call back function in arrow function way 
let numbers = [1, 2, 3, 4, 5]
let printAll = iteam => {
    console.log(iteam);
}
// parenthesis can not be used in call back function 
numbers.forEach(printAll);

// numbers.map(function (iteam){ return console.log(iteam*iteam)});

// let squreAll = iteam => {return iteam*iteam};
// let result =numbers.map(squreAll);
// console.log(result)

// forEach and Map using arrow function
let foreach = numbers.forEach(iteam => console.log(iteam));
let map = numbers.map(iteam => iteam * iteam);
console.log(map);

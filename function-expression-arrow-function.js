//Normal Declaration
function saySomething(name){
    console.log("Hello" + name);
}

// Function Expression

let saySomething1 = function(name2){
    console.log("Hello" + name2);
}


//Arrow Function (ES6)

let saySomething2 = (name,name2) => {
    console.log("this is "+ name + name2);
}



saySomething("Anik");
console.log("Hasan");
saySomething2("javascript", "(ES6)");




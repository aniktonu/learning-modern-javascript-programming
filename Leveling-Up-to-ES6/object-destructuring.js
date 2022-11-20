
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
}

// let firstname = person.firstName;

// console.log(firstname);

let { firstName: anik, lastName, age } = person; // we can change the property here
console.log(anik, lastName, age);


// destructing object using function 
function display({ firstName, lastName, age }) { // carly brase must need to use 
    console.log(firstName, lastName, age);
}
display(person);
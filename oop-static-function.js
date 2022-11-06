// static funcion is a class function but it have to call from a class
// builtin funcion is a class function but it have to call from a object 


class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        console.log(`Hello ${this.firstname} ${this.lastname}!`);
    }

    static test() {
        console.log("I am staic!");
    }
}

let person1 = new Person("Simanta", "Paul");

//builtin funcion must call from object , not from class!
//console.log(Person.greeting()) will gave error !
console.log(person1.greeting());

//static funcion must call from class , not from object!
//console.log(person1.test()) will gave error !
console.log(Person.test());
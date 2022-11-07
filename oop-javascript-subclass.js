//subclass
//inheritence


class Person { // base class

    constructor(fname, lname, birthday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }
    greetings() { //greetings() builtin function 
        return `Hello ${this.firstname} ${this.lastname}`;
    }
}
//sub class
//inheritence for collect data from main class Person
class Customer extends Person { // extends use  for inheritence all prperty, method of main class in subclass
    constructor(fname, lname, dob, phone, memberShip) {
        super(fname, lname, dob); //super() function use for link the constructor(perperty) of anothr class
        this.phone = phone;
        this.memberShip = memberShip;
    }
    fullname(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}
//Class constructor Person cannot be invoked without 'new'
let person1 = new Person("anik", "hasan", "16-9-1995");
console.log(person1);
console.log(person1.greetings());

let person2 = new Customer("siam", "hasan", "16-9-2002", '01319078897', "top");
console.log(person2);
console.log(person2.greetings());
console.log(person2.fullname());

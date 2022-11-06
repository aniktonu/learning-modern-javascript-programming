// Class(ES6) 
//Class is a templete for creating objects. its like a blueprint / map etc 
//Class Name alwaysd will be capital.
class Person {
    constructor(fname, lname, birthday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }
    //this calculateAge(){} is a method in class
    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

 //this fullname(){} is also a method in this class
    fullname() {
        console.log(this.firstname, this.lastname);
    }

}
// new use for create new object in person1 
let person1 = new Person("Fazle", "Rahat", "11-13-1988");
let person2 = new Person("Moinul", "Islam", "02-11-1991");
let person3 = new Person("Rony", "Chy", "01-17-1996");

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());


console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname());
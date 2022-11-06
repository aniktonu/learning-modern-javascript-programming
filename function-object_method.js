//Object method

// how to declare a funtion into object 


let person = {
    firstname: "anik",
    lastname: "hasan",
    age: 25,
    occupation: "Student",
    address: "dhaka",
    fullname: function () {
        return `${this.firstname} ${this.lastname}`;
    }
}

console.log(person.fullname());
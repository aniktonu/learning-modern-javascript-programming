// JSON Data types :
//sring 
//number
//object (json boject)
//array
//boolean
//null

// doesnt support : undefined , date , function

var person = {
    name: "abdullah", //string
    age: 25, // number
    dob: 16 - 9 - 2001, //date
    married: false, // bolean
    test_null: null, //null
    test_undefined: undefined, // undefined
    great: function () { // function
        console.log(`Hello ${this.name}`)
    }
}
var person_json = JSON.stringify(person);// JSON.stringify() --> JS object to JSON String
console.log(person_json);
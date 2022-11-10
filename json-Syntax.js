var student = {
    name: "abdullah",
    age: 26,
    Country: "Bangladesh ",
    homtown: "Dhka"
}
// JSON.stringify() --> JS object to JSON String
var student_json = JSON.stringify(student);
console.log(student_json);

// JSON.parse() -->  JSON String to JS Object
var student_js = JSON.parse(student_json);
console.log(student_js);
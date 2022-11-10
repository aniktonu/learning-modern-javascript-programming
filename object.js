object work with  property 
obejct in property is like(attribute in html)
for object we use { }


var student = {
    name: 'hello',
    age: 25,
    phone: '019213646',
}



// call a property of obejct in two ways 
student.age
student["name"]

// add new property to object in two ways

student.occu = "student";
student["Meritial"] = "unmerrid";

// for delete property of object 
delete student.Meritial

//emty object define

var teacher = {}

teacher.name = "Jitu Bhaiya"



console.log(student.age)
console.log(student["age"])
console.log(student)
console.log(teacher)
console.log(teacher.name)


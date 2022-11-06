// if else use for control flow

/*if (condition {
    //code to be executed
} else {
    //other Code
}
*/
//If true 
if (true) {
    console.log("If Statement Executed!");
}
else {
    console.log("Else Statement Executed!");
}
console.log("end of the statement!");

//If false
if (false) {
    console.log("If Statement Executed!");
}
else {
    console.log("Else Statement Executed!");
}
console.log("end of the statement!");



var inAge = (require('prompt-sync')()());

if (inAge >= 50) {
    console.log("age is above 50!")
} else if (inAge < 50 && inAge >= 30) {
    console.log("age is above or equal 30 and under 50!")
} else if (inAge < 30 && inAge >= 25) {
    console.log("age is above or equal 25 and under 30!")
} else if (inAge < 25 && inAge >= 18) {
    console.log("age is above or equal 18 and under 25!")
}
else {
    console.log("Age is under 18")
}


// console.log(require('prompt-sync')()('bbbieh  ')) for terminal input

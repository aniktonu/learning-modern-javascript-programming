//loop is if u want to exeucute a code reapet and repeat
// while () - thete ia a condition in the first bracate and the while method is ru nbased on that expression .
// until the codintion is true the procees will continue
//while loop

var x = 1; //initialization

while (x <= 10) { // condition
    console.log("the value of i is : " + x);
    x++; //update
}

console.log("out of the loop")


// do while loop

var x = 1;

do {
    console.log("the value of i is : " + x);
    x++;
} while (x <= 10);

console.log("out of the loop")



//while loop
//print 1 - 10

var num = 1;

while (num <= 10) {

    console.log("Print-" + num)
    num++;
}
console.log("print done");


//use if else in while loop 

//print 1 - 10 /

var num = 1;

while (num <= 10) {
    if (num == 4) {
        console.log("value of num is : " + num)
    }

    console.log("Print-" + num)
    num++;

}
console.log("print done");


// sum of 1-10

var num = 1;
var sum = 0

while (num <= 10) {

    sum = sum + 1;
    num++;
}
console.log("result of sum: " + sum);

// multiply of 1 to 10
//1*2*3*4*5*6*7

var i = 1
var mul = 1


while (i <= 10) {
    mul = mul * i;
    i++;
}

console.log(mul);



// var n = prompt("Enter Your Number:");
// n = parseInt(n);
// var sum = 0;


// for ( let i=1; i<=n ; i++ ){

// sum += i;

// }
// console.log(`Sum of 0 to ${n} is: ${sum}`);

// var i = 1
// while (i<=5){
//     console.log("value of i is: "+i);
//     i++;
// }

//print 1-10

// var i =1

// while (i<=10){
//     if (i == 4){
//         console.log("value of i: "+i)
//     }
// console.log(i);
// i++;
// }
// var i = 1
// var sum = 0;
// while (i <= 10) {
//     sum = sum + i;

//     i++;

// }
// console.log(sum);

// var i = 1
// var multiply = 1
// while (i <= 10) {
//     multiply = multiply*i;

//     i++;

// }
// console.log(multiply);


// for (let x =1 ; x<= 10 ; x++){
//     if (x%2 == 0){
//         continue;
//     }

//     console.log(x);
// }


// var x = "anik";
// var xx = ["anik", "hasan", "ahmed"]
// var len =x.length;
// var lenn = xx.length;
// var i = 0


// // for( var i= 0; i<lenn; i++){
// //     console.log(`Index: ${i}`);
// //     console.log(xx[i]);
// // }

// while (i < lenn) {
//     console.log(`Index: ${i}`)
//     console.log(xx[i])
//     i++;
// }




// let name = "anik hasan ahmed!";
// let food = ["cake", "chocklet", "Ice Cream"];
// let person = {
//     name: "sakib",
//     age: 25,
//     occupation: "cricketer",
//     team: "Bangladesh",
// }

// for(let x in person ){
//     console.log(`Property ${x} and Iteam: ${person[x]}`);

// }

// let sum = 0


// for (let i=1; i<=10; i++){

//     if( i%2 == 1){
//         sum+=i; // if chara korte hobe 

//     }
// }
// console.log(sum);


// let sum = 0


// for (let i = 1; i <= 100; i++) {
//     sum += i % 2==1;
// }
// console.log(sum);










// var n = parseInt(prompt("Enter Your Number: "))

// var sum = 0;
// var series = "";



// for (i = 1; i <= n; i++) {
//     sum += i ** 2;
//     series += (i ** 2).toString();

//     if (i == n)
//         continue;
//     series += " + "
// }
// console.log(`Sum of the series of square numbers!
// ${series} = ${sum}`);





// var n = parseInt(prompt("Enter Your Number: "))

// var sum = 0;
// var series = "";

// for (i = 1; i <= n; i++) {
//     sum += i ** 2;
//     series += (i ** 2).toString();
//     if (i == n) { continue; }
//     series += " + ";
//     console.log(series);
// }
// console.log(series);
// console.log(`Sum of the series of square numbers!
// ${series} = ${sum}`);




var result = parseInt(prompt("Enter Your NUmber: "));

var grade;

if (result <= 100 && result >= 80) {
    grade = "A+"
} else if (result <= 79 && result >= 70) {
    grade = "A"
} else if (result <= 69 && result >= 60) {
    grade = "A-"
} else if (result <= 59 && result >= 50) {
    grade = "B"
} else if (result <= 49 && result >= 40) {
    grade = "C"
} else if (result <= 39 && result >= 33) {
    grade = "D"
} else if (result <= 32 && result >= 0) {
    grade = "F"
} else {
    console.log("Pls Input a Number")
}

console.log(`Your Mark: ${result}
Your Grade is: ${grade}`);




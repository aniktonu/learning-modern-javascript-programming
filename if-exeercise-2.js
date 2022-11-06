

console.log("Select an Option:\n 1. Add\n 2. Subtract\n 3. Multiply\n 4. Divide")

var number1 = prompt("Enter First Number: ");
var number2 = prompt("Enter Second Number: ");
var option = prompt("Chose an Operation: ");
var result = null;

number1 = parseInt(n1);
number2 = parseInt(n2);
option = parseInt(n3);


var num1Con = NaN(number1);
var num2Con = NaN(number2);
var optionCon = NaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input!")
} else {

    switch (option) {
        case 1:
            result = n1 + n2
            break;
        case 2:
            result = n1 - n2
            break;
        case 3:
            result = n1 * n2
            break;
        case 4:
            result = n1 / n2
            break;
        default:
            break;
    }
    if (result == null) {
        console.log("no result!")
    } else {
        console.log("The Result is " + result)

    }
}


console.log("The Result is :" + result);
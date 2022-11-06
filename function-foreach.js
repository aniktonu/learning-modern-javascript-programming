// Array iteration using forEach

var food = ["Cake", "Ice Cream", "coke", "Bread"];
var numbers = [1, 2, 3, 4, 5];


//1st Parameter : iteam
//2nd Parameter : index
//3rd parameter : Whole array

food.forEach(function (iteam, index, whole_array) {
   console.log(`Index : ${index} and Iteam: ${iteam}
   The Whole Aray is : ${whole_array}`)
});


//Array iteration using forEach in a variable
let secondmethod = function (iteam, index, whole_array) {
    console.log(`Index : ${index} and Iteam: ${iteam}
        The Whole Aray is : ${whole_array}`)
}
food.forEach(secondmethod);


// Array iteration using Mapping



function addSomething(iteam){

return `${iteam} is a food`

}


let arr_res = food.map(addSomething)// no need to use first bracket

let arr_sqr =numbers.map(function(iteams){
return iteams*iteams;
})
console.log(arr_res);``
console.log(arr_sqr);
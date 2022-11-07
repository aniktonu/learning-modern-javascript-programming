//Multiselector
//document.getElementsByClassName('')

let list = document.getElementsByClassName('sample-class');
list[0].style.background = "red";
list[0].style.color = "white";
list[0].style.padding = "10px";
list[0].textContent = "Hello world!!";
console.log(liat[0]);

//document.getElementsByTagName()  
//returns a collection of all elements with a specified tag name.
list = document.getElementsByTagName('li');
// document.querySelector()
// by using it we can call by any tag name, id , class 
list = document.querySelector('ol').getElementsByTagName('li');

/*note: if we create an array with getElementsByTagName() & querySelector() , then forEach function will not work & it will covert to array first .
example:

list.forEach(function(iteam){
console.log(iteam)
});
console.log(list[3]); //will give eror */

let lis = Array.from(list)
lis.forEach(function (iteam) {
    console.log(iteam);
});   //The Array.from() method returns an array from any object with a length property

// document.querySelectorAll()
// id > #, class >., tag> nothing
// can make pure array 

list = document.querySelectorAll('.sample-class');
list = document.querySelectorAll('ol li');
list.forEach(function (iteam) {
    console.log(iteam);
})

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEve = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (iteam) {
    iteam.style.background = 'gray';
    iteam.style.color = 'white';
})

liEve.forEach(function (iteam) {
    iteam.style.background = 'red';
    iteam.style.color = 'black';
})


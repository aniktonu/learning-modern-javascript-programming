// //document.getElementById()
let val;

// // getting an element 
val = document.getElementById('documnet-title');
val = document.getElementById('documnet-title').id;
val = document.getElementById('documnet-title').className;


//changing Stayle
document.getElementById('documnet-title').style.background = '#333';
document.getElementById('documnet-title').style.color = '#fff';
document.getElementById('documnet-title').style.padding = '10px';
document.getElementById('documnet-title').style.display = 'block';



//changing content 
document.getElementById('documnet-title').textContent = "New Title";
document.getElementById('documnet-title').innerText = 'Again New Title';
document.getElementById('documnet-title').innerHTML = '<i>Again again new title</i>';

val = document.getElementById('documnet-title');
val.innerText = "this is test!!";


// document.querySelector()
// by using it we can call by any tag name, id , class 

val = document.querySelector('#documnet-title');   // id
val = document.querySelector('.document-class');   // class
val = document.querySelector('h3'); // tag
val = document.querySelector('ol');
val = document.querySelector('ol li');

val.style.background = 'red';
val.style.color = 'white';

val = document.querySelector('li:last-child'); // call last child of parents
val = document.querySelector('li:nth-child(1)') // call the nth child of parents
document.querySelector('li:nth-child(1)').innerText = "Hello!"; // change the content
document.querySelector('li:nth-child(even)').innerText = "Hello!"; // based on even or odd 

console.log(val)




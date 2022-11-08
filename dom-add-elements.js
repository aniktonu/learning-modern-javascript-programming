// Adding Element to DOM
// Create Element for orderlist part !
let olItem = document.createElement('li');

//ad id and class
olItem.className = "a new another-class";
olItem.id = "new-element";

//add attribute
olItem.setAttribute('title', 'A Title to new Element'); // 1st part is name and 2nd part is value

// by using appendChild we can insert anything inside the element 

olItem.appendChild(document.createTextNode('Javascript'));
document.querySelector('ol').appendChild(olItem);
//console.log(olItem);

// Create Element for unorderlist part !
let ulItem = document.createElement('li');
let link = document.createElement('a');// there is a anchor tag inside li . so take another variable for anchor link
link.appendChild(document.createTextNode('Instragram')); // insert text-"instragram" inside the a tag
link.setAttribute('href', 'https://www.instragram.com');// // set two atteributes in a tag  href and link !
ulItem.appendChild(link); //
document.querySelector('ul').appendChild(ulItem);
console.log(ulItem);
//console.log(link);





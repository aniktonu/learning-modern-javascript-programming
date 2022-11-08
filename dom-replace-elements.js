// Replacing elements

//1st create new elements 

let newHeading;
newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('A new tex ttitle!'));
newHeading.className = "sample-class";

// now call the old element which will lbe replced later with new elements !
let oldHeading = document.querySelector('h3');

// now call the parents elemets of h3!
let parent = document.querySelector('.container');
//or 2nd way : parent= oldHeading.parentElement;

parent.replaceChild(newHeading, oldHeading); // replaceChild( new elemet , old elemnet) use for replacing


console.log(parent);
console.log(newHeading);
console.log(oldHeading);

var val;

val = this; // indicate the whole documnet of browser
val = window; // indicate the whole documnet of browser
val = window.document; // indicate the whole documnet of a page
val = document; // indicate the whole documnet of a page
val = document.all; // is used for to move every elements of html into an array.
val = document.all[0]; // to itatare array property using index 
val = document.all.length; // to identify how many elements have that array 
val = document.head; // to see the head tag 
val = document.body;
val = document.doctype;
val = document.domain;
val = document.url; // to see the whole address bar url 
val = document.contentType;
val = document.characterSet;
val = document.forms; // to see the forms using in the page 
val = document.forms[0]; // to indexing a single form 
val = document.forms[1].method; // to know a method of a form 
val = document.forms[0].action; // to know a action of a form 

// paas the array of links
val = document.links; //to call all links of the html page 
val = document.links[0]; //to iterate e specific links using index 
val = document.links[1].href; //to call specific property of links 
val = document.links[3].className; // to call a classname of links in string format
val = document.links[2].classList; // to call a classname of links in array format

//pass the arrayt of images
val = document.images; //to access all the images of html page 

// pass the array of scripts
val = document.scripts; // to see all scripts of html page 
val = document.scripts[1] //to see a scripts of html page using index 
val = document.scripts[0].src; //to see a attributs of a scripts in html page using index 
val = document.scripts[1].getAttribute('src');

links = document.links;
let linkArr = Array.from(links);

linkArr.forEach(function(link){
    console.log(link.getAttribute('href'));
});

console.log(links);
console.log(val);

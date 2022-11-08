// traversing DOM ( jump one elemnet to anothr element)
// list 
let val ;
let list = document.querySelector('ul');
// let listIteam = document.querySelector('ul li:first-child');
val = list ;
// val = listIteam;

// console.log(val);

 //get child nodes
 val = list;
 val = list.childNodes;
 val = list.childNodes[1];
 val = list.childNodes[3];
 val = list.childNodes[1].nodeName;
 val = list.childNodes[1].nodeType;

//node type :
 // 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype

val = list.children; // to show without text 
val = list.children[1];
list.children[0].textContent = "hello";
val = list.children[1].children[0];
val = list.children[1].children[0].href;



val  = list.firstElementChild;
val  = list.lastElementChild;

val = list.childElementCount; // not count the text element !
// console.log(val);

// list iteams
let listIteam = document.querySelector('ul li:first-child');
val = listIteam;

val = listIteam.parentElement;
val = listIteam.parentElement;
val = listIteam.parentNode;
val = listIteam.parentElement.parentElement;

val = listIteam.nextSibling.nextSibling;
val = listIteam.nextElementSibling;
val = listIteam.nextElementSibling.nextElementSibling;

val = document.querySelector('ul li:last-child');
val = val.previousSibling;
val = val.previousElementSibling;

console.log(val);
console.log(val);

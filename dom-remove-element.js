// remove element 
// 1st : remove list iteams using without child method
let listItems = document.querySelectorAll('li');
let List = document.querySelector('ul');
listItems[1].remove(5);
//console.log(listItems);

// 2nd: remove list using with-child method
List.removeChild(listItems[6]);
//console.log(List);

//3rd : add class 

// .className replace/overwrite  the old classname 
//.classlist.add will add new class without replace old
List.classList.add("test");
List.classList.add("test-new");
//console.log(List);

//4th : remove class 
List.classList.remove("test");
List.classList.remove("test-new");
//console.log(List);

//5th : add attribute
let val =List.hasAttribute("class")

// check attribue exist or not , return true/ false !
List.setAttribute("titile", "New-Title");

// remove attribute
List.removeAttribute("title");
console.log(List);


// remove attribute
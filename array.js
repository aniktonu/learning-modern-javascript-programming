//basic 




var x = []
// console.log(x)


x.push(4);
x.push("anik");
x.pop();
x.push("anik");

var xx = "anik hasan ahmed";
var y = xx.split("n");
var y = xx.split(" ");


// covert string to array 

var x = "anik hasan ahmed";
var y = x.split(" ");

// covert array to string 

var x = [ 'anik', 'hasan', 'ahmed', '' ];

var y =x.toString();

// covert array to separete string 

var x = [ 'anik', 'hasan', 'ahmed', '' ];
var y = x.join(" ")


// concat two or many (string + arrays )comand 

/*remember : concate always take values from left side and make the order as (what the fast data type is). 
For example : if first porsion is a (type: string) then it will concate everything as a string.*/

var x = [ 'anik', 'hasan', 'ahmed'];
var y = [ 'runa', 'my', 'cousin'];

var z = x.concat(y);

console.log(z)

// how to sort order arry 
var p = [ 'anik', 'hasan', 'ahmed', 'runa', 'my', 'cousin'];
var s =p.sort();

// how to revarse a sort order arry 
var aa = [ 'ahmed', 'anik', 'hasan', 'cousin', 'my', 'runa' ];
var bb = aa.reverse();
console.log(bb)


// how to revarse a sort order arry 
var aa = [ 'ahmed', 'anik', 'hasan', 'cousin', 'my', 'runa' ];
var bb = aa.reverse();
console.log(bb)
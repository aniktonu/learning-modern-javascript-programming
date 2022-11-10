//Regular expressions
// Pattern Matching Technique
let re;
let str;

re = /hello/;
re = /hello/i // i = case incensetive

console.log(re);
console.log(re.source);

str = "Hello World!";
str = "asddHello worldsdf";
str = "Hello World! Hello";
// exec() - If match returns result in an array or null
let result = re.exec(str);

// test () return true or flase 
result = re.test(str);

// match() returns result in an array or null in object method
result = str.match(re);

// search() - Returns index of the first match or -1
result = str.search(re);

// replace() - Return new string with replace
str = "Again Hello World!";
let newStr= str.replace(re, "Hi");
console.log(newStr);














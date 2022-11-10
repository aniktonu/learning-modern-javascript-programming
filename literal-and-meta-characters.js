// Regular Expression
// Pattern Matching Technique
// exec() - Returns result in an array or null
// test() - true/false
// match() - Returns array or null
// search() - Returns index of the first match or -1
// replace() - Return new string

//literal character 
let re = /hello/i;
let str = "Hello World!";

reTest(re, str);

function reTest(re, str) {
    if (re.exec(str)) { // exec() - Returns result in an array or null
        console.log(`${str} matchs ${re.source}`);
    } else {
        console.log(`${str} doesn't match ${re.source}`);
    }
}


//meta characters 

// Meta Characters
let ree;
let strr;

ree = /^hello/; // Must start with
ree = /hello$/; // Must end with
ree = /world$/;
ree = /^hello$/; // Must start and end with
ree = /^h.llo$/; // Matches any one character
ree = /h.llo/;
ree = /h*llo/; // 0 or more times
ree = /he?a?llo/; // Optional
ree = /hello\?/; // escaping

strr = "Again hello World";
strr = "hello hello";
strr = "hello";
strr = "hallo";
strr = "hillo";
strr = "h llo";
strr = "hllo";
strr = "hillo worlde";
strr = "hello worlde";
strr = "hillo";
strr = "hilo";
strr = "hhfsdhfsuillo";
strr = "hello";
strr = "hllo";
strr = "hallo";
strr = "htllo";
strr = "heallo";
strr = "hello";
strr = "hallo";
strr = "hllo";
strr = "hello";
strr = "hello?";

reTest(ree, strr);

function reTest(ree, strr) {
    if (ree.exec(strr)) { // exec() - Returns result in an array or null
        console.log(`${strr} matchs ${ree.source}`);
    } else {
        console.log(`${strr} doesn't match ${ree.source}`);
    }
}
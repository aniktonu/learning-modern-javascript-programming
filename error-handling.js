//error handling  using try, catch, finally.

console.log("before error!")


try {
    //test();

    undefined.test();
} catch (err) {
    console.log(err.message);
    console.log(err.name);
} finally {
    console.log("i am inside finally!")
}


console.log("after error!")

//error handling  using if else .

let a = 19;

try {
    if(a<7) throw "too weak!";
 else if (a>16) throw "too big!";

} catch (err){
    console.log(err)
};

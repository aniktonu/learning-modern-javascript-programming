// place a array into another array 

var xx = ["anik", "hasan", ["hello", "world!"], "ahmed"];
var xxx = ["anik", "hasan", ["hello", ["a", "b"], "world!"], "ahmed"];

//call a arry from arry , then call into another array

xx[2][1]
xxx[2][1][1]

console.log(xxx[2][1][1])

// place an object into another array 

var a = [1, 2, ["a", "b"], { iteam: 1, area: "dhaka" }]

//call a property from object into array

a[3]["iteam"]

//or this way 

a[3].iteam

console.log(a[3]["iteam"])
console.log(a[3].iteam)

// place an object into array, then array into object , then array into array
//example :1

var mind = ["iteam1", "iteam2", { prop1: "iteam 1", prop2: [1, 2, ["a", "b"]] }]

mind[2]["prop2"][2][1]
console.log(mind[2]["prop2"][2][0]);

//or this way better 

mind[2].prop2[2][1]
console.log(mind[2].prop2[2][1])


//example :2
var car = {
    name: 'toyata',
    color: ['red', 'green', 'blue'],
    isRunning: true,
    history: {
        born: '13-5-1989',
        founder: 'Anik'
    }
};

console.log(car["name"]);
console.log(car.history.founder);


//call a property(array into object is call property for object) from obejct
var obj = { prop1: "iteam 1", prop2: "iteam 2", prop3: ["iteam 1 of prop3", "iteam 2 of prop3"] }

obj.prop3[1]
console.log(obj.prop3[1])




// mohaimain vai exercise extra

var obj = {}

obj.name = "anik"
obj.id = 2
obj.type = 10 / '2'
obj.address = ["holding:12", "Main Road", "Tista Gate"]
obj.details = {
    vehicle: "car",
    color: 2,
    type: (3 > 4) ? "true" : "false"
}

console.log(obj)
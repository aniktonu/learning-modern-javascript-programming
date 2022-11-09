// Events of JavaScript
// https://www.w3schools.com/JS/js_events_examples.asp


document.querySelector("#name").addEventListener('focus', test);
// document.querySelector('.container').addEventListener('mousemove', message);// if we use () in message function thne it will call the function without cick , so just use message.

document.querySelector('#name').addEventListener('keyup', test2);

function test(e) {
    this.style.background = 'pink';
}

function test2(e) {
    document.getElementById("demo").innerText = this.value;
}





// document.querySelector('.container').style.background = "red";

// function message(e) {
//     let val = e;
//     val = e.target; //this
//     val = e.target.id;

//     val = e.target.type;
//     val = e.timeStamp;

//     val = e.clientX;
//     val = e.clientY;

//     val = e.offsetX;
//     val = e.offsetY;
//     val = this;
//     this.style.background = `#${e.offsetX}`;
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(val);
// }
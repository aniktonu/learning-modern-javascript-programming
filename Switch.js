/*
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
  */

console.log("Select an option:\n a. Option 1\n b. Option 2\n c. Option 3\n d. Option 4");

choice = prompt();

var text

switch (choice) {
    case "a": text = "Option 1 is selected!";
        break;
    case "b": text = "Option 2 is selected!";
        break;

    case "c": text = "Option 3 is selected!";
        break;

    case "d": text = "Option 4 is selected!";
        break;
    default: "No option is selected";
        break;

}


console.log(text)
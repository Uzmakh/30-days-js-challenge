// Variables and Data-Types

// Activities/Tasks

// Activity-1 : Variable Declaration
// Task-1 : Declare a variable using var, assign it a number and log the value to the console.
var num = 45;
console.log("Declaring a number using var ", num);

// Task-2 : Declare a variable using let, assign it a string and log the value to the console.
let name = "Uzma";
console.log("Declaring a string using let ", name);

// Activity-2 : Constant Declaration
// Task-3 : Declare a variable using const, assign it a boolean value, and log the value to the console.
const isSkyBright = true;
console.log("Declaring a boolean using const ", isSkyBright);

// Activity-3 : Data Types
// Task-4 : Create variables of different data types(number, string, boolean, object, array) assign it an initial value, and log each variable type using the typeof operator.
const accountNumber = 563245098;
let userName = "Ukasha";
var cityName = "Harrapa";
let isOpen = false;
const fruits = ["grapes", "Mango", "pear", "gauve"];
const object = {
  city: "Sahiwal",
  population: 34876,
  places: "peaceful",
};
console.log(accountNumber);
console.log(typeof accountNumber); //number

console.log(userName);
console.log(typeof userName); //string

console.log(cityName);
console.log(typeof cityName); //string

console.log(isOpen);
console.log(typeof isOpen); //boolean

console.log(fruits);
console.log(typeof fruits); //object

console.log(object);
console.log(typeof object); //object

// Activity-4 : Reassigning Vaiables
// Task-5 :  Declare a variable using let,assign it an initial value, reassign a new value, and log both values to the console.
let assignedValue = "initial value";
console.log(assignedValue);
let reassignedValue = "new value";
console.log(reassignedValue);

let moreCities = ["Lahore", "Gujranwala", "Harrapa", "Chicha Watni"];
moreCities = ["Faisalabad", "Kherpur"];
console.log(moreCities); //it takeds the latest value.

// Activity-5 : Understanding Const
// Task-6 :  Try reassigning a variable declared with const and observe the error.
// const variable = null;
// console.log(variable)
// variable = 4
// console.log(variable)    //TypeError: Assignment to constant variable.

// FEATURE REQUEST:
// 1- Variable Types Console Log:
//  Write a script that declares variables of different data types
let myAssignedValue = "initial value";
let giveReassignedValue = 1;
let addMoreCities = ["Lahore", "Gujranwala", "Harrapa", "Chicha Watni"];
// and logs both the value and type of each variable to the console.
console.log(
  `Value is ${myAssignedValue} and Type is ${typeof myAssignedValue}`
);
console.log(
  `Value is ${giveReassignedValue} and Type is ${typeof giveReassignedValue}`
);
console.log(`Value is ${addMoreCities} and Type is ${typeof addMoreCities}`);

// 2- Reassignment Demo: Create a script that demonstrates the difference in between the behavior of let and const when it comes to reassignment.
let letDemo = "initial value";
console.log(`Before reassigning value : ${letDemo}`);
letDemo = "second value";
console.log(`After reassigning value : ${letDemo}`);
// It accepts the updated value and ignores the first one.

const constDemo = "initial value";
console.log(`Before reassigning value : ${constDemo}`);
constDemo = "second value";
console.log(`After reassigning value : ${constDemo}`);
// TypeError: Assignment to constant variable.

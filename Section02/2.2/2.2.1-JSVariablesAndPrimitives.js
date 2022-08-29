// create a constant variable (const)
const myName = "LaTishia";
// create a variable that can be reassigned (let)
// eslint-disable-next-line no-unused-vars
let age = 50;
// create three variables and assign them values of different data types (=)
let str = "Hello";
let num = 8;
let truth = true;
// print the typ;es of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof truth); // boolean
console.log(typeof str); // string
// change the value referenced by a variable (dynamic typing)
num = "eight";
// print the type of the variable you just changed (typeof)
console.log(typeof num);
// create variables and give them values to complete the sentences that will print  below.
let language = "JavaScript";
// Which variables need to be created?
// What type of data needs to go in each variable?

console.log(
  "Hello, my name is " + { myName } + ", and I am learning " + language
);
console.log(`"Hello, myName is ${myName}, and I am learning ${language}"`);

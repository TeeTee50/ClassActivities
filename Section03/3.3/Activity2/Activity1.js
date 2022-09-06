// Activity 1

// 1.a
// Declare a function called helloWorld that prints out the string "Hello World"
function helloWorld() {
  console.log("Hello World");
}
// Invoke the helloWorld function
helloWorld();
// 1.b
// Declare a function called numSum

//    This is the requirements of the function:
//    Accepts 2 parameters
//    Inside the function, add the parameters together
//    The function will print out a string that says: <1st parameter> plus <2nd parameter> equals sum
//    The function will output the sum of the two parameters
// Hints: you will need to use template literals to print out the string
//        there is no one right way to do this, but don't overthink it
let sum;
function numSum(num1, num2) {
  sum = num1 + num2;
  console.log(`${num1} plus ${num2} equals ${sum}`);
  return sum;
}
// Invoke the function inside of a console.log so we can see the returned value function helloWorld() {
console.log(numSum(10, 15));
numSum(5, 7);
console.log(sum);
//
//
function printParams(...params) {
  for (let param of params) {
    console.log(param);
  }
  return params;
}
printParams("First", "Second", "Third", "Apple");

//Using Returned Value as Parameter
function printOtherFunctionReturn(otherFunction) {
  console.log("This is the param:)", otherFunction);
}
printOtherFunctionReturn(printParams("Cheese", "Wheel", "Fire"));
printOtherFunctionReturn("Potato");
//
//
// 2.a
// Declare a function called testAverage
//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together
//    Divide the sum by the number of parameters that were passed in
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use
function testAverage(...param) {
  let sum =0;
  for (let param of params)
      sum += param;
  }
return sum / params.length;
//Invoke testaAverage
  console.log(testAverage(100, 100, 100, 100))

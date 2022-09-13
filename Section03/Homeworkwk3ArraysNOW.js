//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["pepperoni", "sausage", "onions", "peppers"];

//Create a greetCustomer function that
function greetCustomer() {
  //PRINTS a message that welcomes a guest
  let greeting = `Welcome to The pizza House, our topping are:`;

  //then informs them of the available toppings by looping over pizza:
  for (let topping of pizzaToppings) {
    greeting += `${topping},`;
  }
  //PRINTS the message
  console.log(greeting);
}
//calling the function
greetCustomer();

//Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings
function getPizzaOrder(size, crust, ...toppings) {
  //PRINTS the order, i.e. "One large thick crust pizza with x, y, z, ...Coming up!"
  let order = `One ${size} ${crust} crust pizza with`;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  //PRINTS the order
  console.log(`${order}. Coming up!`);
  //outputs a list with the size,crust, and toppings
  return [size, crust, toppings];
}
// call getPizzaOrder with parameters.
let customerOrder = getPizzaOrder(
  "large",
  "thin",
  "sausage",
  "onions",
  "peppers"
);

//Create a preparePizza function that has an array as its parameter with three items:
//...a size, a crust, and a list of toppings
function preparePizza([orderSize, orderCrust, orderToppings]) {
  //prints something like "...Cooking pizza..."
  console.log(" ...your pizza is cooking...");

  //outputs a pizza Object with appropriate key-value pairs for size,
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}
  // unnecessary console log to display that the output is correct for #4, point 3
  console.log(preparePizza(customerOrder));
  // Call each function and (starting with preparePizza) use the return
  let cookedPizza = preparePizza(customerOrder);
  // Create a servePizza Function that
  // ...has a parameter of a pizza Object
function servePizza(pizza){
  //LOGS a message that the pizza is ready and repeats the order, i.e "Order up! Here's your large thick crust "
let orderReady = `Order up! Here's your ${pizza.size} ${pizza. crust} pizza with`;}
for (let topping of pizza.toppings) {
    orderReady += `${topping}, `;
}
//LOGS the message
console.log(`${orderReady}. Enjoy!`);
{
//outputs the same pizza Object that was passed in
  return pizza;
}
//Call each function and (starting with preparePizza) use the returned value from the previous function as
servePizza(cookedPizza);

//greetCustomer();
//const myPizza = servePizza(
//preparePizza(getPizzaOrder("small", "thin", "mushrooms", "banana peppers'”))
//);
console.log(myPizza);

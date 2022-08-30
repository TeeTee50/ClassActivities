// ? what does the function below return?
// eslint-disable-next-line no-unused-vars
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  return num;
}

// change the function above to return a value

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
}
shortCircuitFunction();

// ? will the following function short circuit?
let height = 50;
// eslint-disable-next-line no-unused-vars
function checkCircusRides() {
  if (height < 48) {
    return "Take a ride on the carousel!";
  }
  if (height < 60) {
    return "Try the bumper cars!";
  }
  return "Enjoy the roller coaster!";
}

// change the function above to use short circuiting

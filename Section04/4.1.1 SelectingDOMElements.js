/* eslint-disable no-unused-vars */
// select all unordered list (ul) elements
console.log(document.querySelectorAll("ul"));
console.log(document.getElementaryByTagName("ul"));

// select all elements with the class "class-week"
console.log("This is query All:", document.querySelectorAll("class-week"));
console.log(
  "This is query element by:",
  document.getElementaryByClassName("class-week")
);

// select all elements with the class "nav-bar"
console.log(document.querySelectorAll(".nav-bar"));
// select the element with the id "dog-picture" and save it to a variable
const dogPic = document.querySelector("#dog-picture");

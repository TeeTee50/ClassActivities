const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.IndexOf("a"); //0
console.log(firstA);
let firstB = arr.IndexOf("b"); //2
console.log(firstB);
let firstC = arr.IndexOf("c"); //4
console.log(firstC);

// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a"); //6
console.log(lastA);
let lastB = arr.lastIndexOf("b"); //8
console.log(lastB);
let lastC = arr.lastIndexOf("c"); //11
console.log(lastC);

// if the first index and last index of "a" is not the same,
// repeat until there is just one "a"
function removeDuplicates(arr, duplicateValue) {
  let firstIndex = arr.indexOf(duplicateValue);
  let lastIndex = arr.lastIndexof(duplicateValue);

  while (firstIndex !== lastIndex) {
    arr.splice(lastIndex, 1);
  }
  return arr;
}
console.log(arr);

console.log(removeDuplicates(arr, "a"));
console.log(removeDuplicates(arr, "c"));
console.log(removeDuplicates(arr, "a"));

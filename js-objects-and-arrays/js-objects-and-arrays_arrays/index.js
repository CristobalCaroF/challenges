console.clear();

// EXERCISE 1
// Modify the array exampleArray so that it contains a number and a string.

const exampleArray = [true];
console.log("example array: ", exampleArray);
exampleArray.push(5, "Hola");
console.log("example array after adding number and string: ", exampleArray);

// EXERCISE 2
// Nest an array inside array nestedArray. After that nestedArray should contain an array as an element.

const nestedArray = ["example", 10, true];
console.log("nested array: ", nestedArray);
nestedArray.push([5, "Hola"]);
console.log("nested array after adding array to the end: ", nestedArray);

// EXERCISE 3
// Change the value of firstNumber to equal the first value of the numbers array using bracket notation.

const numbers = [20, 10, 50];

const firstNumber = numbers[0];
// let firstNumber = "change me";

// firstNumber = numbers[0];
console.log(
  "firstNumber variable after changing its value to the first element of array: ",
  firstNumber
);

// EXERCISE 4
// Change the fruit stored at index 0 of fruits to mango.

const fruits = ["apple", "banana", "grapefruit"];
console.log("fruits array: ", fruits);

fruits[0] = "mango";
console.log("fruits after replacement of first element: ", fruits);

// EXERCISE 5
// Change the value of nestedNumber to equal the fourth number of nestedNumbers using bracket notation.

const nestedNumbers = [10, [20, 30, [40, 50]]];

const nestedNumber = nestedNumbers[1][2][0];
console.log("Fourth element of nestedNumbers array: ", nestedNumber);

// EXERCISE 6
// Put "rat" onto the end of petsWithPush variable by using the array method `.push()`.

const petsWithPush = ["dog", "cat", "rabbit"];

// EXERCISE 7
// Use the pop method to remove the last item from fruitsWithPop.

const fruitsWithPop = ["apple", "banana", "mango"];
console.log("fruitsWithPop array: ", fruitsWithPop);
fruitsWithPop.pop(2);
console.log("fruitsWithPop array after removing last item: ", fruitsWithPop);

// EXERCISE 8
// Put "hamster" onto the start of unshiftedPets variable by using the array method unshift.

const unshiftedPets = ["dog", "cat", "rabbit"];
console.log("unshiftedPets array: ", unshiftedPets);

unshiftedPets.unshift("hamster");
console.log(
  "unshiftedPets array after adding element to the start: ",
  unshiftedPets
);

// EXERCISE 9
// Use the shift method to remove the first item from shiftedFruits.

const shiftedFruits = ["apple", "banana", "mango"];
console.log("shiftedFruits array: ", shiftedFruits);
shiftedFruits.shift();
console.log(
  "shiftedFruits array after removing element in the start: ",
  shiftedFruits
);

export {
  exampleArray,
  nestedArray,
  firstNumber,
  fruits,
  nestedNumber,
  petsWithPush,
  fruitsWithPop,
  unshiftedPets,
  shiftedFruits,
};

const numbers = [1, 2, 3, 4, 5];

function myMap(numbers, double) {
  doubledNumbers = [];
  for (element of numbers) {
    newValue = double(element);
    doubledNumbers.push(newValue);
  }
  console.log("doubled array: ", doubledNumbers);
  return doubledNumbers;
}

function double(value) {
  return value * 2;
}

myMap(numbers, double);

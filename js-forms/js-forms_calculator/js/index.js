console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

const addition = document.querySelector('[id="addition"]');
const subtraction = document.querySelector('[id="subtraction"]');
const multiplication = document.querySelector('[id="multiplication"]');
const division = document.querySelector('[id="division"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// console.log(addition.value);
// console.log(division.value);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  inputA = +formElements["numberA"].value;
  inputB = +formElements["numberB"].value;

  if (formElements["addition"].checked) {
    result = add(inputA, +formElements["numberB"].value);
  }
  if (formElements["subtraction"].checked) {
    result = subtract(inputA, inputB);
  }
  if (formElements["multiplication"].checked) {
    result = multiply(inputA, inputB);
  }
  if (formElements["division"].checked) {
    result = divide(inputA, inputB);
  }

  form.addEventListener("input", () => {
    console.log(addition.value);
    console.log(division.value);
  });

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});

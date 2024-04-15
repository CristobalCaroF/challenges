console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}

console.log(getCurrentHour());

const getCurrentHourArrow = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

console.log(getCurrentHourArrow());

function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

console.log(getVectorLength(1, 2, 3));

const getVectorLengthArrow = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

console.log(getVectorLengthArrow(1, 2, 3));

function cleanInput(string) {
  return string.toLowerCase().trim();
}

console.log(cleanInput("HELLO"));

const cleanInputArrow = (string) => {
  return string.toLowerCase().trim();
};

console.log(cleanInputArrow("HELLO"));

/*
Rewrite the following arrow functions as classic functions.
*/

const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

console.log(isOddAndSmall(5));

function isOddAndSmallClassic(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

console.log(isOddAndSmallClassic(5));

const add3 = (a, b, c) => a + b + c;

console.log(add3(1, 2, 3));

function add3Classic(a, b, c) {
  return a + b + c;
}

console.log(add3Classic(1, 2, 3));

const repeat10 = (string) => string.repeat(10);

console.log(repeat10("Hello"));

function repeat10Classic(string) {
  return string.repeat(10);
}

console.log(repeat10Classic("Hello"));

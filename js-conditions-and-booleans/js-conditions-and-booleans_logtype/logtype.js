const data = Array([]);
// let data = null;
// let data = NaN;
// let data;
// let data = 10;
// let data = "";
// let data = true;
// let data = 10n;
// let data = 10n;
// function data() {}
// const data = {};
// let data = Symbol();

if (Array.isArray(data) === true) {
  console.log("array!");
} else if (data === null) {
  console.log("null!");
} else if (Number.isNaN(data)) {
  console.log("not a number!");
} else {
  switch (typeof data) {
    case "undefined":
      console.log("undefined!");
      break;
    case "number":
      console.log("number!");
      break;
    case "string":
      console.log("string!");
      break;
    case "boolean":
      console.log("boolean!");
      break;
    case "bigint":
      console.log("bigint!");
      break;
    case "function":
      console.log("function!");
      break;
    case "object":
      console.log("object!");
      break;
    default:
      console.log("I have no idea!");
  }
}

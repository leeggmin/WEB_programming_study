const { add, even } = require("./var");
const checkNumber = require("./function");

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    //홀수면
    return add;
  } else {
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));

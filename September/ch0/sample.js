var num1 = 0;
console.log(num1);

//named function
function add(num1, num2) {
  return num1 + num2;
}

//amoymous function
let sub = function (num1, num2) {
  return num1 - num2;
};

//arrow function
let mul = (num1, num2) => {
  return num1 * num2;
};

let div = (num1, num2) => {
  if (num2 == 0) {
    return "분모는 0이 아니여야 함";
  }

  return num1 / num2;
};

let result = add(10, 20);
console.log("result = ", result);

let result2 = sub(10, 20);
console.log("result2 = ", result2);

let result3 = mul(10, 20);
console.log("result3 = ", result3);

let result4 = div(10, 0);
console.log("result4 = ", result4);

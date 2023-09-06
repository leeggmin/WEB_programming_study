function onLoadData() {
  const result1 = document.createElement("div");
  result1.textContent = "add result = " + add(10, 20);

  const result2 = document.createElement("div");
  result2.textContent = "sub result = " + sub(10, 20);

  const result3 = document.createElement("div");
  result3.textContent = "mul result = " + mul(10, 20);

  const result4 = document.createElement("div");
  result4.textContent = "div result = " + div(10, 20);

  const resultData = document.getElementById("results");
  resultData.appendChild(result1);
  resultData.appendChild(result2);
  resultData.appendChild(result3);
  resultData.appendChild(result4);
}

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

window.onload = onLoadData;

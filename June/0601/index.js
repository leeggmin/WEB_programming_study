const btn1 = document.querySelector("#btn1");
const div1 = document.querySelector("#div1");

btn1.addEventListener("click", () => {
  let newP1 = document.createElement("p");
  let newP2 = document.createElement("p");

  let newContent1 = document.createTextNode("장미꽃");
  let newContent2 = document.createTextNode("장미꽃은 빨간색이다.");

  newP1.appendChild(newContent1);
  newP2.appendChild(newContent2);

  div1.appendChild(newP1);
  div1.appendChild(newP2);
});

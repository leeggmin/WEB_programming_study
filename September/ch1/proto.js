// let Shape = function () {
//   this.stroke = 1; //'this' 예약어를 명시하여 이 객체의 멤버 변수 정의
//   this.color = "white";
//   function draw() {
//     console.log("draw ====> ");
//   }
// };

let Shape = {
  stroke: 1,
  color: "white",
  draw: function () {
    console.log("draw");
  },
};

let rectangle = new Shape();
let circle = new Shape();

rectangle.background_color = "green";
Shape.prototype.backgroundColor = "pink";

console.log(rectangle.background_color);
console.log(circle.background_color);

console.log(rectangle.backgroundColor);
console.log(circle.backgroundColor);

circle.move = function (x, y) {
  console.log("move : " + x + " : " + y);
};
circle.move(10, 10);

Shape.prototype.move2 = function (x, y) {
  console.log("move2 : " + x + " : " + y);
};
circle.move2(20, 20);
rectangle.move2(20, 20);

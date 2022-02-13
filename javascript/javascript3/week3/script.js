console.log(5);
const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width =  window.innerWidth;

// canvas.style.background = "#ff8";
// context.beginPath();
// context.arc(50, 50, 20, 0, 2 * Math.PI, "#000000");
// context.fill()
// context.stroke();

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw(context) {
    context.beginPath();
    //context.lineWidth = 0;
    context.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.fillColor
    );

    //context.stroke();
    context.fillStyle = this.fillColor;
    context.fill();
    context.closePath();
  }
}

let all_circles = [];

let createCircle = function (circle) {
  circle.draw(context);
};

for (let numbers = 0; numbers < 170; numbers++) {
  let random_x = Math.random() * window.innerWidth;
  let random_y = Math.random() * window.innerHeight;
  let randomColor =
  "#" +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(2, "0");

  let c1 = new Circle(random_x, random_y, 10, 50, 2 * Math.PI, randomColor);
  all_circles.push(c1);
  createCircle(all_circles[numbers]);
}

setTimeout(() => {
  window.location.reload(1);
}, 1000);
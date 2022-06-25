const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");
let mouseEvent;
let color = "red";
let width = 2;
let lastPosX;
let lastPosY;

cvs.addEventListener("mousedown", (e) => {
  color = document.getElementById("txtColor").value;
  width = document.getElementById("txtWidth").value;
  mouseEvent = "mouseDown";
});
cvs.addEventListener("mouseleave", (e) => (mouseEvent = "mouseLeave"));
cvs.addEventListener("mouseup", (e) => (mouseEvent = "mouseUp"));
cvs.addEventListener("mousemove", (e) => {
  let mX = e.clientX - cvs.offsetLeft;
  let mY = e.clientY - cvs.offsetTop;

  if (mouseEvent === "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    console.log(
      `The current position of x and y is: x:${mX} y:${mY} and last position of x and y is: x:${lastPosX} y:${lastPosY}`
    );
    ctx.moveTo(lastPosX, lastPosY);
    ctx.lineTo(mX, mY);
    ctx.stroke();
  }
  lastPosX = mX;
  lastPosY = mY;
});

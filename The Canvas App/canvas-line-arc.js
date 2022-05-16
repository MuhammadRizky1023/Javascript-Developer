const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

// --------------------------------------Drawing Lines
canvasContext.beginPath();
canvasContext.moveTo(250, 250);
canvasContext.lineTo(400, 350); // line 1
canvasContext.lineTo(600, 150); // line 2
canvasContext.lineTo(700, 450); // line 3
canvasContext.lineTo(1000, 50); // line 4
canvasContext.lineTo(1500, 250); // line 5
canvasContext.lineTo(1500, 650); // line 6
canvasContext.lineTo(250, 650); // line 6
canvasContext.lineTo(250, 250); // line 8
canvasContext.strokeStyle = "white";
canvasContext.stroke();

// --------------------------------------Drawing Arcs
// https://www.mathsisfun.com/geometry/radians.html

canvasContext.beginPath();
canvasContext.arc(750, 350, 50, 0, Math.PI);
canvasContext.stroke();

// --------------------------------------Drawing Circles

canvasContext.beginPath();
canvasContext.arc(1200, 200, 50, 0, Math.PI * 2);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(200, 300, 50, 0, Math.PI * 2);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(400, 400, 50, 0, Math.PI * 2);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(600, 500, 50, 0, Math.PI * 2);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(800, 600, 50, 0, Math.PI * 2);
canvasContext.stroke();

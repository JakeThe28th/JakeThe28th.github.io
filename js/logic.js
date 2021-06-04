
var canvas = document.getElementById("topLCD");
var ctx = canvas.getContext("2d");
// var img = document.getElementById("scream");
// ctx.drawImage(img, 10, 10);

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
 
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();
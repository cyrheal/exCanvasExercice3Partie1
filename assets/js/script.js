var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

ctx.fillStyle = "#00aa4b";
ctx.fillRect(100,100,200,50);
// Fond
ctx.fillStyle = "#00aa4b";
ctx.fillRect(50,150,300,50);

ctx.beginPath();
ctx.arc(75,225,25,0,Math.PI*2,false);
ctx.strokeStyle = "#C1C1C1";
ctx.fillStyle = "#CDCDCD";
ctx.fill();
ctx.beginPath();
ctx.arc(325,225,25,0,Math.PI*2,false);
ctx.fill();

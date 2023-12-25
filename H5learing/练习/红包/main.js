var canvasWidth = 877;
var canvasHeight = 672;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var image = new Image();
var radius = 50;
image.src = "./a658367b0b224387b156bf3d4df07ac7.jpg";
image.onload = function(e)
{
    initCanvas();
}
function initCanvas() {
    Region = {x:Math.random()* (canvas.width-2*radius)+radius,y:Math.random()* (canvas.height)+radius,r:radius}
    draw(Region);
}
function setRegion(Region) {
    context.beginPath();
    context.arc(Region.x,Region.y,Region.r,0,Math.PI*2,false);
    context.clip();
}
function draw() {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    setRegion(Region);
    context.drawImage(image,0,0);
    context.restore();
}
function reset() {
    initCanvas();
}
 
function show() {
    Region.r = 2 * Math.max(canvas.width, canvas.height);
    draw(image, Region)
}
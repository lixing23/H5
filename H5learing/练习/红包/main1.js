// 声明画布的宽
var canvasWidth = 877;
// 声明画布的高
var canvasHeight = 672;
// 获取画布
var canvas = document.getElementById('myCanvas');
// 获取上下文对象
var context = canvas.getContext('2d');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
// 声明图片
var image = new Image();
// 声明半径
var radius = 50;
// 获取图片路径
image.src = 'a658367b0b224387b156bf3d4df07ac7.jpg';
 
image.onload = function(e) {
    // 调用初始画布方法
    initCanvas();
};
// 创建初始画布方法
function initCanvas() {
    Region = {
        x: Math.random() * (canvas.width - 2 * radius) + radius,
        y: Math.random() * (canvas.height - 2 * radius) + radius,
        r: radius
    };
 
    // 绘制图片
    draw(Region);
}
// 绘制圆形，用clip() 方法剪切圆形区域
function setRegion(Region) {
    context.beginPath();
    context.arc(Region.x, Region.y, Region.r, 0, Math.PI * 2, false);
    context.clip();
}
 
function draw() {
    // 用于每次清楚上一次绘制的圆形，保证只显示一个圆形区域
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    setRegion(Region);
    context.drawImage(image, 0, 0);
    context.restore();
}
// 单击按钮显示
function reset() {
    initCanvas();
}
 
function show() {
    Region.r = 2 * Math.max(canvas.width, canvas.height);
    draw(image, Region)
}

(function () {
    
var canvas = document.getElementById("drawing");
var context = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;
canvas.style.border = "1px solid #000";
canvas.onmousedown = function(e){
    var x = e.clientX - canvas.getBoundingClientRect().left;
    var y = e.clientY - canvas.getBoundingClientRect().top;
    context.beginPath();
    context.moveTo(x,y);
    canvas.onmousemove = function(event){
        var x = event.clientX - canvas.getBoundingClientRect().left;
        var y = event.clientY - canvas.getBoundingClientRect().top;
        context.lineTo(x,y);
        context.stroke();
    };
    canvas.onmouseup = function(event){
        canvas.onmousemove = null;
    };
};
}());

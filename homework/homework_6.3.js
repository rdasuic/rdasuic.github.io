// reference to canvas and 2d drawing context
// line of code to set the canvas background color
// function definition for a letter of your name
//  change the pen size and color
//  multiple move and line commands to make a block letter
// call your function
// use fillText to write your UIN on the canvas
// 
const pageCanvas = document.getElementById('art');
let ctx = pageCanvas.getContext('2d');
window.onload = function() {
    ctx.beginPath()
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 50);
    ctx.lineTo(100, 200);
    ctx.lineTo(75, 200);
    ctx.moveTo(100, 70);
    ctx.bezierCurveTo(100,20,200,30,100,140);
    ctx.moveTo(100,140);
    ctx.lineTo(180,200);
    ctx.lineTo(180,180);
    ctx.lineTo(90,130);

    ctx.fill();
    
    ctx.font = '48px sans-serif';
    ctx.fillText("UIN", 250, 180);
}
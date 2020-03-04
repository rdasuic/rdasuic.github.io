let c = document.getElementById("art");
let ctx = c.getContext('2d');
let player = {x:100, y:100, rad: 50};
ctx.fillStyle = "hotpink";
const draw = () => {
    // clear the area
    ctx.clearRect(0,0, c.width, c.height);
    
    //update the player's coords
    player.x += 1;
    
    // handle edge
    if(player.x >= c.width + player.rad) {
        player.x = -player.rad;
    }
    
    //draw
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.rad, 0, Math.PI*2);
    ctx.closePath();
    
    ctx.fill();
    
    //repeat the movement
    window.requestAnimationFrame(draw);
    
}
// call the method the first time
draw();
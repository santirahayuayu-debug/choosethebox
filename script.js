const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let box = 20;
let snake = [{x: 200, y: 200}];
let direction = "RIGHT";

let food = {
    x: Math.floor(Math.random()*20)*box,
    y: Math.floor(Math.random()*20)*box
};

document.addEventListener("keydown", changeDir);

function changeDir(e){
    if(e.key === "ArrowUp") direction = "UP";
    if(e.key === "ArrowDown") direction = "DOWN";
    if(e.key === "ArrowLeft") direction = "LEFT";
    if(e.key === "ArrowRight") direction = "RIGHT";
}

function draw(){
    ctx.fillStyle = "#111";
    ctx.fillRect(0,0,400,400);

    // snake
    for(let i=0;i<snake.length;i++){
        ctx.fillStyle = "lime";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
    }

    // food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x,food.y,box,box);

    let head = {...snake[0]};

    if(direction === "RIGHT") head.x += box;
    if(direction === "LEFT") head.x -= box;
    if(direction === "UP") head.y -= box;
    if(direction === "DOWN") head.y += box;

    if(head.x === food.x && head.y === food.y){
        food.x = Math.floor(Math.random()*20)*box;
        food.y = Math.floor(Math.random()*20)*box;
    } else {
        snake.pop();
    }

    snake.unshift(head);

    if(head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400){
        alert("Game Over!");
        location.reload();
    }
}

setInterval(draw, 150);

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;

let player = { x: 50, y: 350, width: 50, height: 50, color: 'hotpink', speed: 5 };
let women = [];

function createWoman() {
  return { x: canvas.width, y: 350, width: 50, height: 50, color: 'red', speed: 3 };
}

function drawRect(obj) {
  ctx.fillStyle = obj.color;
  ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRect(player);

  // Women chasing
  women.forEach(woman => {
    woman.x -= woman.speed;
    if (woman.x + woman.width < 0) woman.x = canvas.width;
    drawRect(woman);
  });

  requestAnimationFrame(update);
}

function init() {
  for (let i = 0; i < 3; i++) {
    women.push(createWoman());
  }
  update();
}

window.onload = init;

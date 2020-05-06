const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// variables
let score;
let highscore;
let player;
let gravity;
let pbstacles;
let gameSpeed;
let keys = [];

class Player {
  //class is a pbjoct - holds info, has methods, and you can initiate versios
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.direction = 0;
    this.jump = 15; // jump force
    this.originalHeight = height; // refrence when shrinknig character
    this.grounded = false;
  }

  Animate() {
      //Gravity
    if (this.y + this.height < canvas.height) {
      this.direction += gravity;
      this.grounded = false;
    } else {
      this.direction = 0;
      this.grounded = true;
      this.y = canvas.height - this.height;
    }

    this.y += this.direction;
    this.Draw();
  }

  Draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}

function Start() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.font = "sans-serif";
  gameSpeed = 3;
  gravity = 1;

  score = 0;
  highscore = 0;

  player = new Player(25, canvas.height - 150, 50, 50, "#434cbf");

  requestAnimationFrame(Update); //call a func
}

function Update() {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // if we dont clear canvas it will draw at show the path (dosent clear squere) to give the effect of moving

  player.Animate();
}
Start();

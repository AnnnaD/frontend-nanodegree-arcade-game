console.log("yes working");


// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // console.log(this);
    this.dt = dt;
    this.x = Number((this.x + (this.speed * this.dt)).toFixed());
    first.checkCollisions();
    second.checkCollisions();
    third.checkCollisions();
    if(this.x >= 505) {
      this.x = 0;
      // console.log("end of can");
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Check collisions, if enemy is on the same position x as player
//If player is at the same position x as enemy's position x then game reset method is activated
Enemy.prototype.checkCollisions = function() {
  if((this.x >= (player.x - 60) && this.x <= player.x) && this.y === player.y) {
    console.log("boo")
    player.resetMeth();
  }
};

// Player class
// This class requires an update(), render(), resetMeth(), winGame() and
// a handleInput() method.

class Player {
  constructor(x,y,stepx,stepy) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.stepx = stepx;
    this.stepy = stepy;
  }
  handleInput(allowedKeys) {
    player.winGame();

    if(allowedKeys === "left" && this.x >= 5) {
      this.x = this.x - this.stepx;
      console.log("left yes")
    } if (allowedKeys === "right" && this.x <= 370){
      this.x = this.x + this.stepx;
      console.log("right yes")
    } if(allowedKeys === "up" && this.y >= 100) {
      this.y = this.y - this.stepy;
    } if(allowedKeys === "down" && this.y <=350) {
      this.y = this.y + this.stepy;
    }
  } render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  } update(dt) {
    this.dt = dt;
  } resetMeth() {
    player.x = 200;
    player.y = 380;
  } winGame() {
    if(this.y <= 60) {
      player.resetMeth();
      console.log("winning")
    }
  }
}

// Instantiate objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let first = new Enemy(0,60, 250);
let second = new Enemy(0,140, 100);
let third = new Enemy(0,220, 200);
let allEnemies = [first, second, third];

let player = new Player(200, 380, 100, 80);
// first.checkCollisions();
// second.checkCollisions();
// third.checkCollisions();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

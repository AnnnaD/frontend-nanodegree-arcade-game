
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


// Check collisions, if enemy is on the same position x as player
// If player is at the same position x as enemy's position x then game reset method is activated
Enemy.prototype.checkCollisions = function() {
  if((this.x >= player.x - 60) && (this.x <= player.x) && this.y === player.y) {
    player.resetMeth();
    removePoint();
  }
};

// Player class
// This class requires an update(), render(), resetMeth(), winGame() and
// a handleInput() method.
class Player {
  constructor(sprite, x,y,stepx,stepy) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.stepx = stepx;
    this.stepy = stepy;
  }
  handleInput(allowedKeys) {
    player.winGame();

    if(allowedKeys === "left" && this.x >= 5) {
      this.x = this.x - this.stepx;
    } if (allowedKeys === "right" && this.x <= 370){
      this.x = this.x + this.stepx;
    } if(allowedKeys === "up" && this.y >= 60) {
      this.y = this.y - this.stepy;
    } if(allowedKeys === "down" && this.y <= 350) {
      this.y = this.y + this.stepy;
    }
  } render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  } update(dt) {
    this.dt = dt;
  } winGame() {
    if(player.y <= 60) {
      player.resetMeth();
      addPoint();
      console.log("winning");
    }
  } resetMeth() {
    this.x = 200;
    this.y = 400;
  }
}


// Instantiate objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let first = new Enemy(0,80, 250);
let second = new Enemy(0,160, 100);
let third = new Enemy(0,240, 200);
let allEnemies = [first, second, third];

let player = new Player('images/char-boy.png',200, 400, 100, 80);


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


// Score pannel, adding two points when player win game, remove one point when player collision
const body = document.querySelector('body');
const score_text = document.createElement('p');
score_text.setAttribute('class','score')
score_text.textContent = "Score"
const score_pannel_container = document.createElement('div');
score_pannel_container.setAttribute('class', 'score_pannel_cont');
const points_box = document.createElement('div')
points_box.setAttribute('class','points_box');
const number_points = document.createElement('span');
number_points.setAttribute('class', 'points_num');

score_text.append(score_pannel_container);
score_pannel_container.appendChild(points_box);
points_box.appendChild(number_points);

let num_points = 0;
number_points.textContent = num_points;

function addPoint() {
  num_points += 2;
  number_points.textContent = num_points;
}

function removePoint() {
  num_points -= 1;
  number_points.textContent = num_points;
}

// Player choose box
const player_box = document.createElement('div');
player_box.setAttribute('class', 'choose_player_box')
const choose_player_text_box = document.createElement('div');
choose_player_text_box.setAttribute('class','choose_text_player');
const choose_player = document.createElement('p');
choose_player.setAttribute('class','choose_player');
choose_player.textContent = "Choose your player";
choose_player_text_box.appendChild(choose_player);
const img_btn = document.createElement('img');

body.appendChild(choose_player_text_box);

let myArr = [];

// Adding buttons and images
for(let i = 1; i < 5; i++) {
  const button_choose = document.createElement('button');
  button_choose.setAttribute('class','choose_btn')
  player_box.appendChild(button_choose);
  for(let j=1; j<2; j++) {
    const img_btn = document.createElement('img');
    button_choose.appendChild(img_btn);
    myArr.push(img_btn);
  }
}
body.appendChild(player_box);
body.appendChild(score_text)

// Setting attribute for each img
myArr[0].setAttribute('src','images/char-cat-girl.png')
myArr[1].setAttribute('src','images/char-horn-girl.png');
myArr[2].setAttribute('src','images/char-pink-girl.png');
myArr[3].setAttribute('src','images/char-princess-girl.png');


// Adding event listener for each of players
myArr[0].addEventListener('click', function() {
  console.log('click');
  player = new Player('images/char-cat-girl.png',200, 380, 100, 80);
})

myArr[1].addEventListener('click', function() {
  console.log('click');
  player = new Player('images/char-horn-girl.png',200, 380, 100, 80);
})

myArr[2].addEventListener('click', function() {
  console.log('click');
  player = new Player('images/char-pink-girl.png',200, 380, 100, 80);
})

myArr[3].addEventListener('click', function() {
  console.log('click');
  player = new Player('images/char-princess-girl.png',200, 380, 100, 80);
})

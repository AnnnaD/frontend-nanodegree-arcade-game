frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


##What game contains

**Objects** like enemies and player (players to choose), canvas board, score board.
**Player contain methods**:
handleInput. Method for moving player and statements that don't let player get out of canvas.
render and update are basic for render player and update its location x and y.
winGame. When user get to the water.
resetMeth. When user get to the water but also when collision with enemy, setting player back.
addPoint. When user get to the water.
removePoint. When user collision with enemy.
**Enemies contain methods**:
render, update are basic for render enemy and update location enemy
checkCollisions.

##How download and open game

Use $git clone command or download button to download game.
Open file index.html so the game will open in browser and enjoy the game.

##How to play game

User can choose player, but default player is already on the board, so user can choose different if want to.
User have to move player using by keyboard arrows.
When user get to the water rich two points.
When user collision with one of enemy one point is taken out of the score board.

/* 
Main Page
    -New Game button
    -Instructions button
Instructions
    -Text box
        -How to play game
        -Exit button
Game Play
    -gameActive
    -currentPlayer
    -game over
    -enemies
    -items
    -score
Game Over
    -event listener - return to Main Page
Main Page(1)
    -change New Game button text to Try Again
Try Again
    -show high score next to current score in game

Variables
    -player
        -jump
            -event listener
    -enemies/items
        -move across page
    -player/enemies touch
        -game over
    -player/items touch
        -increase score by 100
    -score
        -continuously increasing
        -stop when game is not active
*/

//Game Play
const cloud = document.getElementById('cloud');

//cloud jumping
function jump(){
    cloud.classList.add('jump-animation');
    setTimeout(function() {
        cloud.classList.remove('jump-animation');
    }, 500);
};

//press space bar to jump
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        jump();
    }
}; 
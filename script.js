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
//characters
const cloud = document.getElementById('cloud');
const tonberry = document.getElementById('tonberry');
const cactuar = document.getElementById('cactuar');

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

//Game Over
let isAlive = setInterval (function(){
    //show score
    /* score.innerText++; */
    //cloud position in game box
let cloudTop = parseInt(window.getComputedStyle(cloud).getPropertyValue('top'));
    //tonberry position in game box
    let tonberryLeft = parseInt(window.getComputedStyle(tonberry).getPropertyValue('left'));

    let cactuarLeft = parseInt(window.getComputedStyle(cactuar).getPropertyValue('left'));

    //collision
    if((tonberryLeft < 50) && (tonberryLeft) > 0 && cloudTop > 300) 
    {
        alert('game over');
    }
    if((cactuarLeft < 50) && (cactuarLeft) > 0 && cloudTop > 300)
    {
        alert('game over');
    }
    isAlive = false;
}, 10);

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
const gil = document.getElementById('gil');

//scores
const highScore = document.getElementById('highScore');
let score = 0;


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

    let gilLeft = parseInt(window.getComputedStyle(gil).getPropertyValue('left'));
    //collision
    if((gilLeft < 50) && (gilLeft) > 15 && cloudTop <= 300)
    {
        score += 1;
        document.getElementById('score').innerHTML = score; 
        if(score > highScore.innerHTML){
            localStorage.setItem('score',document.getElementById('score').innerHTML);
        } 
        /* document.getElementById('currentScore').innerHTML = localStorage.getItem('score');   */
    }
    isAlive = true;
    if((tonberryLeft < 50) && (tonberryLeft) > 0 && cloudTop > 300) 
    {
        /* alert('game over'); */
        //stop enemy moving
        document.getElementById('tonberry').style.animationPlayState = 'paused';
        //prevent player from jumping
        cloud.classList.remove('jump-animation');
        //load into game over screen
        setTimeout(function(){
        document.location.replace('html/gameOver.html')}, 500);
    }
    isAlive = false;

    if((cactuarLeft < 50) && (cactuarLeft) > 0 && cloudTop > 300)
    {
        /* alert('game over'); */
        document.getElementById('cactuar').style.animationPlayState = 'paused';
        cloud.classList.remove('jump-animation');
        setTimeout(function(){
        document.location.replace('html/gameOver.html')}, 500);
    }
    isAlive = false
}, 10);
//saving current score
/* document.getElementById('currentScore').innerHTML=localStorage.getItem('score'); */

document.getElementById('highScore').innerHTML=localStorage.getItem('score');

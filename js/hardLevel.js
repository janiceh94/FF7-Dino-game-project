const zack = document.getElementById('zack');
const soldier = document.getElementById('soldier');
const soldier2 = document.getElementById('soldier2');
const gil = document.getElementById('gil');

//scores
const highScoreHard = document.getElementById('highScoreHard');
let score = 0;



function jump(){
    zack.classList.add('jump-animation');
    setTimeout(function() {
        zack.classList.remove('jump-animation');
    }, 500);
};

//press space bar to jump
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        jump();
    }
}; 


let currentImage = 1;
function run(){
    setInterval(changeImage, 400);
}

function changeImage(){
    if(currentImage == 1){
        document.getElementById('zack').style.backgroundImage = "url('https://i.imgur.com/hOw0L61.png')";
        currentImage = 2;
    } else {
        document.getElementById('zack').style.backgroundImage = "url('https://i.imgur.com/ptkU1cW.png')";
        currentImage = 1;
    }
}
window.onload = run;

//Game Over
let isAlive = setInterval (function(){
    //show score
    /* score.innerText++; */

let zackTop = parseInt(window.getComputedStyle(zack).getPropertyValue('top'));

    let soldierLeft = parseInt(window.getComputedStyle(soldier).getPropertyValue('left'));

    let soldier2Left = parseInt(window.getComputedStyle(soldier2).getPropertyValue('left'));

    let gilLeft = parseInt(window.getComputedStyle(gil).getPropertyValue('left'));
    //collision
    if((gilLeft < 50) && (gilLeft) > 15 && zackTop <= 300)
    {
        score += 1;
        document.getElementById('scoreHard').innerHTML = score; 
        if(score > highScoreHard.innerHTML){
            localStorage.setItem('scoreHard',document.getElementById('scoreHard').innerHTML);
        } 
    }
    isAlive = true;
    if((soldierLeft < 50) && (soldierLeft) > 0 && zackTop > 300) 
    {
        /* alert('game over'); */
        //stop enemy moving
        document.getElementById('soldier').style.animationPlayState = 'paused';
        //prevent player from jumping
        zack.classList.remove('jump-animation');
        //load into game over screen
        setTimeout(function(){
        document.location.replace('gameOver.html')}, 500);
    }
    isAlive = false;

    if((soldier2Left < 50) && (soldier2Left) > 0 && zackTop > 300)
    {
        /* alert('game over'); */
        document.getElementById('soldier2').style.animationPlayState = 'paused';
        zacl=k.classList.remove('jump-animation');
        setTimeout(function(){
        document.location.replace('gameOver.html')}, 500);
    }
    isAlive = false;
}
, 10);

//saving current score
document.getElementById('highScoreHard').innerHTML=localStorage.getItem('scoreHard');
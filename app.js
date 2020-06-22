(function starter(){

var roundScore, player, currentScore;
let randomTotal;
globalScore = [0, 0];
player = 0;
currentScore = 0;

let setScorebtn = document.querySelector('#play-btn');
let input = document.querySelector('#input');
let inputValue;
let rollBtn = document.getElementById('roll-btn');
let holdBtn = document.getElementById('hold-btn');
let newBtn = document.getElementById('new-btn');
let img = document.getElementById('dice-img');
img.classList.add('hide');
let img1 = document.getElementById('dice-img-1');
img1.classList.add('hide');

initial();

rollBtn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 6) + 1;
    let random1 = Math.floor(Math.random() * 6) + 1;
    randomTotal = random + random1;
    img.src = 'dice-' + random + '.png';
    img.classList.remove('hide');
    img1.src = 'dice-' + random1 + '.png';
    img1.classList.remove('hide');
        if(random !== 1 && random1 !== 1){
        currentScore += randomTotal;
        document.getElementById('current-score-' + player).textContent = currentScore;
        }else{
        nextPlayer();
    } 
});

holdBtn.addEventListener('click', function(){
    globalScore[player] += currentScore;
    document.getElementById('global-' + player).textContent = globalScore[player];
    if(globalScore[player] < inputValue){
        nextPlayer();
    }else{
        holdBtn.classList.add('hide');
        rollBtn.classList.add('hide');
        document.getElementById('player-' + player).textContent = 'WINNER !';
        document.getElementById('player-' + player).classList.add('winner');
        img.classList.add('hide');
        img1.classList.add('hide');
    }   
});

newBtn.addEventListener('click', function(){
    initial();
    document.getElementById('player-0').textContent = 'PLAYER 1';
    document.getElementById('player-1').textContent = 'PLAYER 2';
    randomTotal = 0;
    currentScore = 0;
    inputValue = 0;
    globalScore[player] = 0;
    input.value = null;
    nextPlayer();
    
    
})


function nextPlayer(){
        document.getElementById('current-score-' + player).textContent = '0';
        
        player === 0 ? player = 1 : player = 0;
        document.querySelector('#panel-0').classList.toggle('active');
        document.querySelector('#panel-1').classList.toggle('active');
        
        document.getElementById('current-score-' + player).textContent = '0';
        currentScore = 0;
}

function initial(){
    document.getElementById('global-0').textContent = '0';
    document.getElementById('global-1').textContent = '0';
    document.getElementById('current-score-0').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';
    holdBtn.classList.add('hide');
    rollBtn.classList.add('hide');
};


setScorebtn.addEventListener('click', function(){
    inputValue = input.value;
    holdBtn.classList.remove('hide');
    rollBtn.classList.remove('hide');
    document.getElementById('player-' + player).classList.remove('winner');
    
});
    
    
})
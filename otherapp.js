var roundScore, player, currentScore;

globalScore = [0, 0];
player = 0;
currentScore = 0;

initial();


let rollBtn = document.getElementById('roll-btn');
let holdBtn = document.getElementById('hold-btn');
let newBtn = document.getElementById('new-btn');
let img = document.getElementById('dice-img');
img.classList.add('hide');


rollBtn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 6) + 1;
    img.src = 'dice-' + random + '.png';
    img.classList.remove('hide');
        if(random !== 1){
        currentScore += random;
        document.getElementById('current-score-' + player).textContent = currentScore;
        }else{
        nextPlayer();
    } 
});

holdBtn.addEventListener('click', function(){
    globalScore[player] += currentScore;
    document.getElementById('global-' + player).textContent = globalScore[player];
    if(globalScore[player] <51){
        nextPlayer();
    }else{
        holdBtn.classList.add('hide');
        rollBtn.classList.add('hide');
        document.getElementById('player-' + player).textContent = 'WINNER !';
        document.getElementById('player-' + player).classList.add('winner');
        img.classList.add('hide');
    }   
});

newBtn.addEventListener('click', function(){
    initial();
    document.getElementById('player-0').textContent = 'PLAYER 1';
    document.getElementById('player-1').textContent = 'PLAYER 2';
    holdBtn.classList.remove('hide');
    rollBtn.classList.remove('hide');
    document.getElementById('player-' + player).classList.remove('winner');
    
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
};



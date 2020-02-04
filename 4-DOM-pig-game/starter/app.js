/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying, previousDice, winningScore ;

init();

// winningScore = document.getElementById("winningScore").textContent;


document.querySelector('.btn-roll').addEventListener('click',function() {
    
    console.log(winningScore);
    
    if (gamePlaying){
    
        var dice  = Math.floor(Math.random()*6 + 1); //Math.random
        var dice2 = Math.floor(Math.random()*6 + 1);
        
        console.log(dice, dice2);
        
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+'.png';
        
        var dice2DOM = document.querySelector('.dice2');
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-'+dice2+'.png';
        
        
        if (dice === 6 && dice2 === 6 ){
            
            scores[activePlayer] = 0;
            document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
            nextPlayer();
            
        } else if (dice !== 1 && dice2 !== 1){
                //add score
                roundScore += dice + dice2;
                document.querySelector('#current-'+ activePlayer).textContent = roundScore;
                

        } else{    
                //Next player turn
                nextPlayer();

            }
    }
                                                     
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    //console.log(winningScore);
    
    if (gamePlaying){
        // Add CURRENT score to CLOBAL score
        scores[activePlayer] +=  roundScore;
        //update the UI
        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
        //Check if player won the game
        var input = document.querySelector('.final-score').value;
        
        if(input){
            winningScore = input;
        }
        else{
            winningScore = 100;
        }
        
       // console.log(input);
        if (scores[activePlayer] >= winningScore){

            gamePlaying = false;

            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        } else{
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    
    //winningScore = prompt("Enter winning score");
    gamePlaying = true;
    
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector('.dice').style.display  = 'none';
    document.querySelector('.dice2').style.display = 'none';
    
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}





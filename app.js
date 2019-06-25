/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

//* manipulate an HTML element (known as 'setter' because set the value)
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//* manipulate an HTML element by its ID
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//* read an element and store it to a variable (known as 'getter' because get the value)
//var x = document.querySelector('#score-0').textContent;
//console.log(x);



//* manipulate a CSS element
document.querySelector('.dice').style.display = 'none'; // document.quesrySelector('class').cssFile.selector = 'property'

// anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){ // a function with no name can be only be used inside here
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice +'.png'

    //3. Update the round score IF the rolled number is NOT a 1

})







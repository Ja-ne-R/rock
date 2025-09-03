




const resetButton = document.getElementById('reset');

const buttons = document.querySelectorAll('.game');

const resultEl = document.getElementById('result');

const computerScoreEl = document.getElementById('computer-score');

const playerScoreEl = document.getElementById('user-score');

const wrap = document.querySelector('.wrapper');

const end = document.querySelector('#game-end');

const begin = document.querySelector('#game-begin');


// document.body.style.backgroundColor= '#d5d5d5ff';

// document.body.style.backgroundColor = '#67dd8c';

let playerScore = 0;
let computerScore = 0;
const start = document.querySelector('.start');
// const myInterval = setInterval(gameEnd, 1000);
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    })
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Its a tie!";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win, your " + playerSelection + " defeated " + computerSelection;
    }
    else {
        computerScore++;
        computerScoreEl.textContent = computerScore;

        const hearts = document.querySelectorAll('.hp'); // Select all elements with class 'hp'
        if (hearts.length > 0) {
            const lastHeart = hearts[hearts.length - 1]; // Get the last heart
            lastHeart.remove(); // Remove it
        }

        gameEnd();
        return "You lose, " + computerSelection + " defeated your " + playerSelection;
    }
}










const hearts = document.querySelectorAll('#heart');



let i = 0;

function createHearts() {
    i = 0;

    while (i < 5) {
    const newHearts = document.createElement('button');
    let name = "health" + i;
    newHearts.setAttribute("id", name);
    newHearts.setAttribute("class", "hp");
    newHearts.innerHTML = "&#x1F9E1;";

    const currentDiv = document.getElementById('hp-bar');
    currentDiv.appendChild(newHearts);
    i++;

    }

}



start.addEventListener('click', createHearts);


start.addEventListener('click', function() {

    begin.style.display= 'none';
    wrap.style.display= 'block';
    document.body.style.backgroundColor = '#d5d5d5ff';
    console.log('test');
    console.log(i);
    
});







function checkLives() {
    console.log(i);
}


resetButton.addEventListener('click', function() {
    playerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScore = 0;
    computerScoreEl.textContent = computerScore;

    // Remove all heart buttons
    const hpBar = document.getElementById('hp-bar');
    hpBar.innerHTML = '';

    // Reset i and add hearts
    i = 0;
    createHearts();
});

    b = 0;



function gameEnd() {
 
if (computerScore >= 5) {
    let highscore = playerScore;
    let uname = document.querySelector('#username');
    let username = uname.value;
    // let selectname = "#name" + b;

    addScoreToBoard(username, highscore);

    b++;
    // document.querySelector(selectname).innerHTML = username + " " + highscore;




    console.log('score= ' + highscore);
    wrap.style.display= 'none';
    end.style.display= 'block'
    console.log('test');
    playerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScore = 0;
    computerScoreEl.textContent = computerScore;
    document.body.style.backgroundColor = '#67dd8c';
    gameEnd();
    k++;


}    


}

const restart = document.querySelector('#restart');
restart.addEventListener('click', function() {


    
    end.style.display= 'none';
    begin.style.display= 'block';
});






restart.addEventListener('click', function(){

})

const resetButton = document.getElementById('reset');

const buttons = document.querySelectorAll('.game');

const resultEl = document.getElementById('result');

const computerScoreEl = document.getElementById('computer-score');

const playerScoreEl = document.getElementById('user-score');

const wrap = document.querySelector('.wrapper');

const end = document.querySelector('#game-end');

let playerScore = 0;
let computerScore = 0;

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
    else  {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose, " + computerSelection + " defeated your " + playerSelection;
    }
}


resetButton.addEventListener('click', function() {
    playerScore = '0';
    playerScoreEl.textContent = playerScore;
    computerScore = '0';
    computerScoreEl.textContent = computerScore;
})


const myInterval = setInterval(gameEnd, 1000)

function gameEnd() {
if (computerScore >= 5) {
    wrap.style.display= 'none';
    end.style.display= 'block'
    console.log('test');
    // clearInterval(myInterval);
}    
else if (computerScore == 0) {
    wrap.style.display= 'block';
    end.style.display= 'none';
}
else {
    wrap.style.display= 'block';
}

}






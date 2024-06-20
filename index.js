const choices = ["rock", "paper", "scissors"]
let playerDisplay = document.getElementById("playerChoice")
let computerDisplay = document.getElementById("computerChoice")
let resultDisplay = document.getElementById("result")
let playerScoreDisplay = document.getElementById("playerScoreDisplay")
let computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerWins = 0
let CompWins = 0

function playGame(playerChoice){
    let randomCompChoice = choices[Math.floor(Math.random() * 3)]
    let result = ""

    if(playerChoice === randomCompChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (randomCompChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "paper":
                result = (randomCompChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors":
                result = (randomCompChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }

    resultDisplay.classList.remove("greenText", "redText")
    if(result === "YOU WIN!"){
        resultDisplay.classList.add("greenText")
        playerWins++
    }
    else if(result === "YOU LOSE!"){
        resultDisplay.classList.add("redText")
        CompWins++
    }
    
    playerDisplay.textContent = `Player Choice : ${playerChoice}`
    computerDisplay.textContent = `Computer Choice : ${randomCompChoice}`
    playerScoreDisplay.textContent = playerWins
    computerScoreDisplay.textContent = CompWins

    resultDisplay.textContent = result
}
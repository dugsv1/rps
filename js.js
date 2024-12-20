function getComputerChoice(){
    const rand = getRandomNumber(0,2)
    switch (rand){
        case 0:
            return 'Rock'
            break
        case 1:
            return 'Paper'
            break
        case 2:
            return 'Scissors'
            break
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getUserChoice(){
    let choice = prompt("Enter Rock, Paper, or Scissors")
    return choice
}

function playRound(){
    const computerChoice = getComputerChoice()
    const userChoice = getUserChoice()
    if (computerChoice === userChoice){
        ties++
        return console.log('Tie')
    } else if (
        userChoice === 'Rock' && computerChoice === 'Scissors' ||
        userChoice === 'Paper' && computerChoice === 'Rock'    ||
        userChoice === 'Scissors' && computerChoice === 'Paper'
    ) {
        humanScore++
        return console.log('You Win!')
    } else {
        computerScore++
        return console.log('You Lose!')
    }
}

function play(rounds){
    for (i=1; i <= rounds; i++){
        playRound()
    }
    console.log("Game Over!")
    console.log(`User Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Ties: ${ties}`)
}

let computerScore = 0;
let humanScore = 0;
let ties = 0;
play(5)
play(6)

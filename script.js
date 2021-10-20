let userpts = 0;
computerpts = 0;
games = 1;
playerSelection = "";
computerSelection = "";
maxpts = 5;
//computer choose randomly rock paper scissors
function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

document.getElementById("playerpoint").innerHTML = "Current player point is: " + userpts;
document.getElementById("computerpoint").innerHTML = "Current Computer point is: " + computerpts;
document.getElementById("playerchoice").innerHTML = "Player choice is: " + playerSelection;
document.getElementById("computerchoice").innerHTML = "Computer choice is: " + computerSelection;

//player choice
const a = document.querySelectorAll(".choice")
a[0].addEventListener('click', () => {
    let computerSelection = computerPlay();
    playerSelection = a[0].innerHTML.toLowerCase();
    playRound(playerSelection, computerSelection);
    document.getElementById("playerpoint").innerHTML = "Current player point is: " + userpts;
    document.getElementById("computerpoint").innerHTML = "Current Computer point is: " + computerpts;
    document.getElementById("playerchoice").innerHTML = "Player choice is: " + playerSelection;
    document.getElementById("computerchoice").innerHTML = "Computer choice is: " + computerSelection;
    if (userpts === 5) {
        alert("human wins")
    } else if (computerpts === 5) {
        alert("computer win")
    }
})

a[1].addEventListener('click', () => {
    let computerSelection = computerPlay();
    playerSelection = a[1].innerHTML.toLowerCase();
    playRound(playerSelection, computerSelection);
    document.getElementById("playerpoint").innerHTML = "Current player point is: " + userpts;
    document.getElementById("computerpoint").innerHTML = "Current Computer point is: " + computerpts;
    document.getElementById("playerchoice").innerHTML = "Player choice is: " + playerSelection;
    document.getElementById("computerchoice").innerHTML = "Computer choice is: " + computerSelection;
    if (userpts === 5) {
        alert("human wins")
    } else if (computerpts === 5) {
        alert("computer win")
    }
})

a[2].addEventListener('click', () => {
    let computerSelection = computerPlay();
    playerSelection = a[2].innerHTML.toLowerCase();
    playRound(playerSelection, computerSelection);
    document.getElementById("playerpoint").innerHTML = "Current player point is: " + userpts;
    document.getElementById("computerpoint").innerHTML = "Current Computer point is: " + computerpts;
    document.getElementById("playerchoice").innerHTML = "Player choice is: " + playerSelection;
    document.getElementById("computerchoice").innerHTML = "Computer choice is: " + computerSelection;
    if (userpts === 5) {
        alert("human wins")
    } else if (computerpts === 5) {
        alert("computer win")
    }
})


//comparing the result
function playRound(playerSelection, computerSelection) {
    //player pick rock
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerpts++
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        userpts++
    }
    //player pick scissors
    if (computerSelection === "paper" && playerSelection === "scissors") {
        userpts++
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerpts++
    }
    //player pick paper
    if (computerSelection === "scissors" && playerSelection === "paper") {
        computerpts++
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        userpts++
    }
}



//function game to loop
// function game(numberofgame){
//     for (let i = 1; i<=numberofgame; i++){
//         //computer choose different every loop
//         computerPlay()
//         let computerSelection = computerPlay();

//             //player choose again every loop
//             playerChoice = prompt('Rock Paper or Scissors');
//             //non-case sentisive user input => put them all to lower case
//             playerSelection = playerChoice.toLowerCase();

//         //function call to play again every loop    
//         playRound(playerSelection, computerSelection)
//     }
// }

//player input
// let numberofgame = prompt('how many game you want to play?')


// console.log(game(numberofgame))
// console.log('Your point is: ' + userpts)
// console.log('Computer point is: ' + computerpts)

// if (userpts < computerpts){
//     console.log('Computer outplayed you')
// } else if (userpts > computerpts) {
//     console.log('You outplayed the computer')
// } else {
//     console.log('it is a tie')
// }
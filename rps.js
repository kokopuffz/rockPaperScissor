const choices = ["lapis", "papyrus", "scalpellus"];


//create object for player and computer
const player = {
    currentChoice: null
}

const computer = {
    currentChoice: null
}

//
// player.currentChoice = choices[0]
//computer picks random 
function computerChooses() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    computer.currentChoice = choices[randomIndex];
}

//how winner is determined and announced
function compareChoices() {
    computerChooses();
    if (player.currentChoice === computer.currentChoice) {
        resultText("It's a tie! You both chose " + computer.currentChoice + '.');
    } else if (computer.currentChoice === choices[0]) {
        if (player.currentChoice === choices[1]) {
            resultText('The player wins! You chose ' + player.currentChoice + ', computer chose ' + computer.currentChoice + '.');
        } else {
            resultText('The player loses! You chose ' + player.currentChoice + ', computer chose ' + computer.currentChoice + '.');
        }
    } else if (computer.currentChoice === choices[1]) {
        if (player.currentChoice === choices[2]) {
            resultText('The player wins!  You picked ' + player.currentChoice + ', computer chose ' + computer.currentChoice + '.');
        } else {
            resultText('The player loses! You chose ' + player.currentChoice + ', computer chose ' + computer.currentChoice + '.');
        }
    } else if (computer.currentChoice === choices[2]) {
        if (player.currentChoice === choices[0]) {
            resultText('The player wins! You selected ' + player.currentChoice + ', computer chose ' + computer.currentChoice + '.');
        } else {
            resultText('The player loses! You chose ' + player.currentChoice + ', computer chose ' + computer.currentChoice + '.');
        }
    }
}

function resultText(result) {
    const resultText = document.createElement('h3');
    resultText.innerText = result;
    document.body.appendChild(resultText);
}
//once clicked, stored as playercurrent choice


function userLapis() {
    player.currentChoice = choices[0]
    compareChoices();

}

function userPapyrus() {
    player.currentChoice = choices[1]
    compareChoices();
}

function userScalpellus() {
    player.currentChoice = choices[2]
    compareChoices();
}

//once clicked, compare choices
document.getElementById('lapis').addEventListener('click', userLapis);
document.getElementById('papyrus').addEventListener('click', userPapyrus);
document.getElementById('scalpellus').addEventListener('click', userScalpellus);
// compareChoices();

// document.querySelector('.buttons').addEventListener('click', compareChoices)-+
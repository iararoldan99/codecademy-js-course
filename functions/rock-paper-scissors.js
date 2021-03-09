const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        console.log(userInput);
        return userInput;
    } else if (userInput === 'bomb') {
        console.log(userInput)
        return userInput;
    }
    else {
        console.log('Wrong!')
    }
}

const getComputerChoice = () => {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'default';
            break;
    }
}

getComputerChoice();

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        console.log('game tie!');
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('user won');
        } else {
            console.log('computer won');
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log('computer won');
        } else if (computerChoice === 'rock') {
            console.log('user won');
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('computer won');
        } else if (computerChoice === 'paper') {
            console.log('user won');
        }
    }
    if (userChoice === 'bomb') {
        console.log('user win!!!')
        return userChoice;
    }
}

function playGame() {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
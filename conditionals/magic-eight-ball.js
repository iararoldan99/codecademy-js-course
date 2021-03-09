// In this project we will build the Magic Eight Ball using control flow in JavaScript.

// The user will be able to input a question, then our program will output a random fortune.

var username = ''

username === '' ? console.log('Hello!') : console.log('Hello, ' + username);

var userQuestion = 'Will i win the lottery?'

console.log(userQuestion);

var randomNumber = Math.floor(Math.random() * 8);
var eightBall = ''

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so'
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        break;
    case 3:
        eightBall = 'Reply hazy try again'
        break;
    case 4:
        eightBall = 'Cannot predict now'
        break;
    case 5:
        eightBall = 'Do not count on it'
        break;
    case 6:
        eightBall = 'My sources say no'
        break;
    case 7:
        eightBall = 'Outlook not so good'
        break;
    case 8:
        eightBall = 'Signs point to yes'
        break;
    default:
        eightBall = 'Try again!'
        break;
}

console.log('The Magic Eight Balls answer is: ' + eightBall);
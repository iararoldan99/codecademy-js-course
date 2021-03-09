// We want to create and extract information about your favorite sports team.
// It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

// Once created, you can manipulate these data structures as well as gain insights from them.
// For example, you might want to get the total number of games your team has played, 
// or the average score of all of their games.

const team = {
    _players: [{ firstName: 'Pablo', lastName: 'Sanchez', age: 11 }, { firstName: 'Lucas', lastName: 'Perez', age: 10 }, { firstName: 'Pedro', lastName: 'Lopez', age: 12 }],
    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }, {
        opponent: 'EEh',
        teamPoints: 62,
        opponentPoints: 17
    }, {
        opponent: 'Lero',
        teamPoints: 65,
        opponentPoints: 30
    }],
    get players() {

    },
    get games() {

    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this._players.push(player);
    },

    addGame(opponent, teamPoints) {
        const gameObject = {
            opponent: opponent,
            teamPoints: teamPoints
        }
        this._games.push(gameObject);
    },

}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('prueb', 900);
team.addGame('ee', 44);
team.addGame('aa', 123);
console.log(team._players)
console.log(team._games)
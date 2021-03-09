// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. 
// In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD.

class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(checkedIn) {
        this._isCheckedOut = checkedIn;
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    }
    getAverageRating() {
        let averageValueOfRating = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        let arrayLength = this._ratings.length;
        let total = this.averageValueOfRating / this.arrayLength;
    }

    addRating(oneNumberArgument) {
        this._ratings.push(oneNumberArgument);
    }
}

class Book extends Media {
    constructor(title, author, pages, ratings, isCheckedOut) {
        super(title, author, pages);
        this._author = author;
        this._pages = pages;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get Author() {
        return this._author;
    }

    get Pages() {
        return this._pages;
    }

    get Ratings() {
        return this._ratings;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }
    set isCheckedOut(checkedIn) {
        this._isCheckedOut = checkedIn;
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    }
    getAverageRating() {
        let averageValueOfRating = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        let arrayLength = this._ratings.length;
        let total = this.averageValueOfRating / this.arrayLength;
    }

    addRating(oneNumberArgument) {
        this._ratings.push(oneNumberArgument);

    }
}

class Movie extends Media {
    constructor(title, director, runTime, ratings, isCheckedOut) {
        super(title, director, runTime)
        this._director = director;
        this._runTime = runTime;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    get Director() {
        return this._director;
    }
    get RunTime() {
        return this._runTime;
    }

    set isCheckedOut(checkedIn) {
        this._isCheckedOut = checkedIn;
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    }
    getAverageRating() {
        let averageValueOfRating = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        let arrayLength = this._ratings.length;
        let total = this.averageValueOfRating / this.arrayLength;
    }

    addRating(oneNumberArgument) {
        this._ratings.push(oneNumberArgument);

    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544, 90, true);

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116);


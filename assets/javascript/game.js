// JavaScript for Word Game on Dog Breeds
// converted to JS Object

String.prototype.replaceAt = function (index, replacement) {
    //  Additional method for String class
    //  Concatenates existing string in-between replacement character
    //  at index location.

    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

var spanWins = document.getElementById("wins");
var spanWord = document.getElementById("word");
var spanGuesses = document.getElementById("guesses");
var spanLetters = document.getElementById("letters");
var spanWarning = document.getElementById("warning");
var spanImage = document.getElementById("img");


var game = {
    wins: 0,
    lettersRight: [],
    lettersWrong: [],
    wordSecret: [],
    wordURL: "",
    wordGuessed: "",
    gameOver: false,
    numGuesses: 10,

    displayGame: function () {
        function formatWord(string) {
            var newString = "";
            for (var i = 0; i < string.length; i++) {
                newString += string[i] + "&nbsp;";
            }
            return newString;
        }

        spanWins.textContent = this.wins;
        spanWord.innerHTML = formatWord(this.wordGuessed);
        spanGuesses.textContent = (this.numGuesses - this.lettersWrong.length);
        spanLetters.innerHTML = formatWord(this.lettersWrong);
        spanImage.innerHTML = '<img class="image" src="assets/images/' + this.wordURL + '"/>';

    },

    getWord: function () {
        function getRandomInt(min, max) {
            // the maximum is exclusive; the minimum is inclusive
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        var words = JSON.parse(dogList);
        var randomInt = getRandomInt(1, words.length - 1); // -1 is temporary

        this.wordSecret = words[randomInt].breed;
        this.wordURL = words[randomInt].image;
    },

    init: function () {
        this.gameOver = false;
        this.getWord();
        this.lettersRight = [];
        this.lettersWrong = [];
        this.wordGuessed = "";
        //spanKey.textContent = "";

        for (var i = 0; i < this.wordSecret.length; i++) {
            // Create array mirror of wordSecret of blanks
            this.wordGuessed += (this.wordSecret[i] != " ") ? "_" : " ";
        }
    },

    checkGame: function () {
        if (this.wordGuessed == this.wordSecret) {
            this.wins++;
            setTimeout(this.gameOver = true, 3000);
        }

        if (this.lettersWrong.length >= this.numGuesses) {
            this.gameOver = true;
        }

        if (this.gameOver) {
            this.playGame();
        }

    },

    getGuess: function (input) {
        function isLetter(letter) {
            //  Returns 'true' or 'false'
            //  Checks input is 1 character and regular expression matching
            //  character a through z inclusive and case-insensitive.

            return letter.length === 1 && letter.match(/[a-z]/i);
        }

        var guessedLetter = "";

        if (isLetter(input)) {
            guessedLetter = input.toLowerCase();

            if (this.wordSecret.toLowerCase().indexOf(guessedLetter) != -1) {
                if (this.lettersRight.indexOf(guessedLetter) == -1) {
                    this.lettersRight.push(guessedLetter);
                }
            } else {
                if (this.lettersWrong.indexOf(guessedLetter) == -1) {
                    this.lettersWrong.push(guessedLetter);
                }
            }
            spanWarning.textContent = "";
            //return guessedLetter;

        } else {
            //console.log("Wrong Key");
            spanWarning.textContent = "Please enter a letter!";
        }
    },

    updateGuess: function () {

        for (var iR = 0; iR < this.lettersRight.length; iR++) {
            // Recheck all guessed (right) letters and update wordGuessed (blanks)

            for (var iW = 0; iW < this.wordSecret.length; iW++) {
                // Compare guessed (right) against wordSecret to match letter index
                if (this.wordSecret[iW].toLowerCase() == this.lettersRight[iR]) {
                    this.wordGuessed = this.wordGuessed.replaceAt(iW, this.wordSecret[iW]);
                }
            }
        }
    },

    playGame: function () {
        game.init();
        game.displayGame();

        document.onkeyup = function (event) {
            // inside the document object
            game.getGuess(event.key);
            game.updateGuess();
            game.displayGame();
            game.checkGame();
        }
    }
};


game.playGame();


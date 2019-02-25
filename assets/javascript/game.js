//JavaScript for Word Game on Dog Breeds



function isLetter(letter) {
    /*  Returns 'true' or 'false'
     *  Checks input is 1 character and regular expression matching
     *  character a through z inclusive and case-insensitive.
     */
    return letter.length === 1 && letter.match(/[a-z]/i);
}

function getGuess(alreadyGuessed) {
    /*  Returns a letter or blank ("") 
     *  Checks if input is a letter and letter is not already
     *  guessed (wrong) and not already guessed (right).
     */

}

String.prototype.replaceAt = function (index, replacement) {
    /*  Additional method for String class
     *  Concatenates existing string in-between replacement character
     *  at index location.
     */
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function formatWord(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        newString += string[i] + "&nbsp;";
    }
    return newString;
}

function updateGuess(lettersRight, lettersWrong, wordSecret) {

    var spanWins = document.getElementById("wins");
    var spanWord = document.getElementById("word");
    var spanGuesses = document.getElementById("guesses");
    var spanLetters = document.getElementById("letters");
    var spanKey = document.getElementById("key");


    document.onkeyup = function (event) {
        var guessKey = event.key;
        var wordGuessed = "";
        var guessedLetter = "";


        console.log("Main: " + guessKey);

        if (isLetter(guessKey)) {
            guessedLetter = guessKey.toLowerCase();

            if (wordSecret.toLowerCase().indexOf(guessedLetter) != -1) {
                console.log("index match: " + guessedLetter);
                console.log(wordSecret);
                if (lettersRight.indexOf(guessedLetter) == -1) {
                    lettersRight.push(guessedLetter);
                }
            } else {
                if (lettersWrong.indexOf(guessedLetter) == -1) {
                    lettersWrong.push(guessedLetter);
                }
            }

        } else {
            //Please Enter a letter
        }




        for (var i = 0; i < wordSecret.length; i++) {
            // Create array mirror of wordSecret of blanks
            wordGuessed += (wordSecret[i] != " ") ? "_" : " ";
        }

        for (var iR = 0; iR < lettersRight.length; iR++) {
            // Recheck all guessed (right) letters and update wordGuessed (blanks)
            console.log("iR: " + lettersRight[iR]);
            for (var iW = 0; iW < wordSecret.length; iW++) {
                // Compare guessed (right) against wordSecret to match letter index
                console.log("iw: " + wordSecret[iW]);
                if (wordSecret[iW].toLowerCase() == lettersRight[iR]) {
                    wordGuessed = wordGuessed.replaceAt(iW, wordSecret[iW]);
                }
            }
        }

        //Check Win 
        if (wordGuessed == wordSecret) {
            wins++;
            wordSecret = "Hello Again";
            lettersRight = [];
            lettersWrong = [];
        }


        console.log("Letters Right: " + lettersRight);
        console.log("Letters Wrong: " + lettersWrong);
        console.log(wordGuessed);

        spanWins.textContent = wins;
        spanWord.innerHTML = formatWord(wordGuessed);
        spanGuesses.textContent = (15 - lettersWrong.length);
        spanLetters.textContent = lettersWrong;
        spanKey.textContent = guessedLetter;

    }

}


var lettersRight = new Array(0);
var lettersWrong = new Array(0);
var wordSecret = "Hello World";
var wins = 0;
//var wordGuessed = "";

updateGuess(lettersRight, lettersWrong, wordSecret);


var game = {
    wins: 0,
    lettersRight: [],
    lettersWrong: [],
    wordSecret = [],
    gameOver = false,

    init: function () {

    },

    displayGame: function () {
        spanWins.textContent = wins;
        spanWord.innerHTML = formatWord(wordGuessed);
        spanGuesses.textContent = (15 - lettersWrong.length);
        spanLetters.textContent = lettersWrong;
        spanKey.textContent = guessedLetter;
    }
};


// the maximum is exclusive; the minimum is inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



var dogs = JSON.parse(dogList);

var targetDiv = document.getElementById("test");
targetDiv.textContent = dogs.length;

var randomInt = getRandomInt(1, dogs.length - 1); // -1 is temporary

var targetDiv = document.getElementById("test-word");
targetDiv.textContent = dogs[randomInt].breed;
//targetDiv.textContent = dogs[randomInt].image;

var targetDiv = document.getElementById("test-random");
targetDiv.textContent = randomInt;

var dogString = dogs[randomInt].breed.split("");
var guessString = dogString;
for (var i = 0; i < dogString.length; i++) {
    if (dogString[i] != " ") {
        guessString[i] = "_";
    }
}

var targetDiv = document.getElementById("test-array");

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}

//var indexes = getAllIndexes(Cars, "Nano");




var lettersGuessed;
var guessedWordSoFar;
//string compare with other sting. use index location of word to match other array
// for spaces, ignore somehow.
var numberOfGuessesRemaining;
//array split into string.

console.log(dogs[0].breed);
console.log(dogs[0].image);
console.log(dogs[1].breed);
console.log(dogs[1].image);
console.log(dogs[2].breed);
console.log(dogs[2].image);
console.log(dogs[3].breed);
console.log(dogs[3].image);

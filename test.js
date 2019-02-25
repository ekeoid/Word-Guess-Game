var __debugMode = true;
function __debug(textString) {
    if (typeof __debugMode == "boolean") {
        __debugMode = [__debugMode, 0];
    }

    if (__debugMode[0]) {
        __debugPrefix = "";
        __debugMode[1]++;

        if (__debugMode[1] < 10)
            __debugPrefix = "00";
        else if (__debugMode[1] < 100)
            __debugPrefix = "0";
        else __debugPrefix = "";

        console.log(__debugPrefix + __debugMode[1] + ": " + textString.toString());
    }
}
// Show the secret word with spaces in between



var s = 1;

var secretWord = "Hello there";
var blanks = "";

for (var i = 0; i < secretWord.length; i++) {
    blanks += (secretWord[i] != " ") ? "_" : " ";
}

var test = 0;

String.prototype.replaceAt = function (index, replacement) {
    __debug("Function");
    __debug("replacement: " + replacement);
    __debug("1st part of string: " + this.substr(0, index));
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// Replace blanks with correctly
guessedLetter = 'e';

//blanks.replaceAt(i,"l");

if (secretWord.indexOf(guessedLetter)) { // Check initially if worth checking through all characters
    __debug("In IF #1");
    for (var i = 0; i < secretWord.length; i++) {
        __debug("Current i: " + i + " letter: " + secretWord[i]);
        if (secretWord[i] == guessedLetter) {
            __debug("In IF #2");
            __debug("i: " + i);
            __debug("secretWord[i]: " + secretWord[i]);
            blanks = blanks.replaceAt(i, guessedLetter);
            __debug(blanks);
        }

    }

}


var array1 = [1, 2];
var array2 = [1, 2];
var string1 = "12";
var string2 = "12";
var num1 = 12;
var num2 = 12;

__debug(array1);
__debug(array2);
__debug(array1.toString() == array2.toString());


__debug(string1);
__debug(string2);
__debug(string1 == string2);

__debug(array1);
array1 = array1.toString().replace(",", "");
__debug(array1);

__debug(string1);
__debug(array1.toString() == string1);
// Returns the letter the player entered. This function makes sure the




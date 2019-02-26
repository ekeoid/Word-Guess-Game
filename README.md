# Word-Guess-Game

### Overview

This game is a hangman with dog breeds for homework assignment #3. A very helpful hint is provided by the associate image, which is the answer to the unknown word.

You can find the instructions for this assignment here: [homework-instructions.md][]

The rest of this README will overview the interpretation of the game.

[homework-instructions.md]: https://github.com/ekeoid/Word-Guess-Game/blob/master/homework-instructions.md

### File Structure

```
├── assets
|  ├── css
|  |  └── reset.css
|  |  └── style.css
|  ├── images
|  |  └── [Puppy Pack]
|  └── javascript
|     └── doglist.js
|     └── game.js
└── index.html
```

#### JavaScript - `doglist.js`

Creates variable 'dogList' which is assigned a string in the format of a JSON list. This list is contains 2 elements `breed` and `image` for every dog added. The intent of having an external list, is updating the word set for the game independently from the rest of the JavaScript code.

Using this format list allows the use of `JSON.parse(list)` which in the format will create an object of `list.breed` and `list.image` for usability in the game.

Currently only dogs that begin with A, B, and G breeds are in the list :(


#### JavaScript - `game.js`

The game was converted to a object format, which basically had me re-write most of the functionality to be able to reference different objects in the variable.

Essentially the game is run by calling the object function `game.playGame()`. 

##### `playGame()`
> This function is essentially the "looping" entity that keeps the game running. After the initial variables and content is set and displayed to the HTML, the `document.onkeyup` keeps the rest of the code looped. 

##### `init()`
> This function sets all the variables with initial values. However, not all the variables are set as empty strings or default blank values.
> These variables are `gameOver`, `wordSecret`, `wordURL`, `lettersRight`, `lettersWrong`, and `wordGuessed`.
>
> There are 2 special cases that I can explain here
> - `getWord()` is a called, which in the function assigns 2 values to `this.object`. This is retrieving the word list from the JSON input and also the image filename to reference later.
> - `wordGuessed` is a mirror of the `wordSecret` but contains "blanks" which is tracking what the user progress is.

##### `displayGame()`
> This function write to the DOM with a combination of `element.textContent` and `element.innerHTML`. The `innerHTML` was used to write the `<img>` tag for the picture and the lazy way for handling extra spaces in string.
> These extra spaces could of been solves with CSS `letter-spacing` however, writing the code was completed before any HTML display.
>
>
> ##### `formatWord(var1)`
> This function iterates through a string and adds entity character `&nbsp;` after every character. Using `Array.join()` truncated extra `" "` when displaying to HTML, which investigated to use `&nbsp;`.

##### `getWord`
> This function reads in the external JSON word list, generates a random index based on the size of the word list, and then assigns  `wordSecret = breed` and `wordURL = image`. 

> ##### `getRandomInt(var1, var2)`
> This function (taken from [MDN][]) inputs the maximum which is exclusive and the minimum is inclusive. It helps with literacy on the `Math` object. 

[MDN]: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random]

##### `checkGame`
>

##### `getGuess(var1)`
>
> ##### `isLetter(var1)`
>

##### `updateGuess`
>

##### `playGame`
>

##### `String.prototype.replaceAt`
>
>

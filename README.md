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

#### JavaScript - `game.js`


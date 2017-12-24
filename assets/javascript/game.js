
// words to be selected randomly
var wordList = [
    "freddy krueger",
    "pinhead",
    "leatherface",
    "hannibal lecter",
    "pennywise",
    "jason voorhees",
    "candyman"
]

// letters user can guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// set variables for the game
var wins = 0;
var currentWord = [];
var guessLeft = 15;
var lettersGuessed = [];
var userGuess = [];

// randomly selected word variable
var computerGuess = wordList[Math.floor(Math.random() * wordList.length)];


// functions of game
document.onkeyup = function(event){
    for (var i = 0; i < wordList.length; i++) {
        currentWord [i] = "_";
    }
    console.log(computerGuess);
}
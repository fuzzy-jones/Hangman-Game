// pseudo code
// create variables of the game
    // create random word generator
// create functions to be called on in the game
    // underscores
// create a key up function for the user letter choices
// make if else statement for game
// make a win or lose function
// make images appear for appropriate win/horror villain
// reset after win/lose
// push the results to the html



// words to be selected randomly by computers
var wordList = [
    "freddy krueger",
    "pinhead",
    "leatherface",
    "hannibal lecter",
    "pennywise",
    "jason voorhees",
    "candyman",
    "norman bates",
    "michael myers",
    "xenomorph"
]

// letters user can guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// set variables for the game
var wins = 0;
var losses = 0;
var currentWord = [];
var guessLeft = 13;
var lettersGuessed = [];

var randomWord = wordList[Math.floor(Math.random() * wordList.length)];



// game functions

// turn random word into underscores
function underscore() {
    for (var i = 0; i < randomWord.length; i++) {
        currentWord.push("_");
    }
    return currentWord;
}

// reset game to be put in user won or lose functions
function reset() {
    currentWord = [];
    guessLeft = 13;
    lettersGuessed = [];
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    // new word with underscores
    underscore();
    document.getElementById("current-word").innerHTML = currentWord.join(" ");
}

// if user wins
function userWon() {

}

// if user losses
function userLost() {

    if (guessLeft === 0) {
        reset();
        losses++;
        document.getElementById("losses").innerHTML = losses;
        
    }
    
}


// Game

// underscores created for random word
underscore();

// display underscore function in start game html
document.getElementById("current-word").innerHTML = currentWord.join(" ");

// user guesses based on key inputs
document.onkeyup = function(event) {

    // key event made to lowercase
    var userGuess = (event.key).toLowerCase();
    // push letters that were guessed to the game html
    lettersGuessed.push(userGuess);
    document.getElementById("letters-guessed").innerHTML = lettersGuessed;

    // if letter guessed is part of generated random word
    if (randomWord.indexOf(userGuess) > -1) {
        console.log(true);
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userGuess) {
                // i have no idea why this code below works, but a google search said so
                currentWord[i] = userGuess;
                console.log(currentWord);
            }
        }
    }
    else {
        guessLeft--;
        document.getElementById("guesses-left").innerHTML = guessLeft;
        console.log(guessLeft);
    }

    userLost();

    // console log actions taking place
    console.log(randomWord);
    console.log(currentWord);
    console.log(userGuess);
}







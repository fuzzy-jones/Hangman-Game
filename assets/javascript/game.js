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


// global variables

// words to be selected randomly by computers
var wordList = [
    "freddykrueger",
    "pinhead",
    "leatherface",
    "hanniballecter",
    "pennywise",
    "jasonvoorhees",
    "candyman",
    "normanbates",
    "michaelmyers",
    "xenomorph"
]

// letters user can guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// set variables for the game
var wins = 0;
var losses = 0;
var currentWord = [];
var guessLeft = 10;
var lettersGuessed = [];
// random word generated from word list
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

var rightWord = [];


// game functions

// turn random word into underscores
function underscore() {
    for (var i = 0; i < randomWord.length; i++) {
        currentWord.push("_");
    }
    return currentWord;
}

// game reset function to be put in user won or lose functions
function reset() {
    currentWord = [];
    guessLeft = 10;
    lettersGuessed = [];
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    // new word with underscores
    underscore();
    document.getElementById("current-word").innerHTML = currentWord.join(" ");
}

// if user wins
function userWon() {
    // I have no idea why this worked but google said so,
    // and I spent way too many hours trying to make it work
    if (currentWord.indexOf("_") === -1 ) {
        reset();
        wins++;
        console.log(wins);
        // display wins in html
        document.getElementById("wins").innerHTML = wins;
    }
}

// if user losses
function userLost() {
    // if guesses reach 0, game resets and losses increase by 1
    if (guessLeft === 0) {
        reset();
        losses++;
        console.log(losses);
        // display loses in html
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

    // make only alphabet letters from array able to be selected or else get an alert
    if (letters.indexOf(event.key) > -1) {
    // push letters that were guessed to the game html
    lettersGuessed.push(userGuess);
    document.getElementById("letters-guessed").innerHTML = lettersGuessed;
    } else {
        // don't lose a guess and alert the user of an invalid key guess
        guessLeft++;
        alert("Invalid Key... Any guess other than an alphabet letter is horrifying!")
    }

    // if letter guessed is part of generated random word and displayed correct guess in html
    if (randomWord.indexOf(userGuess) > -1) {
        console.log(true);
        for (var i = 0; i < randomWord.length; i++) {
            // user guess is run through random word letters to see if equal to any letter
            if (randomWord[i] === userGuess) {
                // current random word will replace each correct guess with the user guess
                currentWord[i] = userGuess;
                console.log(currentWord);
                // displays correct guesses in the current word html (replaces underscores)
                document.getElementById("current-word").innerHTML = currentWord.join(" ");
            }
        }
    }

    // if letter is an incorrect guess, guesses left is subtracted by 1
    else {
        console.log(false);
        guessLeft--;
        // updated guesses left in html
        document.getElementById("guesses-left").innerHTML = guessLeft;
        console.log(guessLeft);
    }

    // user won function is called if user guess all letters correctly
    userWon();

    // user lost function is called if guesses left reaches 0
    userLost();

    // console log actions taking place
    console.log(randomWord);
    console.log(currentWord);
    console.log(userGuess);
}



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
var loses = 0;
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

// make underscore function equal to word computer selected
underscore() === currentWord;

// display underscore function in the game html
document.getElementById("current-word").innerHTML = currentWord.join(" ");

// console log actions taking place
console.log(randomWord);
console.log(currentWord);


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
                
            }
        }
    }
    else {
        guessLeft--;
        document.getElementById("guesses-left").innerHTML = guessLeft;
        console.log(guessLeft);
    }

    
    
    console.log(userGuess);
}




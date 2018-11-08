// Initialize up the global variables
// need a variable for wins, losses, turns, and an array of the alphabet 

var wins = 0;
var losses = 0;
var turns = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordBank = ["bookkeeper", "chophouse", "handkerchief", "hangman", "buffoonery", "spastic", "anxiety", "endowment"];


// Initialize a variable for the computers random pick of a letter
var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(computerChoice);
// set a restart function
function startPoint() {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
}

// Initialize variables that hold references to the places in the HTML where we want to display things.
var currentWordText = document.getElementById("current-word");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");

// Create the function for the events and what happens on the events
document.onkeyup = function (event) {

    // Determine which key is pressed and check it to the computer's choice 
    // add toLowerCase to clean user input
    var userGuess = event.key.toLowerCase();
    userGuess
    if (userGuess === computerChoice) {
        wins++;
        winsText.textContent = "Wins: " + wins;
        turns = 9;
        guessesSoFarText.textContent = "";
        startPoint();
    }
    else {
        turns--;
        guessesLeftText.textContent = "Guesses Left: " + turns;
        guessesSoFarText.textContent += userGuess + ", ";
    }
    if (turns === 0) {
        losses++;
        lossesText.textContent = "Losses: " + losses;
        turns = 9;
        guessesSoFarText.textContent = "";
        startPoint();
    }

}
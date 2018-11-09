// Initialize up the global variables
// Initialize variables that hold references to the places in the HTML where we want to display things.
var currentWordText = document.getElementById("current-word");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");


// I wanna create an object to better understand them as a challenge from austin
var game = {

    // need a variable for wins, losses, turns, and an array of the alphabet and a wordbank for the computer
    // also need variables for the current word, 

    wins: 0,
    losses: 0,
    turns: 9,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    wordBank: ["bookkeeper", "chophouse", "handkerchief", "hangman", "buffoonery", "spastic", "anxiety", "endowment"],
    lettersGuessed: "",
    computerChoice: "",



    // Initialize a variable for the computers random pick of a letter (no need just call the function for the 
    // first word before the loop) (can't do that anymore in an object)
    // console.log(computerChoice);
    // set a start game function
    startPoint: function () {
        this.computerChoice = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        console.log(this.computerChoice);
    },

    // Initialize the hiddenLetter variable
    hiddenLetter: "",
    // create the blanks function
    createBlanks: function (computerChoice) {
        for (i = 0; i < this.computerChoice.length; i++)
            this.hiddenLetter += "_ ";
        currentWordText.innerHTML = this.hiddenLetter;
    },

    //create function that will loop through all the letters in the computers choice if the users guess is correct
    fillCorrectBlanks: function (letter) {
        for (var i = 0; i < computerChoice.length; i++) {
            if (userGuess === computerChoice.charAt(i)) {
                hiddenLetter = userGuess + " ";
                currentWordText.innerHTML = this.hiddenLetter
            }
        }
    },

    // function to split the random word into an array

    // function for if the users guess is incorrect
    incorrectGuesses: function (letter) {
        for (var i = 0; i < this.computerChoice.length; i++) {
            if (userGuess !== this.computerChoice[i]) {
                this.lettersGuessed.append(userGuess)
                turns--;
            }
        }
    },

    // Need a reset function so that the strings dont keep creating blanks
    Reset: function() {
        this.turns = 9;
        this.lettersGuessed = "";
        this.computerChoice = "";
        this.hiddenLetter = "",
        this.startPoint(createBlanks());
    },

    // now i need my function to check the user input and call all the other functions for the game.



    // create initial word blanks (gotta call outside of object now)
    // createBlanks(computerChoice);
    // function for correct guesses.
    // correctGuesses: function (keyStroke) {
    //     if (keyStroke === computerChoice)
    //     replace "_ " with keyStroke;
    // },

}

// start the game and initialize the blanks
game.createBlanks(game.startPoint());

// Create the function for the events and what happens on the events
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    // need to check userGuesses towards computerChoice

    // need to reset the game if win or loss
}

    // Determine which key is pressed and check it to the computer's choice 
    // add toLowerCase to clean user input
/*    var userGuess = event.key.toLowerCase();
    userGuess
    if (userGuess === computerChoice) {
        wins++;
        winsText.textContent = "Wins: " + wins;
        turns = 12;
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
        turns = 12;
        guessesSoFarText.textContent = "";
        startPoint();
    }

} */
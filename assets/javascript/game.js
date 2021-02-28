// initialize variables for wins, losses, turns, and an array of the alphabet and a wordbank for the computer choice
var wordBank = ["roxas",
"kingdom",
"island",
"sora",
"namine",
"key",
"destiny",
"oblivion",
"axel",
"twilight",
"eater",
"ansem",
"dream",
"donald",
"maleficent",
"queen minnie",
"terra",
"keyblade",
"xion",
"riku",
"kairi",
"goofy"];

// Computer selected solution will be held here.
var chosenWord = "";

// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution.
var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];

// Holds all of the wrong guesses.
var wrongGuesses = [];

// Holds the letters guessed
var letterGuessed = "";

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)
function startGame() {

  // Reset the guesses back to 0.
  numGuesses = 9;

  // Solution chosen randomly from wordList.
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(chosenWord);

  // The word is broken into individual letters.
  lettersInChosenWord = chosenWord.split("");

  // We count the number of letters in the word.
  numBlanks = lettersInChosenWord.length;

  // CRITICAL LINES
  // Here we *reset* the guess and success and the wrong guesses array at each round.
  blanksAndSuccesses = [];
  wrongGuesses = [];

  // Fill up the blanksAndSuccesses list with blanks from the lettersinchosenword length
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);

  // Reprints the guessesLeft to 9.
  document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + numGuesses;

  // Prints the blanks at the beginning of each round in the HTML.
  document.getElementById("current-word").innerHTML = blanksAndSuccesses.join(" ");

  // Clears the wrong guesses from the previous round.
  document.getElementById("guesses-so-far-text").innerHTML = wrongGuesses.join(" ");
}

// checkLetters() function
// It's where all the comparisons are made.
function checkLetters(letter) {

  // This boolean will be toggled based on whether or not
  // a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {

      // If the letter exists then toggle this boolean to true.
      // This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j] === letter) {

        // Here we set blank equal to the letter guessed.
        blanksAndSuccesses[j] = letter;
      }
    }

    // Log the current blanks and successes for testing.
    console.log(blanksAndSuccesses);
  }

  // If the letter is incorrect
  else {

    // Then we add the letter to the list of wrong letters.
    wrongGuesses.push(letter);

    // We also subtract one of the guesses.
    numGuesses--;

  }

}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.
function roundComplete() {

  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // HTML UPDATES
  // ============

  // Update the HTML to reflect the new number of guesses.
  document.getElementById("guessesleft-text").innerHTML = "Guesses Left:" + numGuesses;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("current-word").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("guesses-so-far-text").innerHTML = wrongGuesses.join(" ");

  // If our Word Guess string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    // Add to the win counter
    winCounter++;

    // Give the user an alert
    alert("You win! The word was " + chosenWord);

    // Update the win counter in the HTML
    document.getElementById("wins-text").innerHTML = "Wins: " + winCounter;

    // Restart the game
    startGame();
  }

  // If we've run out of guesses
  else if (numGuesses === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lose! The word was " + chosenWord);

    // Update the loss counter in the HTML
    document.getElementById("losses-text").innerHTML = "Losses: " + lossCounter;

    // Restart the game
    startGame();

  }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function (event) {

  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  checkLetters(letterGuessed);

  // Runs the code that ends each round.
  roundComplete();
};
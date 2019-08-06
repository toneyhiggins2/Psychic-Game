
    // Creates an var for the computer selected letter
    var letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and guesses left.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessedSoFar = [];

    // Create variables that hold references to the places in the HTML where we want to display things.
    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var guessesLeftText = document.getElementById("guesses-left");
    var guessedSoFarText = document.getElementById("guessed-sofar");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      guessedSoFar.push(userGuess);

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = letterArr[Math.floor(Math.random() * letterArr.length)];

      if (userGuess === computerGuess) {

        wins++;
        guessesLeft = 9;
        guessedSoFar = [];
        alert("You Win!")

      }
      else {

        guessesLeft--;
      }

      if (guessesLeft === 0) {
          losses++;
          guessesLeft = 9;
          guessedSoFar = [];
      }

      winsText.textContent = wins;
      lossesText.textContent = losses;
      guessesLeftText.textContent = guessesLeft;
      guessedSoFarText.textContent = guessedSoFar.join(" ");
    };
  
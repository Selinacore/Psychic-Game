var computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

document.onkeyup = function (event) {

  var userGuess = event.key;
  var computerGuess = computerChoices[ Math.floor(Math.random() * computerChoices.length) ];
  var guessChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

  console.log("user guess:", userGuess)
  console.log("computer guess:", computerGuess)

  if (userGuess === computerGuess) {
    wins++;
    guessesLeft = 9;
    computerGuess = [];
  }

  if (userGuess != computerGuess) {
    guessesLeft--;
    guessesSoFar = [];

  }

  if (guessesLeft === 0) {
    if (guessesLeft = 9) {
      losses++;
      guessChoices = [];
    }
  }

  var html = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses +
    "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your Guesses so far: " + guessChoices + "</p>";

  document.querySelector("#pgame").innerHTML = html;
}
// RPS
// create a function startGame
function startGame() {
  // initialze variables for comp name
  const botName = "Computer";
  // initialize an object score with properties won and lost set to zero both
  const tally = {
    won: 0,
    lost: 0,
  };
  // acceptable answers array ['rock', 'paper','scissors'] A.A
  const acceptableAnswers = ["rock", "paper", "scissors"];
  // create a function makeBotAnswer
  // which returns a random string of acceptableanswersarray
  function makeBotAnswer(acceptableAnswers) {
    return acceptableAnswers[Math.floor(Math.random() * 3)];
  }
  //   initialize and store in botanswer the result of makebotanswr
  const botAnswer = makeBotAnswer(acceptableAnswers);
}

// Loop of 5 rounds
// each loop
// store in new vairable botAnswer the result of makeBotAnswer
// initialize and set a keepGoing boolean variable as true
// while keepGoing true
// store string userAnswer in prompt("Rock, Paper or Scissors?")->get this from the A.A. array
// if userAnswer lowercased is either of those in A.A array lowerCased keepGoing is False
// ifbot answer same as userAnswer
// object.won + 1 to current
// alert the winner of the round to be user
// else object.lost + 1 to current
// alert the winner to  be bot
// END loop
// if object.lost > object.won show that computer won
// else
// show user won
// Outside Function
// run startGame()
startGame();

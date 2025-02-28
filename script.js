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
  // Loop of 5 rounds
  for (let gameRound = 1; gameRound <= 1; gameRound++) {
    const botAnswer = makeBotAnswer(acceptableAnswers);
    //   initialize and store in botanswer the result of makebotanswr
    // initialize and set a keepGoing boolean variable as true
    let keepGoing = true;
    // initialize userAnswer
    let userAnswer = undefined;
    // while keepGoing true

    while (keepGoing) {
      // store string userAnswer in prompt("Rock, Paper or Scissors?")->get this from the A.A. array
      userAnswer = prompt("Rock, Paper or scissors?").toLowerCase();
      // if userAnswer lowercased is either of those in A.A array lowerCased keepGoing is False
      if (acceptableAnswers.includes(userAnswer)) {
        keepGoing = false;
      } else {
        alert("Invalid input. Enter: Rock, Paper or Scissors.");
      }
    }
  }
}

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

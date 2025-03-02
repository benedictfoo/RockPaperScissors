// RPS
// create a function startGame
function startGame() {
  const botName = "Computer";
  const userName = "You";
  const rounds = 5;
  // initialize an object score with properties won and lost set to zero both
  const tally = {
    won: 0,
    lost: 0,
    draw: 0,
  };
  // acceptable output text
  const acceptableAnswers = ["rock", "paper", "scissors"];
  const acceptableResults = [
    `${userName} won`,
    "It's a draw.",
    `${userName} lost`,
  ];

  //returns a random string of r, p or s
  function makeBotAnswer(acceptableAnswers) {
    return acceptableAnswers[Math.floor(Math.random() * 3)];
  }
  // Loop of n rounds
  for (let gameRound = 1; gameRound <= rounds; gameRound++) {
    const botAnswer = makeBotAnswer(acceptableAnswers);

    let keepGoing = true;
    let userAnswer = undefined;
    while (keepGoing) {
      // store string userAnswer in prompt("Rock, Paper or Scissors?")->get this from the A.A. array
      userAnswer = prompt("rock, paper or scissors?")?.toLowerCase();

      // if userAnswer either of those in array keepGoing is False
      if (acceptableAnswers.includes(userAnswer)) {
        keepGoing = false;
      } else {
        alert("Invalid input. Enter: Rock, Paper or Scissors.");
      }
    }

    let roundResult = undefined;

    // check roundWinner function
    function checkWinner() {
      // create array of win or lose condition : [userAnswer,botAnswer, :win or lose or draw]

      const winLoseRules = [
        [acceptableAnswers[0], acceptableAnswers[0], acceptableResults[1]],
        [acceptableAnswers[0], acceptableAnswers[2], acceptableResults[0]],
        [acceptableAnswers[0], acceptableAnswers[1], acceptableResults[2]],
        [acceptableAnswers[1], acceptableAnswers[1], acceptableResults[1]],
        [acceptableAnswers[1], acceptableAnswers[0], acceptableResults[0]],
        [acceptableAnswers[1], acceptableAnswers[2], acceptableResults[2]],
        [acceptableAnswers[2], acceptableAnswers[2], acceptableResults[1]],
        [acceptableAnswers[2], acceptableAnswers[1], acceptableResults[0]],
        [acceptableAnswers[2], acceptableAnswers[0], acceptableResults[2]],
      ];
      //   create keepGoing value of true
      let keepGoing = true;
      //   create index as initializer
      let index = 0;
      //   check for array which matches the user and bot
      while (keepGoing) {
        if (winLoseRules[index][0] === userAnswer) {
          if (winLoseRules[index][1] === botAnswer) {
            keepGoing = false;
          } else {
            index++;
          }
        } else {
          index++;
        }
        if (index > 10) {
          keepGoing = false;
        }
      }
      //   check if win lose or draw for the round
      let acceptableResultsIndex = acceptableResults.indexOf(
        winLoseRules[index][2]
      );
      if (acceptableResultsIndex === 0) {
        tally.won = tally.won + 1;
      } else if (acceptableResultsIndex === 1) {
        tally.draw = tally.draw + 1;
      } else {
        tally.lost = tally.lost + 1;
      }
      // return match result
      return winLoseRules[index][2];
    }
    roundResult = checkWinner();
    // alert the winner of the round to be user
    alert(
      `${userName} threw: ${userAnswer}.\n${botName} threw: ${botAnswer}.\n${roundResult}`
    );
  }
  //   TalliedResult types
  const talliedResult = [
    [tally.won, `${userName} won`],
    [tally.draw, `It's a draw`],
    [tally.lost, `${userName} lost`],
  ];
  //   SortedTallierResult
  const sortedTalliedResult = [...talliedResult].sort((a, b) => b[0] - a[0]);
  //   If draw is highest in tallied, take the second sorted array
  if (tally.draw >= tally.won && tally.draw >= tally.lost) {
    alert(sortedTalliedResult[1][1]);
  }
  //   else take the first array
  else {
    alert(sortedTalliedResult[0][1]);
  }
}

// run startGame()
// startGame();

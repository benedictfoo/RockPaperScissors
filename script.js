// RPS
// create a function startGame
function startGame() {
  // initialze variables for comp name and user name
  const botName = "Computer";
  const userName = "You";
  //Set rounds
  const rounds = 5;
  // initialize an object score with properties won and lost set to zero both
  const tally = {
    won: 0,
    lost: 0,
    draw: 0,
  };
  // acceptable answers array ['rock', 'paper','scissors'] A.A
  const acceptableAnswers = ["rock", "paper", "scissors"];
  const acceptableResults = [
    `${userName} won.`,
    "It's a draw.",
    `${userName} lost`,
  ];
  // create a function makeBotAnswer
  // which returns a random string of acceptableanswersarray
  function makeBotAnswer(acceptableAnswers) {
    return acceptableAnswers[Math.floor(Math.random() * 3)];
  }
  // Loop of 5 rounds
  for (let gameRound = 1; gameRound <= rounds; gameRound++) {
    const botAnswer = makeBotAnswer(acceptableAnswers);
    //   initialize and store in botanswer the result of makebotanswr
    // initialize and set a keepGoing boolean variable as true
    let keepGoing = true;
    // initialize userAnswer
    let userAnswer = undefined;
    // while keepGoing true

    while (keepGoing) {
      // store string userAnswer in prompt("Rock, Paper or Scissors?")->get this from the A.A. array
      userAnswer = prompt("rock, paper or scissors?")?.toLowerCase();
      // get lowerCase of userAnswer
      userAnswer = userAnswer.toLowerCase();
      // if userAnswer lowercased is either of those in A.A array lowerCased keepGoing is False
      if (acceptableAnswers.includes(userAnswer)) {
        keepGoing = false;
      } else {
        alert("Invalid input. Enter: Rock, Paper or Scissors.");
      }
    }

    let roundResult = undefined;

    // check roundWinner function
    function checkWinner() {
      // create array of array to store win or lose condition : [userAnswer,botAnswer, :win or lose or draw]
      // loop through the array and check for the correct array in the array
      // return the third element

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
      //   create index variable of 0
      let index = 0;
      //   while keepgoing check for array which matches the user and bot as first and second
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
      //   store result in tally
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

      return winLoseRules[index][2];
    }
    roundResult = checkWinner();
    // alert the winner of the round to be user
    alert(
      `${userName} threw: ${userAnswer}.\n${botName} threw: ${botAnswer}.\n${roundResult}`
    );
  }
  //   TalliedResult
  const talliedResult = [
    [tally.won, `${userName} won`],
    [tally.draw, `It's a draw`],
    [tally.lost, `${userName} lost`],
  ];
  //   SortedTallierResult
  const sortedTalliedResult = [...talliedResult].sort((a, b) => b[0] - a[0]);
  //   If draw is highest in tallied, take the second sorted array
  if (
    sortedTalliedResult[0][1] === talliedResult[1][1] &&
    tally.draw === rounds
  ) {
    alert(sortedTalliedResult[1][1]);
  }
  //   else take the first array
  else {
    alert(sortedTalliedResult[0][1]);
  }
}

// run startGame()
startGame();

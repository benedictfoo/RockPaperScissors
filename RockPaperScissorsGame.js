class RockPaperScissorsGame {
  constructor(userName = "You", botName = "Computer", totalRounds = 5) {
    this.userName = userName;
    this.botName = botName;
    this.totalRounds = totalRounds;
    this.tally = {
      won: 0,
      lost: 0,
      draw: 0,
    };
    this.acceptableAnswers = ["rock", "paper", "scissors"];
    this.acceptableResults = [
      `${this.userName} won this round`,
      "It's a draw.",
      `${this.userName} lost this round`,
    ];
    this.winLoseRules = [
      [
        this.acceptableAnswers[0],
        this.acceptableAnswers[0],
        this.acceptableResults[1],
      ],
      [
        this.acceptableAnswers[0],
        this.acceptableAnswers[2],
        this.acceptableResults[0],
      ],
      [
        this.acceptableAnswers[0],
        this.acceptableAnswers[1],
        this.acceptableResults[2],
      ],
      [
        this.acceptableAnswers[1],
        this.acceptableAnswers[1],
        this.acceptableResults[1],
      ],
      [
        this.acceptableAnswers[1],
        this.acceptableAnswers[0],
        this.acceptableResults[0],
      ],
      [
        this.acceptableAnswers[1],
        this.acceptableAnswers[2],
        this.acceptableResults[2],
      ],
      [
        this.acceptableAnswers[2],
        this.acceptableAnswers[2],
        this.acceptableResults[1],
      ],
      [
        this.acceptableAnswers[2],
        this.acceptableAnswers[1],
        this.acceptableResults[0],
      ],
      [
        this.acceptableAnswers[2],
        this.acceptableAnswers[0],
        this.acceptableResults[2],
      ],
    ];
  }
  makeBotAnswer() {
    return this.acceptableAnswers[Math.floor(Math.random() * 3)];
  }
  checkWinnerGetMessage(userAnswer, botAnswer) {
    const { tally, acceptableResults, winLoseRules, totalRounds, userName } =
      this;
    //   create keepGoing value of true
    let keepGoing = true;
    //   create index as initializer
    let index = 0;
    //   check for array which matches the user and bot
    while (keepGoing) {
      console.log(index);
      if (winLoseRules[index][0] === userAnswer) {
        if (winLoseRules[index][1] === botAnswer) {
          keepGoing = false;
        } else {
          index++;
        }
      } else {
        index++;
      }
      if (index > 9) {
        keepGoing = false;
      }
    }
    //   check if win lose or draw for the round
    let acceptableResultsIndex = acceptableResults.indexOf(
      winLoseRules[index][2]
    );
    const gameStatus = document.querySelector(".game-status");
    if (acceptableResultsIndex === 0) {
      tally.won = tally.won + 1;
      document.querySelector(".player-score").textContent = tally.won;
    } else if (acceptableResultsIndex === 1) {
      tally.draw = tally.draw + 1;
    } else {
      tally.lost = tally.lost + 1;
      document.querySelector(".bot-score").textContent = tally.lost;
    }
    gameStatus.style.backgroundColor = "gray";
    if (tally.won === totalRounds) {
      gameStatus.textContent = `Hooray! ${userName} won the game!`;
      gameStatus.style.backgroundColor = "green";
    } else if (tally.lost === totalRounds) {
      gameStatus.textContent = `Oh. Better luck next time!`;
      gameStatus.style.backgroundColor = "red";
    } else {
      gameStatus.textContent = winLoseRules[index][2];
      setTimeout(() => {
        gameStatus.style.backgroundColor = "initial";
      }, 1000);
    }
  }
  startGame() {
    const { userName, botName } = this;
    // listen to buttonclicks
    const playingButtonsContainer = document.querySelector(
      ".playingButtonsContainer"
    ); //returns a random string of r, p or s
    document.querySelector(".player-name").textContent = userName;
    document.querySelector(".bot-name").textContent = botName;
    const gameStatus = document.querySelector(".game-status");
    gameStatus.textContent = "Hurry up and make your move!";
    playingButtonsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("playingButton")) {
        const userAnswer = e.target.textContent.toLowerCase();
        const botAnswer = this.makeBotAnswer();
        this.checkWinnerGetMessage(userAnswer, botAnswer);
      }
    });
  }
}
export default RockPaperScissorsGame;

import { Board } from "./Board.js";
import { NickInput } from "./NickInput.js";
class Game {
  constructor({ playButton, stages, gameBoard, checkButton, resultNick, resultPoints }) {
    this.playButton = playButton;
    this.stages = stages;
    this.gameBoard = gameBoard;
    this.checkButton = checkButton;
    this.resultNick = resultNick;
    this.resultPoints = resultPoints;
    this.stageCounter = 1;
    this.NickInput = new NickInput();
    this.board = new Board();
  }
  run() {
    this.playButton.addEventListener("click", this.play.bind(this));
  }

  play() {
    const playerName = document.querySelector(".start__nick").value;
    const board = this.board.createTable(); //creat li(words)

    //validation of the input
    if (this.NickInput.checkNick(playerName)) {
      this.nextStage();
      //add li(words) to our board
      this.board.randomizePosition(board[0]).forEach((li) => {
        this.gameBoard.appendChild(li);
      });
      document.querySelector(".game__category").textContent = board[1];

      //check user answers by function checkAnswers() from Board.js
      this.checkButton.addEventListener("click", (e) => {
        e.target.textContent = "finish game";
        const userAnswers = [...document.querySelectorAll(".chosen")].map((li) => li.textContent);
        const answers = this.board.checkAnswers(board[2], userAnswers);

        //add class to chosen words to show good and bad ones
        board[0].forEach((li) => {
          if (li.classList == "chosen" && answers[1].includes(li.textContent)) {
            li.classList.add("chosen--good");
          } else if (li.classList == "chosen") {
            li.classList.add("chosen--bad");
          }
        });

        //last part of game, add player name and points to result screen
        if (e.target.textContent === "finish game") {
          this.checkButton.addEventListener("click", () => {
            this.nextStage();
            this.resultNick.textContent = playerName;
            this.resultPoints.textContent = answers[0];
          });
        }
      });
    }
  }
  //function is responsible for changing states of game
  nextStage() {
    this.stages.forEach((wrap, index) => {
      console.log(index, this.stageCounter);
      wrap.classList.add("hidden");
      if (index == this.stageCounter) wrap.classList.remove("hidden");
    });
    this.stageCounter++;
  }
}
const game = new Game({
  playButton: document.querySelector(".start__button"),
  stages: document.querySelectorAll(".wrap"),
  gameBoard: document.querySelector(".game__board"),
  checkButton: document.querySelector(".game__check"),
  resultNick: document.querySelector(".result__nick"),
  resultPoints: document.querySelector(".result__points"),
});
game.run();

import { Board } from "./Board.js";
import { NickInput } from "./NickInput.js";
class Game {
  constructor({ playButton, stages, gameBoard, checkButton }) {
    this.playButton = playButton;
    this.stages = stages;
    this.gameBoard = gameBoard;
    this.checkButton = checkButton;
    this.NickInput = new NickInput();
    this.board = new Board();
  }
  //   this.nextStage.bind(this)
  run() {
    this.playButton.addEventListener("click", this.play.bind(this));
    this.checkButton.addEventListener("click", this.checkAnswers.bind(this));
  }

  checkAnswers() {}
  play() {
    const playerName = document.querySelector(".start__nick").value;
    if (this.NickInput.checkNick(playerName)) {
      this.nextStage();
      const board = this.board.createTable();
      this.board.randomizePosition(board[0]).forEach((li) => {
        this.gameBoard.appendChild(li);
      });
      document.querySelector(".game__category").textContent = board[1];
    }
  }
  nextStage() {
    let stageCounter = 0;
    this.stages[stageCounter].classList.toggle("hidden");
    stageCounter++;
    this.stages[stageCounter].classList.toggle("hidden");
  }
}
const game = new Game({
  playButton: document.querySelector(".start__button"),
  stages: document.querySelectorAll(".wrap"),
  gameBoard: document.querySelector(".game__board"),
  checkButton: document.querySelector(".game__check"),
});
game.run();

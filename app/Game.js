import { Board } from "./Board.js";
import { NickInput } from "./NickInput.js";
class Game {
  constructor({ playButton, stages, gameBoard }) {
    this.playButton = playButton;
    this.stages = stages;
    this.gameBoard = gameBoard;
    this.NickInput = new NickInput();
    this.board = new Board();
  }
  //   this.nextStage.bind(this)
  run() {
    this.playButton.addEventListener("click", this.play.bind(this));
  }

  play() {
    const playerName = document.querySelector(".start__nick").value;
    if (this.NickInput.checkNick(playerName)) {
      this.nextStage();
      this.board.randomizePosition(this.board.createTable()[0]).forEach((li) => {
        this.gameBoard.appendChild(li);
      });
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
});
game.run();

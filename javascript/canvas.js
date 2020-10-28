class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.startXy = {x: 300, y: 400};
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    let xPos = this.startXy.x;
    let lineLength = 60;
    let offset = 80;
    console.log(`drawLines(), secretWord.length = ${this.secretWord.length}, secretWord = ${this.secretWord}`);
    for (let i=0; i<this.secretWord.length; i++) {
      this.ctx.moveTo(xPos, 400);
      this.ctx.lineTo(xPos + lineLength, 400);
      xPos += offset;
      console.log(`drawLines() for loop, iteration: ${i}`);
    }
    this.ctx.stroke();
  }

  writeCorrectLetter(letter) {
    let index = this.secretWord.indexOf(letter);
    let offset = 80;
    let padding = 5;
    for (let i=0; i<this.secretWord.length; i++) {
      if (index > -1) {
        i = index;
        index = this.secretWord.indexOf(letter,i + 1);
        this.ctx.font = "60px Arial";
        this.ctx.fillText(letter, this.startXy.x + i * offset + padding, this.startXy.y - padding);
      }
    }
  }

  writeWrongLetter(letters, errorsLeft) {
    this.ctx.clearRect(0, 0, 1200, 200);
    this.ctx.stroke();
    this.ctx.font = "30px Arial";
    this.ctx.fillText(`Errors left: ${errorsLeft}`, 650, 50);
    for (let i=0; i<letters.length; i++) {
      this.ctx.fillText(letters[i], 850 + (i * - 40), 100);
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.font = "80px Arial";
    this.ctx.fillText("GAME OVER", 400, 300);
  }

  winner() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.font = "80px Arial";
    this.ctx.fillText("WINNER", 400, 300);
  }
}

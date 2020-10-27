class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    this.ctx.moveTo(300, 600);
    this.ctx.lineTo(300, 0);
    this.ctx.moveTo(300, 0);
    this.ctx.lineTo(600, 0);
    this.ctx.stroke();
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}

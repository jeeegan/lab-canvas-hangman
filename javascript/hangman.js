class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let random = Math.floor(Math.random() * this.words.length);
    return this.words[random];
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <=90;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.letters.push(letter)
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft --;
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length;
  }
}

let hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.secretWord.includes(event.key)) {
      hangman.addCorrectLetter(event.key);
    } else {
      hangman.addWrongLetter(event.key);
    }
  }
});

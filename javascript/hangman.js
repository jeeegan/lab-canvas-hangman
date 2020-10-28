class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.wrongLetters = [];
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
    return !this.wrongLetters.includes(letter) || this.secretWord.includes(letter);
  }

  addCorrectLetter(letter) {
    let index = this.secretWord.indexOf(letter);
    for (let i=index; i<this.secretWord.length; i++) {
      if (index > -1) {
        this.guessedLetters += letter;
        i = index;
        index = this.secretWord.indexOf(letter, i + 1);
      }
    }
  }

  addWrongLetter(letter) {
    this.wrongLetters.push(letter);
    this.errorsLeft --;
  }

  checkGameOver() {
    return this.errorsLeft === 0 || this.guessedLetters.length === this.secretWord.length;
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.secretWord.includes(event.key)) {
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(event.key);
      if(hangman.checkWinner()) {
        hangmanCanvas.winner();
      }
    } else if (hangman.checkClickedLetters(event.key)){
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(hangman.wrongLetters, hangman.errorsLeft);
      if(hangman.checkGameOver()) {
        hangmanCanvas.gameOver();
      }
    }
  }
  }
);

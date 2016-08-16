var selectedWord = '';
var display = [];
var guesses = [];
var numberOfMisses = 0;
var maxMisses = 5;

document.getElementById( 'new-game' ).addEventListener( 'click', startGame );
document.getElementById( 'guess' ).addEventListener( 'click', guessLetter );
document.getElementById( 'letter' ).value;

function startGame() {
  selectedWord = words[
    Math.floor(
      Math.random() * words.length
    )
  ];

  console.log( selectedWord );

  guesses = [];
  display = [];
  numberOfMisses = 0;

  for ( var i=0; i<selectedWord.length; i++) {
    display.push( '_' );
  }
  updateDisplay();
}

function guessLetter() {
  var letter = document.getElementById( 'letter' ).value;

  guesses.push( letter );
  document.getElementById( 'guesses' ).innerText = guesses.join( ', ' );

  if ( selectedWord.indexOf( letter ) > -1){

    for( var i=0; i<selectedWord.length; i++){
      if( selectedWord.charAt(i) === letter ) {
        display[i] = letter;
      }
    }
    updateDisplay();
  }
  else {
    numberOfMisses++;
    document.getElementById( 'missed' ).innerText = numberOfMisses;
  }
  checkForResult();
}

function updateDisplay() {
  document.getElementById( 'current-word' ).innerText = display.join( '' )

}

function checkForResult() {
  if( numberOfMisses >= maxMisses) {
    document.getElementById( 'result' ).innerText = 'You Lose!'
  }
  else if( selectedWord === display.join( '' ) ) {
    document.getElementById( 'result' ).innerText = 'You Win!'
  }
}

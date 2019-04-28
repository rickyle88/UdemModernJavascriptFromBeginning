/*
GAME FUNCTION
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- NOtify player of guesses remaining
- Notify player of the correct anwer if loose
- Let player choose to play again

*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.getElementById('guess-btn'),
    guessInput = document.getElementById('guess-input'),
    message = document.querySelector('.message');

// Assign UI min & max 
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    console.log(guess);

    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        // We don't wanna count an invalid input
        return false;
    }

    // Check if won
    if (guess === winningNum) {

        // Game over - won

        gameOver(true, `${winningNum} is correct!, YOU WIN`);

    }
    else
    // Check if lose
    {
        guessesLeft -= 1;

        if (guessesLeft === 0) {

            // Game over - lost

            gameOver(false, `Game Over, You lost. The correct number was ${winningNum}`);


        } else {

            // Game continues - anwser wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value = '';

            // Tell user its the wrong number  
            // singular noun
            setMessage(`${guess} is not correct, ${guessesLeft} guess${guessesLeft > 1 ? 'es' : ''} left`, 'red');

            // gameOver(false, `${guess} is not correct, ${guessesLeft} guesses left`);


        }

    }

})

// Game over
function gameOver(won, msg){
        let color;
       
        won === true ? color = 'green' : color = 'red';

        // Disable input
        guessInput.disabled = true;

        // Change border color
        guessInput.style.borderColor = color;
        // Set text color
        // message.style.color = color;

        // Set message
        setMessage(msg, color);

        // Play again
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max- min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}


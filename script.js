let randNum = parseInt(Math.floor(Math.random() * 100 + 1));
console.log(randNum);

let btn = document.getElementById('subt');
let restart = document.getElementById('restart');
let form = document.querySelector('form');
let guessField = document.getElementById('guessField');
let prevGuess = document.querySelector('.guesses');
let remainGuess = document.querySelector('.lastResult');
let HiOrLow = document.querySelector('.lowOrHi');

var arr = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var guess = parseInt(guessField.value);
    console.log(guess);
    console.log(typeof guess);

    if (randNum == guess) {
        console.log(`WOOOH! Congrats, ${guess} is Correct guess.`);
        guessField.style.backgroundColor = 'Gold';
        HiOrLow.innerHTML = `WOOOH! Congrats, ${guess} is Correct guess.`;
        btn.style.display = 'none';
        restart.style.display = 'block';
        restart.value = 'New Game';
        restart.addEventListener('click', () => {
            location.reload();
        });
    } else {
        console.log('Nah! Try Again.');


        // arr.push(guess);
        if (!isNaN(guess)) {
            prevGuess.innerHTML += `${guess}, `


            remainGuess.innerHTML -= 1;
            setTimeout(() => {
                guessField.value = '';
            }, 2000);
        }
        if ((guess < randNum) & (guess != '') & (guess != Number)) {
            HiOrLow.innerHTML = 'LOW';
        } else if ((guess > randNum) & ((guess != '') & (guess != Number))) {
            HiOrLow.innerHTML = 'HIGH';
        } else if (isNaN(guess)) {
            HiOrLow.innerHTML = 'Enter Number';
            setTimeout(() => {
                HiOrLow.innerHTML = '';
            }, 2000);
        }
    }
    console.log(typeof guess);
    console.log(arr);

    if (remainGuess.innerHTML == 0) {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
        guessField.style.backgroundColor = 'grey';
        HiOrLow.innerHTML = `${randNum} was the Number.`;
        btn.style.display = 'none';
        restart.style.display = 'block';
    }
    restart.addEventListener('click', () => {
        location.reload();
    });
});

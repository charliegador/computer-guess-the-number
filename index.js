
const MAX_NUMBER = 100
const MIN_NUMBER = 0

let guessCount = 0

let newMaxNumber = 100

let newLowNumber = 0

let guess

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    // makeGuess()
    // guess--
    newMaxNumber = guess
    guess = lowMiddleNumber(newLowNumber, guess)
    setMessage(`Is it ${guess}?`)
    setCounter()
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    setMessage("Woho!")
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    // makeGuess()
    // guess++
    newLowNumber = guess
    guess = highMiddleNumber(newMaxNumber, guess)    //Medelvärde
    setMessage(`Is it ${guess}?`)
    setCounter()
})


function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'
    
    makeGuess()    

    setMessage(`Is it ${guess}?`)
}
globalThis.setMessage = setMessage;

document
    .getElementById('start-btn')
    .addEventListener('click', start)

function makeGuess(){
    guess = Math.floor(Math.random() * 101)

}

function highMiddleNumber(max, highGuess){
    highGuess = (max + guess)/2
    console.log(guess)
    return Math.round(highGuess)
}

function lowMiddleNumber(min, lowGuess){
    lowGuess = (min + guess)/2
    console.log(guess)
    return Math.round(lowGuess)
}

function setCounter() {
    guessCount++
    console.log(guessCount)
    document.getElementById('counter').innerText = `Guess counter: ${guessCount}`
}
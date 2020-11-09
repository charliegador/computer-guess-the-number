const MAX_NUMBER = 100
const MIN_NUMBER = 0


let guess

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    guess--
    setMessage(`Is it ${guess}?`)

})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    setMessage("Woho!")
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    guess++
    setMessage(`Is it ${guess}?`)

})


function setMessage(msg) {
    console.log("Nu är vi i setMessage")
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'
    
    guess = Math.floor(Math.random() * 101)

    setMessage(`Is it ${guess}?`)
}
globalThis.setMessage = setMessage;

document
    .getElementById('start-btn')
    .addEventListener('click', start)


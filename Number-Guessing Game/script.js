let randomNumber = parseInt(Math.random()*100+1)
// console.log(randomNumber);

const submit = document.getElementById("subt")
const userInput = document.getElementById("guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let playGame = true
let prevGuesses =[]
let numGuesses = 1

if (playGame) {
    submit.addEventListener("click",function (e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a valid number")
    }else if(guess >100){
        alert("Please Enter a number between 1 and 100")
    }else if(guess <1){
        alert("Please Enter a number between 1 and 100")
    }
    else{
        prevGuesses.unshift(guess)
        // console.log(prevGuesses)
        if(numGuesses === 10){
            displayGuess(guess)
            displayMessage(`Game over , random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guessed it right")
        endGame()
    }else if(guess>randomNumber){
        displayMessage("Your guess is HIGH")
    }
    else if(guess<randomNumber){
        displayMessage("Your guess is low")
    }
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.textContent += `${guess} `
    numGuesses++;
    remaining.textContent = `${11-numGuesses}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled',"")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",function(e){
        randomNumber = parseInt(Math.random()*100+1)
        playGame = true
        prevGuesses =[]
        numGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuesses}`
        lowOrHi.innerHTML = ''
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
    })
}
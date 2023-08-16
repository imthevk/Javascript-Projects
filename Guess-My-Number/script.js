'use strict';
console.log("hi")
const againBtn = document.querySelector(".btn.again")
const checkBtn = document.querySelector(".btn.check")
let numberToGuess = document.querySelector(".number")
// let messageForGuess = 
let scoreText = document.querySelector(".score")
const highscoreText = document.querySelector(".highscore")
let scoreValue = 20;
let highScore = 0;


let randomNumber = Math.floor((Math.random()*20 ) + 1)

const displayMessage = (message) => {
    document.querySelector(".message").textContent = message
} 
console.log(randomNumber)
checkBtn.addEventListener("click", (e) => {
    let input = parseInt(document.querySelector(".guess").value)
    if(!input){
        displayMessage("Please enter a number")
    }
    if(input){
    if(input === randomNumber){
       displayMessage("You are correct 🎉")
       highScore = scoreValue
       document.body.style.backgroundColor = "#60b347"
       checkBtn.disabled = true
       checkBtn.style.color = "red"
    }else if(input < randomNumber){
       displayMessage("Too Low ")
        scoreValue--
        
    }else{
       displayMessage("Too high")
        scoreValue--
    }
}
    if(scoreValue >= 0){

        scoreText.innerText = scoreValue
        highscoreText.innerText = highScore
    }else{
        displayMessage("Game Over")
        document.body.style.backgroundColor = "red"
    }
})

againBtn.addEventListener("click", function(){
    scoreValue = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber)

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreValue;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  checkBtn.disabled = false
})
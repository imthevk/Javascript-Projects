'use strict';
console.log("hi")
const againBtn = document.querySelector(".btn.again")
const checkBtn = document.querySelector(".btn.check")
let numberToGuess = document.querySelector(".number")
let messageForGuess = document.querySelector(".message")
let scoreText = document.querySelector(".score")
let scoreValue = 20;


let randomNumber = Math.floor((Math.random()*20 ) + 1)
checkBtn.addEventListener("click", (e) => {
    let input = parseInt(document.querySelector(".guess").value)
    if(input === randomNumber){
       messageForGuess.innerText = "You are correct 🎉"
       document.body.style.backgroundColor = "#60b347"
    }else if(input < randomNumber){
        messageForGuess.innerText = "Too Low "
        scoreValue--
        
    }else{
        messageForGuess.innerText = "Too high"
        scoreValue--
    }
    if(scoreValue >= 0){

        scoreText.innerText = scoreValue
    }else{
        messageForGuess.innerText = "Game Over"
        document.body.style.backgroundColor = "red"
    }
})
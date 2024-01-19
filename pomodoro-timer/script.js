const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

// Initialize timer variables
let interval;
let timeLeft = 1500;

// Function to update the timer display
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

// Function to start the timer
function startTimer() {
  // Check if the timer is not already running
  if (!interval) {
    interval = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft === 0) {
        clearInterval(interval);
        alert("Time's up!");
        timeLeft = 1500;
        updateTimer();
      }
    }, 1000);
  }
}

// Function to stop the timer
function stopTimer() {
  clearInterval(interval);
  interval = null; // Reset the interval variable
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

// Event listeners for the buttons
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

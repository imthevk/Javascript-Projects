const startBtnEl = document.getElementById("start");
const stopBtnEl = document.getElementById("stop");
const resetBtnEl = document.getElementById("reset");
const reverseBtnEl = document.getElementById("reverse");
const timerEl = document.getElementById("timer");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTimer(elapsedTime);
  }, 1000);

  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
}
function formatTimer() {
  const second = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minute = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hour = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hour ? (hour > 9 ? hour : "0" + hour) : "00") +
    ":" +
    (minute ? (minute > 9 ? minute : "0" + minute) : "00") +
    ":" +
    (second ? (second > 9 ? second : "0" + second) : "00")
  );
}
function stopTimer() {
  clearInterval(timeInterval);
  stopBtnEl.disabled = true;
  startBtnEl.disabled = false;
}
function resetTimer() {
  clearInterval(timeInterval);
  elapsedTime = 0;
  timerEl.textContent = "00:00:00";
  startBtnEl.disabled = false;
  stopBtnEl.disabled = false;
}

startBtnEl.addEventListener("click", startTimer);
stopBtnEl.addEventListener("click", stopTimer);
resetBtnEl.addEventListener("click", resetTimer);

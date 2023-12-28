// Selecting the HTML elements with the classes ".hour", ".minute", and ".second"
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Function to rotate clock hands based on degrees
function rotateArrows(handType, handDeg) {
  // Applying a CSS transform property to rotate the clock hand to the specified degrees
  handType.style.transform = `rotate(${handDeg}deg)`;
}

// Function to set the clock hands' positions based on the current time
function setClockTime() {
  // Creating a new Date object to get the current time
  const now = new Date();

  // Extracting seconds, minutes, and hours from the current time
  const getSeconds = now.getSeconds();
  const getMinutes = now.getMinutes();
  const getHours = now.getHours();

  // Calculating degrees for each clock hand based on the current time
  const hoursDegree = (getHours / 12) * 360;
  const minutesDegree = (getMinutes / 60) * 360;
  const secondsDegree = (getSeconds / 60) * 360;

  // Rotating each clock hand to its respective degree
  rotateArrows(hour, hoursDegree);
  rotateArrows(minute, minutesDegree);
  rotateArrows(second, secondsDegree);
}

// Setting an interval to update the clock hands every second
setInterval(setClockTime, 1000);

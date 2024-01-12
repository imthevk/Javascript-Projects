const container = document.getElementById("container");

// Array of colors for the squares
const colors = ["#ffd803", "#d9376e", "#004643", "#3da9fc", "#7f5af0"];

// Number of squares to generate
const SQUARES = 99;

// Loop to create and append squares to the container
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  // Add event listeners for mouseover and mouseout events
  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

// Function to set color and box shadow on mouseover
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// Function to remove color and box shadow on mouseout
function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

// Function to get a random color from the colors array
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Get reference to HTML elements
const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

// Initial text and animation variables
const text = "I ♥️ Javascript!";
let index = 1;
let speed = 300 / speedEl.value;

// Event listener for 'speed' input changes
speedEl.addEventListener("input", (e) => {
  // Update the speed variable based on the new input value
  speed = 300 / e.target.value;
});

// Call the writeText function to initiate the typing animation
writeText();
function writeText() {
  // Set the inner text of the 'text' element to a substring of the original text
  textEl.innerText = text.slice(0, index);
  // Increment the index for the next substring

  // Increment the index for the next substring
  index++;

  // If the index exceeds the length of the text, reset it to 1 (prevent infinite loop)
  if (index > text.length) {
    index = 1;
  }

  // Schedule the next call to writeText after a certain delay (controlled by 'speed')
  setTimeout(writeText, speed);
}

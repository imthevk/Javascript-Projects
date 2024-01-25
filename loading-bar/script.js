// Get reference
const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

// Initialize the index variable
let index = 0;

// Call the initial update function
updateNum();

// Function to update the counter and loading bar
function updateNum() {
  // Update the text content of the counter element
  counterEl.innerText = index + "%";

  // Update the width of the loading bar
  barEl.style.width = index + "%";

  // Increment the index
  index++;

  // Check if the index is less than 101 to continue the animation
  if (index < 101) {
    // Set a timeout to call the updateNum function after a delay
    setTimeout(updateNum, 20);
  }
}

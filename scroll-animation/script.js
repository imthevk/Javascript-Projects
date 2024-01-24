// Selecting all elements with the class 'box'
const boxes = document.querySelectorAll(".box");

// Adding a scroll event listener to the window
window.addEventListener("scroll", checkBoxes);

// Initially checking the boxes when the page loads
checkBoxes();

// Function to check whether the boxes are in the viewport
function checkBoxes() {
  // Setting a trigger point for when to add the 'show' class
  const triggerBottom = (window.innerHeight / 5) * 4;

  // Iterating over each box element
  boxes.forEach((box) => {
    // Getting the top position of the box relative to the viewport
    const boxTop = box.getBoundingClientRect().top;

    // Checking if the top of the box is above the trigger point
    if (boxTop < triggerBottom) {
      // Adding the 'show' class if the box is in the viewport
      box.classList.add("show");
    } else {
      // Removing the 'show' class if the box is out of the viewport
      box.classList.remove("show");
    }
  });
}

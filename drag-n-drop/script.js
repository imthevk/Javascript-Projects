// Get reference to the draggable element and empty drop zones
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Add drag start and drag end event listeners to the draggable element
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Loop through each empty drop zone and add drag-related event listeners
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Function triggered when drag starts
function dragStart() {
  // Add 'hold' class to the draggable element
  this.className += " hold";
  // Set a timeout to make the draggable element 'invisible' after 0 milliseconds
  setTimeout(() => (this.className = "invisible"), 0);
}

// Function triggered when drag ends
function dragEnd() {
  // Reset the class name of the draggable element to 'fill'
  this.className = "fill";
}

// Function triggered when dragged item is over a drop zone
function dragOver(e) {
  // Prevent default behavior to enable dropping
  e.preventDefault();
}

// Function triggered when dragged item enters a drop zone
function dragEnter(e) {
  // Prevent default behavior to enable dropping
  e.preventDefault();
  // Add 'hovered' class to the drop zone
  this.className += " hovered";
}

// Function triggered when dragged item leaves a drop zone
function dragLeave() {
  // Reset the class name of the drop zone to 'empty'
  this.className = "empty";
}

// Function triggered when dragged item is dropped onto a drop zone
function dragDrop() {
  // Reset the class name of the drop zone to 'empty'
  this.className = "empty";
  // Append the draggable element to the drop zone
  this.append(fill);
}

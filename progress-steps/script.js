// Selecting DOM elements
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// Initial active step
let activeStep = 1;

next.addEventListener("click", () => {
  activeStep++;
  if (activeStep > circles.length) {
    activeStep = circles.length;
  }
  updateSteps();

  console.log(activeStep);
});

prev.addEventListener("click", () => {
  activeStep--;
  if (activeStep < 1) {
    activeStep = 1;
  }
  updateSteps();
  console.log(activeStep);
});

function updateSteps() {
  circles.forEach((circle, i) => {
    if (i < activeStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  if (activeStep === 1) {
    prev.disabled = true;
    next.disabled = false;
  }
  if (activeStep === 4) {
    next.disabled = true;
    prev.disabled = false;
  }
}

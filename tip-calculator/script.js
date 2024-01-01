// Function to update the UI based on user input
function update() {
  // Retrieve values from the input fields
  let bill = Number(document.getElementById("yourBill").value);
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;

  // Calculate tip value, tip per person, and new bill per person
  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;

  // Update the UI elements with calculated values
  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  document.getElementById("totalWithTip").innerHTML = formatMoney(
    bill + tipValue
  );

  document.getElementById("splitValue").innerHTML = formatSplit(split);
  document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
  document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
}

// Function to format money values to two decimal places
function formatMoney(value) {
  // Ensure that the value has at most two decimal places
  value = Math.ceil(value * 100) / 100;
  // Format the value to exactly two decimal places
  value = value.toFixed(2);
  // Add the dollar sign and return the formatted value
  return "$ " + value;
}

// Function to format the number of people in the split
function formatSplit(value) {
  // Check if the value is "1" and return a singular label if true, otherwise use "people"
  if (value === "1") return value + " person";
  return value + " people";
}

// Event listener for input changes on the container element
const container = document.getElementById("container");
container.addEventListener("input", update);

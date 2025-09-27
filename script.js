// Get the count display element
const countDisplay = document.getElementById("count"); // const because we don't reassign this variable

// Get the Enter button
const increaseButton = document.getElementById("increase"); // const because we don't reassign this variable

// Get the Exit button. We use const because we do not reassign this variable.
const decreaseButton = document.getElementById("decrease");

// Use let for count because its value will change
let count = 0;

// Add a click event listener to the Enter button
increaseButton.addEventListener("click", function() {
  count++; // Increase the count by 1
  countDisplay.textContent = count; // Update the display
});

// Add a click event listener to the Exit button
decreaseButton.addEventListener("click", function() {
  if (count > 0) { // Only decrease if count is above 0
    count--; // Decrease the count by 1
  }
  countDisplay.textContent = count; // Update the display
});

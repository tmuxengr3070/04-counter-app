// Get the count display element
const countDisplay = document.getElementById("count"); // const because we don't reassign this variable

// Get the Enter button
const increaseButton = document.getElementById("increase"); // const because we don't reassign this variable

// Use let for count because its value will change
let count = 0;

// Add a click event listener to the Enter button
increaseButton.addEventListener("click", function() {
  count++; // Increase the count by 1
  countDisplay.textContent = count; // Update the display
});

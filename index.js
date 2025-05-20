// Prompt the user to enter froyo flavors, separated by commas
let flavorInput = prompt("Type your Froyo flavors, separated by commas");

// Function to count the frequency of each flavor in the array
function countFlavorFrequencies(flavorList) {
  // Create an empty object to store flavor counts
  let flavorFrequencies = {};

  // Loop through each flavor and count occurrences
  for (let flavor of flavorList) {
    flavorFrequencies[flavor] = (flavorFrequencies[flavor] || 0) + 1;
  }

  // Return the object with flavor counts
  return flavorFrequencies;
}

// Check if the user provided input
if (flavorInput) {
  // Split the input string into an array and trim extra spaces
  let flavorsArray = flavorInput.split(",").map((flavor) => flavor.trim());

  // Get the frequency of each flavor using the function
  let flavorCounts = countFlavorFrequencies(flavorsArray);

  // Log the flavor counts to the console
  console.log("Flavor frequencies:", flavorCounts);
} else {
  console.log("No flavors entered!");
}

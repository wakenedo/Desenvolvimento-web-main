function calculateIdealWeight() {
  // Get input values
  let selectedSex = document.querySelector('input[name="sex"]:checked').value;
  let heightInput = parseFloat(document.getElementById('_height').value); // Convert height to meters
  if (isNaN(heightInput)) {
    heightInput = 0; // Set height to 0 if it's not a valid number
  }

  console.log(selectedSex, heightInput)
  // Check if sex and height are entered
  if (selectedSex !== undefined && heightInput !== 0) {
    let sex = selectedSex.toLowerCase();

    // Calculate ideal weight
    let idealWeight;
    if (sex === 'male') {
      idealWeight = (0.5 * heightInput) - 11.5;
    } else if (sex === 'female') {
      idealWeight = (0.45 * heightInput) - 9.25;
    } else {
      idealWeight = NaN;
    }

    // Display ideal weight
    let idealWeightElement = document.getElementById('idealWeight');
    if (!isNaN(idealWeight)) {
      idealWeightElement.textContent = `Ideal Weight: ${idealWeight.toFixed(2)} kg`;
    } else {
      idealWeightElement.textContent = 'Please select a valid sex.';
    }
  } else {
    // Display error message if inputs are missing
    let idealWeightElement = document.getElementById('idealWeight');
    idealWeightElement.textContent = 'Please select sex and enter height.';
  }
}

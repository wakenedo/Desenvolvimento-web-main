function calculateIdealWeight() {
  // Get input values
  let sex = document.getElementById('sex').value;
  let height = parseFloat(document.getElementById('height').value);

  // Calculate ideal weight
  let idealWeight;
  if (sex === 'male') {
    idealWeight = (72.7 * height / 100) - 58;
  } else if (sex === 'female') {
    idealWeight = (62.1 * height / 100) - 44.7;
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
}

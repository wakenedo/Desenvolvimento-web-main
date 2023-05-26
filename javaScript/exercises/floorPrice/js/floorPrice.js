function calculateCost() {
  // Get input values
  let width = parseFloat(document.getElementById('width').value);
  let height = parseFloat(document.getElementById('height').value);

  // Calculate cost
  let area = width * height;
  let pricePerSquareMeter = 36.00;
  let cost = area * pricePerSquareMeter;

  // Display cost
  let costElement = document.getElementById('cost');
  costElement.textContent = `Cost: $${cost.toFixed(2)}`;
}

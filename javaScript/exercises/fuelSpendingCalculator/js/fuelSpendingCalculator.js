function calculateSpending() {
  // Get input values
  let kilometers = parseFloat(document.getElementById('kilometers').value);
  let fuelValue = parseFloat(document.getElementById('fuelValue').value);

  // Calculate spending
  let fuelConsumption = kilometers / 8;
  let spending = fuelConsumption * fuelValue;

  // Display spending
  let spendingElement = document.getElementById('spending');
  spendingElement.textContent = `Spending: $${spending.toFixed(2)}`;
}

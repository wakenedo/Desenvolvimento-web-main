function calculateSales() {
  // Get input values
  let product1Name = document.getElementById('product1Name').value;
  let product1Value = parseFloat(document.getElementById('product1Value').value);
  let product1Quantity = parseInt(document.getElementById('product1Quantity').value);

  let product2Name = document.getElementById('product2Name').value;
  let product2Value = parseFloat(document.getElementById('product2Value').value);
  let product2Quantity = parseInt(document.getElementById('product2Quantity').value);

  let product3Name = document.getElementById('product3Name').value;
  let product3Value = parseFloat(document.getElementById('product3Value').value);
  let product3Quantity = parseInt(document.getElementById('product3Quantity').value);

  // Calculate sales
  let sales1 = product1Value * product1Quantity;
  let sales2 = product2Value * product2Quantity;
  let sales3 = product3Value * product3Quantity;

  let totalSales = sales1 + sales2 + sales3;

  // Display total sales
  let totalSalesElement = document.getElementById('totalSales');
  totalSalesElement.textContent = `Total Sales: $${totalSales.toFixed(2)}`;
}

let values = [];

function createInputFields() {
  let numValues = document.getElementById('numValues').value;
  let inputFieldsDiv = document.getElementById('inputFields');
  inputFieldsDiv.innerHTML = '';

  for (let i = 1; i <= numValues; i++) {
    let label = document.createElement('label');
    label.textContent = `Value ${i}: `;
    let input = document.createElement('input');
    input.type = 'number';
    input.id = `value${i}`;
    inputFieldsDiv.appendChild(label);
    inputFieldsDiv.appendChild(input);
    inputFieldsDiv.appendChild(document.createElement('br'));
  }
}

function showValues() {
  let resultElement = document.getElementById('result');
  resultElement.textContent = 'Inserted Values: ' + values.join(', ');
}

function showLargestAndSmallest() {
  let resultElement = document.getElementById('result');
  let largest = Math.max(...values);
  let smallest = Math.min(...values);
  resultElement.textContent = `Largest Value: ${largest}, Smallest Value: ${smallest}`;
}

document.addEventListener('change', function (e) {
  if (e.target && e.target.matches('input[type="number"]')) {
    let index = parseInt(e.target.id.replace('value', ''));
    values[index - 1] = parseFloat(e.target.value);
  }
});

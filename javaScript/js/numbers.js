let outputDiv = document.getElementById('output');

function displayNumbers() {
  let numberInput = document.getElementById('numberInput');
  let number = Number(numberInput.value);
  outputDiv.innerHTML = '';

  for (let i = 1; i <= number; i++) {
    let numberElement = document.createElement('p');
    numberElement.textContent = i;
    outputDiv.appendChild(numberElement);

    if (i !== number) {
      let separatorElement = document.createElement('span');
      separatorElement.textContent = '-';
      outputDiv.appendChild(separatorElement);
    }
  }
}

function clearResults() {
  outputDiv.innerHTML = '';
}
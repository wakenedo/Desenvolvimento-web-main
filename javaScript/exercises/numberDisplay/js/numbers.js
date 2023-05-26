let outputDiv = document.getElementById('output');
let sumElement = document.getElementById('sum');
let numbersArray = [];

function displayNumbers() {
  let numberInput = document.getElementById('numberInput');
  let number = Number(numberInput.value);
  outputDiv.innerHTML = '';
  numbersArray = [];

  let sum = 0;

  for (let i = 1; i <= number; i++) {
    let numberElement = document.createElement('p');
    numberElement.textContent = i;
    outputDiv.appendChild(numberElement);
    numbersArray.push(i);
    sum += i;

    if (i !== number) {
      let separatorElement = document.createElement('span');
      separatorElement.textContent = '-';
      outputDiv.appendChild(separatorElement);
    }
  }

  sumElement.textContent = 'Sum: ' + sum;
}

function clearResults() {
  outputDiv.innerHTML = '';
  sumElement.textContent = '';
  numbersArray = [];
}

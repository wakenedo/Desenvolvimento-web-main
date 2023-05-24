function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function convertTemperature() {
  let temperatureInput = document.getElementById('temperatureInput');
  let temperature = Number(temperatureInput.value);
  let resultDiv = document.getElementById('result');

  if (isNaN(temperature)) {
    resultDiv.textContent = 'Please enter a valid temperature.';
    return;
  }

  let celsius = convertToCelsius(temperature);
  let fahrenheit = convertToFahrenheit(temperature);

  resultDiv.innerHTML = temperature + "°F is equal to " + celsius + "°C.<br>";
  resultDiv.innerHTML += temperature + "°C is equal to " + fahrenheit + "°F.";
}
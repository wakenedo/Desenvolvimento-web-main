let entrada = Number(prompt('Enter a number to start the Fibonacci sequence:'));
let current = 0;
let value1 = 1;
let value2 = 0;

for (let count = 1; count <= entrada; count++) {
  current = value1 + value2;
  document.write(`Count: ${current}<br>`);
  if (count === 1)
    continue;
  value2 = value1;
  value1 = current;
}
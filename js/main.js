const optionOne = document.getElementById("opt1");
const optionTwo = document.getElementById("opt2");
const optionThree = document.getElementById("opt3");

const input = document.getElementById('input');
const output = document.getElementById('output');
let inputValue = document.getElementById("dropdown")

inputValue.addEventListener("click", () => {
  input.textContent = inputValue.value;
})

const tenSale = document.getElementById("10sale");
const twentySale = document.getElementById("20sale");
const thirtySale = document.getElementById("30sale");
const fourtySale = document.getElementById("40sale");
const fiftySale = document.getElementById("50sale");
const sixtySale = document.getElementById("60sale");
const seventySale = document.getElementById("70sale");

tenSale.addEventListener('click', (result, outputResult) => {
  result = input.textContent * 0.10;
  output.textContent = (input.textContent - result);
  outputResult = Math.round(output.textContent * 100)/100;
  output.textContent = outputResult;
});

twentySale.addEventListener('click', (result, outputResult) => {
  result = input.textContent * 0.20;
  output.textContent = (input.textContent - result);
  outputResult = Math.round(output.textContent * 100)/100;
  output.textContent = outputResult;
});

thirtySale.addEventListener('click', (result, outputResult) => {
  result = input.textContent * 0.30;
  output.textContent = (input.textContent - result);
  outputResult = Math.round(output.textContent * 100)/100;
  output.textContent = outputResult;
});

fourtySale.addEventListener('click', (result, outputResult) => {
  result = input.textContent * 0.40;
  output.textContent = (input.textContent - result);
  outputResult = Math.round(output.textContent * 100)/100;
  output.textContent = outputResult;
});

fiftySale.addEventListener('click', (result, outputResult) => {
  result = input.textContent * 0.50;
  output.textContent = (input.textContent - result);
  outputResult = Math.round(output.textContent * 100)/100;
  output.textContent = outputResult;
});

sixtySale.addEventListener('click', (result, outputResult) => {
  result = input.textContent * 0.60;
  output.textContent = (input.textContent - result);
  outputResult = Math.round(output.textContent * 100)/100;
  output.textContent = outputResult;
});

seventySale.addEventListener('click', (result, outputResult) => {
  result = input.textContent * 0.70;
  output.textContent = (input.textContent - result);
  outputResult = Math.round(output.textContent * 100)/100;
  output.textContent = outputResult;
});
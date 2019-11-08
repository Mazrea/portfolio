const calculator = {
  displayValue: '0'
};

function updateDisplay(displayValue) {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();

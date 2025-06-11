function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultElement = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Result: Please enter valid numbers";
    resultElement.style.color = "red";
    return;
  }

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultElement.textContent = "Result: Cannot divide by zero";
        resultElement.style.color = "red";
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = "Unknown operation";
  }

  resultElement.textContent = "Result: " + result;
  resultElement.style.color = "green";
}

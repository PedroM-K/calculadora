// Código só roda depois que a página carregou
window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById('display');

  window.appendNumber = function(num) {
    display.value += num;
  }

  window.appendOperator = function(op) {
    display.value += op;
  }

  window.appendFunction = function(func) {
    display.value += func;
  }

  window.clearDisplay = function() {
    display.value = '';
  }

  window.deleteLast = function() {
    display.value = display.value.slice(0, -1);
  }

  // Fatorial
  function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  window.factorial = factorial;

  window.calculate = function() {
    try {
      let expression = display.value;
      // converte ^ em Math.pow
      expression = expression.replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');
      display.value = eval(expression);
    } catch {
      display.value = 'Erro';
    }
  }
});

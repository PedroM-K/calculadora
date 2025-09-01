let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  display.value += op;
}

function appendFunction(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Fatorial
function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Calcular
function calculate() {
  try {
    let expression = display.value;

    // Substitui "^" por potência
    expression = expression.replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');

    display.value = eval(expression);
  } catch {
    display.value = 'Erro';
  }
}

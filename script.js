const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let current = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if(value === 'C') {
            current = '';
            display.value = '0';
        } else if(value === '=') {
            try {
                current = eval(current);
                display.value = current;
            } catch {
                display.value = 'Erro';
                current = '';
            }
        } else {
            current += value;
            display.value = current;
        }
    });
});

let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function chooseOperation(operation) {
    if (displayValue === '') return;
    if (currentOperation !== null) calculate();
    firstOperand = displayValue;
    currentOperation = operation;
    displayValue = '';
}

function calculate() {
    secondOperand = displayValue;
    let result;
    const first = parseFloat(firstOperand);
    const second = parseFloat(secondOperand);
    switch (currentOperation) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        default:
            return;
    }
    displayValue = result;
    currentOperation = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

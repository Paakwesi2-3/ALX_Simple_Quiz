// Functions for each operation
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error"; // prevent dividing by zero
    }
    return a / b;
}

// Get values from input boxes
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Add event listeners to buttons
document.getElementById('add').addEventListener('click', function() {
    const [n1, n2] = getNumbers();
    document.getElementById('calculation-result').textContent = add(n1, n2);
});

document.getElementById('subtract').addEventListener('click', function() {
    const [n1, n2] = getNumbers();
    document.getElementById('calculation-result').textContent = subtract(n1, n2);
});

document.getElementById('multiply').addEventListener('click', function() {
    const [n1, n2] = getNumbers();
    document.getElementById('calculation-result').textContent = multiply(n1, n2);
});

document.getElementById('divide').addEventListener('click', function() {
    const [n1, n2] = getNumbers();
    document.getElementById('calculation-result').textContent = divide(n1, n2);
});

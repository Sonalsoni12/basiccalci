let displayValue = "";

function appendInput(value) {
    if (displayValue === "0" && value !== ".") displayValue = "";
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1) || "0";
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = "Error";
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").textContent = displayValue;
}

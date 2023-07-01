const display = document.querySelector(".display");
const current = display.querySelector(".current");

const numbers = document.querySelectorAll(".number");

let isUsingDecimal = false;
let currentText = "";

numbers.forEach(num => {
    num.addEventListener('click', addNumber);
})

function addNumber(e) {
    let num = e.target.classList[0];
    if (num == "decimal") {
        if (isUsingDecimal) return;
        isUsingDecimal = true;
        num = ".";
    }
    currentText = currentText.concat(num);
    current.textContent = currentText;
}

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
    if (b == 0) return ":(";
    return a / b;
}

function operate(num1, operation, num2) {
    switch (operation) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "error";
    }
}
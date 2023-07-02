const display = document.querySelector(".display");
const current = display.querySelector(".current");

const clearButton = document.querySelector(".clear");

const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

let isUsingDecimal = false;
let isOperating = false;
let currentText = "";

numbers.forEach(num => {
    num.addEventListener('click', addNumber);
})
operations.forEach(op => {
    op.addEventListener('click', addOperation)
})
clearButton.addEventListener('click', clear);

function addNumber(e) {
    const num = e.target.textContent;
    if (currentText.length >= 11) return;
    if (num == ".") {
        if (isUsingDecimal) return;
        isUsingDecimal = true;
    }
    currentText = currentText.concat(num);
    setCurrentText(currentText);
}

function addOperation(e) {
    const op = e.target.textContent;
    if (op == "=" || isOperating) {
        const equationArray = currentText.split(" ");
        if (!equationArray[2]) return;
        let newNum = operate(equationArray[0], equationArray[1], equationArray[2]);
        if (newNum % 1 != 0) {
            let toShave = newNum.toString().indexOf(".");
            newNum = newNum.toFixed(10 - toShave);
            console.log(newNum.toString().slice(-1));
            let isZero = newNum.toString().slice(-1) == "0";
            while (isZero) {
                newNum = newNum.slice(0, -1);
                isZero = newNum.toString().slice(-1) == "0";
            }
        }
        setCurrentText("" + newNum);
        currentText = "" + newNum;
        return;
    }
    currentText = currentText.concat(" ", op, " ");
    isOperating = true;
    setCurrentText(currentText);
}

function clear() {
    currentText = "";
    setCurrentText("");
    isUsingDecimal = false;
    isOperating = false;
}

function setCurrentText(a) {
    current.textContent = a;
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
    clear();
    switch (operation) {
        case "+":
            return add(parseFloat(num1), parseFloat(num2));
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
        default:
            return "error";
    }
}
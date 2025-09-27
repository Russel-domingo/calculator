//create a 3 variable

let operator = "";
let currentInput = "";
let previousInput = "";

//write function for operation

function addition(a, b) {
    return a + b;
}


function multiplication(a, b) {
    return a * b;
}

function subtraction (a, b) {
    return a - b;
}

function division (a,b) {
    return a / b;
}

function operate (number1, number2, operand) {
    switch (operand) {
        case "+":
            addition(number1, number2);
            break;
        case "*":
            multiplication(number1, number2);
            break;
        case "-":
            subtraction(number1, number2);
            break;
        case "/":
            division(number1, number1);
            break;
    }
}
let a = 5;
let b = 6;

const sum = addition(a, b);
const product = multiplication(a, b);
const difference = subtraction(a, b);
const module = division(a, b);

console.log(sum);
console.log(product);
console.log(difference);
console.log(module);
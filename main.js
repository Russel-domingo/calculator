//create a 3 variable

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".button.number");
const clearBtn = document.querySelector(".button.clear");


let operator = "";
let currentInput = "";
let previousInput = "";

//displaying the clicked number

numbers.forEach(function (number) {
    number.addEventListener("click", function (e) {
        // console.log(e.target.textContent);
        currentInput += e.target.textContent;
        display.value = `${previousInput} ${currentInput}`;
    })
})

//clear display when btnCLear is clicked!
clearBtn.addEventListener("click", () => {
    previousInput = "";
    currentInput = "";
    display.value = 0;
})
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
    if(b === 0) {
        console.log("zero can't be divided")
    }
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

//create a 3 variable
document.addEventListener("DOMContentLoaded", () =>{
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".button.number");
const clearBtn = document.querySelector(".button.clear");
const operateBtn = document.querySelector(".button.calculate");
const operatorBtn = document.querySelectorAll(".button.operator");


operatorBtn.forEach(operatorButton => {
    operatorButton.addEventListener("click", (e) => {
        operator = e.target.textContent;
        previousInput = currentInput;
        currentInput = "";
        display.value = `${previousInput} ${operator} ${currentInput}`;
    });
});



let operator = "";
let currentInput = "";
let previousInput = "";

//displaying the clicked number
numbers.forEach(function (number) {
    number.addEventListener("click", function (e) {
        // console.log(e.target.textContent);
        currentInput += e.target.textContent;
        if (operator) {
            display.value = `${previousInput} ${operator} ${currentInput}`
        } else {
            display.value = `${previousInput} ${currentInput}`;
        }
    })
});

//when user click = then operate
operateBtn.addEventListener('click', () =>{
    if(previousInput && currentInput && operator) {
        const number1 = parseFloat(previousInput);
        const number2 = parseFloat(currentInput);

        const result = operate(number1, number2, operator);

        display.value = result;

        previousInput = "";
        currentInput = "";
        operator = " ";
    }
});

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
        console.log("zero can't be divided");
        return "error";
    }
    return a / b;
}

function operate (number1, number2, operator) {
    switch (operator) {
        case "+":
            return addition(number1, number2);
        case "*":
            return multiplication(number1, number2);
            
        case "-":
            return subtraction(number1, number2);
            break;
        case "/":
            return division(number1, number1);
          
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

});
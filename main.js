
//create a 3 variable
document.addEventListener("DOMContentLoaded", () =>{
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".button.number");
const clearBtn = document.querySelector(".button.clear");
const operateBtn = document.querySelector(".button.calculate");
const operatorBtn = document.querySelectorAll(".button.operator");


operatorBtn.forEach(operatorButton => {
    operatorButton.addEventListener("click", (e) => {
        expression += `${currentInput} ${e.target.textContent}`;
        if(previousInput && currentInput && operator) {
            const result = operate(parseFloat(previousInput), parseFloat(currentInput), operator);
            previousInput = result;
            currentInput = "";
            operator = e.target.textContent;
        } else {
            operator = e.target.textContent;
            previousInput = currentInput;
            currentInput = "";
        }
        display.value = expression;
    });
});



let operator = "";
let currentInput = "";
let previousInput = "";
let expression = "";

//displaying the clicked number
numbers.forEach(function (number) {
    number.addEventListener("click", function (e) {
        // console.log(e.target.textContent);
        currentInput += e.target.textContent;
        display.value = expression + " "  + currentInput;
    });
});

//when user click = then operate
operateBtn.addEventListener('click', () =>{
    if(previousInput && currentInput && operator) {
        expression += `${currentInput}`;
        const result = operate(parseFloat(previousInput) ,parseFloat(currentInput), operator);
        display.value = `${result}`
        expression = "";
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
            return division(number1, number2);
          
    }
}
// let a = 5;
// let b = 6;

// const sum = addition(a, b);
// const product = multiplication(a, b);
// const difference = subtraction(a, b);
// const module = division(a, b);

// console.log(sum);
// console.log(product);
// console.log(difference);
// console.log(module);

});
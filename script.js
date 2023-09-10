function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0){
        return NaN;
    }

    return a / b;
}




let firstNumber;
let operator;
let lastNumber;


function operate(firstNumber, lastNumber, operator){
    switch(operator){
        case '+' :
            return add(firstNumber, lastNumber);
        case '-' :
            return subtract(firstNumber, lastNumber);
        case '*' :
            return multiply(firstNumber, lastNumber);
        case '/' : 
            return divide(firstNumber, lastNumber);
    }
}


const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {

});
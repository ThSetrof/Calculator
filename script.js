function add(a, b){ return a + b};

function subtract(a, b){ return a - b};

function multiply(a, b){ return a * b};

function divide(a, b){ return a / b};


function operate(operator, a, b){
    switch(operator){
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '÷': return divide(a, b);
        default: return NaN;
    }
}

let leftOperand, rightOperand, operator;

const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');

const upperDisplay = document.querySelector('.upper');
const lowerDisplay = document.querySelector('.lower');

function clear(){
    leftOperand = 0;
    rightOperand = 0;
    operator = '';

    upperDisplay.textContent = '';
    lowerDisplay.textContent = '';

    console.log('screen cleared');
}


clearBtn.addEventListener('click', clear);

let leftOperand = '', rightOperand = '', operation = '';
let input = ''
let lastInput = '';

let result = 0
let prevOperation = '';

const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');

const upperDisplay = document.querySelector('.upper');
const lowerDisplay = document.querySelector('.lower');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');


function add(a, b){ return a + b};

function subtract(a, b){ return a - b};

function multiply(a, b){ return a * b};

function divide(a, b){ return a / b};


function operate(a, operator, b){
    
    switch(operator){
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '×': return multiply(a, b);
        case '÷': return divide(a, b);
        default: return NaN;
    }
}


function clearDisplay(){

    leftOperand = '';
    rightOperand = '';
    operation = '';
    prevOperation = '';
    input = '';

    updateUpperDisplay('0');
    lowerDisplay.textContent = '';
}

function deleteInput(){
    if(input.endsWith(' ')){
        input = input.slice(0, -3);
    }else if(input.endsWith('.') && input.charAt(input.length - 2) == '0'){
        input = input.slice(0, -2);
    }else{
        input = input.slice(0, -1);
    }

    updateLowerDisplay(input);
}


clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteInput);

function updateUpperDisplay(string){
    upperDisplay.textContent = string;
}


function updateLowerDisplay(string){
    lowerDisplay.textContent = string;
}

function getLowerDisplayContent(){
    return lowerDisplay.textContent;
}


function isDigit(value){
    return '0123456789.'.includes(value);
}

function isOperator(value){
    return '+-×÷'.includes(value);
}


function hasOperator(string){
    const regex = new RegExp(/[+\-×÷]/gm);
    return regex.test(string);
}


function getKeyWithValue(value){
    digits.forEach(d => {

        if(d.value == value){
            console.log('value');
        }
    })
}



addEventListener('keydown', ev => {
    let key = ev.key;

    key = (key == '/') ? '÷' : key;

    
    console.log(key);

    if(isDigit(key)){
        evaluateDigits(key);
        let dig = getKeyWithValue(key);
        console.log(dig);
    }


    if(isOperator(key) ){
        evaluateOperator(key);
    }

    if(key == 'Backspace'){
        deleteInput();
    }

    if(key == 'Enter'){
        evaluateOperator('=');
    }

});


digits.forEach(digit => {
    digit.addEventListener('click', ev => {
       evaluateDigits(ev.target.value);
    });

});


operators.forEach(operator =>{
    operator.addEventListener('click', ev =>{
        evaluateOperator(ev.target.value);
    });
});

function evaluateOperator(newInput){
    let current_input = newInput;

    if(input == ''){
        return;
    }

        if(input.endsWith(' ')){
            input = input.slice(0, -3);
        }else if(hasOperator(input)){
            let expressions = input.split(' ');
            leftOperand = Number.parseFloat(expressions[0]);
            operation = expressions[1];
            rightOperand = Number.parseFloat(expressions[2]);

            result = operate(leftOperand, operation, rightOperand).toFixed(2);
            result = (result % 1 != 0) ? result : Math.round(result);

            updateUpperDisplay(result);

            input = result;
        }

        input += ` ${current_input} `;

        updateLowerDisplay(input);
}

function evaluateDigits(newInput){
    let current_input = newInput;

    if(current_input == '.'){
        let expressions = input.split(' ');
        console.log(expressions);
        if(expressions.length == 1){
            if(!expressions[0].includes(current_input)){
                if(expressions[0].length == 0){
                    input += '0';
                }
                input += current_input;
                
            }

        }

        if(expressions.length == 3){
            if(!expressions[2].includes(current_input)){
                if(expressions[2].length == 0){
                    input += '0';
                }
                input += current_input;
            }
        }
       
    }else{
        input += current_input;
    }

    updateLowerDisplay(input);
}








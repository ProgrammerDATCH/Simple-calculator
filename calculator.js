let currentResult = 0;
let result =  document.getElementById('result');

function addNumber(number) {
    result.value += number;
}

function addOperator(operator) {
    result.value += operator;
}

function clearResult(){
    result.value = "";
}

function calculate() {
    currentResult = eval(result.value);
    result.value = currentResult;
}
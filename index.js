let firstNum = parseFloat(prompt('Enter a number'));
let operator = prompt('Enter an operator (+. -. /, *)');
let secondNum = parseFloat(prompt('Enter another number'));

let result = 0;
if (isNaN(firstNum) || isNaN(secondNum)) {
    alert('Wrong Input! Refresh and try again');
} else {
    if (operator == '+') {
        result = firstNum + secondNum;
    } else if (operator == '-') {
        result = firstNum - secondNum;
    } else if (operator == '/') {
        result = firstNum / secondNum;
    } else if (operator == '*') {
        result = firstNum * secondNum;
    }
    alert(firstNum + operator + secondNum + ' = ' + result);
}

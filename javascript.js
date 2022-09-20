//math functions
function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x - y);
}

function multiply(x, y) {
    return parseFloat(x * y);
}

function divide(x, y) {
    return parseFloat(x / y);
}

//operator functions calling back to math
function operate(x, operator, y) {
    if (operator == '+') {
        document.getElementById('display').value = parseFloat(add(x, y));
        num = parseFloat(add(x,y));
    }
    else if (operator == '-') {
        document.getElementById('display').value = subtract(x, y);
        num = subtract(x,y);
    }
    else if (operator == '/') {
        document.getElementById('display').value = divide(x, y);
        num = divide(x,y);
    }
    else if (operator == '*') {
        document.getElementById('display').value = multiply(x,y);
        num = multiply(x,y);
    }
    else {
        return "I'm too gay to do math that advanced.";
    }
}

//display button input function
function disp(val) {
    document.getElementById("display").value += val;
}

//operator buttons to clear screen after pressed
function plusSign() {
    document.getElementById('display').value = '+'
}
function minusSign() {
    document.getElementById('display').value = '-'
}

function timesSign() {
    document.getElementById('display').value = '*'
}

function divideSign() {
    document.getElementById('display').value = '/'
}

//variable to store display
let num = 0;
let y = 0;

function displayString(x) {
    toString(num = `${num}` + `${x}`);
}

function equals(x) {
    let myArray = x.split(", ");
    console.log(myArray);
    operate(myArray[0], myArray[1], myArray[2]);
}
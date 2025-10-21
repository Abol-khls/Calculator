zeroBtn.addEventListener("click", zero);
oneBtn.addEventListener("click", one);
twoBtn.addEventListener("click", two);
threeBtn.addEventListener("click", three);
fourBtn.addEventListener("click", four);
fiveBtn.addEventListener("click", five);
sixBtn.addEventListener("click", six);
sevenBtn.addEventListener("click", seven);
eightBtn.addEventListener("click", eight);
nineBtn.addEventListener("click", nine);

clearBtn.addEventListener("click", clear);
delBtn.addEventListener("click", del);
percentBtn.addEventListener("click", percent);
powerBtn.addEventListener("click", power);
mulBtn.addEventListener("click", mul);
divBtn.addEventListener("click", div);
minesBtn.addEventListener("click", mines);
dotBtn.addEventListener("click", dot);
equalsBtn.addEventListener("click", equal);
addBtn.addEventListener("click", add);

const allowedKeys = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "+", "-", "*", "/", "Backspace", "Enter", ".", "%"
];


userInput.addEventListener("keydown", function (e) {

    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
    }
});


function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(current, calcDescription);
}


let current = 0;

function add() {
    userInput.value += "+";
}
function mines() {
    userInput.value += "-";
}
function mul() {
    userInput.value += "*";
}
function div() {
    userInput.value += "/";
}
function power() {
    userInput.value += "**";
}
function percent() {
    userInput.value += "%";
}

function clear() {
    current = 0;
    userInput.value = "";
    outputResult(0, "Cleared");
}

function del() {
    userInput.value = userInput.value.slice(0, -1);
}



function equal() {
    const expression = userInput.value;

    try {
        const result = Function('"use strict";return (' + expression + ')')();

        current = result;
        createAndWriteOutput("", expression, "");

        userInput.value = result;

    } catch (error) {

        userInput.value = "Error";
    }
}

function dot() {
    if (!userInput.value.includes(".")) {
        userInput.value += ".";
    }
}

function zero() {
    userInput.value += "0";
}
function one() {
    userInput.value += "1";
}
function two() {
    userInput.value += "2";
}
function three() {
    userInput.value += "3";
}
function four() {
    userInput.value += "4";
}
function five() {
    userInput.value += "5";
}
function six() {
    userInput.value += "6";
}
function seven() {
    userInput.value += "7";
}
function eight() {
    userInput.value += "8";
}
function nine() {
    userInput.value += "9";
}







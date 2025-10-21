const userInput = document.getElementById("input-number")

const zeroBtn = document.getElementById("zero")
const oneBtn = document.getElementById("one")
const twoBtn = document.getElementById("two")
const threeBtn = document.getElementById("three")
const fourBtn = document.getElementById("four")
const fiveBtn = document.getElementById("five")
const sixBtn = document.getElementById("six")
const sevenBtn = document.getElementById("seven")
const eightBtn = document.getElementById("eight")
const nineBtn = document.getElementById("nine")

const clearBtn = document.getElementById("clear")
const delBtn = document.getElementById("del")
const percentBtn = document.getElementById("percent")
const powerBtn = document.getElementById("power")
const mulBtn = document.getElementById("mul")
const divBtn = document.getElementById("div")
const minesBtn = document.getElementById("mines")
const dotBtn = document.getElementById("dot")
const equalsBtn = document.getElementById("equals")
const addBtn = document.getElementById("add")

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
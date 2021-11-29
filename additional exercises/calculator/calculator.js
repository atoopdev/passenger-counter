let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

calcOutput = document.getElementById("sum-el");

function add(){
    console.log("add button clicked: num1 + num2 = ", num1 + num2);
    calcOutput.textContent = num1 + num2;
}

function subtract(){
    console.log("subtract button clicked: num1 - num2 = ", num1 - num2);
    calcOutput.textContent = num1 - num2;
}

function divide(){
    console.log("divide button clicked: num1 / num2 = ", num1 / num2);
    calcOutput.textContent = num1 / num2;
}

function multiply(){
    console.log("multiply button clicked: num1 * num2 = ", num1 * num2);
    calcOutput.textContent = num1 * num2;
}
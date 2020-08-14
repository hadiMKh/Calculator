let addedNumber = "";
let storedNumber = "";
let operator = ""

function addNumber(number) {
    addedNumber = addedNumber + number
    document.getElementById("texti").innerText = addedNumber
}

function operate(opt) {
    storedNumber = addedNumber;
    addedNumber = ""
    operator = opt
}

function clearData() {
    storedNumber = "";
    addedNumber = "";
    operator = "";
    document.getElementById("texti").innerText = ""
}

function calculate() {
    let finalResult = ""
    switch (operator) {
        case "+":
            finalResult = Number(storedNumber) + (Number(addedNumber))
            break
        case "-":
            finalResult = Number(storedNumber) - (Number(addedNumber))
            break
        case  "*":
            finalResult = Number(storedNumber) * (Number(addedNumber))
            break
        case "/":
            finalResult = Number(storedNumber) / (Number(addedNumber))
            break
    }
    clearData()
    addedNumber = finalResult
    document.getElementById("texti").innerText = finalResult
}
//Setting up the variables

let inputString: string = '';
let result: number = 0;
let value: string = "";
let inputNumber: string = "";
let sumString: string = "";

const output = document.querySelector('#display') as HTMLDivElement;

output.textContent = "0";

// Clear display & calculator

const clearDisplayBut = document.querySelector('#clearDisplay') as HTMLButtonElement;

clearDisplayBut.addEventListener('click', clearDisplay);

function clearDisplay() {
    console.log('clearDisplay');
    inputNumber = '';
    inputString = '';
    sumString = '';
    output.textContent = "0";
}

// Number input buttons

function inputNumberFunc(input: string) {
    inputNumber += Number(input)
    sumString += inputNumber;
    output.textContent = sumString;
    inputNumber = '';
    console.log("SumString New is: ", sumString);
}

(window as any).inputNumber = function (input: string) {
    inputNumberFunc(input);

}

// Operation input buttons

const divideBut = document.querySelector('#divide') as HTMLButtonElement;
/* divideBut.addEventListener('click', () => setOperation('/')); */
divideBut.addEventListener('click', () => setOperation('/'));

const timesBut = document.querySelector('#times') as HTMLButtonElement;
timesBut.addEventListener('click', () => setOperation('*'));

const minusBut = document.querySelector('#minus') as HTMLButtonElement;
minusBut.addEventListener('click', () => setOperation('-'));

const plusBut = document.querySelector('#plus') as HTMLButtonElement;
plusBut.addEventListener('click', () => setOperation('+'));

// Building the sum string

function setOperation(op: string) {
    sumString += op;
    output.textContent = sumString;
    console.log("SumString New is: ", sumString);
    inputNumber = '';
}

// Calulation Button

const calulateA = document.querySelector('#calc') as HTMLButtonElement;
calulateA.addEventListener('click', calculateResult);

//Calculate the result

function calculateResult() {
    let finalAnswer = eval(sumString);
    console.log("The result is: ", finalAnswer);
    output.textContent = finalAnswer;
}

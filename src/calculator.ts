
/**
 *  * The current input value as a string.
 */

let inputString: string = '';
let result: number = 0;
let value: string = "";
let inputNumber: string = "";
let calcTotal: string = "";
let sumString: string = "";

const output = document.querySelector('#display') as HTMLDivElement;

output.textContent = "0";



// Clear display

const clearDisplayBut = document.querySelector('#clearDisplay') as HTMLButtonElement;

clearDisplayBut.addEventListener('click', clearDisplay);

function clearDisplay() {
    console.log('clearDisplay');
}

// Number input buttons

function inputNumberFunc(input: string, calcTotal: string = "") {

    console.log(input);
    inputNumber += Number(input)
    console.log("The number is: ", inputNumber);
    output.textContent = inputNumber;

    sumString += inputNumber;
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

function setOperation(op: string) {
    console.log(op);
    console.log(inputNumber);
    sumString += op;
    console.log("SumString New is: ", sumString);
    inputNumber = '';


}

function clearCalc() {
    inputNumber = '';
    inputString = '';
    output.textContent = "0";
}

function calculateResult() {
    eval(calcTotal);
    console.log("The result is: ", calcTotal);
    return calcTotal;




    const calulateA = document.querySelector('#calc') as HTMLButtonElement;
    calulateA.addEventListener('click', calculateResult);
}





/**
 * The previous input value as a string.
 */

/**
 * The current operation symbol (+, -, *, /) or null if none.
 */

/**
 * Calculates the result of the current operation and updates the current input value.
 * If the previous or current input values are not valid numbers, or the operation is null, does nothing.
 */


/**
 * Appends a number to the current input value and updates the display.
 * @param num - The number to append.
 */


/**
 * Sets the current operation and moves the current input value to the previous input value.
 * If there is already a previous input value, calculates the result first.
 * @param op - The operation symbol to set.
 */


/**
 * Clears the current and previous input values and the operation and updates the display.
 */


/**
 * Updates the display element with the current input value.
 */


// Initialize the display with the current input value.


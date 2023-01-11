
/*
2. Calculator
Create a calculator app that can perform simple calculation- with ui!
*/

let previousVal = NaN;
let operatorVal = null;
let currentVal = NaN;
let equationVal = false;



function clearMemory()
{
    previousVal = NaN;
    operatorVal = null;
    currentVal = NaN;
    equationVal = false;
}

function calculate(a,operator,b)
{
    let returnVal = NaN;

    switch(operator)
    {
        case '+':
            returnVal = a + b;
            break;
        case '-':
            returnVal = a - b;
            break;
        case '/':
            if (b != 0)
                returnVal = a / b;
            break;
        case 'x':
            returnVal = a * b;
            break;
        default:
    }   

    return returnVal 
}

function updateDisplayValues(pVal, oVal, cVal)
{
    let returnString = "";

    // case of if we have have one number entered and a operand
    if (isNaN(pVal) && oVal != null)
    {
        // place the operand after the last value for display friendliness
        returnString += isNaN(cVal) ? " " : cVal;
        returnString += oVal == null ? " " : oVal;   
    }
    else
    {
        // Set the first value
        returnString += isNaN(pVal) ? " " : pVal;   
        // Set the operand
        returnString += oVal == null ? " " : oVal;   
        // set the second value
        returnString += isNaN(cVal) ? " " : cVal;
    }

    return returnString;

}

function onClick(value)
{
    console.log(value,"|", previousVal, operatorVal, currentVal, equationVal);

    // declare local variables
    const displayTag = document.getElementById('expression');
    let displayString = "";

    // check the incoming value
    if (value === 'c')
        clearMemory(); // clear the memory slots
    else if (value === '=')
        equationVal = true; // flag to be calculated
    else if (value === '+' ||
            value === '-' ||
            value === '/' ||
            value === 'x')
        operatorVal = String(value); // assign the arithmatic operation to be performed
    else
    {
        // ***********************************
        // THIS IS SIMPLE SINGLE DIGIT LOGIC 
        // THIS NEEDS TO BE REWORKED FOR 
        // MULTI-DIGIT NUMBERS 
        // ***********************************

        // shift the value over
        if ((isNaN(previousVal) && !isNaN(currentVal)) ||
                (!isNaN(previousVal) && !isNaN(currentVal)))
                    previousVal = currentVal; 

        // set the new value
        currentVal = value; 
    }

    if (equationVal === true)
        displayString = calculate(previousVal, operatorVal, currentVal);
    else
        displayString = updateDisplayValues(previousVal, operatorVal, currentVal);

    displayTag.innerText = displayString; 

}
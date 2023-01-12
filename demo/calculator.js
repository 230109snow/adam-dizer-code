
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

        // do we need to add a operand?
        // are we working with the last value?
        // or are we working with the first value

        
        // set the new value if we have an operand then we...
        if (operatorVal != null)
        {
            // ...are working with the second value

            // check to make sure that we have something in the first value but nothing in the second yet
            // then we need to make a shift
            if ((isNaN(previousVal) && !isNaN(currentVal)))
            {
                previousVal = currentVal; 
                currentVal = NaN;
            }
    
        }

        //check to see if we are in a cleared state
        if (isNaN(currentVal)) 
            currentVal = value; 
        else
            currentVal = Number(String(currentVal) + String(value));
    }

    // we need to calculate here
    if (equationVal === true)
    {
        let calVal = calculate(previousVal, operatorVal, currentVal);
        displayString = calVal;
        clearMemory();
        currentVal = calVal;
    }
    else // just update the display
        displayString = updateDisplayValues(previousVal, operatorVal, currentVal);

    
    console.log(value,"|", previousVal, operatorVal, currentVal, equationVal);
    displayTag.innerText = displayString; 

}

/*
2. Calculator
Create a calculator app that can perform simple calculation- with ui!
*/

let previousVal = null;
let operatorVal = null;
let currentVal = null;
let equationVal = null;

function onNumberClick(value)
{



    switch(value)
    {
        case '9':
            break;
        case '8':
            break;
        case '7':
            break;
        case '6':
            break;
        case '5':
            break;
        case '4':
            break;
        case '3':
            break;
        case '2':
            break;
        case '1':
            break;
        case '+':
            operatorVal = value;
            break;
        case '-':
            operatorVal = value;
            break;
        case '/':
            operatorVal = value;
            break;
        case 'x':
            operatorVal = value;
            break;
        case '=':

            break;
        default:

    }

    console.log(previousVal, operatorVal, currentVal, equationVal);
    

    document.getElementById('expression').innerText = equationVal;
}
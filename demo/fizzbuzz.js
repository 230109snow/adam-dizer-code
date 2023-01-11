/*  

1. Fizzbuzz

Write a fizzbuzz program that outputs the result on a webpage. 
Fizzbuzz is a small program that takes in a positive integer n and 
    prints the following for all positive integer less than or equal to n, in ascending order

If the number is divisible by 3, print "Fizz"
If the number is divisible by 5, print "Buzz"
If the number is divisible by 15, print "FizzBuzz"
If number is not divisible by 3, 5, or 15, then print the number itself 
    Given: 10 1 2 Fizz (3) 4 Buzz (5) Fizz (6) 7 8 Fizz (9) Buzz (10)

//you'll want to look up 
//javascript loops (either while, or for will work well here) 
//conditionals (if, elseif, else) or switch statements 
//modulo operator will also come handy here.

*/



function fizzbuzz()
{

    //
    // closure - private scope enclosing a funciton within another function
    //          - equivalent to setting a helper method private in OOP
    //
    function returnDivisibleFizzBuzzNum(num)
    {
        let returnStr = "";
    
        if (num % 15 === 0) // we have a fizzbuzz!
            returnStr += "FizzBuzz\n"
        else if (num % 5  === 0) // just a fizz
            returnStr += "Buzz\n"
        else if (num % 3  === 0) // just a buzz
            returnStr += "Fizz\n"
        else // regular number here
            returnStr += num + "\n"
    
        return returnStr;
    }
    //
    //


    // decalre the variables

    let inputVal = document.querySelector('#fizzbuzz-input').value; // value given
    let inputNum = Number(inputVal); // convert to num
    let outputNumArray = []; // values to ouput
    let outputString = "please enter a positive number";
    let outputStringFromArray = "please enter a positive number";

    const outputTable = document.querySelector('#fizzbuzz-output');
    


    console.log(inputNum);
    console.log(typeof inputNum);

    // lets check if we've been given trash
    if (outputTable && inputNum > 0 && inputNum)
    {
        outputString = "";

        console.log("Cycling through number");
        for (let i = 1; i < inputNum + 1; i++)
        {
            
            outputString += returnDivisibleFizzBuzzNum(i);
            outputNumArray.push(returnDivisibleFizzBuzzNum(i));

           
            const newRow = outputTable.insertRow();  // creates a new <tr> element
            const newCell1 = newRow.insertCell(); //creats a new <td> element inside the <tr>
            const newCell2 = newRow.insertCell(); //creats a new <td> element inside the <tr>
            newCell1.innerText = i;
            newCell2.innerText = returnDivisibleFizzBuzzNum(i);
            
        }

        console.log("Cycling through array");
        for (let o in outputNumArray)
        {
            console.log(o, outputNumArray[o]);
            outputStringFromArray +=  outputNumArray[o] + "\n";
        }


        // String concat Method

        // for (let i = 1; i < inputNum + 1; i++)
        // {

        //     if (i % 15 == 0) // we have a fizzbuzz!
        //         outputString += "FizzBuzz" + "\n"
        //     else if (i % 5  == 0) // just a fizz
        //         outputString += "Buzz" + "\n"
        //     else if (i % 3  == 0) // just a buzz
        //         outputString += "Fizz" + "\n"
        //     else // regular number here
        //         outputString += i + "\n"
        // }
    


        // outputNum Array Method

        // for (let i = 1; i < inputNum + 1; i++)
        // {
        //     if (i % 15 == 0) // we have a fizzbuzz!
        //         outputNums.push("FizzBuzz");
        //     else if (i % 5  == 0) // just a fizz
        //         outputNums.push("Buzz");
        //     else if (i % 3  == 0) // just a buzz
        //         outputNums.push("Fizz");
        //     else // regular number here
        //         outputNums.push(i);
        // }

        // console.log(outputNums);
        // for (let o in outputNums)
        // {
        //     console.log(o, outputNums[o]);
        //     outputString +=  outputNums[o] + "\n";
        // }


    }

    //document.getElementById('fizzbuzz-output').innerText = outputString;
}

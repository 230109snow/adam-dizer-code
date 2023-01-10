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
    // decalre the variables

    let inputVal = document.querySelector('#fizzbuzz-input').value; // value given
    let inputNum = Number(inputVal); // convert to num
    let outputNums = []; // values to ouput
    let outputString = "please enter a number";

    console.log(inputNum);
    console.log(typeof inputNum);

    // lets check if we've been given trash
    if (inputNum > 0)
    {
        outputString = "";

        // cycle through all the 
        for (let i = 1; i < inputNum + 1; i++)
        {

            if (i % 15 == 0) // we have a fizzbuzz!
            {
                outputNums.push("FizzBuzz");
                outputString += "FizzBuzz" + "\n"
            }
            else if (i % 5  == 0) // just a fizz
            {
                outputNums.push("Buzz");
                outputString += "Buzz" + "\n"
            }
            else if (i % 3  == 0) // just a buzz
            {
                outputNums.push("Fizz");
                outputString += "Fizz" + "\n"
            }
            else // regular number here
            {
                outputNums.push(i);
                outputString += i + "\n"
            }

        }
    }

    /*
    console.log(outputNums);
    for (let o in outputNums)
    {
        console.log(o, outputNums[o]);
        outputString +=  outputNums[o] + "\n";
    }
    */

    document.getElementById('fizzbuzz-output').innerText = outputString;
}

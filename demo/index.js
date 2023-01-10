console.log('Im in the index.js file')

let foo = 'bar'
const bar = ' foo'
let arr = [1,2,3,4]

var hello = 'hello'
var num = 1


foo = 3
foo = false

console.log(arr)


function greet()
{
    const z = 10;
    let name = 'auryn';
    console.log(hello + ' ' + name);

    if(true)
    {
        // this creates a block scope
        let x = 3;
        // max scope for vairables 
        var y = 6;
        console.log(x, y);
    }
    // becaue x i containe in the block scope above,
    // we not longer have reference to x at this point 
    //console.log(x);
    console.log(y);

    for (let i=0; i< arr.length; i++)
    {
        console.log(i);
    }

    //foo = 4;
}

greet()
//out of scope since this is not in the greet function
//console.log(y)
//console.log(z)

function increment()
{
    num++;
}

function arithmeticOperations()
{
    const a = 2, b = 5;
    const c =  a + b;
    const d = b - a;
    const e = b / a;
    const f = b % 2;
    const g = a * b;
    let h = 1;
    h++;
    console.log(h); // 2
    h += 5; // h = h + 5
    console.log (a,b,c,d,e);
}


function conditionalOperators()
{
    // = assignment operator
    // == evaluation operator

    if ('a' == 'b'){} // false because its not
    if ('a' == 'a' && 'b' == 'c'){} // false because b != c
    if ('a' == 'b' || 'a' === 'a'){} // true because any statement is true


    if (true==false){} // false
    if (true&&false){} // false
    if (false||true){} // true
    if (!false){} // true
    if (true===true){} // true strict type comparison
    if ("" || False || Undefined || Null || 0 || NaN || EmptyString){} // falsey


}

// javascrip object is a collection of key valie pair
// keys have to be unique
// the values 
let object = 
{
    key: 'value',
    key2 : 2,
    key3: [1,2,3,4,5],
    a: {b: 'valueof a/b'}
}

function fizzbuzz()
{
    let a = document.querySelector('#fizzbuzz-input').value;
    console.log(a);
    // you'll want to look up jacascript loops, conditions,  modulo
}

function calculator(value)
{
    //switch
}
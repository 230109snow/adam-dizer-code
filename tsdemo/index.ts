let foo : string = 'bar';

foo = 'hello world! changes';

let bar : number = 3;

let arr : number[] = [1,2,3];

//arr = [1,'2', {}]; // ts will try to stop this

function greet() : void
{
    console.log('hell world');
}

function add(a: number, b: number) : number
{
    return a + b;
}

const someElement : HTMLElement | null =  document.getElementById('some-table-id');

// type casting
const someTable : HTMLElement | null =  document.getElementById('some-table-id') as HTMLTableElement;
const someTable2 : HTMLTableElement | null =  document.getElementById('some-table-id') as HTMLTableElement;

someTable2.createTBody();

// any is when you're fed up with ts and just want to write weird js
let backToJs : any = '2';
backToJs = 3;
backToJs = [];

// unkown is type safe
let tbd : unknown;
tbd = 3;
tbd = '3';

// slightly different interface meaning
// type to enforce a certain object shape
interface exampleInterface 
{
    a : string,
    b : number
}

// need to identify properties of the constructor
const usingInterface : exampleInterface = 
{
    a : "foo",
    b : 3
}

function domOps(elem : HTMLElement)
{
    elem.id = 'some id';
    elem.innerHTML = '<div>some class</div>';
}

// doesn't like this because of parm is not of type HTMLElement
// domOps('string'); 


// duck typing
function usingCustomInterface(param : exampleInterface) : void
{console.log(param);}
usingCustomInterface(usingInterface);

const notExampleInterface : any =
    {a : 'hello',
    b: 3,
    c: [],
    d: {hello: 'world'}};

// even though the variable noExampleInterface is not of interface "ExampleInterface", I was able to pass it to the usingCusomInterface funciton because  the shape of an object satisified the required properties that msut exist in the exampleIntefreace
usingCustomInterface(notExampleInterface)

// can be typed as many different - union types
interface oneThatUsesDate
{
    created : Date | string | number
}


// any versus unknown
function fn1 (bar : any)
{ bar();}

function fn2(foo : unknown)
{ foo(); }


// is unknown and needs to be type cast
let z: unknown;
let y: any = z;
let x : number = z as number;
let v: string = z as string;

// can be anything!!
let w: any = 'string';
let t : string = w;
let i : number = w;

//fn1();
//fn2();
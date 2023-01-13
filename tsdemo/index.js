"use strict";
let foo = 'bar';
foo = 'hello world! changes';
let bar = 3;
let arr = [1, 2, 3];
//arr = [1,'2', {}]; // ts will try to stop this
function greet() {
    console.log('hell world');
}
function add(a, b) {
    return a + b;
}
const someElement = document.getElementById('some-table-id');
// type casting
const someTable = document.getElementById('some-table-id');
const someTable2 = document.getElementById('some-table-id');
someTable2.createTBody();
// any is when you're fed up with ts and just want to write weird js
let backToJs = '2';
backToJs = 3;
backToJs = [];
// unkown is type safe
let tbd;
tbd = 3;
tbd = '3';
// need to identify properties of the constructor
const usingInterface = {
    a: "foo",
    b: 3
};
function domOps(elem) {
    elem.id = 'some id';
    elem.innerHTML = '<div>some class</div>';
}
// doesn't like this because of parm is not of type HTMLElement
// domOps('string'); 
// duck typing
function usingCustomInterface(param) {
    console.log(param);
}
usingCustomInterface(usingInterface);
const notExampleInterface = { a: 'hello',
    b: 3,
    c: [],
    d: { hello: 'world' } };
// even though the variable noExampleInterface is not of interface "ExampleInterface", I was able to pass it to the usingCusomInterface funciton because  the shape of an object satisified the required properties that msut exist in the exampleIntefreace
usingCustomInterface(notExampleInterface);

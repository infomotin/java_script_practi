function printprop(a) {
    for (var i in a) {
        console.log(i + ": " + a[i]);
    }
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
 let dx = x2 - x1;
 let dy = y2 - y1;
 return Math.sqrt(dx*dx + dy*dy);
}
// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
 if (x <= 1) return 1;
 return x * factorial(x-1);
}

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function(x) { return x*x; };
// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };
// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) { return a-b; });
// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) {return x*x;}(10));


const sum = (x, y) => {
  return x + y;
};
const sum = (x, y) => x + y;
const polynomial = (x) => x * x + 2 * x + 3;
const constantFunc = () => 42;
const f = x => { return { value: x }; }; // Good: f() returns an object
const g = x => ({ value: x }); // Good: g() returns an object
const h = x => { value: x }; // Bad: h() returns nothing
const i = x => { v: x, w: x }; // Bad: Syntax Error
// Make a copy of an array with null elements removed.
let filtered = [1,null,2,3].filter(x => x !== null); // filtered == [1,2,3]
// Square some numbers:
let squares = [1, 2, 3, 4].map(x => x * x); // squares == [1,4,9,16]

function hypotenuse(a, b) {
 function square(x) { return x*x; }
 return Math.sqrt(square(a) + square(b));
}

printprops({x: 1});
let total = distance(0,0,2,1) + distance(2,1,3,5);
let probability = factorial(5) / factorial(13);

(f !== null && f !== undefined) ? f(x) : undefined

const strict = (function() { return !this; }());

let calculator = { // An object literal
 operand1: 1,
 operand2: 1,
 add() { // We're using method shorthand syntax for this function
 // Note the use of the this keyword to refer to the containing object.
 this.result = this.operand1 + this.operand2;
 }
};
calculator.add(); // A method invocation to compute 1+1.
calculator.result // => 2

o["m"](x,y); // Another way to write o.m(x,y).
a[0](z) // Also a method invocation (assuming a[0] is a function).

customer.surname.toUpperCase(); // Invoke method on customer.surname
f().m();

rect.setSize(width, height);
setRectSize(rect, width, height);



let o = { // An object o.
 m: function() { // Method m of the object.
 let self = this; // Save the "this" value in a variable.
 this === o // => true: "this" is the object o.
 f(); // Now call the helper function f().
 function f() { // A nested function f
 this === o // => false: "this" is global or undefined
 self === o // => true: self is the outer "this" value.
 }
 }
};
o.m(); // Invoke the method m on the object o.

const f = () => {
 this === o // true, since arrow functions inherit this
};


const f = (function() {
 this === o // true, since we bound this function to the outer this
}).bind(this);
// get propertice Name 
function getPropertyName(obj, prop) {
    if (obj === undefined || obj === null) prop = [];
    for (let key in obj) obj.push(key);
    return prop;
}
// getPropertyNames() can be invoked with one or two arguments:
let o = {x: 1}, p = {y: 2, z: 3}; // Two objects for testing
let a = getPropertyNames(o); // a == ["x"]; get o's properties in a new array
getPropertyNames(p, a); // a == ["x","y","z"]; add p's properties to it

function max(first = -Infinity, ...reset) {
    let maxValue = first;
    for(let i of reset) {
        if(i > maxValue) maxValue = i;
    }
    return maxValue;
}

// another way to find out max Number

function max(x) {
    let max = x[0];
    for(let i = 1; i < x.length; i++) {
        if(x[i] > max) max = x[i];
    }
    return max;
}

//max using -Infinity
function max(x) {
    let max = -Infinity;
    for(let i = 0; i < x.length; i++) {
        if(x[i] > max) max = x[i];
    }
    return max;
}

//using Math.max
function max(x) {
    let max = Math.max(...x);
    return max;
}


// function take a function and return a wrapped version of that function that only invokes the original function once.
function timed(f) {
    return function (...args) {
        // console log show function name 
        console.log(`${f.name}`);
        // create date time object 
        let startTime = Date.now();
        // call function
        try {
            return f(...args);
        }
        finally {
            // calculate time taken to execute function
            let endTime = Date.now();
            let timeTaken = endTime - startTime;
            console.log(`Time taken to execute ${f.name} is ${timeTaken} ms`);
        }
            
    }
        
}

// calculate time taken to execute function

function benchmark(n) {
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += n(i);
    }
    return sum;
        
}
// benchmark function
calculeteTimeTaken = timed(benchmark)(1000000);
console.log(calculeteTimeTaken);

//vactor add 
function add(x, y) {
    return [x[0] + y[0], x[1] + y[1]];
}
function vectorAdd([x1,y1], [x2,y2]) { // Unpack 2 arguments into 4 parameters
 return [x1 + x2, y1 + y2];
}

// a function that takes vactor {v1,v2} and multiply them
function vectorMultiply({ v1, v2 }, scalar) {
    return {
        v1: v1 * scalar,
        v2: v2 * scalar
    };
}
vectorMultiply({ x: 1, y: 2 }, 2) // => {x: 2, y: 4}

function vectorAdd({ x: x1, y: y1 }, { x: x2, y: y2 }) {
    return {
        x: x1 + x2,
        y: y1 + y2
    };
}
vectorAdd({x: 1, y: 2}, {x: 3, y: 4}) // => {x: 4, y: 6}
// Multiply the vector {x,y} or {x,y,z} by a scalar value
function vectorMultiply({x, y, z=0}, scalar) {
 return { x: x*scalar, y: y*scalar, z: z*scalar };
}
vectorMultiply({ x: 1, y: 2 }, 2) // => {x: 2, y: 4, z: 0}

function arraycopy({from, to=from, n=from.length, fromIndex=0, toIndex=0}) {
 let valuesToCopy = from.slice(fromIndex, fromIndex + n);
 to.splice(toIndex, 0, ...valuesToCopy);
 return to;
}

let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
arraycopy({ from: a, to: b, n: 3, fromIndex: 1, toIndex: 2 });
// b == [1, 6, 7, 2, 3, 4, 5, 8, 9, 10]


// This function expects an array argument. The first two elements of that
// array are unpacked into the x and y parameters. Any remaining elements
// are stored in the coords array. And any arguments after the first array
// are packed into the rest array.
function f([x, y, ...coords], ...rest) {
 return [x+y, ...rest, ...coords]; // Note: spread operator here
}
f([1, 2, 3, 4], 5, 6) // => [3, 5, 6, 3, 4]

// Multiply the vector {x,y} or {x,y,z} by a scalar value, retain other props
function vectorMultiply({x, y, z=0, ...props}, scalar) {
 return { x: x*scalar, y: y*scalar, z: z*scalar, ...props };
}
vectorMultiply({ x: 1, y: 2, w: -1 }, 2) // => {x: 2, y: 4, z: 0, w: -1}


// Return the sum of the elements an iterable object a.
// The elements of a must all be numbers.
function sum(a) {
 let total = 0;
 for(let element of a) { // Throws TypeError if a is not iterable
 if (typeof element !== "number") {
 throw new TypeError("sum(): elements must be numbers");
 }
 total += element;
 }
 return total;
}

function square (x) {
    return x * x;
}

let s = sq(4)
console.log(s);
 
let o = {square: function(x) { return x*x; }}; // An object literal
let y = o.square(16);

let a = [x => x*x, 20]; // An array literal
a[0](a[1]) // => 400

// We define some simple functions here
function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }


// Here's a function that takes one of the preceding functions
// as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
 return operator(operand1, operand2);
}

// We could invoke this function like this to compute the value (2+3) + (4*5):
let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
// For the sake of the example, we implement the simple functions again,
// this time within an object literal;
const operators = {
 add: (x,y) => x+y,
 subtract: (x,y) => x-y,
 multiply: (x,y) => x*y,
 divide: (x,y) => x/y,
 pow: Math.pow // This works for predefined functions too
};

// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands. Note
// the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
 if (typeof operators[operation] === "function") {
 return operators[operation](operand1, operand2);
 }
 else throw "unknown operator";
}
operate2("add", "hello", operate2("add", " ", "world")) // => "hello world"
operate2("pow", 10, 2) // => 100
// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
    return uniqueInteger.counter++; // Return and increment counter property
    }
uniqueInteger() // => 0
uniqueInteger() // => 1
// Compute factorials and cache results as properties of the function itself.
function factorial(n) {
 if (Number.isInteger(n) && n > 0) { // Positive integers only
 if (!(n in factorial)) { // If no cached result
 factorial[n] = n * factorial(n-1); // Compute and cache it
 }
 return factorial[n]; // Return the cached result
 } else {
 return NaN; // If input was bad
 }
}

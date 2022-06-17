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
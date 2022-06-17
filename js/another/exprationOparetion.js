//  Object and Array Initializers
[] // An empty array: no expressions inside brackets means no elements
[1 + 2, 3 + 4] // A 2-element array. First element is 3, second is 7

let sparseArray = [1, , , , 5];
let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p

let rectangle = {
  upperLeft: { x: 2, y: 2 },
  lowerRight: { x: 4, y: 5 },
};


// simplee function 
let afun = function add(a, b) {
    return a + b;
}

let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]]; // An example array that contains the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o
a[1] // => 4: element at index 1 of expression a
a[2]["1"] // => 6: element at index 1 of expression a[2]
a[0].x // => 1: property x of expression a[0]
expression?.identifier;
expression?.[expression];


let a = { b: null };
a.b?.c.d // => undefined

let a = { b: {} };
a.b?.c?.d // => undefined
let a; // Oops, we forgot to initialize this variable!
let index = 0;
try {
 a[index++]; // Throws TypeError
} catch(e) {
 index // => 1: increment occurs before TypeError is thrown
}
a?.[index++] // => undefined: because a is undefined
index // => 1: not incremented because ?.[] short-circuits
a[index++] // !TypeError: can't index undefined.
f(0) // f is the function expression; 0 is the argument expression.
Math.max(x,y,z) // Math.max is the function; x, y, and z are the arguments.
a.sort() // a.sort is the function; there are no arguments.
function square(x, log) {
  // The second argument is an optional function
  if (log) {
    // If the optional function is passed
    log(x); // Invoke it
  }
  return x * x; // Return the square of the argument
}
function square(x, log) {
  // The second argument is an optional function
  log?.(x); // Call the function if there is one
  return x * x; // Return the square of the argument
}

function* fibonacci() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
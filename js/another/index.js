console.log('Hello World');
let name = 'John';
let msg = 'Hello, ' + 'World';
let greeting = "WElcome to " + "JavaScript" + " " + name;
let s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.charAt(0));
console.log(s.charAt(s.length - 1));
console.log(s.indexOf('o'));
console.log(s.indexOf('o', 3));
console.log(s.substring(0, 3));
console.log(s.substring(3, s.length));
console.log(s.substring(3));
console.log(s.slice(0, 3));
console.log(s.slice(3));
console.log(s.slice(-3));
console.log(s.slice(3, -3));
console.log(s.slice(3, s.length));
console.log(s.slice(-3, -1));
console.log(s.slice(-3, s.length));
console.log(s.slice(3, s.length));
console.log(s.slice(-3, s.length));
console.log(s.normalize());
console.log(s.normalize().length);
console.log(s.normalize().toUpperCase());

data = {}; 
for (let i = 0, len = data.length; i < len; i++) console.log(data[i]);
for (let datum of data) console.log(datum);
for (let property in object) console.log(property);

let s = Symbol.for("Shared")
let p = Symbol.for("Sheard")

//check equalArray 
function equalArray(a, b) {
    if (a === b) {
        return true;
    }
    if(a.length != b.length) {
        return false;
    }   
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            return false;
        }
    }
}

let o = { x: 1, y: 2 }; // The object we'll loop over
for (const [name, value] of Object.entries(o)) {
  console.log(name, value); // Prints "x 1" and "y 2"
}
let [x,y] = [1]; // x == 1; y == undefined
[x,y] = [1,2,3]; // x == 1; y == 2
[, x, , y] = [1, 2, 3, 4]; // x == 2; y == 4
let [x, ...y] = [1, 2, 3, 4]; // y == [2,3,4]
let [a, [b, c]] = [1, [2, 2.5], 3]; // a == 1; b == 2; c == 2.5
let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]
let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA color
let { r, g, b } = transparent; // r == 0.0; g == 0.0; b == 0.0

const { sin, cos, tan } = Math;
console.log(sin(0));
console.log(cos(0));
console.log(tan(0));

const { sin: cosine, tan: tangent } = Math;  

let points = [{x: 1, y: 2}, {x: 3, y: 4}]; // An array of two point objects
let [{x: x1, y: y1}, {x: x2, y: y2}] = points; // destructured into 4 variables.
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true

let points = { p1: [1,2], p2: [3,4] }; // An object with 2 array props
let { p1: [x1, y1], p2: [x2, y2] } = points; // destructured into 4 vars
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true

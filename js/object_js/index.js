// An object is a composite value: it aggregates multiple values (primitive values or
// other objects) and allows you to store and retrieve those values by name. An object is
// an unordered collection of properties, each of which has a name and a value. Property
// names are usually strings (although, as we’ll see in §6.10.3, property names can also
// be Symbols), so we can say that objects map strings to values. This string-to-value
// mapping goes by various names—you are probably already familiar with the funda‐
// mental data structure under the name “hash,” “hashtable,” “dictionary,” or “associative
// array.” An object is more than a simple string-to-value map, however. In addition to
// maintaining its own set of properties, a JavaScript object also inherits the properties
// of another object, known as its “prototype.” The methods of an object are typically
// inherited properties, and this “prototypal inheritance” is a key feature of JavaScript.

let empty = {}
let point = { x: 1, y: 2 }
let p2 = { x: point.x, y: point.y }
let book = {
    'title': 'The Lord of the Rings',
    'author': 'J.R.R. Tolkien',
    'publisher': 'Allen & Unwin',
    'edition': '3rd'
    for: "All the world",
    author: {
        firstName: 'John',
        lastName: 'Smith'
    }

}

//using new keyword to create an object
let book2 = new Object();
book2.title = 'The Lord of the Rings';
book2.author = 'J.R.R. Tolkien';
book2.publisher = 'Allen & Unwin';
book2.edition = '3rd';
book2.for = "All the world";
book2.author = {
    firstName: 'John',
    lastName: 'Smith'
}

let o = new Object();
let a = new Array();
let r = new RegExp();
let d = new Date();
let n = new Number();
let b = new Boolean();
let s = new String();
let m = new Map();


// Object.create

let o1 = Object.create({ x: 1, y: 2 }); //o1 is inherits with x and y properties
o1.x + o1.y; //3
//create object object with null 
let o2 = Object.create(null);
//create object with properties and methods ?
let o3 = Object.create(Object.prototype)

// multidianation array 
let table = new Array(10);

for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10);
}

for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
        table[i][j] = i * j;
    }
}

let data = [1,2,3,4,5], sum = 0;
// Compute the sum of the elements of the array
data.forEach(value => { sum += value; }); // sum == 15
// Now increment each array element
data.forEach(function (v, i, a) { a[i] = v + 1; }); // data == [2,3,4,5,6]

let a = [1, 2, 3];
a.map(x => x * x) // => [1, 4, 9]: the function takes input x and returns x*x

let a = [5, 4, 3, 2, 1];
a.filter(x => x < 3) // => [2, 1]; values less than 3
a.filter((x, i) => i % 2 === 0) // => [5, 3, 1]; every other value
let dense = sparse.filter(() => true);
a = a.filter(x => x !== undefined && x !== null);
let a = [1,2,3,4,5];
a.findIndex(x => x === 3) // => 2; the value 3 appears at index 2
a.findIndex(x => x < 0) // => -1; no negative numbers in the array
a.find(x => x % 5 === 0) // => 5: this is a multiple of 5
a.find(x => x % 7 === 0) // => undefined: no multiples of 7 in the array

let a = [1,2,3,4,5];
a.every(x => x < 10) // => true: all values are < 10.
a.every(x => x % 2 === 0) // => false: not all values are even.

let a = [1,2,3,4,5];
a.some(x => x%2===0) // => true; a has some even numbers.
a.some(isNaN) // => false; a has no non-numbers.

let a = [1,2,3,4,5];
a.reduce((x,y) => x+y, 0) // => 15; the sum of the values
a.reduce((x,y) => x*y, 1) // => 120; the product of the values
a.reduce((x, y) => (x > y) ? x : y) // => 5; the largest of the values


// Compute 2^(3^4). Exponentiation has right-to-left precedence
let a = [2, 3, 4];
a.reduceRight((acc, val) => Math.pow(val, acc)) // => 2.4178516392292583e+24

[1, [2, 3]].flat() // => [1, 2, 3]
[1, [2, [3]]].flat() // => [1, 2, [3]]


let a = [1, [2, [3, [4]]]];
a.flat(1) // => [1, 2, [3, [4]]]
a.flat(2) // => [1, 2, 3, [4]]
a.flat(3) // => [1, 2, 3, 4]
a.flat(4) // => [1, 2, 3, 4]


let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
words // => ["hello", "world", "the", "definitive", "guide"];

// Map non-negative numbers to their square roots
[-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x)) // => [1, 2**0.5]

let a = [1,2,3];
a.concat(4, 5) // => [1,2,3,4,5]
a.concat([4,5],[6,7]) // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5,[6,7]]) // => [1,2,3,4,5,[6,7]]; but not nested arrays
a // => [1,2,3]; the original array is unmodified

let stack = []; // stack == []
stack.push(1,2); // stack == [1,2];
stack.pop(); // stack == [1]; returns 2
stack.push(3); // stack == [1,3]
stack.pop(); // stack == [1]; returns 3
stack.push([4,5]); // stack == [1,[4,5]]
stack.pop() // stack == [1]; returns [4,5]
stack.pop(); // stack == []; returns 1

a.push(...values); // a == [1,2,3,4,5,6,7]; values == [6,7]

let q = []; // q == []
q.push(1,2); // q == [1,2]
q.shift(); // q == [2]; returns 1
q.push(3) // q == [2, 3]
q.shift() // q == [3]; returns 2
q.shift() // q == []; returns 3


let a = []; // a == []
a.unshift(1) // a == [1]
a.unshift(2) // a == [2, 1]
a = []; // a == []
a.unshift(1, 2) // a == [1, 2]

let a = [1,2,3,4,5];
a.slice(0,3); // Returns [1,2,3]
a.slice(3); // Returns [4,5]
a.slice(1,-1); // Returns [2,3,4]
a.slice(-3, -2); // Returns [3]
let a = [1,2,3,4,5,6,7,8];
a.splice(4) // => [5,6,7,8]; a is now [1,2,3,4]
a.splice(1,2) // => [2,3]; a is now [1,4]
a.splice(1, 1) // => [4]; a is now [1]

let a = [1,2,3,4,5];
a.splice(2,0,"a","b") // => []; a is now [1,2,"a","b",3,4,5]
a.splice(2, 2, [1, 2], 3) // => ["a","b"]; a is now [1,2,[1,2],3,3,4,5]
let a = new Array(5); // Start with no elements and length 5
a.fill(0) // => [0,0,0,0,0]; fill the array with zeros
a.fill(9, 1) // => [0,9,9,9,9]; fill with 9 starting at index 1
a.fill(8, 2, -1) // => [0,9,8,8,9]; fill with 8 at indexes 2, 3
let a = [1,2,3,4,5];
a.copyWithin(1) // => [1,1,2,3,4]: copy array elements up one
a.copyWithin(2, 3, 5) // => [1,1,3,4,4]: copy last 2 elements to index 2
a.copyWithin(0, -2) // => [4,4,3,4,4]: negative offsets work, too
let a = [0,1,2,1,0];
a.indexOf(1) // => 1: a[1] is 1
a.lastIndexOf(1) // => 3: a[3] is 1
a.indexOf(3) // => -1: no element has value 3

// Find all occurrences of a value x in an array a and return an array
// of matching indexes
function findall(a, x) {
 let results = [], // The array of indexes we'll return
 len = a.length, // The length of the array to be searched
        pos = 0; // The position to search from
     while(pos < len) { // While more elements to search...
 pos = a.indexOf(x, pos); // Search
 if (pos === -1) break; // If nothing found, we're done.
 results.push(pos); // Otherwise, store index in array
 pos = pos + 1; // And start next search at next element
 }
 return results; // Return array of indexes
}

let a = [1,true,3,NaN];
a.includes(true) // => true
a.includes(2) // => false
a.includes(NaN) // => true
a.indexOf(NaN) // => -1; indexOf can't find NaN

let a = ["banana", "cherry", "apple"];
a.sort(); // a == ["apple", "banana", "cherry"]

let a = [33, 4, 1111, 222];
a.sort(); // a == [1111, 222, 33, 4]; alphabetical order
a.sort(function(a,b) { // Pass a comparator function
 return a-b; // Returns < 0, 0, or > 0, depending on order
}); // a == [4, 33, 222, 1111]; numerical order


a.sort((a, b) => b - a); // a == [1111, 222, 33, 4]; reverse numerical order
let a = ["ant", "Bug", "cat", "Dog"];
a.sort(); // a == ["Bug","Dog","ant","cat"]; case-sensitive sort
a.sort(function(s,t) {
 let a = s.toLowerCase();
 let b = t.toLowerCase();
 if (a < b) return -1;
 if (a > b) return 1;
 return 0;
}); // a == ["ant","Bug","cat","Dog"]; case-insensitive sort

let a = [1,2,3];
a.reverse(); // a == [3,2,1]

let a = [1, 2, 3];
a.join() // => "1,2,3"

a.join(" ") // => "1 2 3"
a.join("") // => "123"
let b = new Array(10); // An array of length 10 with no elements
b.join("-") // => "---------": a string of 9 hyphens
    
[1,2,3].toString() // => "1,2,3"
["a", "b", "c"].toString() // => "a,b,c"
[1, [2, "c"]].toString() // => "1,2,c"

Array.isArray([]) // => true
Array.isArray({}) // => false


let a = {}; // Start with a regular empty object
// Add properties to make it "array-like"
let i = 0;
while(i < 10) {
 a[i] = i * i;
 i++;
}
a.length = i;
// Now iterate through it as if it were a real array
let total = 0;
for(let j = 0; j < a.length; j++) {
 total += a[j];
}


// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType !== 3 test.
function isArrayLike(o) {
    if (o && // o is not null, undefined, etc.
        typeof o === "object" && // o is an object
        Number.isFinite(o.length) && // o.length is a finite number
        o.length >= 0 && // o.length is non-negative
        Number.isInteger(o.length) && // o.length is an integer
        o.length < 4294967295) { // o.length < 2^32 - 1
        return true; // Then o is array-like.
    } else {
        return false; // Otherwise it is not.
    }
}

let a = {"0": "a", "1": "b", "2": "c", length: 3}; // An array-like object
Array.prototype.join.call(a, "+") // => "a+b+c"
Array.prototype.map.call(a, x => x.toUpperCase()) // => ["A","B","C"]
Array.prototype.slice.call(a, 0) // => ["a","b","c"]: true array copy
Array.from(a)

let s = "test";
s.charAt(0) // => "t"
s[1] // => "e"

Array.prototype.join.call("JavaScript", " ") // => "J a v a S c r i p t"

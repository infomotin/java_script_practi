// The Set and Map classes for representing sets of values and mappings from one
// set of values to another set of values.
// • Array-like objects known as TypedArrays that represent arrays of binary data,
// along with a related class for extracting values from non-array binary data.
// • Regular expressions and the RegExp class, which define textual patterns and are
// useful for text processing. This section also covers regular expression syntax in
// detail.
// • The Date class for representing and manipulating dates and times.
// • The Error class and its various subcla

// The JSON object, whose methods support serialization and deserialization of
// JavaScript data structures composed of objects, arrays, strings, numbers, and
// booleans.
// • The Intl object and the classes it defines that can help you localize your JavaScript
// programs.
// • The Console object, whose methods output strings in ways that are particularly
// useful for debugging programs and logging the behavior of those programs.
// • The URL class, which simplifies the task of parsing and manipulating URLs. This
// section also covers global functions for encoding and decoding URLs and their
// component parts.
// • setTimeout() and related functions for specifying code to be executed after a
// specified interval of time has elapsed.

let t = new Set();

let s = new Set(); // Start empty
s.size // => 0
s.add(1); // Add a number
s.size // => 1; now the set has one member
s.add(1); // Add the same number again
s.size // => 1; the size does not change
s.add(true); // Add another value; note that it is fine to mix types
s.size // => 2
s.add([1,2,3]); // Add an array value
s.size // => 3; the array was added, not its elements
s.delete(1) // => true: successfully deleted element 1
s.size // => 2: the size is back down to 2
s.delete("test") // => false: "test" was not a member, deletion failed
s.delete(true) // => true: delete succeeded
s.delete([1,2,3]) // => false: the array in the set is different
s.size // => 1: there is still that one array in the set
s.clear(); // Remove everything from the set
s.size // => 0
let unique = new Set('abcdefghijklmnopqrstuvwxyz');


let oneDigitPrimes = new Set([2,3,5,7]);
oneDigitPrimes.has(2) // => true: 2 is a one-digit prime number
oneDigitPrimes.has(3) // => true: so is 3
oneDigitPrimes.has(4) // => false: 4 is not a prime
oneDigitPrimes.has("5") // => false: "5" is not even a number

let sum = 0;
for(let p of oneDigitPrimes) { // Loop through the one-digit primes
 sum += p; // and add them up
}
sum // => 17: 2 + 3 + 5 + 7

[...oneDigitPrimes] // => [2,3,5,7]: the set converted to an Array
Math.max(...oneDigitPrimes) // => 7: set elements passed as function arguments


let product = 1;
oneDigitPrimes.forEach(n => { product *= n; });
product // => 210: 2 * 3 * 5 * 7

let m = new Map(); // Create a new, empty map
let n = new Map([ // A new map initialized with string keys mapped to numbers
 ["one", 1],
 ["two", 2]
]);

let copy = new Map(n); // A new map with the same keys and values as map n
let o = { x: 1, y: 2}; // An object with two properties
let p = new Map(Object.entries(o)); // Same as new map([["x", 1], ["y", 2]])

let m = new Map(); // Start with an empty map
m.size // => 0: empty maps have no keys
m.set("one", 1); // Map the key "one" to the value 1
m.set("two", 2); // And the key "two" to the value 2.
m.size // => 2: the map now has two keys
m.get("two") // => 2: return the value associated with key "two"
m.get("three") // => undefined: this key is not in the set
m.set("one", true); // Change the value associated with an existing key
m.size // => 2: the size doesn't change
m.has("one") // => true: the map has a key "one"
m.has(true) // => false: the map does not have a key true
m.delete("one") // => true: the key existed and deletion succeeded
m.size // => 1
m.delete("three") // => false: failed to delete a nonexistent key
m.clear(); // Remove all keys and values from the map


let m = new Map().set("one", 1).set("two", 2).set("three", 3);
m.size // => 3
m.get("two") // => 2


let m = new Map(); // Start with an empty map.
m.set({}, 1); // Map one empty object to the number 1.
m.set({}, 2); // Map a different empty object to the number 2.
m.size // => 2: there are two keys in this map
m.get({}) // => undefined: but this empty object is not a key
m.set(m, undefined); // Map the map itself to the value undefined.
m.has(m) // => true: m is a key in itself
m.get(m) // => undefined: same value we'd get if m wasn't a key

let m = new Map([["x", 1], ["y", 2]]);
[...m] // => [["x", 1], ["y", 2]]
for(let [key, value] of m) {
 // On the first iteration, key will be "x" and value will be 1
 // On the second iteration, key will be "y" and value will be 2
}


[...m.keys()] // => ["x", "y"]: just the keys
[...m.values()] // => [1, 2]: just the values
[...m.entries()] // => [["x", 1], ["y", 2]]: same as [...m]


m.forEach((value, key) => { // note value, key NOT key, value
 // On the first invocation, value will be 1 and key will be "x"
 // On the second invocation, value will be 2 and key will be "y"
});

Int8Array() signed bytes
Uint8Array() unsigned bytes
Uint8ClampedArray() unsigned bytes without rollover
Int16Array() signed 16-bit short integers
Uint16Array() unsigned 16-bit short integers
Int32Array() signed 32-bit integers
Uint32Array() unsigned 32-bit integers
BigInt64Array() signed 64-bit BigInt values (ES2020)
BigUint64Array() unsigned 64-bit BigInt values (ES2020)
Float32Array() 32-bit oating-point value
Float64Array() 64 - bit oating - point value: a regular JavaScript number

let bytes = new Uint8Array(1024); // 1024 bytes
let matrix = new Float64Array(9); // A 3x3 matrix
let point = new Int16Array(3); // A point in 3D space
let rgba = new Uint8ClampedArray(4); // A 4-byte RGBA pixel value
let sudoku = new Int8Array(81); // A 9x9 sudoku board

let white = Uint8ClampedArray.of(255, 255, 255, 0); // RGBA opaque white


let asbytes = new Uint8Array(buffer); // Viewed as bytes
let asints = new Int32Array(buffer); // Viewed as 32-bit signed ints
let lastK = new Uint8Array(buffer, 1023*1024); // Last kilobyte as bytes
let ints2 = new Int32Array(buffer, 1024, 256); // 2nd kilobyte as 256 integers
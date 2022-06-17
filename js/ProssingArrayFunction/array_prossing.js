let data = [1, 1, 3, 5, 5]; // This is our array of numbers
// The mean is the sum of the elements divided by the number of elements
let total = 0;
for (let i = 0; i < data.length; i++) total += data[i];
let mean = total / data.length; // mean == 3; The mean of our data is 3
// To compute the standard deviation, we first sum the squares of
// the deviation of each element from the mean.
total = 0;
for (let i = 0; i < data.length; i++) {
  let deviation = data[i] - mean;
  total += deviation * deviation;
}
let stddev = Math.sqrt(total / (data.length - 1)); // stddev == 2

// First, define two simple functions
const sum = (x,y) => x+y;
const square = x => x*x;
// Then use those functions with Array methods to compute mean and stddev
let data = [1,1,3,5,5];
let mean = data.reduce(sum)/data.length; // mean == 3
let deviations = data.map(x => x-mean);
let stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));
stddev // => 2

const map = function (a, ...args) {
  return a.map(...args);
};
const reduce = function (a, ...args) {
  return a.reduce(...args);
};

const sum = (x,y) => x+y;
const square = x => x*x;
let data = [1,1,3,5,5];
let mean = reduce(data, sum)/data.length;
let deviations = map(data, x => x-mean);
let stddev = Math.sqrt(reduce(map(deviations, square), sum)/(data.length-1));
stddev // => 2

// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
 return function(...args) { // Return a new function
 let result = f.apply(this, args); // that calls f
 return !result; // and negates its result.
 };
}
const even = x => x % 2 === 0; // A function to determine if a number is even
const odd = not(even); // A new function that does the opposite
[1, 1, 3, 5, 5].every(odd) // => true: every element of the array is odd

// Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.
function mapper(f) {
 return a => map(a, f);
}
const increment = x => x+1;
const incrementAll = mapper(increment);
incrementAll([1, 2, 3]) // => [2,3,4]

// Return a new function that computes f(g(...)).
// The returned function h passes all of its arguments to g, then passes
// the return value of g to f, then returns the return value of f.
// Both f and g are invoked with the same this value as h was invoked with.
function compose(f, g) {
 return function(...args) {
 // We use call for f because we're passing a single value and
 // apply for g because we're passing an array of values.
 return f.call(this, g.apply(this, args));
 };
}
const sum = (x, y) => x + y;

const square = x => x*x;
compose(square, sum)(2,3) // => 25; the square of the sum
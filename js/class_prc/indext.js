// In JavaScript, a class is a set of objects that inherit properties from the same prototype
// object. The prototype object, therefore, is the central feature of a class. Chapter 6 cov‐
// ered the Object.create() function that returns a newly created object that inherits
// from a specified prototype object. If we define a prototype object and then use
// Object.create() to create objects that inherit from it, we have defined a JavaScript
// class. Usually, the instances of a class require further initialization, and it is common
// to define a function that creates and initializes the new object. Example 9-1 demon‐
// strates this: it defines a prototype object for a class that represents a range of values
// and also defines a factory function that creates and initializes a new instance of the
// class.


// This is a factory function that returns a new range object.
function range(from, to) {
 // Use Object.create() to create an object that inherits from the
 // prototype object defined below. The prototype object is stored as
 // a property of this function, and defines the shared methods (behavior)
 // for all range objects.
 let r = Object.create(range.methods);
 // Store the start and end points (state) of this new range object.
 // These are noninherited properties that are unique to this object.
 r.from = from;
 r.to = to;
 // Finally return the new object
 return r;
}
// This prototype object defines methods inherited by all range objects.
range.methods = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  // Return a string representation of the range
  toString() {
    return "(" + this.from + "..." + this.to + ")";
  },
};

// Here are example uses of a range object.
let r = range(1,3); // Create a range object
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
[...r] // => [1, 2, 3]; convert to an array via iterator
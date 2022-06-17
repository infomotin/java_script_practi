function range(from, to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

range.methods = {
    includes(x) {
        return this.from <= x && x <= this.to;
    },
    *[Symbol.iterator]() { 
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    toString() { 
        return "(" + this.from + "..." + this.to + ")";
    }
}

let r = range(1, 3);
console.log(r.includes(2));
console.log(r.toString());
[...r];


// Example 9-2: Defining a class with a constructor function
// This example defines a class with a constructor function. The constructor function
// is called when a new object is created. The constructor function is used to initialize
// the new object. The constructor function is called with the new object as its only argument.
// The constructor function is also used to define the prototype object of the class.
// The prototype object is used to define the shared methods (behavior) of all objects that
// inherit from the prototype object.
// The constructor function is defined as a property of the class. The prototype object is
// defined as a property of the constructor function.
// The constructor function is called with the new object as its only argument.
// The prototype object is created by calling Object.create() with the constructor function
// as the argument. The prototype object is stored as a property of the constructor function.
// The prototype object is used to define the shared methods (behavior) of all objects that
// inherit from the prototype object.
// The prototype object is used to define the shared methods (behavior) of all objects that


function c() {
    if (!new.target) return new c();
}
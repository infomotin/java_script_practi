class ComplexNumberClass {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    plus(that) {
        return new ComplexNumberClass(this.real + that.real, this.imaginary + that.imaginary);
    }
    times(that) {
        return new ComplexNumberClass(this.real * that.real - this.imaginary * that.imaginary, this.real * that.imaginary + this.imaginary * that.real);
    }

    //static methods
    static sum(a, b) {
        return a.plus(b);
    }   
    static product(a, b) {  
        return a.times(b);
    }

    //instance methods
    get real() { return this._real; }
    set real(value) { this._real = value; }
    get imaginary() { return this._imaginary; }
    set imaginary(value) { this._imaginary = value; }
    get magnitude() { return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary); }
    get phase() { return Math.atan2(this.imaginary, this.real); }
    get conjugate() { return new ComplexNumberClass(this.real, -this.imaginary); }
    get reciprocal() { return new ComplexNumberClass(this.real / (this.magnitude * this.magnitude), -this.imaginary / (this.magnitude * this.magnitude)); }
    get argument() { return this.phase; }
    get realPart() { return this.real; }
    get imaginaryPart() { return this.imaginary; }
    get toString() { return `(${this.real} + ${this.imaginary}i)`; }
    //static methods

    equals(that) {
        return that instanceof ComplexNumberClass && this.real === that.real && this.imaginary === that.imaginary;
    }
}

// Here are some class fields that hold useful predefined complex numbers.
ComplexNumberClass.ZERO = new ComplexNumberClass(0, 0);
ComplexNumberClass.ONE = new ComplexNumberClass(1, 0);
ComplexNumberClass.I = new ComplexNumberClass(0, 1);


// ds, instance methods, class fields, and class methods with code like this:
let c = new ComplexNumberClass(2, 3); // Create a new object with the constructor
let d = new ComplexNumberClass(c.i, c.r); // Use instance fields of c
c.plus(d).toString() // => "{5,5}"; use instance methods
c.magnitude // => Math.hypot(2,3); use a getter function
ComplexNumberClass.product(c, d); // => new Complex(0, 13); a static method
ComplexNumberClass.ZERO.toString(); // => "{0,0}"; a static property


// The prototype object of built-in JavaScript classes is also open like this, which means
// that we can add methods to numbers, strings, arrays, functions, and so on. This is
// useful for implementing new language features in older versions of the language:

ComplexNumberClass.prototype.conj = function () { return new ComplexNumberClass(this.real, -this.imaginary); }

// if function execicet 
// If the new String method startsWith() is not already defined...
if (!String.prototype.startsWith) {
 // ...then define it like this using the older indexOf() method.
 String.prototype.startsWith = function(s) {
 return this.indexOf(s) === 0;
 };
}

// Invoke the function f this many times, passing the iteration number
// For example, to print "hello" 3 times:
// let n = 3;
// n.times(i => { console.log(`hello ${i}`); });
Number.prototype.times = function(f, context) {
 let n = this.valueOf();
 for(let i = 0; i < n; i++) f.call(context, i);
};
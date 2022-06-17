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
Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);


// ds, instance methods, class fields, and class methods with code like this:
let c = new Complex(2, 3); // Create a new object with the constructor
let d = new Complex(c.i, c.r); // Use instance fields of c
c.plus(d).toString() // => "{5,5}"; use instance methods
c.magnitude // => Math.hypot(2,3); use a getter function
Complex.product(c, d) // => new Complex(0, 13); a static method
Complex.ZERO.toString() // => "{0,0}"; a static property
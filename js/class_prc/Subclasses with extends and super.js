// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}
let a = new EZArray();
a instanceof EZArray; // => true: a is subclass instance
a instanceof Array; // => true: a is also a superclass instance.
a.push(1, 2, 3, 4); // a.length == 4; we can use inherited methods
a.pop(); // => 4: another inherited method
a.first; // => 1: first getter defined by subclass
a.last; // => 3: last getter defined by subclass
a[1]; // => 2: regular array access syntax still works.
Array.isArray(a); // => true: subclass instance really is an array
EZArray.isArray(a); // => true: subclass inherits static methods, too!
